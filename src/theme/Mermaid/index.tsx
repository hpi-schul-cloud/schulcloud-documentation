import React, {
  useEffect,
  useId,
  useRef,
  useCallback,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react';
import OriginalMermaid from '@theme-original/Mermaid';

import styles from './styles.module.css';

interface Props {
  value: string;
}

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.25;

function isOpenKey(event: ReactKeyboardEvent<HTMLDivElement>): boolean {
  return event.key === 'Enter' || event.key === ' ';
}

export default function Mermaid(props: Props): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const titleId = useId();
  const modalDiagramRef = useRef<HTMLDivElement>(null);
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOffset = useRef({ x: 0, y: 0 });

  const zoomOutDisabled = zoom <= MIN_ZOOM;
  const zoomInDisabled = zoom >= MAX_ZOOM;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  // After the modal renders, strip SVG dimensions so it scales via CSS
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const container = modalDiagramRef.current;
    if (!container) {
      return;
    }

    function patchSvg(svg: SVGSVGElement): void {
      // Ensure viewBox exists before removing dimensions
      if (!svg.getAttribute('viewBox')) {
        const w = svg.getAttribute('width');
        const h = svg.getAttribute('height');
        if (w && h) {
          svg.setAttribute('viewBox', `0 0 ${parseFloat(w)} ${parseFloat(h)}`);
        }
      }
      svg.removeAttribute('width');
      svg.removeAttribute('height');

      // Use aspect-ratio + max constraints for proper contain-fit centering
      const viewBox = svg.getAttribute('viewBox');
      if (viewBox) {
        const parts = viewBox.split(/[\s,]+/);
        const vbWidth = parseFloat(parts[2]);
        const vbHeight = parseFloat(parts[3]);
        if (vbWidth > 0 && vbHeight > 0) {
          svg.style.aspectRatio = `${vbWidth} / ${vbHeight}`;
        }
      }
      svg.style.maxWidth = '100%';
      svg.style.maxHeight = '100%';
      svg.style.width = 'auto';
      svg.style.height = 'auto';
      svg.style.display = 'block';

      // Remove inline max-width from parent wrapper
      const parent = svg.parentElement;
      if (parent) {
        parent.style.maxWidth = 'none';
        parent.style.display = 'contents';
      }
    }

    // Patch any SVG already present
    const existing = container.querySelector('svg');
    if (existing) {
      patchSvg(existing);
    }

    // Watch for SVGs that appear after async render
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof SVGSVGElement) {
            patchSvg(node);
          } else if (node instanceof HTMLElement) {
            const svg = node.querySelector?.('svg');
            if (svg) {
              patchSvg(svg);
            }
          }
        }
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [isOpen, props.value]);

  const fitToViewport = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    panOffset.current = { x: 0, y: 0 };
  }, []);

  // Wheel zoom — needs non-passive listener to preventDefault
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const container = modalDiagramRef.current;
    if (!container) {
      return;
    }

    function onWheel(event: WheelEvent): void {
      event.preventDefault();
      const direction = event.deltaY < 0 ? 1 : -1;
      setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + direction * ZOOM_STEP)));
    }

    container.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', onWheel);
    };
  }, [isOpen]);

  function openModal(): void {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    panOffset.current = { x: 0, y: 0 };
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>): void {
    if (event.button !== 0) return;
    isPanning.current = true;
    panStart.current = { x: event.clientX, y: event.clientY };
    panOffset.current = { x: pan.x, y: pan.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>): void {
    if (!isPanning.current) return;
    const dx = event.clientX - panStart.current.x;
    const dy = event.clientY - panStart.current.y;
    setPan({ x: panOffset.current.x + dx, y: panOffset.current.y + dy });
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>): void {
    isPanning.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.toolbar}>
          <button
            type="button"
            className={styles.openButton}
            onClick={openModal}
            aria-label="Open fullscreen"
            title="Open fullscreen">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="10 2 14 2 14 6" />
              <polyline points="6 14 2 14 2 10" />
              <line x1="14" y1="2" x2="9.5" y2="6.5" />
              <line x1="2" y1="14" x2="6.5" y2="9.5" />
            </svg>
          </button>
        </div>

        <div
          className={styles.preview}
          role="button"
          tabIndex={0}
          aria-label="Open Mermaid diagram in fullscreen"
          onClick={openModal}
          onKeyDown={(event) => {
            if (isOpenKey(event)) {
              event.preventDefault();
              openModal();
            }
          }}>
          <OriginalMermaid {...props} />
        </div>
      </div>

      {isOpen ? (
        <div className={styles.backdrop} role="presentation" onClick={closeModal}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 id={titleId} className={styles.modalTitle}>
                Mermaid diagram
              </h2>
              <div className={styles.modalActions}>
                <div className={styles.zoomControls} aria-label="Zoom controls">
                  <button
                    type="button"
                    className={styles.zoomButton}
                    onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP))}
                    disabled={zoomOutDisabled}>
                    -
                  </button>
                  <button
                    type="button"
                    className={styles.zoomButton}
                    onClick={fitToViewport}
                    aria-label="Fit to viewport"
                    title="Fit to viewport">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="4 2 2 2 2 4" />
                      <polyline points="12 2 14 2 14 4" />
                      <polyline points="4 14 2 14 2 12" />
                      <polyline points="12 14 14 14 14 12" />
                      <rect x="5" y="5" width="6" height="6" rx="1" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={styles.zoomValue}
                    onClick={() => setZoom(1)}>
                    {Math.round(zoom * 100)}%
                  </button>
                  <button
                    type="button"
                    className={styles.zoomButton}
                    onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP))}
                    disabled={zoomInDisabled}>
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={closeModal}
                  aria-label="Close"
                  title="Close">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="3" x2="13" y2="13" />
                    <line x1="13" y1="3" x2="3" y2="13" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div
                ref={modalDiagramRef}
                className={styles.modalDiagram}
                style={{
                  '--mermaid-modal-zoom': String(zoom),
                  '--mermaid-pan-x': `${pan.x}px`,
                  '--mermaid-pan-y': `${pan.y}px`,
                  cursor: isPanning.current ? 'grabbing' : 'grab',
                } as CSSProperties}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}>
                <OriginalMermaid {...props} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}