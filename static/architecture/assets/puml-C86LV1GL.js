var e=e=>{switch(e){case`index`:return`@startuml
title "SVS: Systemübersicht"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Nextcloud>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Hidrive>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam person<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Support>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Svs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Schulconnex>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ldap>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tsp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Vidis>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bilo>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bbb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<H5pHub>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Cachet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Web>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==Nextcloud\\n<size:10>[OCS, WebDAV, OIDC]</size>\\n\\nDateiablage der Mandanten, nicht über dof_app_deploy ausgerollt" <<Nextcloud>> as Nextcloud
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
rectangle "==Strato HiDrive\\n<size:10>[S3]</size>\\n\\nAlte Dateien und Rechtsdokumente in Thüringen" <<Hidrive>> as Hidrive
person "==Nutzerinnen und Nutzer\\n\\nSchülerinnen und Schüler, Lehrkräfte, Schuladmins" <<User>> as User
person "==Support\\n\\nBetrieb und Support der Mandanten" <<Support>> as Support
rectangle "==SVS\\n\\nSchulcloud-Verbund-Software (dBildungscloud). Mandanten brb, nbc, thr, dbc." <<Svs>> as Svs
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==Schulconnex-API\\n<size:10>[REST, OAuth2 Client Credentials]</size>\\n\\nPersonen, Gruppen und Lizenzen aus moin.schule" <<Schulconnex>> as Schulconnex
rectangle "==Schul-LDAP\\n<size:10>[LDAP]</size>\\n\\nVerzeichnisse der Schulen (z. B. iServ)" <<Ldap>> as Ldap
rectangle "==TSP Thüringen\\n<size:10>[REST, JWT]</size>\\n\\nThüringer Schulportal: Login und Stammdaten" <<Tsp>> as Tsp
rectangle "==VIDIS\\n<size:10>[REST]</size>\\n\\nMedienlizenzen und Metadaten" <<Vidis>> as Vidis
rectangle "==BILO\\n<size:10>[REST]</size>\\n\\nMetadaten von Bildungsmedien" <<Bilo>> as Bilo
rectangle "==BigBlueButton\\n<size:10>[BBB-API]</size>\\n\\nVideokonferenzen" <<Bbb>> as Bbb
rectangle "==H5P Hub\\n<size:10>[HTTPS]</size>\\n\\nQuelle der H5P-Bibliotheken" <<H5pHub>> as H5pHub
rectangle "==SMTP-Relay\\n<size:10>[SMTP]</size>\\n\\nAusgehende E-Mails" <<Smtp>> as Smtp
rectangle "==Cachet\\n<size:10>[REST]</size>\\n\\nStatusseite, liefert Störungsmeldungen" <<Cachet>> as Cachet
rectangle "==Beliebige Webseiten\\n<size:10>[HTTPS]</size>\\n\\nLink-Vorschau im Board (meta-tag-extractor)" <<Web>> as Web

Svs .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
Svs .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>[...]
Svs .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
Svs .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>[...]
Svs .[#8D8D8D,thickness=2].> Vidis : <color:#8D8D8D>Medien-Metadaten\\n<size:8>[<color:#8D8D8D>REST]</size>
Svs .[#8D8D8D,thickness=2].> Bilo : <color:#8D8D8D>Medien-Metadaten\\n<size:8>[<color:#8D8D8D>REST]</size>
Svs .[#8D8D8D,thickness=2].> Bbb : <color:#8D8D8D>Konferenzen anlegen und beitreten\\n<size:8>[<color:#8D8D8D>BBB-API]</size>
Nextcloud .[#8D8D8D,thickness=2].> Svs : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OIDC]</size>
Svs .[#8D8D8D,thickness=2].> Nextcloud : <color:#8D8D8D>Gruppen und Ordner für Teams\\n<size:8>[<color:#8D8D8D>OCS, WebDAV]</size>
Tools .[#8D8D8D,thickness=2].> Svs : <color:#8D8D8D>[...]
Svs .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
Svs .[#8D8D8D,thickness=2].> H5pHub : <color:#8D8D8D>Bibliotheken laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Svs .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>E-Mails versenden\\n<size:8>[<color:#8D8D8D>SMTP]</size>
Svs .[#8D8D8D,thickness=2].> Cachet : <color:#8D8D8D>Störungsmeldungen\\n<size:8>[<color:#8D8D8D>REST]</size>
Svs .[#8D8D8D,thickness=2].> Web : <color:#8D8D8D>Link-Vorschau laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> Svs : <color:#8D8D8D>[...]
Support .[#8D8D8D,thickness=2].> Svs : <color:#8D8D8D>Verwaltet Schulen und Nutzer\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
@enduml
`;case`svs`:return`@startuml
title "SVS: Dienste und Datenspeicher"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Nextcloud>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam person<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Support>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsNuxt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsSuperhero>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsVersionAggregator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsPrometheus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsLegacy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldrawClient>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsH5p>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCollabora>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsServer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsClammit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<H5pHub>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsTldraw>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCalendar>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsAntivirus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsEtherpad>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Schulconnex>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ldap>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tsp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Vidis>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bilo>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bbb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Cachet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Web>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsTldrawValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsPostgres>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsMongo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsS3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsMaildrop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==Nextcloud\\n<size:10>[OCS, WebDAV, OIDC]</size>\\n\\nDateiablage der Mandanten, nicht über dof_app_deploy ausgerollt" <<Nextcloud>> as Nextcloud
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
person "==Nutzerinnen und Nutzer\\n\\nSchülerinnen und Schüler, Lehrkräfte, Schuladmins" <<User>> as User
person "==Support\\n\\nBetrieb und Support der Mandanten" <<Support>> as Support
rectangle "SVS" <<Svs>> as Svs {
  skinparam RectangleBorderColor<<Svs>> #3b82f6
  skinparam RectangleFontColor<<Svs>> #3b82f6
  skinparam RectangleBorderStyle<<Svs>> dashed

  rectangle "==nuxt-client\\n<size:10>[Vue 3, Vite, nginx (nuxtclient-svc)]</size>\\n\\nNeues Frontend. Bekommt vom Ingress alle umgezogenen Pfade. nginx leitet einzelne Admin-Seiten an den Legacy-Client weiter." <<SvsNuxt>> as SvsNuxt
  rectangle "==superhero-dashboard\\n<size:10>[Express]</size>\\n\\nAdmin- und Support-Oberfläche (dashboard.DOMAIN)" <<SvsSuperhero>> as SvsSuperhero
  rectangle "==version-aggregator\\n<size:10>[Node.js]</size>\\n\\nSammelt die Versionen aller Dienste (/version)" <<SvsVersionAggregator>> as SvsVersionAggregator
  rectangle "==Prometheus\\n<size:10>[Prometheus Operator]</size>\\n\\nMetriken aller Dienste, dazu mongodb-query-exporter" <<SvsPrometheus>> as SvsPrometheus
  rectangle "==schulcloud-client\\n<size:10>[Express, Handlebars (client-svc)]</size>\\n\\nLegacy-Frontend, rendert serverseitig. Bekommt /login und als Fallback alle nicht umgezogenen Pfade." <<SvsLegacy>> as SvsLegacy
  rectangle "==tldraw-client\\n<size:10>[React, tldraw (tldraw-client-svc)]</size>\\n\\nWhiteboard-Oberfläche, eingebettet in Boards" <<SvsTldrawClient>> as SvsTldrawClient
  rectangle "==h5p-server\\n<size:10>[NestJS, @lumieducation/h5p]</size>\\n\\nH5P-Editor und -Player" <<SvsH5p>> as SvsH5p
  rectangle "==Collabora\\n<size:10>[Collabora Online, WOPI]</size>\\n\\nOffice-Editor im Browser (cool.DOMAIN)" <<SvsCollabora>> as SvsCollabora
  rectangle "==schulcloud-server\\n<size:10>[Node.js, NestJS, Feathers]</size>\\n\\nBackend: NestJS (/api/v3) und Legacy-Feathers (/api/v1) in einem Image. Jede Rolle ist ein eigenes Deployment oder ein Job." <<SvsServer>> as SvsServer
  rectangle "==clammit\\n<size:10>[clammit, ClamAV]</size>\\n\\nHTTP-Proxy, der Uploads vor dem H5P-Editor mit ClamAV prüft" <<SvsClammit>> as SvsClammit
  rectangle "==tldraw-server\\n<size:10>[Node.js, y-redis]</size>\\n\\nWhiteboard-Backend" <<SvsTldraw>> as SvsTldraw
  rectangle "==schulcloud-calendar\\n<size:10>[Node.js, PostgreSQL]</size>\\n\\nKalender-Service. Ohne Ingress, nur clusterintern erreichbar." <<SvsCalendar>> as SvsCalendar
  rectangle "==antivirus_check_service\\n<size:10>[Python, ClamAV]</size>\\n\\nVirenscan für hochgeladene Dateien" <<SvsAntivirus>> as SvsAntivirus
  rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra
  rectangle "==Etherpad\\n<size:10>[Etherpad]</size>\\n\\nKollaborative Textdokumente (/etherpad)" <<SvsEtherpad>> as SvsEtherpad
  database "==Session-Valkey\\n<size:10>[Valkey (Sentinel)]</size>\\n\\nSessions und JWT-Whitelist" <<SvsValkey>> as SvsValkey
  database "==tldraw-Valkey\\n<size:10>[Valkey]</size>\\n\\nArbeitsstand der Whiteboards" <<SvsTldrawValkey>> as SvsTldrawValkey
  rectangle "==file-storage\\n<size:10>[NestJS]</size>\\n\\nDateidienst für Boards, Aufgaben, Kurse und H5P" <<SvsFiles>> as SvsFiles
  database "==PostgreSQL\\n<size:10>[PostgreSQL (IONOS Managed)]</size>\\n\\nDatenbank für Hydra und Kalender" <<SvsPostgres>> as SvsPostgres
  database "==MongoDB\\n<size:10>[MongoDB (extern betrieben)]</size>\\n\\nGemeinsame Datenbank scapp für Server, file-storage und h5p-server. Dazu eigene DB für Etherpad." <<SvsMongo>> as SvsMongo
  database "==S3\\n<size:10>[IONOS S3]</size>\\n\\nBuckets für Dateien, H5P-Inhalte und -Bibliotheken, FWU-Inhalte und Whiteboards. MinIO in Dev und Ref." <<SvsS3>> as SvsS3
  queue "==RabbitMQ\\n<size:10>[RabbitMQ (Operator)]</size>\\n\\nNachrichten zwischen den Diensten. Kinder sind die Exchanges und Queues." <<SvsRabbit>> as SvsRabbit
  rectangle "==maildrop\\n<size:10>[Spring Boot]</size>\\n\\nVersendet E-Mails aus der Queue" <<SvsMaildrop>> as SvsMaildrop
}
rectangle "==H5P Hub\\n<size:10>[HTTPS]</size>\\n\\nQuelle der H5P-Bibliotheken" <<H5pHub>> as H5pHub
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==Schulconnex-API\\n<size:10>[REST, OAuth2 Client Credentials]</size>\\n\\nPersonen, Gruppen und Lizenzen aus moin.schule" <<Schulconnex>> as Schulconnex
rectangle "==Schul-LDAP\\n<size:10>[LDAP]</size>\\n\\nVerzeichnisse der Schulen (z. B. iServ)" <<Ldap>> as Ldap
rectangle "==TSP Thüringen\\n<size:10>[REST, JWT]</size>\\n\\nThüringer Schulportal: Login und Stammdaten" <<Tsp>> as Tsp
rectangle "==VIDIS\\n<size:10>[REST]</size>\\n\\nMedienlizenzen und Metadaten" <<Vidis>> as Vidis
rectangle "==BILO\\n<size:10>[REST]</size>\\n\\nMetadaten von Bildungsmedien" <<Bilo>> as Bilo
rectangle "==BigBlueButton\\n<size:10>[BBB-API]</size>\\n\\nVideokonferenzen" <<Bbb>> as Bbb
rectangle "==Cachet\\n<size:10>[REST]</size>\\n\\nStatusseite, liefert Störungsmeldungen" <<Cachet>> as Cachet
rectangle "==Beliebige Webseiten\\n<size:10>[HTTPS]</size>\\n\\nLink-Vorschau im Board (meta-tag-extractor)" <<Web>> as Web
rectangle "==SMTP-Relay\\n<size:10>[SMTP]</size>\\n\\nAusgehende E-Mails" <<Smtp>> as Smtp

Nextcloud .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OIDC]</size>
Tools .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Klassenlisten abrufen\\n<size:8>[<color:#8D8D8D>REST /api/v1/roster]</size>
Tools .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OAuth2, OIDC]</size>
User .[#8D8D8D,thickness=2].> SvsNuxt : <color:#8D8D8D>Nutzt umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Nutzt Login und nicht umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Zeichnet auf Whiteboards\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Bearbeitet Office-Dokumente\\n<size:8>[<color:#8D8D8D>HTTPS, iframe]</size>
Support .[#8D8D8D,thickness=2].> SvsSuperhero : <color:#8D8D8D>Verwaltet Schulen und Nutzer\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Leitet Admin-Detailseiten weiter\\n<size:8>[<color:#8D8D8D>nginx proxy_pass]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Whiteboard öffnen\\n<size:8>[<color:#8D8D8D>Link]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>[...]
SvsNuxt .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Editor einbetten\\n<size:8>[<color:#8D8D8D>iframe]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>[...]
SvsLegacy .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Consent\\n<size:8>[<color:#8D8D8D>Hydra Login- und Consent-Flow]</size>
SvsTldrawClient .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnung synchronisieren\\n<size:8>[<color:#8D8D8D>WebSocket]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>[...]
SvsSuperhero .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien verwalten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien kopieren und löschen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnungen löschen\\n<size:8>[<color:#8D8D8D>REST, tldraw Admin-API]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsCalendar : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Alte Dateien scannen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Clients und Consent verwalten\\n<size:8>[<color:#8D8D8D>Hydra Admin API]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsEtherpad : <color:#8D8D8D>Pads anlegen\\n<size:8>[<color:#8D8D8D>Etherpad API, API-Key]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsValkey : <color:#8D8D8D>Sessions und JWT-Whitelist\\n<size:8>[<color:#8D8D8D>Redis-Protokoll]</size>
SvsServer .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]
SvsServer .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Nutzer und Scopes auflösen\\n<size:8>[<color:#8D8D8D>REST /api/v1/resolve]</size>
SvsVersionAggregator .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Version abfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsPrometheus .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Metriken abfragen\\n<size:8>[<color:#8D8D8D>HTTP /metrics]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten
SvsFiles .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Datei laden, Ergebnis melden\\n<size:8>[<color:#8D8D8D>HTTP-Callback]</size>
SvsCollabora .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dokument laden und speichern\\n<size:8>[<color:#8D8D8D>WOPI]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsClammit : <color:#8D8D8D>Uploads prüfen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Inhalts-Metadaten
SvsH5p .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsClammit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Geprüfte Anfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Kopieren und Löschen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsTldrawValkey : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>Redis-Streams]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Zeichnungen speichern\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Scan einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Scanauftrag\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsMaildrop : <color:#8D8D8D>E-Mail-Aufträge\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsHydra .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Clients, Consents, Tokens\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsEtherpad .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Pads\\n<size:8>[<color:#8D8D8D>MongoDB (eigene DB)]</size>
SvsServer .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
SvsServer .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>[...]
SvsServer .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServer .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>[...]
SvsServer .[#8D8D8D,thickness=2].> Vidis : <color:#8D8D8D>Medien-Metadaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServer .[#8D8D8D,thickness=2].> Bilo : <color:#8D8D8D>Medien-Metadaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServer .[#8D8D8D,thickness=2].> Bbb : <color:#8D8D8D>Konferenzen anlegen und beitreten\\n<size:8>[<color:#8D8D8D>BBB-API]</size>
SvsServer .[#8D8D8D,thickness=2].> Nextcloud : <color:#8D8D8D>Gruppen und Ordner für Teams\\n<size:8>[<color:#8D8D8D>OCS, WebDAV]</size>
SvsServer .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
SvsServer .[#8D8D8D,thickness=2].> Cachet : <color:#8D8D8D>Störungsmeldungen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServer .[#8D8D8D,thickness=2].> Web : <color:#8D8D8D>Link-Vorschau laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsH5p .[#8D8D8D,thickness=2].> H5pHub : <color:#8D8D8D>Bibliotheken laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsMaildrop .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>E-Mails versenden\\n<size:8>[<color:#8D8D8D>SMTP]</size>
@enduml
`;case`server`:return`@startuml
title "schulcloud-server: Rollen und Jobs"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsNuxt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsLegacy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsSuperhero>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsH5p>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldraw>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCalendar>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsVersionAggregator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsServerManagement>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLdapSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam queue<<SvsRabbit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerBoardCollab>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerWorker>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerSchulconnexConsumers>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerDeletionConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerMigrationSystems>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerCommonCartridge>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLegacyFileArchive>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerFwuLearningContents>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerNotification>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerServerConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerIdpConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerTspSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bbb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Nextcloud>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Cachet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Web>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsAntivirus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsEtherpad>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Ldap>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerAdminApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsS3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Schulconnex>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Vidis>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bilo>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tsp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsMongo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
rectangle "==nuxt-client\\n<size:10>[Vue 3, Vite, nginx (nuxtclient-svc)]</size>\\n\\nNeues Frontend. Bekommt vom Ingress alle umgezogenen Pfade. nginx leitet einzelne Admin-Seiten an den Legacy-Client weiter." <<SvsNuxt>> as SvsNuxt
rectangle "==schulcloud-client\\n<size:10>[Express, Handlebars (client-svc)]</size>\\n\\nLegacy-Frontend, rendert serverseitig. Bekommt /login und als Fallback alle nicht umgezogenen Pfade." <<SvsLegacy>> as SvsLegacy
rectangle "==superhero-dashboard\\n<size:10>[Express]</size>\\n\\nAdmin- und Support-Oberfläche (dashboard.DOMAIN)" <<SvsSuperhero>> as SvsSuperhero
rectangle "==file-storage\\n<size:10>[NestJS]</size>\\n\\nDateidienst für Boards, Aufgaben, Kurse und H5P" <<SvsFiles>> as SvsFiles
rectangle "==h5p-server\\n<size:10>[NestJS, @lumieducation/h5p]</size>\\n\\nH5P-Editor und -Player" <<SvsH5p>> as SvsH5p
rectangle "==tldraw-server\\n<size:10>[Node.js, y-redis]</size>\\n\\nWhiteboard-Backend" <<SvsTldraw>> as SvsTldraw
rectangle "==schulcloud-calendar\\n<size:10>[Node.js, PostgreSQL]</size>\\n\\nKalender-Service. Ohne Ingress, nur clusterintern erreichbar." <<SvsCalendar>> as SvsCalendar
rectangle "==version-aggregator\\n<size:10>[Node.js]</size>\\n\\nSammelt die Versionen aller Dienste (/version)" <<SvsVersionAggregator>> as SvsVersionAggregator
rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
  skinparam RectangleBorderColor<<SvsServer>> #3b82f6
  skinparam RectangleFontColor<<SvsServer>> #3b82f6
  skinparam RectangleBorderStyle<<SvsServer>> dashed

  rectangle "==management\\n<size:10>[NestJS]</size>\\n\\nDatenbank-Seeding und Verwaltung, nur in Dev" <<SvsServerManagement>> as SvsServerManagement
  rectangle "==ldap-sync-console\\n<size:10>[CronJob]</size>\\n\\nStellt LDAP-Syncs pro Schule in die Queue" <<SvsServerLdapSyncConsole>> as SvsServerLdapSyncConsole
  rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
  rectangle "==board-collaboration\\n<size:10>[socket.io, Mongo-Adapter]</size>\\n\\nEchtzeit-Bearbeitung von Boards (/board-collaboration)" <<SvsServerBoardCollab>> as SvsServerBoardCollab
  rectangle "==api-worker\\n<size:10>[Feathers, KEDA]</size>\\n\\nVerarbeitet die LDAP-Sync-Queue. Skaliert über KEDA." <<SvsServerWorker>> as SvsServerWorker
  rectangle "==Schulconnex-Consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nDrei Consumer: Gruppen-Provisionierung, Gruppen-Entfernung, Lizenz-Provisionierung" <<SvsServerSchulconnexConsumers>> as SvsServerSchulconnexConsumers
  rectangle "==deletion-console\\n<size:10>[CronJob]</size>\\n\\nStößt Löschanfragen an und stellt nicht synchronisierte Nutzer zur Löschung ein" <<SvsServerDeletionConsole>> as SvsServerDeletionConsole
  rectangle "==api-migration-systems\\n<size:10>[NestJS]</size>\\n\\nNutzerimport bei der Login-Migration (/api/v3/user/import)" <<SvsServerMigrationSystems>> as SvsServerMigrationSystems
  rectangle "==common-cartridge\\n<size:10>[NestJS]</size>\\n\\nImport und Export von Kursen im Common-Cartridge-Format" <<SvsServerCommonCartridge>> as SvsServerCommonCartridge
  rectangle "==legacy-file-archive\\n<size:10>[NestJS]</size>\\n\\nArchiv der Dateien aus der alten Dateiablage" <<SvsServerLegacyFileArchive>> as SvsServerLegacyFileArchive
  rectangle "==fwu-learning-contents\\n<size:10>[NestJS]</size>\\n\\nLiefert FWU-Lerninhalte aus dem FWU-Bucket" <<SvsServerFwuLearningContents>> as SvsServerFwuLearningContents
  rectangle "==notification-server\\n<size:10>[NestJS, SSE]</size>\\n\\nServer-Sent Events aus Mongo-Change-Streams. In Produktion abgeschaltet." <<SvsServerNotification>> as SvsServerNotification
  rectangle "==server-console\\n<size:10>[Job, CronJob]</size>\\n\\nMigrationen beim Deploy, Löschen verwaister S3-Dateien" <<SvsServerServerConsole>> as SvsServerServerConsole
  rectangle "==idp-console\\n<size:10>[CronJob]</size>\\n\\nAbgleich mit moin.schule" <<SvsServerIdpConsole>> as SvsServerIdpConsole
  rectangle "==sync-console\\n<size:10>[CronJob]</size>\\n\\nMetadaten-Sync für Medien aus VIDIS und BILO" <<SvsServerSyncConsole>> as SvsServerSyncConsole
  rectangle "==tsp-sync-console\\n<size:10>[CronJob]</size>\\n\\nAbgleich von Schulen, Klassen und Personen mit dem TSP" <<SvsServerTspSyncConsole>> as SvsServerTspSyncConsole
  rectangle "==admin-api-server\\n<size:10>[NestJS]</size>\\n\\nAdmin-API für Betrieb und Superhero-Dashboard (/admin/api/v1)" <<SvsServerAdminApi>> as SvsServerAdminApi
}
queue "==RabbitMQ\\n<size:10>[RabbitMQ (Operator)]</size>\\n\\nNachrichten zwischen den Diensten. Kinder sind die Exchanges und Queues." <<SvsRabbit>> as SvsRabbit
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==BigBlueButton\\n<size:10>[BBB-API]</size>\\n\\nVideokonferenzen" <<Bbb>> as Bbb
rectangle "==Nextcloud\\n<size:10>[OCS, WebDAV, OIDC]</size>\\n\\nDateiablage der Mandanten, nicht über dof_app_deploy ausgerollt" <<Nextcloud>> as Nextcloud
rectangle "==Cachet\\n<size:10>[REST]</size>\\n\\nStatusseite, liefert Störungsmeldungen" <<Cachet>> as Cachet
rectangle "==Beliebige Webseiten\\n<size:10>[HTTPS]</size>\\n\\nLink-Vorschau im Board (meta-tag-extractor)" <<Web>> as Web
rectangle "==antivirus_check_service\\n<size:10>[Python, ClamAV]</size>\\n\\nVirenscan für hochgeladene Dateien" <<SvsAntivirus>> as SvsAntivirus
rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra
rectangle "==Etherpad\\n<size:10>[Etherpad]</size>\\n\\nKollaborative Textdokumente (/etherpad)" <<SvsEtherpad>> as SvsEtherpad
database "==Session-Valkey\\n<size:10>[Valkey (Sentinel)]</size>\\n\\nSessions und JWT-Whitelist" <<SvsValkey>> as SvsValkey
rectangle "==Schul-LDAP\\n<size:10>[LDAP]</size>\\n\\nVerzeichnisse der Schulen (z. B. iServ)" <<Ldap>> as Ldap
database "==S3\\n<size:10>[IONOS S3]</size>\\n\\nBuckets für Dateien, H5P-Inhalte und -Bibliotheken, FWU-Inhalte und Whiteboards. MinIO in Dev und Ref." <<SvsS3>> as SvsS3
rectangle "==Schulconnex-API\\n<size:10>[REST, OAuth2 Client Credentials]</size>\\n\\nPersonen, Gruppen und Lizenzen aus moin.schule" <<Schulconnex>> as Schulconnex
rectangle "==VIDIS\\n<size:10>[REST]</size>\\n\\nMedienlizenzen und Metadaten" <<Vidis>> as Vidis
rectangle "==BILO\\n<size:10>[REST]</size>\\n\\nMetadaten von Bildungsmedien" <<Bilo>> as Bilo
rectangle "==TSP Thüringen\\n<size:10>[REST, JWT]</size>\\n\\nThüringer Schulportal: Login und Stammdaten" <<Tsp>> as Tsp
database "==MongoDB\\n<size:10>[MongoDB (extern betrieben)]</size>\\n\\nGemeinsame Datenbank scapp für Server, file-storage und h5p-server. Dazu eigene DB für Etherpad." <<SvsMongo>> as SvsMongo

Tools .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Klassenlisten abrufen\\n<size:8>[<color:#8D8D8D>REST /api/v1/roster]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachfunktionen\\n<size:8>[<color:#8D8D8D>REST /api/v3, v1-Whitelist]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerBoardCollab : <color:#8D8D8D>Boards in Echtzeit bearbeiten\\n<size:8>[<color:#8D8D8D>WebSocket (socket.io)]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rendert Seiten mit Daten aus der API\\n<size:8>[<color:#8D8D8D>REST über API_HOST, /api/v1 und /api/v3]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachdaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Verwaltungsaktionen\\n<size:8>[<color:#8D8D8D>REST /admin/api/v1]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Nutzer und Scopes auflösen\\n<size:8>[<color:#8D8D8D>REST /api/v1/resolve]</size>
SvsVersionAggregator .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Version abfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsServerWorker : <color:#8D8D8D>LDAP-Sync ausführen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsServerSchulconnexConsumers : <color:#8D8D8D>Provisionierung\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerDeletionConsole .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Löschungen anstoßen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Personen und Gruppen beim Login lesen\\n<size:8>[<color:#8D8D8D>REST, OAuth2 Client Credentials]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Login gegen das Schul-LDAP\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>Login über das TSP\\n<size:8>[<color:#8D8D8D>JWT]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Bbb : <color:#8D8D8D>Konferenzen anlegen und beitreten\\n<size:8>[<color:#8D8D8D>BBB-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Nextcloud : <color:#8D8D8D>Gruppen und Ordner für Teams\\n<size:8>[<color:#8D8D8D>OCS, WebDAV]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Cachet : <color:#8D8D8D>Störungsmeldungen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Web : <color:#8D8D8D>Link-Vorschau laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien kopieren und löschen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnungen löschen\\n<size:8>[<color:#8D8D8D>REST, tldraw Admin-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsCalendar : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Alte Dateien scannen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Clients und Consent verwalten\\n<size:8>[<color:#8D8D8D>Hydra Admin API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsEtherpad : <color:#8D8D8D>Pads anlegen\\n<size:8>[<color:#8D8D8D>Etherpad API, API-Key]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Liest und schreibt Fachdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsValkey : <color:#8D8D8D>Sessions und JWT-Whitelist\\n<size:8>[<color:#8D8D8D>Redis-Protokoll]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Alte Dateiablage\\n<size:8>[<color:#8D8D8D>S3, Anbieter je Schule aus der DB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Nutzer und Klassen lesen\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Nutzer und Klassen schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerMigrationSystems .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Importierte Nutzer zuordnen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerAdminApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Verwaltungsdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Boards und Socket-Adapter\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Dateien von Board-Elementen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerCommonCartridge .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Kurse lesen und anlegen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerCommonCartridge .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Dateien im Paket\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerLegacyFileArchive .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Archivierte Dateien\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerFwuLearningContents .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>FWU-Bucket lesen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerNotification .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Change Streams\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerSchulconnexConsumers .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Lizenzen und Gruppen nachladen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerSchulconnexConsumers .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Gruppen, Kurse und Lizenzen schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datenmigrationen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Verwaiste Dateien löschen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerIdpConsole .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Nutzer mit moin.schule abgleichen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerIdpConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Abgleich speichern\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerLdapSyncConsole .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Sync pro Schule einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerSyncConsole .[#8D8D8D,thickness=2].> Vidis : <color:#8D8D8D>Medien-Metadaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerSyncConsole .[#8D8D8D,thickness=2].> Bilo : <color:#8D8D8D>Medien-Metadaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerSyncConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Metadaten speichern\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerTspSyncConsole .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>Schulen, Klassen und Personen lesen\\n<size:8>[<color:#8D8D8D>REST, JWT]</size>
SvsServerTspSyncConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Stammdaten schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
@enduml
`;case`pages`:return`@startuml
title "Seiten: wer sie ausliefert und welche APIs sie rufen"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SvsNuxtNDashboard>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNRooms>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<SvsNuxtNBoards>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNTasks>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<SvsNuxtNNews>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<SvsNuxtNMediaShelf>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNMigration>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNAdmin>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<SvsNuxtNTools>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNStatic>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNCollabora>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNH5p>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNDead>>{
  BackgroundColor #AC4D39
  FontColor #FBD3CB
  BorderColor #853A2D
}
skinparam rectangle<<SvsCollabora>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsLegacyLLogin>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLRegistration>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLCourses>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<SvsLegacyLHomework>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<SvsLegacyLTeams>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<SvsLegacyLCalendar>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLFiles>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLVideo>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLAccount>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLStatic>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLAdmin>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<SvsTldrawClientTWhiteboard>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsH5pProxy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsTldrawGateway>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerBoardCollab>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFilesApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "nuxt-client" <<SvsNuxt>> as SvsNuxt {
  skinparam RectangleBorderColor<<SvsNuxt>> #3b82f6
  skinparam RectangleFontColor<<SvsNuxt>> #3b82f6
  skinparam RectangleBorderStyle<<SvsNuxt>> dashed

  rectangle "==Dashboard\\n<size:10>[nuxtclient-svc]</size>\\n\\n/dashboard" <<SvsNuxtNDashboard>> as SvsNuxtNDashboard
  rectangle "==Räume und Kurse\\n<size:10>[nuxtclient-svc]</size>\\n\\n/rooms, /rooms/courses-overview, Kursliste. Anlegen, Bearbeiten, Kopieren und Themen von Kursen liegen noch im Legacy-Client." <<SvsNuxtNRooms>> as SvsNuxtNRooms
  rectangle "==Boards und Ordner\\n<size:10>[nuxtclient-svc]</size>\\n\\n/boards/:id, /folder/:id" <<SvsNuxtNBoards>> as SvsNuxtNBoards
  rectangle "==Aufgabenübersicht\\n<size:10>[nuxtclient-svc]</size>\\n\\n/tasks. Einzelne Aufgaben (/homework) liegen im Legacy-Client." <<SvsNuxtNTasks>> as SvsNuxtNTasks
  rectangle "==Neuigkeiten\\n<size:10>[nuxtclient-svc]</size>\\n\\n/news. Team-Neuigkeiten (/teams/:id/news) liegen im Legacy-Client." <<SvsNuxtNNews>> as SvsNuxtNNews
  rectangle "==Medienregal\\n<size:10>[nuxtclient-svc]</size>\\n\\n/media-shelf. FWU-Inhalte nur in brb." <<SvsNuxtNMediaShelf>> as SvsNuxtNMediaShelf
  rectangle "==Login-Migration\\n<size:10>[nuxtclient-svc]</size>\\n\\n/migration, /registration-external-members" <<SvsNuxtNMigration>> as SvsNuxtNMigration
  rectangle "==Administration (neu)\\n<size:10>[nuxtclient-svc]</size>\\n\\n/administration: Schüler- und Lehrerlisten, Gruppen und Klassen, rooms/new, rooms/manage, school-settings, tool-configuration, provisioning-options, ldap/config, ldap/activate, migration. Detail-, Bearbeiten-, Passwort-, skipregistration- und Import-Seiten leitet nginx an den Legacy-Client weiter." <<SvsNuxtNAdmin>> as SvsNuxtNAdmin
  rectangle "==Tool-Konfiguration im Kontext\\n<size:10>[nuxtclient-svc]</size>\\n\\n/tools/context/tool-configuration" <<SvsNuxtNTools>> as SvsNuxtNTools
  rectangle "==Rechtliches und System\\n<size:10>[nuxtclient-svc]</size>\\n\\n/imprint, /licenses, /system/security, /error" <<SvsNuxtNStatic>> as SvsNuxtNStatic
  rectangle "==Office-Dokumente\\n<size:10>[nuxtclient-svc]</size>\\n\\n/collabora/:id" <<SvsNuxtNCollabora>> as SvsNuxtNCollabora
  rectangle "==H5P\\n<size:10>[nuxtclient-svc]</size>\\n\\n/h5p/player, /h5p/editor" <<SvsNuxtNH5p>> as SvsNuxtNH5p
  rectangle "==Pfade ohne Seite\\n<size:10>[nuxtclient-svc]</size>\\n\\nNuxt-Route / (Home.page.vue) ist nicht erreichbar. /poc-files und /administration stehen in der Whitelist, haben aber keine Route. Der Ingress schickt /content, /mint-ec und /administration/ldap an nuxt, dort gibt es keine Route." <<SvsNuxtNDead>> as SvsNuxtNDead
}
rectangle "schulcloud-client" <<SvsLegacy>> as SvsLegacy {
  skinparam RectangleBorderColor<<SvsLegacy>> #3b82f6
  skinparam RectangleFontColor<<SvsLegacy>> #3b82f6
  skinparam RectangleBorderStyle<<SvsLegacy>> dashed

  rectangle "==Login und SSO\\n<size:10>[client-svc]</size>\\n\\n/login, SSO-Einstiege, /oauth2/* (Hydra-Consent)" <<SvsLegacyLLogin>> as SvsLegacyLLogin
  rectangle "==Registrierung und Erstanmeldung\\n<size:10>[client-svc]</size>\\n\\n/registration, /firstLogin, /pwrecovery" <<SvsLegacyLRegistration>> as SvsLegacyLRegistration
  rectangle "==Kurse bearbeiten\\n<size:10>[client-svc]</size>\\n\\nKurs anlegen, bearbeiten, kopieren, Kursgruppen, Themen (/courses, /topics)" <<SvsLegacyLCourses>> as SvsLegacyLCourses
  rectangle "==Aufgaben\\n<size:10>[client-svc]</size>\\n\\n/homework/*" <<SvsLegacyLHomework>> as SvsLegacyLHomework
  rectangle "==Teams\\n<size:10>[client-svc]</size>\\n\\n/teams/*, /teams/:id/news" <<SvsLegacyLTeams>> as SvsLegacyLTeams
  rectangle "==Kalender\\n<size:10>[client-svc]</size>\\n\\n/calendar" <<SvsLegacyLCalendar>> as SvsLegacyLCalendar
  rectangle "==Dateien (alt)\\n<size:10>[client-svc]</size>\\n\\n/files/*, alte Dateiablage" <<SvsLegacyLFiles>> as SvsLegacyLFiles
  rectangle "==Videokonferenz\\n<size:10>[client-svc]</size>\\n\\n/videoconference/:scope/:id" <<SvsLegacyLVideo>> as SvsLegacyLVideo
  rectangle "==Konto und Hilfe\\n<size:10>[client-svc]</size>\\n\\n/account/*, /help/*" <<SvsLegacyLAccount>> as SvsLegacyLAccount
  rectangle "==Rechtliches und Sonstiges\\n<size:10>[client-svc]</size>\\n\\n/privacypolicy, /termsofuse, /community, /system/releases, /alerts" <<SvsLegacyLStatic>> as SvsLegacyLStatic
  rectangle "==Administration (alt)\\n<size:10>[client-svc]</size>\\n\\n/administration: users-without-consent, classes/*, courses/:id, teams, startldapschoolyear, dazu die von nuxt weitergeleiteten Schüler- und Lehrer-Detailseiten" <<SvsLegacyLAdmin>> as SvsLegacyLAdmin
}
rectangle "tldraw-client" <<SvsTldrawClient>> as SvsTldrawClient {
  skinparam RectangleBorderColor<<SvsTldrawClient>> #3b82f6
  skinparam RectangleFontColor<<SvsTldrawClient>> #3b82f6
  skinparam RectangleBorderStyle<<SvsTldrawClient>> dashed

  rectangle "==Whiteboard\\n<size:10>[tldraw-client-svc]</size>\\n\\n/tldraw" <<SvsTldrawClientTWhiteboard>> as SvsTldrawClientTWhiteboard
}
rectangle "==Collabora\\n<size:10>[Collabora Online, WOPI]</size>\\n\\nOffice-Editor im Browser (cool.DOMAIN)" <<SvsCollabora>> as SvsCollabora
rectangle "h5p-server" <<SvsH5p>> as SvsH5p {
  skinparam RectangleBorderColor<<SvsH5p>> #3b82f6
  skinparam RectangleFontColor<<SvsH5p>> #3b82f6
  skinparam RectangleBorderStyle<<SvsH5p>> dashed

  rectangle "==h5p-proxy\\n<size:10>[nginx]</size>\\n\\nEingang für Uploads, leitet über clammit weiter" <<SvsH5pProxy>> as SvsH5pProxy
}
rectangle "tldraw-server" <<SvsTldraw>> as SvsTldraw {
  skinparam RectangleBorderColor<<SvsTldraw>> #3b82f6
  skinparam RectangleFontColor<<SvsTldraw>> #3b82f6
  skinparam RectangleBorderStyle<<SvsTldraw>> dashed

  rectangle "==tldraw gateway\\n<size:10>[WebSocket, y-redis]</size>\\n\\nWebSocket-Eingang, prüft Rechte beim Server" <<SvsTldrawGateway>> as SvsTldrawGateway
}
rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
  skinparam RectangleBorderColor<<SvsServer>> #3b82f6
  skinparam RectangleFontColor<<SvsServer>> #3b82f6
  skinparam RectangleBorderStyle<<SvsServer>> dashed

  rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
  rectangle "==board-collaboration\\n<size:10>[socket.io, Mongo-Adapter]</size>\\n\\nEchtzeit-Bearbeitung von Boards (/board-collaboration)" <<SvsServerBoardCollab>> as SvsServerBoardCollab
}
rectangle "file-storage" <<SvsFiles>> as SvsFiles {
  skinparam RectangleBorderColor<<SvsFiles>> #3b82f6
  skinparam RectangleFontColor<<SvsFiles>> #3b82f6
  skinparam RectangleBorderStyle<<SvsFiles>> dashed

  rectangle "==file-storage api\\n<size:10>[NestJS]</size>\\n\\nREST für Upload, Download, Kopieren und WOPI für Collabora" <<SvsFilesApi>> as SvsFilesApi
}
rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra

SvsNuxtNDashboard .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Räume, Aufgaben, Neuigkeiten\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsNuxtNRooms .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Räume und Kurse\\n<size:8>[<color:#8D8D8D>REST /api/v3, /api/v1/courses]</size>
SvsNuxtNBoards .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Board laden\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsNuxtNTasks .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Aufgaben\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsNuxtNNews .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Neuigkeiten\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsNuxtNMediaShelf .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Medien und Lizenzen\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsNuxtNMigration .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Login-Migration\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsNuxtNAdmin .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Schulverwaltung\\n<size:8>[<color:#8D8D8D>REST /api/v3, /api/v1 users, classes, ldap-config]</size>
SvsNuxtNTools .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Tool-Konfiguration\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsNuxtNStatic .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Konfiguration\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsLegacyLLogin .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Anmelden\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsLegacyLRegistration .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Registrierung, Einwilligungen\\n<size:8>[<color:#8D8D8D>REST /api/v1]</size>
SvsLegacyLCourses .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Kurse und Themen\\n<size:8>[<color:#8D8D8D>REST /api/v1, /api/v3]</size>
SvsLegacyLHomework .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Aufgaben und Abgaben\\n<size:8>[<color:#8D8D8D>REST /api/v1]</size>
SvsLegacyLTeams .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Teams und Team-News\\n<size:8>[<color:#8D8D8D>REST /api/v1]</size>
SvsLegacyLCalendar .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Termine (weiter an den Kalender)\\n<size:8>[<color:#8D8D8D>REST /api/v1]</size>
SvsLegacyLFiles .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Alte Dateiablage\\n<size:8>[<color:#8D8D8D>REST /api/v1]</size>
SvsLegacyLVideo .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Konferenz starten (weiter an BBB)\\n<size:8>[<color:#8D8D8D>REST /api/v3]</size>
SvsLegacyLAccount .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Konto\\n<size:8>[<color:#8D8D8D>REST /api/v1]</size>
SvsLegacyLStatic .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Inhalte und Meldungen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsLegacyLAdmin .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Schulverwaltung\\n<size:8>[<color:#8D8D8D>REST /api/v1]</size>
SvsNuxtNBoards .[#8D8D8D,thickness=2].> SvsServerBoardCollab : <color:#8D8D8D>Board bearbeiten\\n<size:8>[<color:#8D8D8D>WebSocket]</size>
SvsNuxtNBoards .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dateien im Board\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxtNCollabora .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>WOPI-URL holen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dateien kopieren und löschen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsNuxtNH5p .[#8D8D8D,thickness=2].> SvsH5pProxy : <color:#8D8D8D>Editor und Player\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxtNCollabora .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Editor einbetten\\n<size:8>[<color:#8D8D8D>iframe]</size>
SvsCollabora .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dokument laden und speichern\\n<size:8>[<color:#8D8D8D>WOPI]</size>
SvsLegacyLLogin .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Consent\\n<size:8>[<color:#8D8D8D>Hydra Login- und Consent-Flow]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Clients und Consent verwalten\\n<size:8>[<color:#8D8D8D>Hydra Admin API]</size>
SvsTldrawClientTWhiteboard .[#8D8D8D,thickness=2].> SvsTldrawGateway : <color:#8D8D8D>Zeichnung synchronisieren\\n<size:8>[<color:#8D8D8D>WebSocket]</size>
SvsTldrawGateway .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Leitet Admin-Detailseiten weiter\\n<size:8>[<color:#8D8D8D>nginx proxy_pass]</size>
SvsNuxtNBoards .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Whiteboard öffnen\\n<size:8>[<color:#8D8D8D>Link]</size>
@enduml
`;case`migration`:return`@startuml
title "Migration: was in welchem Client liegt"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SvsNuxtNRooms>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNTasks>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNNews>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNAdmin>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNDead>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLCourses>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLHomework>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLTeams>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsLegacyLAdmin>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Räume und Kurse\\n<size:10>[nuxtclient-svc]</size>\\n\\n/rooms, /rooms/courses-overview, Kursliste. Anlegen, Bearbeiten, Kopieren und Themen von Kursen liegen noch im Legacy-Client." <<SvsNuxtNRooms>> as SvsNuxtNRooms
rectangle "==Aufgabenübersicht\\n<size:10>[nuxtclient-svc]</size>\\n\\n/tasks. Einzelne Aufgaben (/homework) liegen im Legacy-Client." <<SvsNuxtNTasks>> as SvsNuxtNTasks
rectangle "==Neuigkeiten\\n<size:10>[nuxtclient-svc]</size>\\n\\n/news. Team-Neuigkeiten (/teams/:id/news) liegen im Legacy-Client." <<SvsNuxtNNews>> as SvsNuxtNNews
rectangle "==Administration (neu)\\n<size:10>[nuxtclient-svc]</size>\\n\\n/administration: Schüler- und Lehrerlisten, Gruppen und Klassen, rooms/new, rooms/manage, school-settings, tool-configuration, provisioning-options, ldap/config, ldap/activate, migration. Detail-, Bearbeiten-, Passwort-, skipregistration- und Import-Seiten leitet nginx an den Legacy-Client weiter." <<SvsNuxtNAdmin>> as SvsNuxtNAdmin
rectangle "==Pfade ohne Seite\\n<size:10>[nuxtclient-svc]</size>\\n\\nNuxt-Route / (Home.page.vue) ist nicht erreichbar. /poc-files und /administration stehen in der Whitelist, haben aber keine Route. Der Ingress schickt /content, /mint-ec und /administration/ldap an nuxt, dort gibt es keine Route." <<SvsNuxtNDead>> as SvsNuxtNDead
rectangle "==Kurse bearbeiten\\n<size:10>[client-svc]</size>\\n\\nKurs anlegen, bearbeiten, kopieren, Kursgruppen, Themen (/courses, /topics)" <<SvsLegacyLCourses>> as SvsLegacyLCourses
rectangle "==Aufgaben\\n<size:10>[client-svc]</size>\\n\\n/homework/*" <<SvsLegacyLHomework>> as SvsLegacyLHomework
rectangle "==Teams\\n<size:10>[client-svc]</size>\\n\\n/teams/*, /teams/:id/news" <<SvsLegacyLTeams>> as SvsLegacyLTeams
rectangle "==Administration (alt)\\n<size:10>[client-svc]</size>\\n\\n/administration: users-without-consent, classes/*, courses/:id, teams, startldapschoolyear, dazu die von nuxt weitergeleiteten Schüler- und Lehrer-Detailseiten" <<SvsLegacyLAdmin>> as SvsLegacyLAdmin
@enduml
`;case`pii`:return`@startuml
title "Datenschutz: Flüsse personenbezogener Daten"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Support>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsNuxt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsLegacy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCollabora>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsSuperhero>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsAntivirusScanfile>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsH5pProxy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsH5pEditor>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerBoardCollab>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerMigrationSystems>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLegacyFileArchive>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerSchulconnexConsumers>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerDeletionConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerIdpConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerWorker>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerTspSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsFilesApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsFilesConsumer>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsFilesPreviewGenerator>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsEtherpad>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCalendar>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bbb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Nextcloud>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerAdminApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Schulconnex>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ldap>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tsp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsS3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitExMail>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitExProvisioning>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsMongo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsMaildrop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsPostgres>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Nutzerinnen und Nutzer\\n\\nSchülerinnen und Schüler, Lehrkräfte, Schuladmins" <<User>> as User
person "==Support\\n\\nBetrieb und Support der Mandanten" <<Support>> as Support
rectangle "antivirus_check_service" <<SvsAntivirus>> as SvsAntivirus {
  skinparam RectangleBorderColor<<SvsAntivirus>> #3b82f6
  skinparam RectangleFontColor<<SvsAntivirus>> #3b82f6
  skinparam RectangleBorderStyle<<SvsAntivirus>> dashed

  rectangle "==antivirus scanfile\\n<size:10>[Python, clamd]</size>\\n\\nLädt die Datei, scannt mit clamd, meldet das Ergebnis zurück" <<SvsAntivirusScanfile>> as SvsAntivirusScanfile
}
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
rectangle "==nuxt-client\\n<size:10>[Vue 3, Vite, nginx (nuxtclient-svc)]</size>\\n\\nNeues Frontend. Bekommt vom Ingress alle umgezogenen Pfade. nginx leitet einzelne Admin-Seiten an den Legacy-Client weiter." <<SvsNuxt>> as SvsNuxt
rectangle "==schulcloud-client\\n<size:10>[Express, Handlebars (client-svc)]</size>\\n\\nLegacy-Frontend, rendert serverseitig. Bekommt /login und als Fallback alle nicht umgezogenen Pfade." <<SvsLegacy>> as SvsLegacy
rectangle "==Collabora\\n<size:10>[Collabora Online, WOPI]</size>\\n\\nOffice-Editor im Browser (cool.DOMAIN)" <<SvsCollabora>> as SvsCollabora
rectangle "==superhero-dashboard\\n<size:10>[Express]</size>\\n\\nAdmin- und Support-Oberfläche (dashboard.DOMAIN)" <<SvsSuperhero>> as SvsSuperhero
rectangle "h5p-server" <<SvsH5p>> as SvsH5p {
  skinparam RectangleBorderColor<<SvsH5p>> #3b82f6
  skinparam RectangleFontColor<<SvsH5p>> #3b82f6
  skinparam RectangleBorderStyle<<SvsH5p>> dashed

  rectangle "==h5p-proxy\\n<size:10>[nginx]</size>\\n\\nEingang für Uploads, leitet über clammit weiter" <<SvsH5pProxy>> as SvsH5pProxy
  rectangle "==api-h5p\\n<size:10>[NestJS]</size>\\n\\nEditor und Player" <<SvsH5pEditor>> as SvsH5pEditor
}
rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
  skinparam RectangleBorderColor<<SvsServer>> #3b82f6
  skinparam RectangleFontColor<<SvsServer>> #3b82f6
  skinparam RectangleBorderStyle<<SvsServer>> dashed

  rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
  rectangle "==board-collaboration\\n<size:10>[socket.io, Mongo-Adapter]</size>\\n\\nEchtzeit-Bearbeitung von Boards (/board-collaboration)" <<SvsServerBoardCollab>> as SvsServerBoardCollab
  rectangle "==api-migration-systems\\n<size:10>[NestJS]</size>\\n\\nNutzerimport bei der Login-Migration (/api/v3/user/import)" <<SvsServerMigrationSystems>> as SvsServerMigrationSystems
  rectangle "==legacy-file-archive\\n<size:10>[NestJS]</size>\\n\\nArchiv der Dateien aus der alten Dateiablage" <<SvsServerLegacyFileArchive>> as SvsServerLegacyFileArchive
  rectangle "==Schulconnex-Consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nDrei Consumer: Gruppen-Provisionierung, Gruppen-Entfernung, Lizenz-Provisionierung" <<SvsServerSchulconnexConsumers>> as SvsServerSchulconnexConsumers
  rectangle "==deletion-console\\n<size:10>[CronJob]</size>\\n\\nStößt Löschanfragen an und stellt nicht synchronisierte Nutzer zur Löschung ein" <<SvsServerDeletionConsole>> as SvsServerDeletionConsole
  rectangle "==idp-console\\n<size:10>[CronJob]</size>\\n\\nAbgleich mit moin.schule" <<SvsServerIdpConsole>> as SvsServerIdpConsole
  rectangle "==api-worker\\n<size:10>[Feathers, KEDA]</size>\\n\\nVerarbeitet die LDAP-Sync-Queue. Skaliert über KEDA." <<SvsServerWorker>> as SvsServerWorker
  rectangle "==tsp-sync-console\\n<size:10>[CronJob]</size>\\n\\nAbgleich von Schulen, Klassen und Personen mit dem TSP" <<SvsServerTspSyncConsole>> as SvsServerTspSyncConsole
  rectangle "==admin-api-server\\n<size:10>[NestJS]</size>\\n\\nAdmin-API für Betrieb und Superhero-Dashboard (/admin/api/v1)" <<SvsServerAdminApi>> as SvsServerAdminApi
}
rectangle "file-storage" <<SvsFiles>> as SvsFiles {
  skinparam RectangleBorderColor<<SvsFiles>> #3b82f6
  skinparam RectangleFontColor<<SvsFiles>> #3b82f6
  skinparam RectangleBorderStyle<<SvsFiles>> dashed

  rectangle "==file-storage api\\n<size:10>[NestJS]</size>\\n\\nREST für Upload, Download, Kopieren und WOPI für Collabora" <<SvsFilesApi>> as SvsFilesApi
  rectangle "==file-storage consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nDateioperationen, die der Server per RabbitMQ anstößt" <<SvsFilesConsumer>> as SvsFilesConsumer
  rectangle "==preview-generator\\n<size:10>[NestJS, ImageMagick]</size>\\n\\nVorschaubilder" <<SvsFilesPreviewGenerator>> as SvsFilesPreviewGenerator
}
database "==Session-Valkey\\n<size:10>[Valkey (Sentinel)]</size>\\n\\nSessions und JWT-Whitelist" <<SvsValkey>> as SvsValkey
rectangle "RabbitMQ" <<SvsRabbit>> as SvsRabbit {
  skinparam RectangleBorderColor<<SvsRabbit>> #3b82f6
  skinparam RectangleFontColor<<SvsRabbit>> #3b82f6
  skinparam RectangleBorderStyle<<SvsRabbit>> dashed

  queue "==mail-drop\\n<size:10>[Exchange]</size>" <<SvsRabbitExMail>> as SvsRabbitExMail
  queue "==provisioning-schulconnex\\n<size:10>[Exchange]</size>" <<SvsRabbitExProvisioning>> as SvsRabbitExProvisioning
}
rectangle "==Etherpad\\n<size:10>[Etherpad]</size>\\n\\nKollaborative Textdokumente (/etherpad)" <<SvsEtherpad>> as SvsEtherpad
rectangle "==schulcloud-calendar\\n<size:10>[Node.js, PostgreSQL]</size>\\n\\nKalender-Service. Ohne Ingress, nur clusterintern erreichbar." <<SvsCalendar>> as SvsCalendar
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==BigBlueButton\\n<size:10>[BBB-API]</size>\\n\\nVideokonferenzen" <<Bbb>> as Bbb
rectangle "==Nextcloud\\n<size:10>[OCS, WebDAV, OIDC]</size>\\n\\nDateiablage der Mandanten, nicht über dof_app_deploy ausgerollt" <<Nextcloud>> as Nextcloud
rectangle "==Schulconnex-API\\n<size:10>[REST, OAuth2 Client Credentials]</size>\\n\\nPersonen, Gruppen und Lizenzen aus moin.schule" <<Schulconnex>> as Schulconnex
rectangle "==Schul-LDAP\\n<size:10>[LDAP]</size>\\n\\nVerzeichnisse der Schulen (z. B. iServ)" <<Ldap>> as Ldap
rectangle "==TSP Thüringen\\n<size:10>[REST, JWT]</size>\\n\\nThüringer Schulportal: Login und Stammdaten" <<Tsp>> as Tsp
database "==S3\\n<size:10>[IONOS S3]</size>\\n\\nBuckets für Dateien, H5P-Inhalte und -Bibliotheken, FWU-Inhalte und Whiteboards. MinIO in Dev und Ref." <<SvsS3>> as SvsS3
rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra
database "==MongoDB\\n<size:10>[MongoDB (extern betrieben)]</size>\\n\\nGemeinsame Datenbank scapp für Server, file-storage und h5p-server. Dazu eigene DB für Etherpad." <<SvsMongo>> as SvsMongo
rectangle "==maildrop\\n<size:10>[Spring Boot]</size>\\n\\nVersendet E-Mails aus der Queue" <<SvsMaildrop>> as SvsMaildrop
database "==PostgreSQL\\n<size:10>[PostgreSQL (IONOS Managed)]</size>\\n\\nDatenbank für Hydra und Kalender" <<SvsPostgres>> as SvsPostgres
rectangle "==SMTP-Relay\\n<size:10>[SMTP]</size>\\n\\nAusgehende E-Mails" <<Smtp>> as Smtp

User .[#8D8D8D,thickness=2].> SvsNuxt : <color:#8D8D8D>Nutzt umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Nutzt Login und nicht umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Bearbeitet Office-Dokumente\\n<size:8>[<color:#8D8D8D>HTTPS, iframe]</size>
Support .[#8D8D8D,thickness=2].> SvsSuperhero : <color:#8D8D8D>Verwaltet Schulen und Nutzer\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachfunktionen\\n<size:8>[<color:#8D8D8D>REST /api/v3, v1-Whitelist]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerBoardCollab : <color:#8D8D8D>Boards in Echtzeit bearbeiten\\n<size:8>[<color:#8D8D8D>WebSocket (socket.io)]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dateien hoch- und herunterladen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsH5pProxy : <color:#8D8D8D>H5P bearbeiten und abspielen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rendert Seiten mit Daten aus der API\\n<size:8>[<color:#8D8D8D>REST über API_HOST, /api/v1 und /api/v3]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachdaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Verwaltungsaktionen\\n<size:8>[<color:#8D8D8D>REST /admin/api/v1]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Liest und schreibt Fachdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsValkey : <color:#8D8D8D>Sessions und JWT-Whitelist\\n<size:8>[<color:#8D8D8D>Redis-Protokoll]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbitExMail : <color:#8D8D8D>E-Mail versenden\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbitExProvisioning : <color:#8D8D8D>Provisionierung beim Login anstoßen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Alte Dateiablage\\n<size:8>[<color:#8D8D8D>S3, Anbieter je Schule aus der DB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsEtherpad : <color:#8D8D8D>Pads anlegen\\n<size:8>[<color:#8D8D8D>Etherpad API, API-Key]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsCalendar : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Personen und Gruppen beim Login lesen\\n<size:8>[<color:#8D8D8D>REST, OAuth2 Client Credentials]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Login gegen das Schul-LDAP\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>Login über das TSP\\n<size:8>[<color:#8D8D8D>JWT]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Bbb : <color:#8D8D8D>Konferenzen anlegen und beitreten\\n<size:8>[<color:#8D8D8D>BBB-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Nextcloud : <color:#8D8D8D>Gruppen und Ordner für Teams\\n<size:8>[<color:#8D8D8D>OCS, WebDAV]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Boards und Socket-Adapter\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerAdminApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Verwaltungsdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerMigrationSystems .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Importierte Nutzer zuordnen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerLegacyFileArchive .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Archivierte Dateien\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerSchulconnexConsumers .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Gruppen, Kurse und Lizenzen schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerDeletionConsole .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Löschungen anstoßen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerIdpConsole .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Nutzer mit moin.schule abgleichen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerIdpConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Abgleich speichern\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Nutzer und Klassen lesen\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Nutzer und Klassen schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerTspSyncConsole .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>Schulen, Klassen und Personen lesen\\n<size:8>[<color:#8D8D8D>REST, JWT]</size>
SvsServerTspSyncConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Stammdaten schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerSchulconnexConsumers .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Lizenzen und Gruppen nachladen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten\\n<size:8>[<color:#8D8D8D>MongoDB (DB scapp)]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Dateiinhalte\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFilesConsumer .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsFilesConsumer .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Kopieren und Löschen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFilesPreviewGenerator .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Bilder lesen, Vorschau schreiben\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsCollabora .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dokument laden und speichern\\n<size:8>[<color:#8D8D8D>WOPI]</size>
SvsAntivirusScanfile .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Datei laden, Ergebnis melden\\n<size:8>[<color:#8D8D8D>HTTP-Callback]</size>
SvsH5pEditor .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Inhalts-Metadaten\\n<size:8>[<color:#8D8D8D>MongoDB (DB scapp)]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsRabbitExMail .[#8D8D8D,thickness=2].> SvsMaildrop : <color:#8D8D8D>E-Mail-Aufträge\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsMaildrop .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>E-Mails versenden\\n<size:8>[<color:#8D8D8D>SMTP]</size>
SvsHydra .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Clients, Consents, Tokens\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsEtherpad .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Pads\\n<size:8>[<color:#8D8D8D>MongoDB (eigene DB)]</size>
Nextcloud .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OIDC]</size>
Tools .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OAuth2, OIDC]</size>
Tools .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Klassenlisten abrufen\\n<size:8>[<color:#8D8D8D>REST /api/v1/roster]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
@enduml
`;case`async`:return`@startuml
title "RabbitMQ: Exchanges, Publisher und Consumer"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerBoardCollab>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerCommonCartridge>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLdapSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsFilesApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsAntivirusWeb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam queue<<SvsRabbitExFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitExH5p>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitExProvisioning>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitExMail>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitQLdap>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitExAntivirus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitExPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFilesConsumer>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerSchulconnexConsumers>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsMaildrop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsServerWorker>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsAntivirusScanfile>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsFilesPreviewGenerator>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsH5pConsumer>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
  skinparam RectangleBorderColor<<SvsServer>> #3b82f6
  skinparam RectangleFontColor<<SvsServer>> #3b82f6
  skinparam RectangleBorderStyle<<SvsServer>> dashed

  rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
  rectangle "==board-collaboration\\n<size:10>[socket.io, Mongo-Adapter]</size>\\n\\nEchtzeit-Bearbeitung von Boards (/board-collaboration)" <<SvsServerBoardCollab>> as SvsServerBoardCollab
  rectangle "==common-cartridge\\n<size:10>[NestJS]</size>\\n\\nImport und Export von Kursen im Common-Cartridge-Format" <<SvsServerCommonCartridge>> as SvsServerCommonCartridge
  rectangle "==ldap-sync-console\\n<size:10>[CronJob]</size>\\n\\nStellt LDAP-Syncs pro Schule in die Queue" <<SvsServerLdapSyncConsole>> as SvsServerLdapSyncConsole
  rectangle "==Schulconnex-Consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nDrei Consumer: Gruppen-Provisionierung, Gruppen-Entfernung, Lizenz-Provisionierung" <<SvsServerSchulconnexConsumers>> as SvsServerSchulconnexConsumers
  rectangle "==api-worker\\n<size:10>[Feathers, KEDA]</size>\\n\\nVerarbeitet die LDAP-Sync-Queue. Skaliert über KEDA." <<SvsServerWorker>> as SvsServerWorker
}
rectangle "file-storage" <<SvsFiles>> as SvsFiles {
  skinparam RectangleBorderColor<<SvsFiles>> #3b82f6
  skinparam RectangleFontColor<<SvsFiles>> #3b82f6
  skinparam RectangleBorderStyle<<SvsFiles>> dashed

  rectangle "==file-storage api\\n<size:10>[NestJS]</size>\\n\\nREST für Upload, Download, Kopieren und WOPI für Collabora" <<SvsFilesApi>> as SvsFilesApi
  rectangle "==file-storage consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nDateioperationen, die der Server per RabbitMQ anstößt" <<SvsFilesConsumer>> as SvsFilesConsumer
  rectangle "==preview-generator\\n<size:10>[NestJS, ImageMagick]</size>\\n\\nVorschaubilder" <<SvsFilesPreviewGenerator>> as SvsFilesPreviewGenerator
}
rectangle "antivirus_check_service" <<SvsAntivirus>> as SvsAntivirus {
  skinparam RectangleBorderColor<<SvsAntivirus>> #3b82f6
  skinparam RectangleFontColor<<SvsAntivirus>> #3b82f6
  skinparam RectangleBorderStyle<<SvsAntivirus>> dashed

  rectangle "==antivirus web\\n<size:10>[Python]</size>\\n\\nHTTP-API, stellt Scanaufträge in die Queue" <<SvsAntivirusWeb>> as SvsAntivirusWeb
  rectangle "==antivirus scanfile\\n<size:10>[Python, clamd]</size>\\n\\nLädt die Datei, scannt mit clamd, meldet das Ergebnis zurück" <<SvsAntivirusScanfile>> as SvsAntivirusScanfile
}
rectangle "RabbitMQ" <<SvsRabbit>> as SvsRabbit {
  skinparam RectangleBorderColor<<SvsRabbit>> #3b82f6
  skinparam RectangleFontColor<<SvsRabbit>> #3b82f6
  skinparam RectangleBorderStyle<<SvsRabbit>> dashed

  queue "==files-storage\\n<size:10>[Exchange]</size>" <<SvsRabbitExFiles>> as SvsRabbitExFiles
  queue "==h5p-editor\\n<size:10>[Exchange]</size>" <<SvsRabbitExH5p>> as SvsRabbitExH5p
  queue "==provisioning-schulconnex\\n<size:10>[Exchange]</size>" <<SvsRabbitExProvisioning>> as SvsRabbitExProvisioning
  queue "==mail-drop\\n<size:10>[Exchange]</size>" <<SvsRabbitExMail>> as SvsRabbitExMail
  queue "==sync_ldap\\n<size:10>[Queue]</size>" <<SvsRabbitQLdap>> as SvsRabbitQLdap
  queue "==scan_file_v2\\n<size:10>[Exchange]</size>" <<SvsRabbitExAntivirus>> as SvsRabbitExAntivirus
  queue "==files-preview\\n<size:10>[Exchange]</size>" <<SvsRabbitExPreview>> as SvsRabbitExPreview
}
rectangle "h5p-server" <<SvsH5p>> as SvsH5p {
  skinparam RectangleBorderColor<<SvsH5p>> #3b82f6
  skinparam RectangleFontColor<<SvsH5p>> #3b82f6
  skinparam RectangleBorderStyle<<SvsH5p>> dashed

  rectangle "==h5p consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nKopieren und Löschen von H5P-Inhalten auf Anstoß des Servers" <<SvsH5pConsumer>> as SvsH5pConsumer
}
rectangle "==maildrop\\n<size:10>[Spring Boot]</size>\\n\\nVersendet E-Mails aus der Queue" <<SvsMaildrop>> as SvsMaildrop

SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbitExFiles : <color:#8D8D8D>Dateioperationen anstoßen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbitExH5p : <color:#8D8D8D>H5P-Inhalte kopieren und löschen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbitExProvisioning : <color:#8D8D8D>Provisionierung beim Login anstoßen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbitExMail : <color:#8D8D8D>E-Mail versenden\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsRabbitExFiles : <color:#8D8D8D>Dateien von Board-Elementen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerCommonCartridge .[#8D8D8D,thickness=2].> SvsRabbitExFiles : <color:#8D8D8D>Dateien im Paket\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerLdapSyncConsole .[#8D8D8D,thickness=2].> SvsRabbitQLdap : <color:#8D8D8D>Sync pro Schule einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsRabbitExAntivirus : <color:#8D8D8D>Scan anstoßen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsRabbitExPreview : <color:#8D8D8D>Vorschau anstoßen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsAntivirusWeb .[#8D8D8D,thickness=2].> SvsRabbitExAntivirus : <color:#8D8D8D>Scan einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbitExFiles .[#8D8D8D,thickness=2].> SvsFilesConsumer : <color:#8D8D8D>Dateioperationen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbitExH5p .[#8D8D8D,thickness=2].> SvsH5pConsumer : <color:#8D8D8D>Kopieren und Löschen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbitExProvisioning .[#8D8D8D,thickness=2].> SvsServerSchulconnexConsumers : <color:#8D8D8D>Provisionierung\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbitExMail .[#8D8D8D,thickness=2].> SvsMaildrop : <color:#8D8D8D>E-Mail-Aufträge\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbitExAntivirus .[#8D8D8D,thickness=2].> SvsAntivirusScanfile : <color:#8D8D8D>Scanauftrag\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbitExPreview .[#8D8D8D,thickness=2].> SvsFilesPreviewGenerator : <color:#8D8D8D>Vorschau erzeugen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbitQLdap .[#8D8D8D,thickness=2].> SvsServerWorker : <color:#8D8D8D>LDAP-Sync ausführen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
@enduml
`;case`files`:return`@startuml
title "file-storage: Abhängigkeiten"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SvsSuperhero>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCollabora>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsNuxtNBoards>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsNuxtNCollabora>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsAntivirusScanfile>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam queue<<SvsRabbitExFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbitExPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFilesApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsFilesConsumer>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsFilesPreviewGenerator>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam queue<<SvsRabbitExAntivirus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsMongo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsS3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "nuxt-client" <<SvsNuxt>> as SvsNuxt {
  skinparam RectangleBorderColor<<SvsNuxt>> #3b82f6
  skinparam RectangleFontColor<<SvsNuxt>> #3b82f6
  skinparam RectangleBorderStyle<<SvsNuxt>> dashed

  rectangle "==Boards und Ordner\\n<size:10>[nuxtclient-svc]</size>\\n\\n/boards/:id, /folder/:id" <<SvsNuxtNBoards>> as SvsNuxtNBoards
  rectangle "==Office-Dokumente\\n<size:10>[nuxtclient-svc]</size>\\n\\n/collabora/:id" <<SvsNuxtNCollabora>> as SvsNuxtNCollabora
}
rectangle "==superhero-dashboard\\n<size:10>[Express]</size>\\n\\nAdmin- und Support-Oberfläche (dashboard.DOMAIN)" <<SvsSuperhero>> as SvsSuperhero
rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
  skinparam RectangleBorderColor<<SvsServer>> #3b82f6
  skinparam RectangleFontColor<<SvsServer>> #3b82f6
  skinparam RectangleBorderStyle<<SvsServer>> dashed

  rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
}
rectangle "antivirus_check_service" <<SvsAntivirus>> as SvsAntivirus {
  skinparam RectangleBorderColor<<SvsAntivirus>> #3b82f6
  skinparam RectangleFontColor<<SvsAntivirus>> #3b82f6
  skinparam RectangleBorderStyle<<SvsAntivirus>> dashed

  rectangle "==antivirus scanfile\\n<size:10>[Python, clamd]</size>\\n\\nLädt die Datei, scannt mit clamd, meldet das Ergebnis zurück" <<SvsAntivirusScanfile>> as SvsAntivirusScanfile
}
rectangle "==Collabora\\n<size:10>[Collabora Online, WOPI]</size>\\n\\nOffice-Editor im Browser (cool.DOMAIN)" <<SvsCollabora>> as SvsCollabora
rectangle "RabbitMQ" <<SvsRabbit>> as SvsRabbit {
  skinparam RectangleBorderColor<<SvsRabbit>> #3b82f6
  skinparam RectangleFontColor<<SvsRabbit>> #3b82f6
  skinparam RectangleBorderStyle<<SvsRabbit>> dashed

  queue "==files-storage\\n<size:10>[Exchange]</size>" <<SvsRabbitExFiles>> as SvsRabbitExFiles
  queue "==files-preview\\n<size:10>[Exchange]</size>" <<SvsRabbitExPreview>> as SvsRabbitExPreview
  queue "==scan_file_v2\\n<size:10>[Exchange]</size>" <<SvsRabbitExAntivirus>> as SvsRabbitExAntivirus
}
rectangle "file-storage" <<SvsFiles>> as SvsFiles {
  skinparam RectangleBorderColor<<SvsFiles>> #3b82f6
  skinparam RectangleFontColor<<SvsFiles>> #3b82f6
  skinparam RectangleBorderStyle<<SvsFiles>> dashed

  rectangle "==file-storage api\\n<size:10>[NestJS]</size>\\n\\nREST für Upload, Download, Kopieren und WOPI für Collabora" <<SvsFilesApi>> as SvsFilesApi
  rectangle "==file-storage consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nDateioperationen, die der Server per RabbitMQ anstößt" <<SvsFilesConsumer>> as SvsFilesConsumer
  rectangle "==preview-generator\\n<size:10>[NestJS, ImageMagick]</size>\\n\\nVorschaubilder" <<SvsFilesPreviewGenerator>> as SvsFilesPreviewGenerator
}
database "==MongoDB\\n<size:10>[MongoDB (extern betrieben)]</size>\\n\\nGemeinsame Datenbank scapp für Server, file-storage und h5p-server. Dazu eigene DB für Etherpad." <<SvsMongo>> as SvsMongo
database "==S3\\n<size:10>[IONOS S3]</size>\\n\\nBuckets für Dateien, H5P-Inhalte und -Bibliotheken, FWU-Inhalte und Whiteboards. MinIO in Dev und Ref." <<SvsS3>> as SvsS3

SvsNuxtNBoards .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dateien im Board\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxtNCollabora .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>WOPI-URL holen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dateien verwalten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dateien kopieren und löschen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsAntivirusScanfile .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Datei laden, Ergebnis melden\\n<size:8>[<color:#8D8D8D>HTTP-Callback]</size>
SvsCollabora .[#8D8D8D,thickness=2].> SvsFilesApi : <color:#8D8D8D>Dokument laden und speichern\\n<size:8>[<color:#8D8D8D>WOPI]</size>
SvsRabbitExFiles .[#8D8D8D,thickness=2].> SvsFilesConsumer : <color:#8D8D8D>Dateioperationen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbitExPreview .[#8D8D8D,thickness=2].> SvsFilesPreviewGenerator : <color:#8D8D8D>Vorschau erzeugen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten\\n<size:8>[<color:#8D8D8D>MongoDB (DB scapp)]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Dateiinhalte\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsRabbitExAntivirus : <color:#8D8D8D>Scan anstoßen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsFilesApi .[#8D8D8D,thickness=2].> SvsRabbitExPreview : <color:#8D8D8D>Vorschau anstoßen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsFilesConsumer .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsFilesConsumer .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Kopieren und Löschen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFilesPreviewGenerator .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Bilder lesen, Vorschau schreiben\\n<size:8>[<color:#8D8D8D>S3]</size>
@enduml
`;case`identity`:return`@startuml
title "Login und Identitäten"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SvsLegacyLLogin>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerIdpConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLdapSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerSchulconnexConsumers>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerWorker>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerTspSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerMigrationSystems>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Nextcloud>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Schulconnex>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ldap>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tsp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "SVS" <<Svs>> as Svs {
  skinparam RectangleBorderColor<<Svs>> #3b82f6
  skinparam RectangleFontColor<<Svs>> #3b82f6
  skinparam RectangleBorderStyle<<Svs>> dashed

  rectangle "schulcloud-client" <<SvsLegacy>> as SvsLegacy {
    skinparam RectangleBorderColor<<SvsLegacy>> #3b82f6
    skinparam RectangleFontColor<<SvsLegacy>> #3b82f6
    skinparam RectangleBorderStyle<<SvsLegacy>> dashed

    rectangle "==Login und SSO\\n<size:10>[client-svc]</size>\\n\\n/login, SSO-Einstiege, /oauth2/* (Hydra-Consent)" <<SvsLegacyLLogin>> as SvsLegacyLLogin
  }
  rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
    skinparam RectangleBorderColor<<SvsServer>> #3b82f6
    skinparam RectangleFontColor<<SvsServer>> #3b82f6
    skinparam RectangleBorderStyle<<SvsServer>> dashed

    rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
    rectangle "==idp-console\\n<size:10>[CronJob]</size>\\n\\nAbgleich mit moin.schule" <<SvsServerIdpConsole>> as SvsServerIdpConsole
    rectangle "==ldap-sync-console\\n<size:10>[CronJob]</size>\\n\\nStellt LDAP-Syncs pro Schule in die Queue" <<SvsServerLdapSyncConsole>> as SvsServerLdapSyncConsole
    rectangle "==Schulconnex-Consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nDrei Consumer: Gruppen-Provisionierung, Gruppen-Entfernung, Lizenz-Provisionierung" <<SvsServerSchulconnexConsumers>> as SvsServerSchulconnexConsumers
    rectangle "==api-worker\\n<size:10>[Feathers, KEDA]</size>\\n\\nVerarbeitet die LDAP-Sync-Queue. Skaliert über KEDA." <<SvsServerWorker>> as SvsServerWorker
    rectangle "==tsp-sync-console\\n<size:10>[CronJob]</size>\\n\\nAbgleich von Schulen, Klassen und Personen mit dem TSP" <<SvsServerTspSyncConsole>> as SvsServerTspSyncConsole
    rectangle "==api-migration-systems\\n<size:10>[NestJS]</size>\\n\\nNutzerimport bei der Login-Migration (/api/v3/user/import)" <<SvsServerMigrationSystems>> as SvsServerMigrationSystems
  }
  rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra
}
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
rectangle "==Nextcloud\\n<size:10>[OCS, WebDAV, OIDC]</size>\\n\\nDateiablage der Mandanten, nicht über dof_app_deploy ausgerollt" <<Nextcloud>> as Nextcloud
rectangle "==Schulconnex-API\\n<size:10>[REST, OAuth2 Client Credentials]</size>\\n\\nPersonen, Gruppen und Lizenzen aus moin.schule" <<Schulconnex>> as Schulconnex
rectangle "==Schul-LDAP\\n<size:10>[LDAP]</size>\\n\\nVerzeichnisse der Schulen (z. B. iServ)" <<Ldap>> as Ldap
rectangle "==TSP Thüringen\\n<size:10>[REST, JWT]</size>\\n\\nThüringer Schulportal: Login und Stammdaten" <<Tsp>> as Tsp

SvsLegacyLLogin .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Anmelden\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsLegacyLLogin .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Consent\\n<size:8>[<color:#8D8D8D>Hydra Login- und Consent-Flow]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Clients und Consent verwalten\\n<size:8>[<color:#8D8D8D>Hydra Admin API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Personen und Gruppen beim Login lesen\\n<size:8>[<color:#8D8D8D>REST, OAuth2 Client Credentials]</size>
SvsServerIdpConsole .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Nutzer mit moin.schule abgleichen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerSchulconnexConsumers .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Lizenzen und Gruppen nachladen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Login gegen das Schul-LDAP\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Nutzer und Klassen lesen\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>Login über das TSP\\n<size:8>[<color:#8D8D8D>JWT]</size>
SvsServerTspSyncConsole .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>Schulen, Klassen und Personen lesen\\n<size:8>[<color:#8D8D8D>REST, JWT]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
Tools .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Klassenlisten abrufen\\n<size:8>[<color:#8D8D8D>REST /api/v1/roster]</size>
Tools .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OAuth2, OIDC]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Nextcloud : <color:#8D8D8D>Gruppen und Ordner für Teams\\n<size:8>[<color:#8D8D8D>OCS, WebDAV]</size>
Nextcloud .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OIDC]</size>
@enduml
`;case`brb`:return`@startuml
title "Mandant brb: Brandenburg"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Nextcloud>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam person<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Support>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsServerLdapSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsPrometheus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsNuxt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsSuperhero>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsAntivirus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCalendar>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsVersionAggregator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsLegacy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldrawClient>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCollabora>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldraw>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsTldrawValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsH5p>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsMaildrop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsClammit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<H5pHub>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerBoardCollab>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerWorker>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLegacyFileArchive>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerFwuLearningContents>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerServerConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerDeletionConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsEtherpad>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bbb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Cachet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Web>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ldap>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsS3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsServerAdminApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsPostgres>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsMongo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Nextcloud\\n<size:10>[OCS, WebDAV, OIDC]</size>\\n\\nDateiablage der Mandanten, nicht über dof_app_deploy ausgerollt" <<Nextcloud>> as Nextcloud
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
person "==Nutzerinnen und Nutzer\\n\\nSchülerinnen und Schüler, Lehrkräfte, Schuladmins" <<User>> as User
person "==Support\\n\\nBetrieb und Support der Mandanten" <<Support>> as Support
rectangle "SVS" <<Svs>> as Svs {
  skinparam RectangleBorderColor<<Svs>> #3b82f6
  skinparam RectangleFontColor<<Svs>> #3b82f6
  skinparam RectangleBorderStyle<<Svs>> dashed

  rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
    skinparam RectangleBorderColor<<SvsServer>> #3b82f6
    skinparam RectangleFontColor<<SvsServer>> #3b82f6
    skinparam RectangleBorderStyle<<SvsServer>> dashed

    rectangle "==ldap-sync-console\\n<size:10>[CronJob]</size>\\n\\nStellt LDAP-Syncs pro Schule in die Queue" <<SvsServerLdapSyncConsole>> as SvsServerLdapSyncConsole
    rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
    rectangle "==board-collaboration\\n<size:10>[socket.io, Mongo-Adapter]</size>\\n\\nEchtzeit-Bearbeitung von Boards (/board-collaboration)" <<SvsServerBoardCollab>> as SvsServerBoardCollab
    rectangle "==api-worker\\n<size:10>[Feathers, KEDA]</size>\\n\\nVerarbeitet die LDAP-Sync-Queue. Skaliert über KEDA." <<SvsServerWorker>> as SvsServerWorker
    rectangle "==legacy-file-archive\\n<size:10>[NestJS]</size>\\n\\nArchiv der Dateien aus der alten Dateiablage" <<SvsServerLegacyFileArchive>> as SvsServerLegacyFileArchive
    rectangle "==fwu-learning-contents\\n<size:10>[NestJS]</size>\\n\\nLiefert FWU-Lerninhalte aus dem FWU-Bucket" <<SvsServerFwuLearningContents>> as SvsServerFwuLearningContents
    rectangle "==server-console\\n<size:10>[Job, CronJob]</size>\\n\\nMigrationen beim Deploy, Löschen verwaister S3-Dateien" <<SvsServerServerConsole>> as SvsServerServerConsole
    rectangle "==deletion-console\\n<size:10>[CronJob]</size>\\n\\nStößt Löschanfragen an und stellt nicht synchronisierte Nutzer zur Löschung ein" <<SvsServerDeletionConsole>> as SvsServerDeletionConsole
    rectangle "==admin-api-server\\n<size:10>[NestJS]</size>\\n\\nAdmin-API für Betrieb und Superhero-Dashboard (/admin/api/v1)" <<SvsServerAdminApi>> as SvsServerAdminApi
  }
  rectangle "==Prometheus\\n<size:10>[Prometheus Operator]</size>\\n\\nMetriken aller Dienste, dazu mongodb-query-exporter" <<SvsPrometheus>> as SvsPrometheus
  rectangle "==nuxt-client\\n<size:10>[Vue 3, Vite, nginx (nuxtclient-svc)]</size>\\n\\nNeues Frontend. Bekommt vom Ingress alle umgezogenen Pfade. nginx leitet einzelne Admin-Seiten an den Legacy-Client weiter." <<SvsNuxt>> as SvsNuxt
  rectangle "==superhero-dashboard\\n<size:10>[Express]</size>\\n\\nAdmin- und Support-Oberfläche (dashboard.DOMAIN)" <<SvsSuperhero>> as SvsSuperhero
  rectangle "==antivirus_check_service\\n<size:10>[Python, ClamAV]</size>\\n\\nVirenscan für hochgeladene Dateien" <<SvsAntivirus>> as SvsAntivirus
  rectangle "==schulcloud-calendar\\n<size:10>[Node.js, PostgreSQL]</size>\\n\\nKalender-Service. Ohne Ingress, nur clusterintern erreichbar." <<SvsCalendar>> as SvsCalendar
  rectangle "==version-aggregator\\n<size:10>[Node.js]</size>\\n\\nSammelt die Versionen aller Dienste (/version)" <<SvsVersionAggregator>> as SvsVersionAggregator
  rectangle "==schulcloud-client\\n<size:10>[Express, Handlebars (client-svc)]</size>\\n\\nLegacy-Frontend, rendert serverseitig. Bekommt /login und als Fallback alle nicht umgezogenen Pfade." <<SvsLegacy>> as SvsLegacy
  rectangle "==tldraw-client\\n<size:10>[React, tldraw (tldraw-client-svc)]</size>\\n\\nWhiteboard-Oberfläche, eingebettet in Boards" <<SvsTldrawClient>> as SvsTldrawClient
  rectangle "==Collabora\\n<size:10>[Collabora Online, WOPI]</size>\\n\\nOffice-Editor im Browser (cool.DOMAIN)" <<SvsCollabora>> as SvsCollabora
  rectangle "==tldraw-server\\n<size:10>[Node.js, y-redis]</size>\\n\\nWhiteboard-Backend" <<SvsTldraw>> as SvsTldraw
  rectangle "==file-storage\\n<size:10>[NestJS]</size>\\n\\nDateidienst für Boards, Aufgaben, Kurse und H5P" <<SvsFiles>> as SvsFiles
  database "==tldraw-Valkey\\n<size:10>[Valkey]</size>\\n\\nArbeitsstand der Whiteboards" <<SvsTldrawValkey>> as SvsTldrawValkey
  queue "==RabbitMQ\\n<size:10>[RabbitMQ (Operator)]</size>\\n\\nNachrichten zwischen den Diensten. Kinder sind die Exchanges und Queues." <<SvsRabbit>> as SvsRabbit
  rectangle "==h5p-server\\n<size:10>[NestJS, @lumieducation/h5p]</size>\\n\\nH5P-Editor und -Player" <<SvsH5p>> as SvsH5p
  rectangle "==maildrop\\n<size:10>[Spring Boot]</size>\\n\\nVersendet E-Mails aus der Queue" <<SvsMaildrop>> as SvsMaildrop
  rectangle "==clammit\\n<size:10>[clammit, ClamAV]</size>\\n\\nHTTP-Proxy, der Uploads vor dem H5P-Editor mit ClamAV prüft" <<SvsClammit>> as SvsClammit
  rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra
  rectangle "==Etherpad\\n<size:10>[Etherpad]</size>\\n\\nKollaborative Textdokumente (/etherpad)" <<SvsEtherpad>> as SvsEtherpad
  database "==Session-Valkey\\n<size:10>[Valkey (Sentinel)]</size>\\n\\nSessions und JWT-Whitelist" <<SvsValkey>> as SvsValkey
  database "==S3\\n<size:10>[IONOS S3]</size>\\n\\nBuckets für Dateien, H5P-Inhalte und -Bibliotheken, FWU-Inhalte und Whiteboards. MinIO in Dev und Ref." <<SvsS3>> as SvsS3
  database "==PostgreSQL\\n<size:10>[PostgreSQL (IONOS Managed)]</size>\\n\\nDatenbank für Hydra und Kalender" <<SvsPostgres>> as SvsPostgres
  database "==MongoDB\\n<size:10>[MongoDB (extern betrieben)]</size>\\n\\nGemeinsame Datenbank scapp für Server, file-storage und h5p-server. Dazu eigene DB für Etherpad." <<SvsMongo>> as SvsMongo
}
rectangle "==H5P Hub\\n<size:10>[HTTPS]</size>\\n\\nQuelle der H5P-Bibliotheken" <<H5pHub>> as H5pHub
rectangle "==SMTP-Relay\\n<size:10>[SMTP]</size>\\n\\nAusgehende E-Mails" <<Smtp>> as Smtp
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==BigBlueButton\\n<size:10>[BBB-API]</size>\\n\\nVideokonferenzen" <<Bbb>> as Bbb
rectangle "==Cachet\\n<size:10>[REST]</size>\\n\\nStatusseite, liefert Störungsmeldungen" <<Cachet>> as Cachet
rectangle "==Beliebige Webseiten\\n<size:10>[HTTPS]</size>\\n\\nLink-Vorschau im Board (meta-tag-extractor)" <<Web>> as Web
rectangle "==Schul-LDAP\\n<size:10>[LDAP]</size>\\n\\nVerzeichnisse der Schulen (z. B. iServ)" <<Ldap>> as Ldap

Nextcloud .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OIDC]</size>
Tools .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OAuth2, OIDC]</size>
User .[#8D8D8D,thickness=2].> SvsNuxt : <color:#8D8D8D>Nutzt umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Nutzt Login und nicht umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Zeichnet auf Whiteboards\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Bearbeitet Office-Dokumente\\n<size:8>[<color:#8D8D8D>HTTPS, iframe]</size>
Support .[#8D8D8D,thickness=2].> SvsSuperhero : <color:#8D8D8D>Verwaltet Schulen und Nutzer\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Leitet Admin-Detailseiten weiter\\n<size:8>[<color:#8D8D8D>nginx proxy_pass]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Whiteboard öffnen\\n<size:8>[<color:#8D8D8D>Link]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Editor einbetten\\n<size:8>[<color:#8D8D8D>iframe]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Consent\\n<size:8>[<color:#8D8D8D>Hydra Login- und Consent-Flow]</size>
SvsTldrawClient .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnung synchronisieren\\n<size:8>[<color:#8D8D8D>WebSocket]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien verwalten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten
SvsFiles .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Datei laden, Ergebnis melden\\n<size:8>[<color:#8D8D8D>HTTP-Callback]</size>
SvsCollabora .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dokument laden und speichern\\n<size:8>[<color:#8D8D8D>WOPI]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsClammit : <color:#8D8D8D>Uploads prüfen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Inhalts-Metadaten
SvsH5p .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsClammit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Geprüfte Anfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Kopieren und Löschen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsTldrawValkey : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>Redis-Streams]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Zeichnungen speichern\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Scan einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Scanauftrag\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsMaildrop : <color:#8D8D8D>E-Mail-Aufträge\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsHydra .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Clients, Consents, Tokens\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsEtherpad .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Pads\\n<size:8>[<color:#8D8D8D>MongoDB (eigene DB)]</size>
SvsH5p .[#8D8D8D,thickness=2].> H5pHub : <color:#8D8D8D>Bibliotheken laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsMaildrop .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>E-Mails versenden\\n<size:8>[<color:#8D8D8D>SMTP]</size>
Tools .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Klassenlisten abrufen\\n<size:8>[<color:#8D8D8D>REST /api/v1/roster]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachfunktionen\\n<size:8>[<color:#8D8D8D>REST /api/v3, v1-Whitelist]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerBoardCollab : <color:#8D8D8D>Boards in Echtzeit bearbeiten\\n<size:8>[<color:#8D8D8D>WebSocket (socket.io)]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rendert Seiten mit Daten aus der API\\n<size:8>[<color:#8D8D8D>REST über API_HOST, /api/v1 und /api/v3]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachdaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Verwaltungsaktionen\\n<size:8>[<color:#8D8D8D>REST /admin/api/v1]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Nutzer und Scopes auflösen\\n<size:8>[<color:#8D8D8D>REST /api/v1/resolve]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsServerWorker : <color:#8D8D8D>LDAP-Sync ausführen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsVersionAggregator .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Version abfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Nextcloud : <color:#8D8D8D>Gruppen und Ordner für Teams\\n<size:8>[<color:#8D8D8D>OCS, WebDAV]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Clients und Consent verwalten\\n<size:8>[<color:#8D8D8D>Hydra Admin API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien kopieren und löschen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnungen löschen\\n<size:8>[<color:#8D8D8D>REST, tldraw Admin-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsCalendar : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Alte Dateien scannen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsEtherpad : <color:#8D8D8D>Pads anlegen\\n<size:8>[<color:#8D8D8D>Etherpad API, API-Key]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Liest und schreibt Fachdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsValkey : <color:#8D8D8D>Sessions und JWT-Whitelist\\n<size:8>[<color:#8D8D8D>Redis-Protokoll]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Alte Dateiablage\\n<size:8>[<color:#8D8D8D>S3, Anbieter je Schule aus der DB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Login gegen das Schul-LDAP\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Bbb : <color:#8D8D8D>Konferenzen anlegen und beitreten\\n<size:8>[<color:#8D8D8D>BBB-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Cachet : <color:#8D8D8D>Störungsmeldungen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Web : <color:#8D8D8D>Link-Vorschau laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Nutzer und Klassen schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Nutzer und Klassen lesen\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerAdminApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Verwaltungsdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Boards und Socket-Adapter\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Dateien von Board-Elementen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerLegacyFileArchive .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Archivierte Dateien\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerFwuLearningContents .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>FWU-Bucket lesen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datenmigrationen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Verwaiste Dateien löschen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerLdapSyncConsole .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Sync pro Schule einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerDeletionConsole .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Löschungen anstoßen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsPrometheus .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Metriken abfragen\\n<size:8>[<color:#8D8D8D>HTTP /metrics]</size>
@enduml
`;case`nbc`:return`@startuml
title "Mandant nbc: Niedersachsen"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Nextcloud>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam person<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Support>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsServerLdapSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsPrometheus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsNuxt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsSuperhero>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsAntivirus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCalendar>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsVersionAggregator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsLegacy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldrawClient>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCollabora>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldraw>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsTldrawValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsH5p>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsMaildrop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsClammit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<H5pHub>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerBoardCollab>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerWorker>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerSchulconnexConsumers>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerMigrationSystems>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLegacyFileArchive>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerServerConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerIdpConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerDeletionConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsEtherpad>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bbb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Cachet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Web>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ldap>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsS3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Schulconnex>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Vidis>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bilo>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerAdminApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsPostgres>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsMongo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Nextcloud\\n<size:10>[OCS, WebDAV, OIDC]</size>\\n\\nDateiablage der Mandanten, nicht über dof_app_deploy ausgerollt" <<Nextcloud>> as Nextcloud
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
person "==Nutzerinnen und Nutzer\\n\\nSchülerinnen und Schüler, Lehrkräfte, Schuladmins" <<User>> as User
person "==Support\\n\\nBetrieb und Support der Mandanten" <<Support>> as Support
rectangle "SVS" <<Svs>> as Svs {
  skinparam RectangleBorderColor<<Svs>> #3b82f6
  skinparam RectangleFontColor<<Svs>> #3b82f6
  skinparam RectangleBorderStyle<<Svs>> dashed

  rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
    skinparam RectangleBorderColor<<SvsServer>> #3b82f6
    skinparam RectangleFontColor<<SvsServer>> #3b82f6
    skinparam RectangleBorderStyle<<SvsServer>> dashed

    rectangle "==ldap-sync-console\\n<size:10>[CronJob]</size>\\n\\nStellt LDAP-Syncs pro Schule in die Queue" <<SvsServerLdapSyncConsole>> as SvsServerLdapSyncConsole
    rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
    rectangle "==board-collaboration\\n<size:10>[socket.io, Mongo-Adapter]</size>\\n\\nEchtzeit-Bearbeitung von Boards (/board-collaboration)" <<SvsServerBoardCollab>> as SvsServerBoardCollab
    rectangle "==api-worker\\n<size:10>[Feathers, KEDA]</size>\\n\\nVerarbeitet die LDAP-Sync-Queue. Skaliert über KEDA." <<SvsServerWorker>> as SvsServerWorker
    rectangle "==Schulconnex-Consumer\\n<size:10>[NestJS, RabbitMQ]</size>\\n\\nDrei Consumer: Gruppen-Provisionierung, Gruppen-Entfernung, Lizenz-Provisionierung" <<SvsServerSchulconnexConsumers>> as SvsServerSchulconnexConsumers
    rectangle "==api-migration-systems\\n<size:10>[NestJS]</size>\\n\\nNutzerimport bei der Login-Migration (/api/v3/user/import)" <<SvsServerMigrationSystems>> as SvsServerMigrationSystems
    rectangle "==legacy-file-archive\\n<size:10>[NestJS]</size>\\n\\nArchiv der Dateien aus der alten Dateiablage" <<SvsServerLegacyFileArchive>> as SvsServerLegacyFileArchive
    rectangle "==server-console\\n<size:10>[Job, CronJob]</size>\\n\\nMigrationen beim Deploy, Löschen verwaister S3-Dateien" <<SvsServerServerConsole>> as SvsServerServerConsole
    rectangle "==idp-console\\n<size:10>[CronJob]</size>\\n\\nAbgleich mit moin.schule" <<SvsServerIdpConsole>> as SvsServerIdpConsole
    rectangle "==sync-console\\n<size:10>[CronJob]</size>\\n\\nMetadaten-Sync für Medien aus VIDIS und BILO" <<SvsServerSyncConsole>> as SvsServerSyncConsole
    rectangle "==deletion-console\\n<size:10>[CronJob]</size>\\n\\nStößt Löschanfragen an und stellt nicht synchronisierte Nutzer zur Löschung ein" <<SvsServerDeletionConsole>> as SvsServerDeletionConsole
    rectangle "==admin-api-server\\n<size:10>[NestJS]</size>\\n\\nAdmin-API für Betrieb und Superhero-Dashboard (/admin/api/v1)" <<SvsServerAdminApi>> as SvsServerAdminApi
  }
  rectangle "==Prometheus\\n<size:10>[Prometheus Operator]</size>\\n\\nMetriken aller Dienste, dazu mongodb-query-exporter" <<SvsPrometheus>> as SvsPrometheus
  rectangle "==nuxt-client\\n<size:10>[Vue 3, Vite, nginx (nuxtclient-svc)]</size>\\n\\nNeues Frontend. Bekommt vom Ingress alle umgezogenen Pfade. nginx leitet einzelne Admin-Seiten an den Legacy-Client weiter." <<SvsNuxt>> as SvsNuxt
  rectangle "==superhero-dashboard\\n<size:10>[Express]</size>\\n\\nAdmin- und Support-Oberfläche (dashboard.DOMAIN)" <<SvsSuperhero>> as SvsSuperhero
  rectangle "==antivirus_check_service\\n<size:10>[Python, ClamAV]</size>\\n\\nVirenscan für hochgeladene Dateien" <<SvsAntivirus>> as SvsAntivirus
  rectangle "==schulcloud-calendar\\n<size:10>[Node.js, PostgreSQL]</size>\\n\\nKalender-Service. Ohne Ingress, nur clusterintern erreichbar." <<SvsCalendar>> as SvsCalendar
  rectangle "==version-aggregator\\n<size:10>[Node.js]</size>\\n\\nSammelt die Versionen aller Dienste (/version)" <<SvsVersionAggregator>> as SvsVersionAggregator
  rectangle "==schulcloud-client\\n<size:10>[Express, Handlebars (client-svc)]</size>\\n\\nLegacy-Frontend, rendert serverseitig. Bekommt /login und als Fallback alle nicht umgezogenen Pfade." <<SvsLegacy>> as SvsLegacy
  rectangle "==tldraw-client\\n<size:10>[React, tldraw (tldraw-client-svc)]</size>\\n\\nWhiteboard-Oberfläche, eingebettet in Boards" <<SvsTldrawClient>> as SvsTldrawClient
  rectangle "==Collabora\\n<size:10>[Collabora Online, WOPI]</size>\\n\\nOffice-Editor im Browser (cool.DOMAIN)" <<SvsCollabora>> as SvsCollabora
  rectangle "==tldraw-server\\n<size:10>[Node.js, y-redis]</size>\\n\\nWhiteboard-Backend" <<SvsTldraw>> as SvsTldraw
  rectangle "==file-storage\\n<size:10>[NestJS]</size>\\n\\nDateidienst für Boards, Aufgaben, Kurse und H5P" <<SvsFiles>> as SvsFiles
  database "==tldraw-Valkey\\n<size:10>[Valkey]</size>\\n\\nArbeitsstand der Whiteboards" <<SvsTldrawValkey>> as SvsTldrawValkey
  queue "==RabbitMQ\\n<size:10>[RabbitMQ (Operator)]</size>\\n\\nNachrichten zwischen den Diensten. Kinder sind die Exchanges und Queues." <<SvsRabbit>> as SvsRabbit
  rectangle "==h5p-server\\n<size:10>[NestJS, @lumieducation/h5p]</size>\\n\\nH5P-Editor und -Player" <<SvsH5p>> as SvsH5p
  rectangle "==maildrop\\n<size:10>[Spring Boot]</size>\\n\\nVersendet E-Mails aus der Queue" <<SvsMaildrop>> as SvsMaildrop
  rectangle "==clammit\\n<size:10>[clammit, ClamAV]</size>\\n\\nHTTP-Proxy, der Uploads vor dem H5P-Editor mit ClamAV prüft" <<SvsClammit>> as SvsClammit
  rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra
  rectangle "==Etherpad\\n<size:10>[Etherpad]</size>\\n\\nKollaborative Textdokumente (/etherpad)" <<SvsEtherpad>> as SvsEtherpad
  database "==Session-Valkey\\n<size:10>[Valkey (Sentinel)]</size>\\n\\nSessions und JWT-Whitelist" <<SvsValkey>> as SvsValkey
  database "==S3\\n<size:10>[IONOS S3]</size>\\n\\nBuckets für Dateien, H5P-Inhalte und -Bibliotheken, FWU-Inhalte und Whiteboards. MinIO in Dev und Ref." <<SvsS3>> as SvsS3
  database "==PostgreSQL\\n<size:10>[PostgreSQL (IONOS Managed)]</size>\\n\\nDatenbank für Hydra und Kalender" <<SvsPostgres>> as SvsPostgres
  database "==MongoDB\\n<size:10>[MongoDB (extern betrieben)]</size>\\n\\nGemeinsame Datenbank scapp für Server, file-storage und h5p-server. Dazu eigene DB für Etherpad." <<SvsMongo>> as SvsMongo
}
rectangle "==H5P Hub\\n<size:10>[HTTPS]</size>\\n\\nQuelle der H5P-Bibliotheken" <<H5pHub>> as H5pHub
rectangle "==SMTP-Relay\\n<size:10>[SMTP]</size>\\n\\nAusgehende E-Mails" <<Smtp>> as Smtp
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==BigBlueButton\\n<size:10>[BBB-API]</size>\\n\\nVideokonferenzen" <<Bbb>> as Bbb
rectangle "==Cachet\\n<size:10>[REST]</size>\\n\\nStatusseite, liefert Störungsmeldungen" <<Cachet>> as Cachet
rectangle "==Beliebige Webseiten\\n<size:10>[HTTPS]</size>\\n\\nLink-Vorschau im Board (meta-tag-extractor)" <<Web>> as Web
rectangle "==Schul-LDAP\\n<size:10>[LDAP]</size>\\n\\nVerzeichnisse der Schulen (z. B. iServ)" <<Ldap>> as Ldap
rectangle "==Schulconnex-API\\n<size:10>[REST, OAuth2 Client Credentials]</size>\\n\\nPersonen, Gruppen und Lizenzen aus moin.schule" <<Schulconnex>> as Schulconnex
rectangle "==VIDIS\\n<size:10>[REST]</size>\\n\\nMedienlizenzen und Metadaten" <<Vidis>> as Vidis
rectangle "==BILO\\n<size:10>[REST]</size>\\n\\nMetadaten von Bildungsmedien" <<Bilo>> as Bilo

Nextcloud .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OIDC]</size>
Tools .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OAuth2, OIDC]</size>
User .[#8D8D8D,thickness=2].> SvsNuxt : <color:#8D8D8D>Nutzt umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Nutzt Login und nicht umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Zeichnet auf Whiteboards\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Bearbeitet Office-Dokumente\\n<size:8>[<color:#8D8D8D>HTTPS, iframe]</size>
Support .[#8D8D8D,thickness=2].> SvsSuperhero : <color:#8D8D8D>Verwaltet Schulen und Nutzer\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Leitet Admin-Detailseiten weiter\\n<size:8>[<color:#8D8D8D>nginx proxy_pass]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Whiteboard öffnen\\n<size:8>[<color:#8D8D8D>Link]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Editor einbetten\\n<size:8>[<color:#8D8D8D>iframe]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Consent\\n<size:8>[<color:#8D8D8D>Hydra Login- und Consent-Flow]</size>
SvsTldrawClient .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnung synchronisieren\\n<size:8>[<color:#8D8D8D>WebSocket]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien verwalten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten
SvsFiles .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Datei laden, Ergebnis melden\\n<size:8>[<color:#8D8D8D>HTTP-Callback]</size>
SvsCollabora .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dokument laden und speichern\\n<size:8>[<color:#8D8D8D>WOPI]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsClammit : <color:#8D8D8D>Uploads prüfen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Inhalts-Metadaten
SvsH5p .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsClammit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Geprüfte Anfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Kopieren und Löschen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsTldrawValkey : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>Redis-Streams]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Zeichnungen speichern\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Scan einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Scanauftrag\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsMaildrop : <color:#8D8D8D>E-Mail-Aufträge\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsHydra .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Clients, Consents, Tokens\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsEtherpad .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Pads\\n<size:8>[<color:#8D8D8D>MongoDB (eigene DB)]</size>
SvsH5p .[#8D8D8D,thickness=2].> H5pHub : <color:#8D8D8D>Bibliotheken laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsMaildrop .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>E-Mails versenden\\n<size:8>[<color:#8D8D8D>SMTP]</size>
Tools .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Klassenlisten abrufen\\n<size:8>[<color:#8D8D8D>REST /api/v1/roster]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachfunktionen\\n<size:8>[<color:#8D8D8D>REST /api/v3, v1-Whitelist]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerBoardCollab : <color:#8D8D8D>Boards in Echtzeit bearbeiten\\n<size:8>[<color:#8D8D8D>WebSocket (socket.io)]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rendert Seiten mit Daten aus der API\\n<size:8>[<color:#8D8D8D>REST über API_HOST, /api/v1 und /api/v3]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachdaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Verwaltungsaktionen\\n<size:8>[<color:#8D8D8D>REST /admin/api/v1]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Nutzer und Scopes auflösen\\n<size:8>[<color:#8D8D8D>REST /api/v1/resolve]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsServerWorker : <color:#8D8D8D>LDAP-Sync ausführen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsServerSchulconnexConsumers : <color:#8D8D8D>Provisionierung\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsVersionAggregator .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Version abfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Nextcloud : <color:#8D8D8D>Gruppen und Ordner für Teams\\n<size:8>[<color:#8D8D8D>OCS, WebDAV]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Clients und Consent verwalten\\n<size:8>[<color:#8D8D8D>Hydra Admin API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien kopieren und löschen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnungen löschen\\n<size:8>[<color:#8D8D8D>REST, tldraw Admin-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsCalendar : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Alte Dateien scannen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsEtherpad : <color:#8D8D8D>Pads anlegen\\n<size:8>[<color:#8D8D8D>Etherpad API, API-Key]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Liest und schreibt Fachdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsValkey : <color:#8D8D8D>Sessions und JWT-Whitelist\\n<size:8>[<color:#8D8D8D>Redis-Protokoll]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Alte Dateiablage\\n<size:8>[<color:#8D8D8D>S3, Anbieter je Schule aus der DB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Personen und Gruppen beim Login lesen\\n<size:8>[<color:#8D8D8D>REST, OAuth2 Client Credentials]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Login gegen das Schul-LDAP\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Bbb : <color:#8D8D8D>Konferenzen anlegen und beitreten\\n<size:8>[<color:#8D8D8D>BBB-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Cachet : <color:#8D8D8D>Störungsmeldungen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Web : <color:#8D8D8D>Link-Vorschau laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Nutzer und Klassen schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerWorker .[#8D8D8D,thickness=2].> Ldap : <color:#8D8D8D>Nutzer und Klassen lesen\\n<size:8>[<color:#8D8D8D>LDAP (ldapjs)]</size>
SvsServerMigrationSystems .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Importierte Nutzer zuordnen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerAdminApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Verwaltungsdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Boards und Socket-Adapter\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Dateien von Board-Elementen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerLegacyFileArchive .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Archivierte Dateien\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerSchulconnexConsumers .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Gruppen, Kurse und Lizenzen schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerSchulconnexConsumers .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Lizenzen und Gruppen nachladen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datenmigrationen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Verwaiste Dateien löschen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerIdpConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Abgleich speichern\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerIdpConsole .[#8D8D8D,thickness=2].> Schulconnex : <color:#8D8D8D>Nutzer mit moin.schule abgleichen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerLdapSyncConsole .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Sync pro Schule einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerSyncConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Metadaten speichern\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerSyncConsole .[#8D8D8D,thickness=2].> Vidis : <color:#8D8D8D>Medien-Metadaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerSyncConsole .[#8D8D8D,thickness=2].> Bilo : <color:#8D8D8D>Medien-Metadaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerDeletionConsole .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Löschungen anstoßen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsPrometheus .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Metriken abfragen\\n<size:8>[<color:#8D8D8D>HTTP /metrics]</size>
@enduml
`;case`thr`:return`@startuml
title "Mandant thr: Thüringen"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Nextcloud>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam person<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Support>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsPrometheus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsNuxt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsSuperhero>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsAntivirus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCalendar>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsVersionAggregator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsLegacy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldrawClient>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCollabora>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldraw>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsTldrawValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsH5p>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsMaildrop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsClammit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<H5pHub>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerBoardCollab>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLegacyFileArchive>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerServerConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerTspSyncConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerDeletionConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsEtherpad>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bbb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Cachet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Web>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsS3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Tsp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerAdminApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsPostgres>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsMongo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Nextcloud\\n<size:10>[OCS, WebDAV, OIDC]</size>\\n\\nDateiablage der Mandanten, nicht über dof_app_deploy ausgerollt" <<Nextcloud>> as Nextcloud
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
person "==Nutzerinnen und Nutzer\\n\\nSchülerinnen und Schüler, Lehrkräfte, Schuladmins" <<User>> as User
person "==Support\\n\\nBetrieb und Support der Mandanten" <<Support>> as Support
rectangle "SVS" <<Svs>> as Svs {
  skinparam RectangleBorderColor<<Svs>> #3b82f6
  skinparam RectangleFontColor<<Svs>> #3b82f6
  skinparam RectangleBorderStyle<<Svs>> dashed

  rectangle "==Prometheus\\n<size:10>[Prometheus Operator]</size>\\n\\nMetriken aller Dienste, dazu mongodb-query-exporter" <<SvsPrometheus>> as SvsPrometheus
  rectangle "==nuxt-client\\n<size:10>[Vue 3, Vite, nginx (nuxtclient-svc)]</size>\\n\\nNeues Frontend. Bekommt vom Ingress alle umgezogenen Pfade. nginx leitet einzelne Admin-Seiten an den Legacy-Client weiter." <<SvsNuxt>> as SvsNuxt
  rectangle "==superhero-dashboard\\n<size:10>[Express]</size>\\n\\nAdmin- und Support-Oberfläche (dashboard.DOMAIN)" <<SvsSuperhero>> as SvsSuperhero
  rectangle "==antivirus_check_service\\n<size:10>[Python, ClamAV]</size>\\n\\nVirenscan für hochgeladene Dateien" <<SvsAntivirus>> as SvsAntivirus
  rectangle "==schulcloud-calendar\\n<size:10>[Node.js, PostgreSQL]</size>\\n\\nKalender-Service. Ohne Ingress, nur clusterintern erreichbar." <<SvsCalendar>> as SvsCalendar
  rectangle "==version-aggregator\\n<size:10>[Node.js]</size>\\n\\nSammelt die Versionen aller Dienste (/version)" <<SvsVersionAggregator>> as SvsVersionAggregator
  rectangle "==schulcloud-client\\n<size:10>[Express, Handlebars (client-svc)]</size>\\n\\nLegacy-Frontend, rendert serverseitig. Bekommt /login und als Fallback alle nicht umgezogenen Pfade." <<SvsLegacy>> as SvsLegacy
  rectangle "==tldraw-client\\n<size:10>[React, tldraw (tldraw-client-svc)]</size>\\n\\nWhiteboard-Oberfläche, eingebettet in Boards" <<SvsTldrawClient>> as SvsTldrawClient
  rectangle "==Collabora\\n<size:10>[Collabora Online, WOPI]</size>\\n\\nOffice-Editor im Browser (cool.DOMAIN)" <<SvsCollabora>> as SvsCollabora
  rectangle "==tldraw-server\\n<size:10>[Node.js, y-redis]</size>\\n\\nWhiteboard-Backend" <<SvsTldraw>> as SvsTldraw
  rectangle "==file-storage\\n<size:10>[NestJS]</size>\\n\\nDateidienst für Boards, Aufgaben, Kurse und H5P" <<SvsFiles>> as SvsFiles
  database "==tldraw-Valkey\\n<size:10>[Valkey]</size>\\n\\nArbeitsstand der Whiteboards" <<SvsTldrawValkey>> as SvsTldrawValkey
  queue "==RabbitMQ\\n<size:10>[RabbitMQ (Operator)]</size>\\n\\nNachrichten zwischen den Diensten. Kinder sind die Exchanges und Queues." <<SvsRabbit>> as SvsRabbit
  rectangle "==h5p-server\\n<size:10>[NestJS, @lumieducation/h5p]</size>\\n\\nH5P-Editor und -Player" <<SvsH5p>> as SvsH5p
  rectangle "==maildrop\\n<size:10>[Spring Boot]</size>\\n\\nVersendet E-Mails aus der Queue" <<SvsMaildrop>> as SvsMaildrop
  rectangle "==clammit\\n<size:10>[clammit, ClamAV]</size>\\n\\nHTTP-Proxy, der Uploads vor dem H5P-Editor mit ClamAV prüft" <<SvsClammit>> as SvsClammit
  rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
    skinparam RectangleBorderColor<<SvsServer>> #3b82f6
    skinparam RectangleFontColor<<SvsServer>> #3b82f6
    skinparam RectangleBorderStyle<<SvsServer>> dashed

    rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
    rectangle "==board-collaboration\\n<size:10>[socket.io, Mongo-Adapter]</size>\\n\\nEchtzeit-Bearbeitung von Boards (/board-collaboration)" <<SvsServerBoardCollab>> as SvsServerBoardCollab
    rectangle "==legacy-file-archive\\n<size:10>[NestJS]</size>\\n\\nArchiv der Dateien aus der alten Dateiablage" <<SvsServerLegacyFileArchive>> as SvsServerLegacyFileArchive
    rectangle "==server-console\\n<size:10>[Job, CronJob]</size>\\n\\nMigrationen beim Deploy, Löschen verwaister S3-Dateien" <<SvsServerServerConsole>> as SvsServerServerConsole
    rectangle "==tsp-sync-console\\n<size:10>[CronJob]</size>\\n\\nAbgleich von Schulen, Klassen und Personen mit dem TSP" <<SvsServerTspSyncConsole>> as SvsServerTspSyncConsole
    rectangle "==deletion-console\\n<size:10>[CronJob]</size>\\n\\nStößt Löschanfragen an und stellt nicht synchronisierte Nutzer zur Löschung ein" <<SvsServerDeletionConsole>> as SvsServerDeletionConsole
    rectangle "==admin-api-server\\n<size:10>[NestJS]</size>\\n\\nAdmin-API für Betrieb und Superhero-Dashboard (/admin/api/v1)" <<SvsServerAdminApi>> as SvsServerAdminApi
  }
  rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra
  rectangle "==Etherpad\\n<size:10>[Etherpad]</size>\\n\\nKollaborative Textdokumente (/etherpad)" <<SvsEtherpad>> as SvsEtherpad
  database "==Session-Valkey\\n<size:10>[Valkey (Sentinel)]</size>\\n\\nSessions und JWT-Whitelist" <<SvsValkey>> as SvsValkey
  database "==S3\\n<size:10>[IONOS S3]</size>\\n\\nBuckets für Dateien, H5P-Inhalte und -Bibliotheken, FWU-Inhalte und Whiteboards. MinIO in Dev und Ref." <<SvsS3>> as SvsS3
  database "==PostgreSQL\\n<size:10>[PostgreSQL (IONOS Managed)]</size>\\n\\nDatenbank für Hydra und Kalender" <<SvsPostgres>> as SvsPostgres
  database "==MongoDB\\n<size:10>[MongoDB (extern betrieben)]</size>\\n\\nGemeinsame Datenbank scapp für Server, file-storage und h5p-server. Dazu eigene DB für Etherpad." <<SvsMongo>> as SvsMongo
}
rectangle "==H5P Hub\\n<size:10>[HTTPS]</size>\\n\\nQuelle der H5P-Bibliotheken" <<H5pHub>> as H5pHub
rectangle "==SMTP-Relay\\n<size:10>[SMTP]</size>\\n\\nAusgehende E-Mails" <<Smtp>> as Smtp
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==BigBlueButton\\n<size:10>[BBB-API]</size>\\n\\nVideokonferenzen" <<Bbb>> as Bbb
rectangle "==Cachet\\n<size:10>[REST]</size>\\n\\nStatusseite, liefert Störungsmeldungen" <<Cachet>> as Cachet
rectangle "==Beliebige Webseiten\\n<size:10>[HTTPS]</size>\\n\\nLink-Vorschau im Board (meta-tag-extractor)" <<Web>> as Web
rectangle "==TSP Thüringen\\n<size:10>[REST, JWT]</size>\\n\\nThüringer Schulportal: Login und Stammdaten" <<Tsp>> as Tsp

Nextcloud .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OIDC]</size>
Tools .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OAuth2, OIDC]</size>
User .[#8D8D8D,thickness=2].> SvsNuxt : <color:#8D8D8D>Nutzt umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Nutzt Login und nicht umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Zeichnet auf Whiteboards\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Bearbeitet Office-Dokumente\\n<size:8>[<color:#8D8D8D>HTTPS, iframe]</size>
Support .[#8D8D8D,thickness=2].> SvsSuperhero : <color:#8D8D8D>Verwaltet Schulen und Nutzer\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Leitet Admin-Detailseiten weiter\\n<size:8>[<color:#8D8D8D>nginx proxy_pass]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Whiteboard öffnen\\n<size:8>[<color:#8D8D8D>Link]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsCollabora : <color:#8D8D8D>Editor einbetten\\n<size:8>[<color:#8D8D8D>iframe]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Consent\\n<size:8>[<color:#8D8D8D>Hydra Login- und Consent-Flow]</size>
SvsTldrawClient .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnung synchronisieren\\n<size:8>[<color:#8D8D8D>WebSocket]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien verwalten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten
SvsFiles .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Datei laden, Ergebnis melden\\n<size:8>[<color:#8D8D8D>HTTP-Callback]</size>
SvsCollabora .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dokument laden und speichern\\n<size:8>[<color:#8D8D8D>WOPI]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsClammit : <color:#8D8D8D>Uploads prüfen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Inhalts-Metadaten
SvsH5p .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsClammit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Geprüfte Anfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Kopieren und Löschen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsTldrawValkey : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>Redis-Streams]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Zeichnungen speichern\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Scan einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Scanauftrag\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsMaildrop : <color:#8D8D8D>E-Mail-Aufträge\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsHydra .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Clients, Consents, Tokens\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsEtherpad .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Pads\\n<size:8>[<color:#8D8D8D>MongoDB (eigene DB)]</size>
SvsH5p .[#8D8D8D,thickness=2].> H5pHub : <color:#8D8D8D>Bibliotheken laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsMaildrop .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>E-Mails versenden\\n<size:8>[<color:#8D8D8D>SMTP]</size>
Tools .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Klassenlisten abrufen\\n<size:8>[<color:#8D8D8D>REST /api/v1/roster]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachfunktionen\\n<size:8>[<color:#8D8D8D>REST /api/v3, v1-Whitelist]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerBoardCollab : <color:#8D8D8D>Boards in Echtzeit bearbeiten\\n<size:8>[<color:#8D8D8D>WebSocket (socket.io)]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rendert Seiten mit Daten aus der API\\n<size:8>[<color:#8D8D8D>REST über API_HOST, /api/v1 und /api/v3]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachdaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Verwaltungsaktionen\\n<size:8>[<color:#8D8D8D>REST /admin/api/v1]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Nutzer und Scopes auflösen\\n<size:8>[<color:#8D8D8D>REST /api/v1/resolve]</size>
SvsVersionAggregator .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Version abfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Nextcloud : <color:#8D8D8D>Gruppen und Ordner für Teams\\n<size:8>[<color:#8D8D8D>OCS, WebDAV]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Clients und Consent verwalten\\n<size:8>[<color:#8D8D8D>Hydra Admin API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien kopieren und löschen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnungen löschen\\n<size:8>[<color:#8D8D8D>REST, tldraw Admin-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsCalendar : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Alte Dateien scannen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsEtherpad : <color:#8D8D8D>Pads anlegen\\n<size:8>[<color:#8D8D8D>Etherpad API, API-Key]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Liest und schreibt Fachdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsValkey : <color:#8D8D8D>Sessions und JWT-Whitelist\\n<size:8>[<color:#8D8D8D>Redis-Protokoll]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Alte Dateiablage\\n<size:8>[<color:#8D8D8D>S3, Anbieter je Schule aus der DB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>Login über das TSP\\n<size:8>[<color:#8D8D8D>JWT]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Bbb : <color:#8D8D8D>Konferenzen anlegen und beitreten\\n<size:8>[<color:#8D8D8D>BBB-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Cachet : <color:#8D8D8D>Störungsmeldungen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Web : <color:#8D8D8D>Link-Vorschau laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsServerAdminApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Verwaltungsdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Boards und Socket-Adapter\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Dateien von Board-Elementen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerLegacyFileArchive .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Archivierte Dateien\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datenmigrationen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Verwaiste Dateien löschen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerTspSyncConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Stammdaten schreiben\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerTspSyncConsole .[#8D8D8D,thickness=2].> Tsp : <color:#8D8D8D>Schulen, Klassen und Personen lesen\\n<size:8>[<color:#8D8D8D>REST, JWT]</size>
SvsServerDeletionConsole .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Löschungen anstoßen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsPrometheus .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Metriken abfragen\\n<size:8>[<color:#8D8D8D>HTTP /metrics]</size>
@enduml
`;case`dbc`:return`@startuml
title "Mandant dbc: dBildungscloud"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Tools>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam person<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Support>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsPrometheus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsNuxt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsSuperhero>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsAntivirus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsCalendar>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsVersionAggregator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsLegacy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldrawClient>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsTldraw>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<SvsRabbit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsTldrawValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsH5p>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsMaildrop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsClammit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<H5pHub>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerBoardCollab>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerCommonCartridge>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerLegacyFileArchive>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerServerConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsServerDeletionConsole>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SvsHydra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsEtherpad>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsValkey>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Idp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Bbb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Cachet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Web>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsS3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SvsServerAdminApi>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SvsPostgres>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SvsMongo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Externe Tools\\n<size:10>[LTI, OAuth2]</size>\\n\\nLern-Tools über CTL, LTI und OAuth2, z. B. Bettermarks" <<Tools>> as Tools
person "==Nutzerinnen und Nutzer\\n\\nSchülerinnen und Schüler, Lehrkräfte, Schuladmins" <<User>> as User
person "==Support\\n\\nBetrieb und Support der Mandanten" <<Support>> as Support
rectangle "SVS" <<Svs>> as Svs {
  skinparam RectangleBorderColor<<Svs>> #3b82f6
  skinparam RectangleFontColor<<Svs>> #3b82f6
  skinparam RectangleBorderStyle<<Svs>> dashed

  rectangle "==Prometheus\\n<size:10>[Prometheus Operator]</size>\\n\\nMetriken aller Dienste, dazu mongodb-query-exporter" <<SvsPrometheus>> as SvsPrometheus
  rectangle "==nuxt-client\\n<size:10>[Vue 3, Vite, nginx (nuxtclient-svc)]</size>\\n\\nNeues Frontend. Bekommt vom Ingress alle umgezogenen Pfade. nginx leitet einzelne Admin-Seiten an den Legacy-Client weiter." <<SvsNuxt>> as SvsNuxt
  rectangle "==superhero-dashboard\\n<size:10>[Express]</size>\\n\\nAdmin- und Support-Oberfläche (dashboard.DOMAIN)" <<SvsSuperhero>> as SvsSuperhero
  rectangle "==antivirus_check_service\\n<size:10>[Python, ClamAV]</size>\\n\\nVirenscan für hochgeladene Dateien" <<SvsAntivirus>> as SvsAntivirus
  rectangle "==schulcloud-calendar\\n<size:10>[Node.js, PostgreSQL]</size>\\n\\nKalender-Service. Ohne Ingress, nur clusterintern erreichbar." <<SvsCalendar>> as SvsCalendar
  rectangle "==version-aggregator\\n<size:10>[Node.js]</size>\\n\\nSammelt die Versionen aller Dienste (/version)" <<SvsVersionAggregator>> as SvsVersionAggregator
  rectangle "==schulcloud-client\\n<size:10>[Express, Handlebars (client-svc)]</size>\\n\\nLegacy-Frontend, rendert serverseitig. Bekommt /login und als Fallback alle nicht umgezogenen Pfade." <<SvsLegacy>> as SvsLegacy
  rectangle "==tldraw-client\\n<size:10>[React, tldraw (tldraw-client-svc)]</size>\\n\\nWhiteboard-Oberfläche, eingebettet in Boards" <<SvsTldrawClient>> as SvsTldrawClient
  rectangle "==file-storage\\n<size:10>[NestJS]</size>\\n\\nDateidienst für Boards, Aufgaben, Kurse und H5P" <<SvsFiles>> as SvsFiles
  rectangle "==tldraw-server\\n<size:10>[Node.js, y-redis]</size>\\n\\nWhiteboard-Backend" <<SvsTldraw>> as SvsTldraw
  queue "==RabbitMQ\\n<size:10>[RabbitMQ (Operator)]</size>\\n\\nNachrichten zwischen den Diensten. Kinder sind die Exchanges und Queues." <<SvsRabbit>> as SvsRabbit
  database "==tldraw-Valkey\\n<size:10>[Valkey]</size>\\n\\nArbeitsstand der Whiteboards" <<SvsTldrawValkey>> as SvsTldrawValkey
  rectangle "==h5p-server\\n<size:10>[NestJS, @lumieducation/h5p]</size>\\n\\nH5P-Editor und -Player" <<SvsH5p>> as SvsH5p
  rectangle "==maildrop\\n<size:10>[Spring Boot]</size>\\n\\nVersendet E-Mails aus der Queue" <<SvsMaildrop>> as SvsMaildrop
  rectangle "==clammit\\n<size:10>[clammit, ClamAV]</size>\\n\\nHTTP-Proxy, der Uploads vor dem H5P-Editor mit ClamAV prüft" <<SvsClammit>> as SvsClammit
  rectangle "schulcloud-server" <<SvsServer>> as SvsServer {
    skinparam RectangleBorderColor<<SvsServer>> #3b82f6
    skinparam RectangleFontColor<<SvsServer>> #3b82f6
    skinparam RectangleBorderStyle<<SvsServer>> dashed

    rectangle "==api\\n<size:10>[NestJS, Feathers]</size>\\n\\nHaupt-API: /api/v3 (NestJS) und /api/v1 (Feathers). Einstieg apps/server.app.ts." <<SvsServerApi>> as SvsServerApi
    rectangle "==board-collaboration\\n<size:10>[socket.io, Mongo-Adapter]</size>\\n\\nEchtzeit-Bearbeitung von Boards (/board-collaboration)" <<SvsServerBoardCollab>> as SvsServerBoardCollab
    rectangle "==common-cartridge\\n<size:10>[NestJS]</size>\\n\\nImport und Export von Kursen im Common-Cartridge-Format" <<SvsServerCommonCartridge>> as SvsServerCommonCartridge
    rectangle "==legacy-file-archive\\n<size:10>[NestJS]</size>\\n\\nArchiv der Dateien aus der alten Dateiablage" <<SvsServerLegacyFileArchive>> as SvsServerLegacyFileArchive
    rectangle "==server-console\\n<size:10>[Job, CronJob]</size>\\n\\nMigrationen beim Deploy, Löschen verwaister S3-Dateien" <<SvsServerServerConsole>> as SvsServerServerConsole
    rectangle "==deletion-console\\n<size:10>[CronJob]</size>\\n\\nStößt Löschanfragen an und stellt nicht synchronisierte Nutzer zur Löschung ein" <<SvsServerDeletionConsole>> as SvsServerDeletionConsole
    rectangle "==admin-api-server\\n<size:10>[NestJS]</size>\\n\\nAdmin-API für Betrieb und Superhero-Dashboard (/admin/api/v1)" <<SvsServerAdminApi>> as SvsServerAdminApi
  }
  rectangle "==Hydra\\n<size:10>[ORY Hydra]</size>\\n\\nOAuth2- und OIDC-Provider für externe Tools und Nextcloud (oauth.DOMAIN)" <<SvsHydra>> as SvsHydra
  rectangle "==Etherpad\\n<size:10>[Etherpad]</size>\\n\\nKollaborative Textdokumente (/etherpad)" <<SvsEtherpad>> as SvsEtherpad
  database "==Session-Valkey\\n<size:10>[Valkey (Sentinel)]</size>\\n\\nSessions und JWT-Whitelist" <<SvsValkey>> as SvsValkey
  database "==S3\\n<size:10>[IONOS S3]</size>\\n\\nBuckets für Dateien, H5P-Inhalte und -Bibliotheken, FWU-Inhalte und Whiteboards. MinIO in Dev und Ref." <<SvsS3>> as SvsS3
  database "==PostgreSQL\\n<size:10>[PostgreSQL (IONOS Managed)]</size>\\n\\nDatenbank für Hydra und Kalender" <<SvsPostgres>> as SvsPostgres
  database "==MongoDB\\n<size:10>[MongoDB (extern betrieben)]</size>\\n\\nGemeinsame Datenbank scapp für Server, file-storage und h5p-server. Dazu eigene DB für Etherpad." <<SvsMongo>> as SvsMongo
}
rectangle "==H5P Hub\\n<size:10>[HTTPS]</size>\\n\\nQuelle der H5P-Bibliotheken" <<H5pHub>> as H5pHub
rectangle "==SMTP-Relay\\n<size:10>[SMTP]</size>\\n\\nAusgehende E-Mails" <<Smtp>> as Smtp
rectangle "==Externe OIDC-IdPs\\n<size:10>[OIDC]</size>\\n\\nLogin über moin.schule und weitere Identity Provider. Konfiguriert in der DB-Collection systems." <<Idp>> as Idp
rectangle "==BigBlueButton\\n<size:10>[BBB-API]</size>\\n\\nVideokonferenzen" <<Bbb>> as Bbb
rectangle "==Cachet\\n<size:10>[REST]</size>\\n\\nStatusseite, liefert Störungsmeldungen" <<Cachet>> as Cachet
rectangle "==Beliebige Webseiten\\n<size:10>[HTTPS]</size>\\n\\nLink-Vorschau im Board (meta-tag-extractor)" <<Web>> as Web

Tools .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>Login über SVS\\n<size:8>[<color:#8D8D8D>OAuth2, OIDC]</size>
User .[#8D8D8D,thickness=2].> SvsNuxt : <color:#8D8D8D>Nutzt umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Nutzt Login und nicht umgezogene Seiten\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
User .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Zeichnet auf Whiteboards\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Support .[#8D8D8D,thickness=2].> SvsSuperhero : <color:#8D8D8D>Verwaltet Schulen und Nutzer\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsLegacy : <color:#8D8D8D>Leitet Admin-Detailseiten weiter\\n<size:8>[<color:#8D8D8D>nginx proxy_pass]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsTldrawClient : <color:#8D8D8D>Whiteboard öffnen\\n<size:8>[<color:#8D8D8D>Link]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Consent\\n<size:8>[<color:#8D8D8D>Hydra Login- und Consent-Flow]</size>
SvsTldrawClient .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnung synchronisieren\\n<size:8>[<color:#8D8D8D>WebSocket]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien verwalten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datei-Metadaten
SvsFiles .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Datei laden, Ergebnis melden\\n<size:8>[<color:#8D8D8D>HTTP-Callback]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsClammit : <color:#8D8D8D>Uploads prüfen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Inhalts-Metadaten
SvsH5p .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsClammit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Geprüfte Anfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsH5p : <color:#8D8D8D>Kopieren und Löschen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsTldrawValkey : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>Redis-Streams]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Zeichnungen speichern\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsAntivirus .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Scan einstellen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Scanauftrag\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsRabbit .[#8D8D8D,thickness=2].> SvsMaildrop : <color:#8D8D8D>E-Mail-Aufträge\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsHydra .[#8D8D8D,thickness=2].> SvsPostgres : <color:#8D8D8D>Clients, Consents, Tokens\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SvsEtherpad .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Pads\\n<size:8>[<color:#8D8D8D>MongoDB (eigene DB)]</size>
SvsH5p .[#8D8D8D,thickness=2].> H5pHub : <color:#8D8D8D>Bibliotheken laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsMaildrop .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>E-Mails versenden\\n<size:8>[<color:#8D8D8D>SMTP]</size>
Tools .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Klassenlisten abrufen\\n<size:8>[<color:#8D8D8D>REST /api/v1/roster]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachfunktionen\\n<size:8>[<color:#8D8D8D>REST /api/v3, v1-Whitelist]</size>
SvsNuxt .[#8D8D8D,thickness=2].> SvsServerBoardCollab : <color:#8D8D8D>Boards in Echtzeit bearbeiten\\n<size:8>[<color:#8D8D8D>WebSocket (socket.io)]</size>
SvsLegacy .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rendert Seiten mit Daten aus der API\\n<size:8>[<color:#8D8D8D>REST über API_HOST, /api/v1 und /api/v3]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Fachdaten\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsSuperhero .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Verwaltungsaktionen\\n<size:8>[<color:#8D8D8D>REST /admin/api/v1]</size>
SvsFiles .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsH5p .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsTldraw .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Rechte prüfen\\n<size:8>[<color:#8D8D8D>REST (Authorization API)]</size>
SvsCalendar .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Nutzer und Scopes auflösen\\n<size:8>[<color:#8D8D8D>REST /api/v1/resolve]</size>
SvsVersionAggregator .[#8D8D8D,thickness=2].> SvsServerApi : <color:#8D8D8D>Version abfragen\\n<size:8>[<color:#8D8D8D>HTTP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsHydra : <color:#8D8D8D>OAuth2-Clients und Consent verwalten\\n<size:8>[<color:#8D8D8D>Hydra Admin API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Tools : <color:#8D8D8D>Tools starten\\n<size:8>[<color:#8D8D8D>LTI, Links mit Parametern]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsFiles : <color:#8D8D8D>Dateien kopieren und löschen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsTldraw : <color:#8D8D8D>Zeichnungen löschen\\n<size:8>[<color:#8D8D8D>REST, tldraw Admin-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsCalendar : <color:#8D8D8D>Termine\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsAntivirus : <color:#8D8D8D>Alte Dateien scannen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsEtherpad : <color:#8D8D8D>Pads anlegen\\n<size:8>[<color:#8D8D8D>Etherpad API, API-Key]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Liest und schreibt Fachdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsValkey : <color:#8D8D8D>Sessions und JWT-Whitelist\\n<size:8>[<color:#8D8D8D>Redis-Protokoll]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Alte Dateiablage\\n<size:8>[<color:#8D8D8D>S3, Anbieter je Schule aus der DB]</size>
SvsServerApi .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>Login über OIDC\\n<size:8>[<color:#8D8D8D>OIDC]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Bbb : <color:#8D8D8D>Konferenzen anlegen und beitreten\\n<size:8>[<color:#8D8D8D>BBB-API]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Cachet : <color:#8D8D8D>Störungsmeldungen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsServerApi .[#8D8D8D,thickness=2].> Web : <color:#8D8D8D>Link-Vorschau laden\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
SvsServerAdminApi .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Verwaltungsdaten\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Boards und Socket-Adapter\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerBoardCollab .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Dateien von Board-Elementen\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerCommonCartridge .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Kurse lesen und anlegen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerCommonCartridge .[#8D8D8D,thickness=2].> SvsRabbit : <color:#8D8D8D>Dateien im Paket\\n<size:8>[<color:#8D8D8D>AMQP]</size>
SvsServerLegacyFileArchive .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Archivierte Dateien\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsMongo : <color:#8D8D8D>Datenmigrationen\\n<size:8>[<color:#8D8D8D>MongoDB]</size>
SvsServerServerConsole .[#8D8D8D,thickness=2].> SvsS3 : <color:#8D8D8D>Verwaiste Dateien löschen\\n<size:8>[<color:#8D8D8D>S3]</size>
SvsServerDeletionConsole .[#8D8D8D,thickness=2].> SvsServerAdminApi : <color:#8D8D8D>Löschungen anstoßen\\n<size:8>[<color:#8D8D8D>REST]</size>
SvsPrometheus .[#8D8D8D,thickness=2].> SvsServer : <color:#8D8D8D>Metriken abfragen\\n<size:8>[<color:#8D8D8D>HTTP /metrics]</size>
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};