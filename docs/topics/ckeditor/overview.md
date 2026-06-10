# Überblick

[CKEditor 5](https://ckeditor.com/) ist ein moderner Rich-Text-Editor, der in der Schulcloud als WYSIWYG-Editor für die Inhaltserstellung eingesetzt wird. Er ermöglicht es Nutzer:innen, formatierten Text mit Bildern, Links, Listen und mathematischen Formeln zu erstellen – ohne HTML-Kenntnisse.

## Einsatzorte

CKEditor wird in folgenden Kontexten verwendet:

| Kontext | Client | Beschreibung                                      |
|---------|--------|---------------------------------------------------|
| **Raum-Board-Cards** | Nuxt Client | Textelemente innerhalb von Board-Karten in Räumen |
| **News-Erstellung** | Nuxt Client | Erstellen und Bearbeiten von Neuigkeiten          |
| **Aufgaben** | Legacy Client | Aufgabenerstellung und -bearbeitung               |
| **Themen** | Legacy Client | Themenerstellung und -bearbeitung                 |

Der Editor ist in zwei Client-Anwendungen integriert:

- **Legacy Client** ([schulcloud-client](https://github.com/hpi-schul-cloud/schulcloud-client))
- **Nuxt Client** ([nuxt-client](https://github.com/hpi-schul-cloud/nuxt-client))

## Custom Build & Mathematik-Plugin

### Eigenes CKEditor-Paket

Im Nuxt Client wird ein eigener, angepasster CKEditor-Build verwendet, der unter eigener Pflege steht und als dependency eingebunden ist:

🔗 **[hpi-schul-cloud/ckeditor](https://github.com/hpi-schul-cloud/ckeditor)**

Dieses Paket bündelt CKEditor 5 mit spezifischen Plugins und Konfigurationen, die für die Schulcloud benötigt werden – insbesondere das Mathematik-Plugin.

### Mathematik-Formeln

Für die Darstellung und Bearbeitung mathematischer Formeln wird die Community-Library [`ckeditor5-math`](https://github.com/isaul32/ckeditor5-math) verwendet. Diese Library ermöglicht LaTeX/MathML-basierte Formeleingabe innerhalb des Editors.

> ⚠️ **Achtung:** Diese Library wird **nicht mehr aktiv gepflegt** und ist veraltet.

Die offizielle Alternative von CKEditor – das [Math Equations Feature](https://ckeditor.com/docs/ckeditor5/latest/features/math-equations.html) – ist **kostenpflichtig** und kommt daher aktuell nicht als Ersatz in Frage.

## Aktueller Status

> 🚫 **Achtung:** Diese Library wird **nicht mehr aktiv gepflegt** und ist veraltet.

**CKEditor-Updates sind derzeit nicht möglich.** Die Gründe:
- **Breaking Changes in der Modulstruktur:** CKEditor 5 hat in neueren Versionen seine Modulstruktur grundlegend geändert. Dies ist inkompatibel mit der aktuell verwendeten `ckeditor5-math`-Library.

- **Veraltete Mathematik-Library:** Die Community-Library [`ckeditor5-math`](https://github.com/isaul32/ckeditor5-math) wird vermutlich nicht mehr gepflegt und unterstützt die neue Modulstruktur nicht.

- **Kein kostenfreier Ersatz verfügbar:** Die offizielle CKEditor Math-Extension ist kostenpflichtig, eine Migration auf diese ist nur möglich, wenn der Kunde zustimmt.

## Architektur

```
┌─────────────────────────────────────────────────┐
│           Nuxt Client / Legacy Client           │
├─────────────────────────────────────────────────┤
│           hpi-schul-cloud/ckeditor              │
│         (Custom Build als npm-Paket)            │
├─────────────────────────────────────────────────┤
│              CKEditor 5 Core                    │
├──────────────────────┬──────────────────────────┤
│   Standard-Plugins   │   ckeditor5-math         │
│   (Bold, Italic,     │   (isaul32 – veraltet)   │
│    Lists, Links …)   │                          │
└──────────────────────┴──────────────────────────┘
```

## Zusammenfassung

| Aspekt | Status |
|--------|--------|
| Editor | CKEditor 5 |
| Mathe-Plugin | `ckeditor5-math` (veraltet, ungepflegt) |
| Custom Build | [hpi-schul-cloud/ckeditor](https://github.com/hpi-schul-cloud/ckeditor) |
| Updates möglich? | Nein – durch Breaking Changes blockiert |
| Offizielle Mathe-Alternative | Kostenpflichtig |
| Einsatz | Board-Cards, News (Nuxt Client); Aufgaben, Themen (Legacy Client) |
| Clients | Legacy Client, Nuxt Client |
