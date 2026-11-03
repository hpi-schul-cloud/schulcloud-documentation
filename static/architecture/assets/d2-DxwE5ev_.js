var e=e=>{switch(e){case`index`:return`direction: down

Nextcloud: {
  label: "Nextcloud"
}
Tools: {
  label: "Externe Tools"
}
Hidrive: {
  label: "Strato HiDrive"
}
User: {
  label: "Nutzerinnen und Nutzer"
  shape: c4-person
}
Support: {
  label: "Support"
  shape: c4-person
}
Svs: {
  label: "SVS"
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Schulconnex: {
  label: "Schulconnex-API"
}
Ldap: {
  label: "Schul-LDAP"
}
Tsp: {
  label: "TSP Thüringen"
}
Vidis: {
  label: "VIDIS"
}
Bilo: {
  label: "BILO"
}
Bbb: {
  label: "BigBlueButton"
}
H5pHub: {
  label: "H5P Hub"
}
Smtp: {
  label: "SMTP-Relay"
}
Cachet: {
  label: "Cachet"
}
Web: {
  label: "Beliebige Webseiten"
}

Svs -> Idp: "Login über OIDC"
Svs -> Schulconnex: "[...]"
Svs -> Ldap: "[...]"
Svs -> Tsp: "[...]"
Svs -> Vidis: "Medien-Metadaten"
Svs -> Bilo: "Medien-Metadaten"
Svs -> Bbb: "Konferenzen anlegen und beitreten"
Nextcloud -> Svs: "Login über SVS"
Svs -> Nextcloud: "Gruppen und Ordner für Teams"
Tools -> Svs: "[...]"
Svs -> Tools: "Tools starten"
Svs -> H5pHub: "Bibliotheken laden"
Svs -> Smtp: "E-Mails versenden"
Svs -> Cachet: "Störungsmeldungen"
Svs -> Web: "Link-Vorschau laden"
User -> Svs: "[...]"
Support -> Svs: "Verwaltet Schulen und Nutzer"
`;case`svs`:return`direction: down

Nextcloud: {
  label: "Nextcloud"
}
Tools: {
  label: "Externe Tools"
}
User: {
  label: "Nutzerinnen und Nutzer"
  shape: c4-person
}
Support: {
  label: "Support"
  shape: c4-person
}
Svs: {
  label: "SVS"

  Nuxt: {
    label: "nuxt-client"
  }
  Superhero: {
    label: "superhero-dashboard"
  }
  VersionAggregator: {
    label: "version-aggregator"
  }
  Prometheus: {
    label: "Prometheus"
  }
  Legacy: {
    label: "schulcloud-client"
  }
  TldrawClient: {
    label: "tldraw-client"
  }
  H5p: {
    label: "h5p-server"
  }
  Collabora: {
    label: "Collabora"
  }
  Server: {
    label: "schulcloud-server"
  }
  Clammit: {
    label: "clammit"
  }
  Tldraw: {
    label: "tldraw-server"
  }
  Calendar: {
    label: "schulcloud-calendar"
  }
  Antivirus: {
    label: "antivirus_check_service"
  }
  Hydra: {
    label: "Hydra"
  }
  Etherpad: {
    label: "Etherpad"
  }
  Valkey: {
    label: "Session-Valkey"
    shape: stored_data
  }
  TldrawValkey: {
    label: "tldraw-Valkey"
    shape: stored_data
  }
  Files: {
    label: "file-storage"
  }
  Postgres: {
    label: "PostgreSQL"
    shape: stored_data
  }
  Mongo: {
    label: "MongoDB"
    shape: stored_data
  }
  S3: {
    label: "S3"
    shape: stored_data
  }
  Rabbit: {
    label: "RabbitMQ"
    shape: queue
  }
  Maildrop: {
    label: "maildrop"
  }
}
H5pHub: {
  label: "H5P Hub"
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Schulconnex: {
  label: "Schulconnex-API"
}
Ldap: {
  label: "Schul-LDAP"
}
Tsp: {
  label: "TSP Thüringen"
}
Vidis: {
  label: "VIDIS"
}
Bilo: {
  label: "BILO"
}
Bbb: {
  label: "BigBlueButton"
}
Cachet: {
  label: "Cachet"
}
Web: {
  label: "Beliebige Webseiten"
}
Smtp: {
  label: "SMTP-Relay"
}

Nextcloud -> Svs.Hydra: "Login über SVS"
Tools -> Svs.Server: "Klassenlisten abrufen"
Tools -> Svs.Hydra: "Login über SVS"
User -> Svs.Nuxt: "Nutzt umgezogene Seiten"
User -> Svs.Legacy: "Nutzt Login und nicht umgezogene Seiten"
User -> Svs.TldrawClient: "Zeichnet auf Whiteboards"
User -> Svs.Collabora: "Bearbeitet Office-Dokumente"
Support -> Svs.Superhero: "Verwaltet Schulen und Nutzer"
Svs.Nuxt -> Svs.Legacy: "Leitet Admin-Detailseiten weiter"
Svs.Nuxt -> Svs.TldrawClient: "Whiteboard öffnen"
Svs.Nuxt -> Svs.Server: "[...]"
Svs.Nuxt -> Svs.Files: "[...]"
Svs.Nuxt -> Svs.H5p: "[...]"
Svs.Nuxt -> Svs.Collabora: "Editor einbetten"
Svs.Legacy -> Svs.Server: "[...]"
Svs.Legacy -> Svs.Hydra: "OAuth2-Consent"
Svs.TldrawClient -> Svs.Tldraw: "Zeichnung synchronisieren"
Svs.Superhero -> Svs.Server: "[...]"
Svs.Superhero -> Svs.Files: "Dateien verwalten"
Svs.Server -> Svs.Files: "Dateien kopieren und löschen"
Svs.Server -> Svs.Tldraw: "Zeichnungen löschen"
Svs.Server -> Svs.Calendar: "Termine"
Svs.Server -> Svs.Antivirus: "Alte Dateien scannen"
Svs.Server -> Svs.Hydra: "OAuth2-Clients und Consent verwalten"
Svs.Server -> Svs.Etherpad: "Pads anlegen"
Svs.Server -> Svs.Mongo: "[...]"
Svs.Server -> Svs.Valkey: "Sessions und JWT-Whitelist"
Svs.Server -> Svs.S3: "[...]"
Svs.Server -> Svs.Rabbit: "[...]"
Svs.Files -> Svs.Server: "Rechte prüfen"
Svs.H5p -> Svs.Server: "Rechte prüfen"
Svs.Tldraw -> Svs.Server: "Rechte prüfen"
Svs.Calendar -> Svs.Server: "Nutzer und Scopes auflösen"
Svs.VersionAggregator -> Svs.Server: "Version abfragen"
Svs.Prometheus -> Svs.Server: "Metriken abfragen"
Svs.Rabbit -> Svs.Server: "[...]"
Svs.Files -> Svs.Mongo: "Datei-Metadaten"
Svs.Files -> Svs.S3: "[...]"
Svs.Files -> Svs.Rabbit: "[...]"
Svs.Antivirus -> Svs.Files: "Datei laden, Ergebnis melden"
Svs.Collabora -> Svs.Files: "Dokument laden und speichern"
Svs.Rabbit -> Svs.Files: "[...]"
Svs.H5p -> Svs.Clammit: "Uploads prüfen"
Svs.H5p -> Svs.Mongo: "Inhalts-Metadaten"
Svs.H5p -> Svs.S3: "[...]"
Svs.Clammit -> Svs.H5p: "Geprüfte Anfragen"
Svs.Rabbit -> Svs.H5p: "Kopieren und Löschen"
Svs.Tldraw -> Svs.TldrawValkey: "[...]"
Svs.Tldraw -> Svs.S3: "Zeichnungen speichern"
Svs.Calendar -> Svs.Postgres: "Termine"
Svs.Antivirus -> Svs.Rabbit: "Scan einstellen"
Svs.Rabbit -> Svs.Antivirus: "Scanauftrag"
Svs.Rabbit -> Svs.Maildrop: "E-Mail-Aufträge"
Svs.Hydra -> Svs.Postgres: "Clients, Consents, Tokens"
Svs.Etherpad -> Svs.Mongo: "Pads"
Svs.Server -> Idp: "Login über OIDC"
Svs.Server -> Schulconnex: "[...]"
Svs.Server -> Ldap: "[...]"
Svs.Server -> Tsp: "[...]"
Svs.Server -> Vidis: "Medien-Metadaten"
Svs.Server -> Bilo: "Medien-Metadaten"
Svs.Server -> Bbb: "Konferenzen anlegen und beitreten"
Svs.Server -> Nextcloud: "Gruppen und Ordner für Teams"
Svs.Server -> Tools: "Tools starten"
Svs.Server -> Cachet: "Störungsmeldungen"
Svs.Server -> Web: "Link-Vorschau laden"
Svs.H5p -> H5pHub: "Bibliotheken laden"
Svs.Maildrop -> Smtp: "E-Mails versenden"
`;case`server`:return`direction: down

Tools: {
  label: "Externe Tools"
}
SvsNuxt: {
  label: "nuxt-client"
}
SvsLegacy: {
  label: "schulcloud-client"
}
SvsSuperhero: {
  label: "superhero-dashboard"
}
SvsFiles: {
  label: "file-storage"
}
SvsH5p: {
  label: "h5p-server"
}
SvsTldraw: {
  label: "tldraw-server"
}
SvsCalendar: {
  label: "schulcloud-calendar"
}
SvsVersionAggregator: {
  label: "version-aggregator"
}
SvsServer: {
  label: "schulcloud-server"

  Management: {
    label: "management"
  }
  LdapSyncConsole: {
    label: "ldap-sync-console"
  }
  Api: {
    label: "api"
  }
  BoardCollab: {
    label: "board-collaboration"
  }
  Worker: {
    label: "api-worker"
  }
  SchulconnexConsumers: {
    label: "Schulconnex-Consumer"
  }
  DeletionConsole: {
    label: "deletion-console"
  }
  MigrationSystems: {
    label: "api-migration-systems"
  }
  CommonCartridge: {
    label: "common-cartridge"
  }
  LegacyFileArchive: {
    label: "legacy-file-archive"
  }
  FwuLearningContents: {
    label: "fwu-learning-contents"
  }
  Notification: {
    label: "notification-server"
  }
  ServerConsole: {
    label: "server-console"
  }
  IdpConsole: {
    label: "idp-console"
  }
  SyncConsole: {
    label: "sync-console"
  }
  TspSyncConsole: {
    label: "tsp-sync-console"
  }
  AdminApi: {
    label: "admin-api-server"
  }
}
SvsRabbit: {
  label: "RabbitMQ"
  shape: queue
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Bbb: {
  label: "BigBlueButton"
}
Nextcloud: {
  label: "Nextcloud"
}
Cachet: {
  label: "Cachet"
}
Web: {
  label: "Beliebige Webseiten"
}
SvsAntivirus: {
  label: "antivirus_check_service"
}
SvsHydra: {
  label: "Hydra"
}
SvsEtherpad: {
  label: "Etherpad"
}
SvsValkey: {
  label: "Session-Valkey"
  shape: stored_data
}
Ldap: {
  label: "Schul-LDAP"
}
SvsS3: {
  label: "S3"
  shape: stored_data
}
Schulconnex: {
  label: "Schulconnex-API"
}
Vidis: {
  label: "VIDIS"
}
Bilo: {
  label: "BILO"
}
Tsp: {
  label: "TSP Thüringen"
}
SvsMongo: {
  label: "MongoDB"
  shape: stored_data
}

Tools -> SvsServer.Api: "Klassenlisten abrufen"
SvsNuxt -> SvsServer.Api: "Fachfunktionen"
SvsNuxt -> SvsServer.BoardCollab: "Boards in Echtzeit bearbeiten"
SvsLegacy -> SvsServer.Api: "Rendert Seiten mit Daten aus der API"
SvsSuperhero -> SvsServer.Api: "Fachdaten"
SvsSuperhero -> SvsServer.AdminApi: "Verwaltungsaktionen"
SvsFiles -> SvsServer.Api: "Rechte prüfen"
SvsH5p -> SvsServer.Api: "Rechte prüfen"
SvsTldraw -> SvsServer.Api: "Rechte prüfen"
SvsCalendar -> SvsServer.Api: "Nutzer und Scopes auflösen"
SvsVersionAggregator -> SvsServer.Api: "Version abfragen"
SvsRabbit -> SvsServer.Worker: "LDAP-Sync ausführen"
SvsRabbit -> SvsServer.SchulconnexConsumers: "Provisionierung"
SvsServer.DeletionConsole -> SvsServer.AdminApi: "Löschungen anstoßen"
SvsServer.Api -> Idp: "Login über OIDC"
SvsServer.Api -> Schulconnex: "Personen und Gruppen beim Login lesen"
SvsServer.Api -> Ldap: "Login gegen das Schul-LDAP"
SvsServer.Api -> Tsp: "Login über das TSP"
SvsServer.Api -> Bbb: "Konferenzen anlegen und beitreten"
SvsServer.Api -> Nextcloud: "Gruppen und Ordner für Teams"
SvsServer.Api -> Tools: "Tools starten"
SvsServer.Api -> Cachet: "Störungsmeldungen"
SvsServer.Api -> Web: "Link-Vorschau laden"
SvsServer.Api -> SvsFiles: "Dateien kopieren und löschen"
SvsServer.Api -> SvsTldraw: "Zeichnungen löschen"
SvsServer.Api -> SvsCalendar: "Termine"
SvsServer.Api -> SvsAntivirus: "Alte Dateien scannen"
SvsServer.Api -> SvsHydra: "OAuth2-Clients und Consent verwalten"
SvsServer.Api -> SvsEtherpad: "Pads anlegen"
SvsServer.Api -> SvsMongo: "Liest und schreibt Fachdaten"
SvsServer.Api -> SvsValkey: "Sessions und JWT-Whitelist"
SvsServer.Api -> SvsS3: "Alte Dateiablage"
SvsServer.Api -> SvsRabbit: "[...]"
SvsServer.Worker -> Ldap: "Nutzer und Klassen lesen"
SvsServer.Worker -> SvsMongo: "Nutzer und Klassen schreiben"
SvsServer.MigrationSystems -> SvsMongo: "Importierte Nutzer zuordnen"
SvsServer.AdminApi -> SvsMongo: "Verwaltungsdaten"
SvsServer.BoardCollab -> SvsMongo: "Boards und Socket-Adapter"
SvsServer.BoardCollab -> SvsRabbit: "Dateien von Board-Elementen"
SvsServer.CommonCartridge -> SvsMongo: "Kurse lesen und anlegen"
SvsServer.CommonCartridge -> SvsRabbit: "Dateien im Paket"
SvsServer.LegacyFileArchive -> SvsS3: "Archivierte Dateien"
SvsServer.FwuLearningContents -> SvsS3: "FWU-Bucket lesen"
SvsServer.Notification -> SvsMongo: "Change Streams"
SvsServer.SchulconnexConsumers -> Schulconnex: "Lizenzen und Gruppen nachladen"
SvsServer.SchulconnexConsumers -> SvsMongo: "Gruppen, Kurse und Lizenzen schreiben"
SvsServer.ServerConsole -> SvsMongo: "Datenmigrationen"
SvsServer.ServerConsole -> SvsS3: "Verwaiste Dateien löschen"
SvsServer.IdpConsole -> Schulconnex: "Nutzer mit moin.schule abgleichen"
SvsServer.IdpConsole -> SvsMongo: "Abgleich speichern"
SvsServer.LdapSyncConsole -> SvsRabbit: "Sync pro Schule einstellen"
SvsServer.SyncConsole -> Vidis: "Medien-Metadaten"
SvsServer.SyncConsole -> Bilo: "Medien-Metadaten"
SvsServer.SyncConsole -> SvsMongo: "Metadaten speichern"
SvsServer.TspSyncConsole -> Tsp: "Schulen, Klassen und Personen lesen"
SvsServer.TspSyncConsole -> SvsMongo: "Stammdaten schreiben"
`;case`pages`:return`direction: right

SvsNuxt: {
  label: "nuxt-client"

  NDashboard: {
    label: "Dashboard"
  }
  NRooms: {
    label: "Räume und Kurse"
  }
  NBoards: {
    label: "Boards und Ordner"
  }
  NTasks: {
    label: "Aufgabenübersicht"
  }
  NNews: {
    label: "Neuigkeiten"
  }
  NMediaShelf: {
    label: "Medienregal"
  }
  NMigration: {
    label: "Login-Migration"
  }
  NAdmin: {
    label: "Administration (neu)"
  }
  NTools: {
    label: "Tool-Konfiguration im Kontext"
  }
  NStatic: {
    label: "Rechtliches und System"
  }
  NCollabora: {
    label: "Office-Dokumente"
  }
  NH5p: {
    label: "H5P"
  }
  NDead: {
    label: "Pfade ohne Seite"
  }
}
SvsLegacy: {
  label: "schulcloud-client"

  LLogin: {
    label: "Login und SSO"
  }
  LRegistration: {
    label: "Registrierung und Erstanmeldung"
  }
  LCourses: {
    label: "Kurse bearbeiten"
  }
  LHomework: {
    label: "Aufgaben"
  }
  LTeams: {
    label: "Teams"
  }
  LCalendar: {
    label: "Kalender"
  }
  LFiles: {
    label: "Dateien (alt)"
  }
  LVideo: {
    label: "Videokonferenz"
  }
  LAccount: {
    label: "Konto und Hilfe"
  }
  LStatic: {
    label: "Rechtliches und Sonstiges"
  }
  LAdmin: {
    label: "Administration (alt)"
  }
}
SvsTldrawClient: {
  label: "tldraw-client"

  TWhiteboard: {
    label: "Whiteboard"
  }
}
SvsCollabora: {
  label: "Collabora"
}
SvsH5p: {
  label: "h5p-server"

  Proxy: {
    label: "h5p-proxy"
  }
}
SvsTldraw: {
  label: "tldraw-server"

  Gateway: {
    label: "tldraw gateway"
  }
}
SvsServer: {
  label: "schulcloud-server"

  Api: {
    label: "api"
  }
  BoardCollab: {
    label: "board-collaboration"
  }
}
SvsFiles: {
  label: "file-storage"

  Api: {
    label: "file-storage api"
  }
}
SvsHydra: {
  label: "Hydra"
}

SvsNuxt.NDashboard -> SvsServer.Api: "Räume, Aufgaben, Neuigkeiten"
SvsNuxt.NRooms -> SvsServer.Api: "Räume und Kurse"
SvsNuxt.NBoards -> SvsServer.Api: "Board laden"
SvsNuxt.NTasks -> SvsServer.Api: "Aufgaben"
SvsNuxt.NNews -> SvsServer.Api: "Neuigkeiten"
SvsNuxt.NMediaShelf -> SvsServer.Api: "Medien und Lizenzen"
SvsNuxt.NMigration -> SvsServer.Api: "Login-Migration"
SvsNuxt.NAdmin -> SvsServer.Api: "Schulverwaltung"
SvsNuxt.NTools -> SvsServer.Api: "Tool-Konfiguration"
SvsNuxt.NStatic -> SvsServer.Api: "Konfiguration"
SvsLegacy.LLogin -> SvsServer.Api: "Anmelden"
SvsLegacy.LRegistration -> SvsServer.Api: "Registrierung, Einwilligungen"
SvsLegacy.LCourses -> SvsServer.Api: "Kurse und Themen"
SvsLegacy.LHomework -> SvsServer.Api: "Aufgaben und Abgaben"
SvsLegacy.LTeams -> SvsServer.Api: "Teams und Team-News"
SvsLegacy.LCalendar -> SvsServer.Api: "Termine (weiter an den Kalender)"
SvsLegacy.LFiles -> SvsServer.Api: "Alte Dateiablage"
SvsLegacy.LVideo -> SvsServer.Api: "Konferenz starten (weiter an BBB)"
SvsLegacy.LAccount -> SvsServer.Api: "Konto"
SvsLegacy.LStatic -> SvsServer.Api: "Inhalte und Meldungen"
SvsLegacy.LAdmin -> SvsServer.Api: "Schulverwaltung"
SvsNuxt.NBoards -> SvsServer.BoardCollab: "Board bearbeiten"
SvsNuxt.NBoards -> SvsFiles.Api: "Dateien im Board"
SvsNuxt.NCollabora -> SvsFiles.Api: "WOPI-URL holen"
SvsServer.Api -> SvsFiles.Api: "Dateien kopieren und löschen"
SvsFiles.Api -> SvsServer.Api: "Rechte prüfen"
SvsNuxt.NH5p -> SvsH5p.Proxy: "Editor und Player"
SvsNuxt.NCollabora -> SvsCollabora: "Editor einbetten"
SvsCollabora -> SvsFiles.Api: "Dokument laden und speichern"
SvsLegacy.LLogin -> SvsHydra: "OAuth2-Consent"
SvsServer.Api -> SvsHydra: "OAuth2-Clients und Consent verwalten"
SvsTldrawClient.TWhiteboard -> SvsTldraw.Gateway: "Zeichnung synchronisieren"
SvsTldraw.Gateway -> SvsServer.Api: "Rechte prüfen"
SvsNuxt -> SvsLegacy: "Leitet Admin-Detailseiten weiter"
SvsNuxt.NBoards -> SvsTldrawClient: "Whiteboard öffnen"
`;case`migration`:return`direction: right

SvsNuxtNRooms: {
  label: "Räume und Kurse"
}
SvsNuxtNTasks: {
  label: "Aufgabenübersicht"
}
SvsNuxtNNews: {
  label: "Neuigkeiten"
}
SvsNuxtNAdmin: {
  label: "Administration (neu)"
}
SvsNuxtNDead: {
  label: "Pfade ohne Seite"
}
SvsLegacyLCourses: {
  label: "Kurse bearbeiten"
}
SvsLegacyLHomework: {
  label: "Aufgaben"
}
SvsLegacyLTeams: {
  label: "Teams"
}
SvsLegacyLAdmin: {
  label: "Administration (alt)"
}
`;case`pii`:return`direction: down

User: {
  label: "Nutzerinnen und Nutzer"
  shape: c4-person
}
Support: {
  label: "Support"
  shape: c4-person
}
SvsAntivirus: {
  label: "antivirus_check_service"

  Scanfile: {
    label: "antivirus scanfile"
  }
}
Tools: {
  label: "Externe Tools"
}
SvsNuxt: {
  label: "nuxt-client"
}
SvsLegacy: {
  label: "schulcloud-client"
}
SvsCollabora: {
  label: "Collabora"
}
SvsSuperhero: {
  label: "superhero-dashboard"
}
SvsH5p: {
  label: "h5p-server"

  Proxy: {
    label: "h5p-proxy"
  }
  Editor: {
    label: "api-h5p"
  }
}
SvsServer: {
  label: "schulcloud-server"

  Api: {
    label: "api"
  }
  BoardCollab: {
    label: "board-collaboration"
  }
  MigrationSystems: {
    label: "api-migration-systems"
  }
  LegacyFileArchive: {
    label: "legacy-file-archive"
  }
  SchulconnexConsumers: {
    label: "Schulconnex-Consumer"
  }
  DeletionConsole: {
    label: "deletion-console"
  }
  IdpConsole: {
    label: "idp-console"
  }
  Worker: {
    label: "api-worker"
  }
  TspSyncConsole: {
    label: "tsp-sync-console"
  }
  AdminApi: {
    label: "admin-api-server"
  }
}
SvsFiles: {
  label: "file-storage"

  Api: {
    label: "file-storage api"
  }
  Consumer: {
    label: "file-storage consumer"
  }
  PreviewGenerator: {
    label: "preview-generator"
  }
}
SvsValkey: {
  label: "Session-Valkey"
  shape: stored_data
}
SvsRabbit: {
  label: "RabbitMQ"
  shape: queue

  ExMail: {
    label: "mail-drop"
    shape: queue
  }
  ExProvisioning: {
    label: "provisioning-schulconnex"
    shape: queue
  }
}
SvsEtherpad: {
  label: "Etherpad"
}
SvsCalendar: {
  label: "schulcloud-calendar"
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Bbb: {
  label: "BigBlueButton"
}
Nextcloud: {
  label: "Nextcloud"
}
Schulconnex: {
  label: "Schulconnex-API"
}
Ldap: {
  label: "Schul-LDAP"
}
Tsp: {
  label: "TSP Thüringen"
}
SvsS3: {
  label: "S3"
  shape: stored_data
}
SvsHydra: {
  label: "Hydra"
}
SvsMongo: {
  label: "MongoDB"
  shape: stored_data
}
SvsMaildrop: {
  label: "maildrop"
}
SvsPostgres: {
  label: "PostgreSQL"
  shape: stored_data
}
Smtp: {
  label: "SMTP-Relay"
}

User -> SvsNuxt: "Nutzt umgezogene Seiten"
User -> SvsLegacy: "Nutzt Login und nicht umgezogene Seiten"
User -> SvsCollabora: "Bearbeitet Office-Dokumente"
Support -> SvsSuperhero: "Verwaltet Schulen und Nutzer"
SvsNuxt -> SvsServer.Api: "Fachfunktionen"
SvsNuxt -> SvsServer.BoardCollab: "Boards in Echtzeit bearbeiten"
SvsNuxt -> SvsFiles.Api: "Dateien hoch- und herunterladen"
SvsNuxt -> SvsH5p.Proxy: "H5P bearbeiten und abspielen"
SvsLegacy -> SvsServer.Api: "Rendert Seiten mit Daten aus der API"
SvsSuperhero -> SvsServer.Api: "Fachdaten"
SvsSuperhero -> SvsServer.AdminApi: "Verwaltungsaktionen"
SvsServer.Api -> SvsMongo: "Liest und schreibt Fachdaten"
SvsServer.Api -> SvsValkey: "Sessions und JWT-Whitelist"
SvsServer.Api -> SvsRabbit.ExMail: "E-Mail versenden"
SvsServer.Api -> SvsRabbit.ExProvisioning: "Provisionierung beim Login anstoßen"
SvsServer.Api -> SvsS3: "Alte Dateiablage"
SvsServer.Api -> SvsEtherpad: "Pads anlegen"
SvsServer.Api -> SvsCalendar: "Termine"
SvsServer.Api -> Idp: "Login über OIDC"
SvsServer.Api -> Schulconnex: "Personen und Gruppen beim Login lesen"
SvsServer.Api -> Ldap: "Login gegen das Schul-LDAP"
SvsServer.Api -> Tsp: "Login über das TSP"
SvsServer.Api -> Bbb: "Konferenzen anlegen und beitreten"
SvsServer.Api -> Nextcloud: "Gruppen und Ordner für Teams"
SvsServer.BoardCollab -> SvsMongo: "Boards und Socket-Adapter"
SvsServer.AdminApi -> SvsMongo: "Verwaltungsdaten"
SvsServer.MigrationSystems -> SvsMongo: "Importierte Nutzer zuordnen"
SvsServer.LegacyFileArchive -> SvsS3: "Archivierte Dateien"
SvsServer.SchulconnexConsumers -> SvsMongo: "Gruppen, Kurse und Lizenzen schreiben"
SvsServer.DeletionConsole -> SvsServer.AdminApi: "Löschungen anstoßen"
SvsServer.IdpConsole -> Schulconnex: "Nutzer mit moin.schule abgleichen"
SvsServer.IdpConsole -> SvsMongo: "Abgleich speichern"
SvsServer.Worker -> Ldap: "Nutzer und Klassen lesen"
SvsServer.Worker -> SvsMongo: "Nutzer und Klassen schreiben"
SvsServer.TspSyncConsole -> Tsp: "Schulen, Klassen und Personen lesen"
SvsServer.TspSyncConsole -> SvsMongo: "Stammdaten schreiben"
SvsServer.SchulconnexConsumers -> Schulconnex: "Lizenzen und Gruppen nachladen"
SvsFiles.Api -> SvsMongo: "Datei-Metadaten"
SvsFiles.Api -> SvsS3: "Dateiinhalte"
SvsFiles.Consumer -> SvsMongo: "Datei-Metadaten"
SvsFiles.Consumer -> SvsS3: "Kopieren und Löschen"
SvsFiles.PreviewGenerator -> SvsS3: "Bilder lesen, Vorschau schreiben"
SvsCollabora -> SvsFiles.Api: "Dokument laden und speichern"
SvsAntivirus.Scanfile -> SvsFiles.Api: "Datei laden, Ergebnis melden"
SvsH5p.Editor -> SvsMongo: "Inhalts-Metadaten"
SvsCalendar -> SvsPostgres: "Termine"
SvsRabbit.ExMail -> SvsMaildrop: "E-Mail-Aufträge"
SvsMaildrop -> Smtp: "E-Mails versenden"
SvsHydra -> SvsPostgres: "Clients, Consents, Tokens"
SvsEtherpad -> SvsMongo: "Pads"
Nextcloud -> SvsHydra: "Login über SVS"
Tools -> SvsHydra: "Login über SVS"
Tools -> SvsServer.Api: "Klassenlisten abrufen"
SvsServer.Api -> Tools: "Tools starten"
`;case`async`:return`direction: down

SvsServer: {
  label: "schulcloud-server"

  Api: {
    label: "api"
  }
  BoardCollab: {
    label: "board-collaboration"
  }
  CommonCartridge: {
    label: "common-cartridge"
  }
  LdapSyncConsole: {
    label: "ldap-sync-console"
  }
  SchulconnexConsumers: {
    label: "Schulconnex-Consumer"
  }
  Worker: {
    label: "api-worker"
  }
}
SvsFiles: {
  label: "file-storage"

  Api: {
    label: "file-storage api"
  }
  Consumer: {
    label: "file-storage consumer"
  }
  PreviewGenerator: {
    label: "preview-generator"
  }
}
SvsAntivirus: {
  label: "antivirus_check_service"

  Web: {
    label: "antivirus web"
  }
  Scanfile: {
    label: "antivirus scanfile"
  }
}
SvsRabbit: {
  label: "RabbitMQ"
  shape: queue

  ExFiles: {
    label: "files-storage"
    shape: queue
  }
  ExH5p: {
    label: "h5p-editor"
    shape: queue
  }
  ExProvisioning: {
    label: "provisioning-schulconnex"
    shape: queue
  }
  ExMail: {
    label: "mail-drop"
    shape: queue
  }
  QLdap: {
    label: "sync_ldap"
    shape: queue
  }
  ExAntivirus: {
    label: "scan_file_v2"
    shape: queue
  }
  ExPreview: {
    label: "files-preview"
    shape: queue
  }
}
SvsH5p: {
  label: "h5p-server"

  Consumer: {
    label: "h5p consumer"
  }
}
SvsMaildrop: {
  label: "maildrop"
}

SvsServer.Api -> SvsRabbit.ExFiles: "Dateioperationen anstoßen"
SvsServer.Api -> SvsRabbit.ExH5p: "H5P-Inhalte kopieren und löschen"
SvsServer.Api -> SvsRabbit.ExProvisioning: "Provisionierung beim Login anstoßen"
SvsServer.Api -> SvsRabbit.ExMail: "E-Mail versenden"
SvsServer.BoardCollab -> SvsRabbit.ExFiles: "Dateien von Board-Elementen"
SvsServer.CommonCartridge -> SvsRabbit.ExFiles: "Dateien im Paket"
SvsServer.LdapSyncConsole -> SvsRabbit.QLdap: "Sync pro Schule einstellen"
SvsFiles.Api -> SvsRabbit.ExAntivirus: "Scan anstoßen"
SvsFiles.Api -> SvsRabbit.ExPreview: "Vorschau anstoßen"
SvsAntivirus.Web -> SvsRabbit.ExAntivirus: "Scan einstellen"
SvsRabbit.ExFiles -> SvsFiles.Consumer: "Dateioperationen"
SvsRabbit.ExH5p -> SvsH5p.Consumer: "Kopieren und Löschen"
SvsRabbit.ExProvisioning -> SvsServer.SchulconnexConsumers: "Provisionierung"
SvsRabbit.ExMail -> SvsMaildrop: "E-Mail-Aufträge"
SvsRabbit.ExAntivirus -> SvsAntivirus.Scanfile: "Scanauftrag"
SvsRabbit.ExPreview -> SvsFiles.PreviewGenerator: "Vorschau erzeugen"
SvsRabbit.QLdap -> SvsServer.Worker: "LDAP-Sync ausführen"
`;case`files`:return`direction: down

SvsNuxt: {
  label: "nuxt-client"

  NBoards: {
    label: "Boards und Ordner"
  }
  NCollabora: {
    label: "Office-Dokumente"
  }
}
SvsSuperhero: {
  label: "superhero-dashboard"
}
SvsServer: {
  label: "schulcloud-server"

  Api: {
    label: "api"
  }
}
SvsAntivirus: {
  label: "antivirus_check_service"

  Scanfile: {
    label: "antivirus scanfile"
  }
}
SvsCollabora: {
  label: "Collabora"
}
SvsRabbit: {
  label: "RabbitMQ"
  shape: queue

  ExFiles: {
    label: "files-storage"
    shape: queue
  }
  ExPreview: {
    label: "files-preview"
    shape: queue
  }
  ExAntivirus: {
    label: "scan_file_v2"
    shape: queue
  }
}
SvsFiles: {
  label: "file-storage"

  Api: {
    label: "file-storage api"
  }
  Consumer: {
    label: "file-storage consumer"
  }
  PreviewGenerator: {
    label: "preview-generator"
  }
}
SvsMongo: {
  label: "MongoDB"
  shape: stored_data
}
SvsS3: {
  label: "S3"
  shape: stored_data
}

SvsNuxt.NBoards -> SvsFiles.Api: "Dateien im Board"
SvsNuxt.NCollabora -> SvsFiles.Api: "WOPI-URL holen"
SvsSuperhero -> SvsFiles.Api: "Dateien verwalten"
SvsServer.Api -> SvsFiles.Api: "Dateien kopieren und löschen"
SvsAntivirus.Scanfile -> SvsFiles.Api: "Datei laden, Ergebnis melden"
SvsCollabora -> SvsFiles.Api: "Dokument laden und speichern"
SvsRabbit.ExFiles -> SvsFiles.Consumer: "Dateioperationen"
SvsRabbit.ExPreview -> SvsFiles.PreviewGenerator: "Vorschau erzeugen"
SvsFiles.Api -> SvsServer.Api: "Rechte prüfen"
SvsFiles.Api -> SvsMongo: "Datei-Metadaten"
SvsFiles.Api -> SvsS3: "Dateiinhalte"
SvsFiles.Api -> SvsRabbit.ExAntivirus: "Scan anstoßen"
SvsFiles.Api -> SvsRabbit.ExPreview: "Vorschau anstoßen"
SvsFiles.Consumer -> SvsMongo: "Datei-Metadaten"
SvsFiles.Consumer -> SvsS3: "Kopieren und Löschen"
SvsFiles.PreviewGenerator -> SvsS3: "Bilder lesen, Vorschau schreiben"
`;case`identity`:return`direction: down

Svs: {
  label: "SVS"

  Legacy: {
    label: "schulcloud-client"

    LLogin: {
      label: "Login und SSO"
    }
  }
  Server: {
    label: "schulcloud-server"

    Api: {
      label: "api"
    }
    IdpConsole: {
      label: "idp-console"
    }
    LdapSyncConsole: {
      label: "ldap-sync-console"
    }
    SchulconnexConsumers: {
      label: "Schulconnex-Consumer"
    }
    Worker: {
      label: "api-worker"
    }
    TspSyncConsole: {
      label: "tsp-sync-console"
    }
    MigrationSystems: {
      label: "api-migration-systems"
    }
  }
  Hydra: {
    label: "Hydra"
  }
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Tools: {
  label: "Externe Tools"
}
Nextcloud: {
  label: "Nextcloud"
}
Schulconnex: {
  label: "Schulconnex-API"
}
Ldap: {
  label: "Schul-LDAP"
}
Tsp: {
  label: "TSP Thüringen"
}

Svs.Legacy.LLogin -> Svs.Server.Api: "Anmelden"
Svs.Legacy.LLogin -> Svs.Hydra: "OAuth2-Consent"
Svs.Server.Api -> Svs.Hydra: "OAuth2-Clients und Consent verwalten"
Svs.Server.Api -> Idp: "Login über OIDC"
Svs.Server.Api -> Schulconnex: "Personen und Gruppen beim Login lesen"
Svs.Server.IdpConsole -> Schulconnex: "Nutzer mit moin.schule abgleichen"
Svs.Server.SchulconnexConsumers -> Schulconnex: "Lizenzen und Gruppen nachladen"
Svs.Server.Api -> Ldap: "Login gegen das Schul-LDAP"
Svs.Server.Worker -> Ldap: "Nutzer und Klassen lesen"
Svs.Server.Api -> Tsp: "Login über das TSP"
Svs.Server.TspSyncConsole -> Tsp: "Schulen, Klassen und Personen lesen"
Svs.Server.Api -> Tools: "Tools starten"
Tools -> Svs.Server.Api: "Klassenlisten abrufen"
Tools -> Svs.Hydra: "Login über SVS"
Svs.Server.Api -> Nextcloud: "Gruppen und Ordner für Teams"
Nextcloud -> Svs.Hydra: "Login über SVS"
`;case`brb`:return`direction: down

Nextcloud: {
  label: "Nextcloud"
}
Tools: {
  label: "Externe Tools"
}
User: {
  label: "Nutzerinnen und Nutzer"
  shape: c4-person
}
Support: {
  label: "Support"
  shape: c4-person
}
Svs: {
  label: "SVS"

  Server: {
    label: "schulcloud-server"

    LdapSyncConsole: {
      label: "ldap-sync-console"
    }
    Api: {
      label: "api"
    }
    BoardCollab: {
      label: "board-collaboration"
    }
    Worker: {
      label: "api-worker"
    }
    LegacyFileArchive: {
      label: "legacy-file-archive"
    }
    FwuLearningContents: {
      label: "fwu-learning-contents"
    }
    ServerConsole: {
      label: "server-console"
    }
    DeletionConsole: {
      label: "deletion-console"
    }
    AdminApi: {
      label: "admin-api-server"
    }
  }
  Prometheus: {
    label: "Prometheus"
  }
  Nuxt: {
    label: "nuxt-client"
  }
  Superhero: {
    label: "superhero-dashboard"
  }
  Antivirus: {
    label: "antivirus_check_service"
  }
  Calendar: {
    label: "schulcloud-calendar"
  }
  VersionAggregator: {
    label: "version-aggregator"
  }
  Legacy: {
    label: "schulcloud-client"
  }
  TldrawClient: {
    label: "tldraw-client"
  }
  Collabora: {
    label: "Collabora"
  }
  Tldraw: {
    label: "tldraw-server"
  }
  Files: {
    label: "file-storage"
  }
  TldrawValkey: {
    label: "tldraw-Valkey"
    shape: stored_data
  }
  Rabbit: {
    label: "RabbitMQ"
    shape: queue
  }
  H5p: {
    label: "h5p-server"
  }
  Maildrop: {
    label: "maildrop"
  }
  Clammit: {
    label: "clammit"
  }
  Hydra: {
    label: "Hydra"
  }
  Etherpad: {
    label: "Etherpad"
  }
  Valkey: {
    label: "Session-Valkey"
    shape: stored_data
  }
  S3: {
    label: "S3"
    shape: stored_data
  }
  Postgres: {
    label: "PostgreSQL"
    shape: stored_data
  }
  Mongo: {
    label: "MongoDB"
    shape: stored_data
  }
}
H5pHub: {
  label: "H5P Hub"
}
Smtp: {
  label: "SMTP-Relay"
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Bbb: {
  label: "BigBlueButton"
}
Cachet: {
  label: "Cachet"
}
Web: {
  label: "Beliebige Webseiten"
}
Ldap: {
  label: "Schul-LDAP"
}

Nextcloud -> Svs.Hydra: "Login über SVS"
Tools -> Svs.Hydra: "Login über SVS"
User -> Svs.Nuxt: "Nutzt umgezogene Seiten"
User -> Svs.Legacy: "Nutzt Login und nicht umgezogene Seiten"
User -> Svs.TldrawClient: "Zeichnet auf Whiteboards"
User -> Svs.Collabora: "Bearbeitet Office-Dokumente"
Support -> Svs.Superhero: "Verwaltet Schulen und Nutzer"
Svs.Nuxt -> Svs.Legacy: "Leitet Admin-Detailseiten weiter"
Svs.Nuxt -> Svs.TldrawClient: "Whiteboard öffnen"
Svs.Nuxt -> Svs.Files: "[...]"
Svs.Nuxt -> Svs.H5p: "[...]"
Svs.Nuxt -> Svs.Collabora: "Editor einbetten"
Svs.Legacy -> Svs.Hydra: "OAuth2-Consent"
Svs.TldrawClient -> Svs.Tldraw: "Zeichnung synchronisieren"
Svs.Superhero -> Svs.Files: "Dateien verwalten"
Svs.Files -> Svs.Mongo: "Datei-Metadaten"
Svs.Files -> Svs.S3: "[...]"
Svs.Files -> Svs.Rabbit: "[...]"
Svs.Antivirus -> Svs.Files: "Datei laden, Ergebnis melden"
Svs.Collabora -> Svs.Files: "Dokument laden und speichern"
Svs.Rabbit -> Svs.Files: "[...]"
Svs.H5p -> Svs.Clammit: "Uploads prüfen"
Svs.H5p -> Svs.Mongo: "Inhalts-Metadaten"
Svs.H5p -> Svs.S3: "[...]"
Svs.Clammit -> Svs.H5p: "Geprüfte Anfragen"
Svs.Rabbit -> Svs.H5p: "Kopieren und Löschen"
Svs.Tldraw -> Svs.TldrawValkey: "[...]"
Svs.Tldraw -> Svs.S3: "Zeichnungen speichern"
Svs.Calendar -> Svs.Postgres: "Termine"
Svs.Antivirus -> Svs.Rabbit: "Scan einstellen"
Svs.Rabbit -> Svs.Antivirus: "Scanauftrag"
Svs.Rabbit -> Svs.Maildrop: "E-Mail-Aufträge"
Svs.Hydra -> Svs.Postgres: "Clients, Consents, Tokens"
Svs.Etherpad -> Svs.Mongo: "Pads"
Svs.H5p -> H5pHub: "Bibliotheken laden"
Svs.Maildrop -> Smtp: "E-Mails versenden"
Tools -> Svs.Server.Api: "Klassenlisten abrufen"
Svs.Nuxt -> Svs.Server.Api: "Fachfunktionen"
Svs.Nuxt -> Svs.Server.BoardCollab: "Boards in Echtzeit bearbeiten"
Svs.Legacy -> Svs.Server.Api: "Rendert Seiten mit Daten aus der API"
Svs.Superhero -> Svs.Server.Api: "Fachdaten"
Svs.Superhero -> Svs.Server.AdminApi: "Verwaltungsaktionen"
Svs.Files -> Svs.Server.Api: "Rechte prüfen"
Svs.H5p -> Svs.Server.Api: "Rechte prüfen"
Svs.Tldraw -> Svs.Server.Api: "Rechte prüfen"
Svs.Calendar -> Svs.Server.Api: "Nutzer und Scopes auflösen"
Svs.Rabbit -> Svs.Server.Worker: "LDAP-Sync ausführen"
Svs.VersionAggregator -> Svs.Server.Api: "Version abfragen"
Svs.Server.Api -> Nextcloud: "Gruppen und Ordner für Teams"
Svs.Server.Api -> Svs.Hydra: "OAuth2-Clients und Consent verwalten"
Svs.Server.Api -> Tools: "Tools starten"
Svs.Server.Api -> Svs.Files: "Dateien kopieren und löschen"
Svs.Server.Api -> Svs.Tldraw: "Zeichnungen löschen"
Svs.Server.Api -> Svs.Calendar: "Termine"
Svs.Server.Api -> Svs.Antivirus: "Alte Dateien scannen"
Svs.Server.Api -> Svs.Etherpad: "Pads anlegen"
Svs.Server.Api -> Svs.Mongo: "Liest und schreibt Fachdaten"
Svs.Server.Api -> Svs.Valkey: "Sessions und JWT-Whitelist"
Svs.Server.Api -> Svs.S3: "Alte Dateiablage"
Svs.Server.Api -> Svs.Rabbit: "[...]"
Svs.Server.Api -> Idp: "Login über OIDC"
Svs.Server.Api -> Ldap: "Login gegen das Schul-LDAP"
Svs.Server.Api -> Bbb: "Konferenzen anlegen und beitreten"
Svs.Server.Api -> Cachet: "Störungsmeldungen"
Svs.Server.Api -> Web: "Link-Vorschau laden"
Svs.Server.Worker -> Svs.Mongo: "Nutzer und Klassen schreiben"
Svs.Server.Worker -> Ldap: "Nutzer und Klassen lesen"
Svs.Server.AdminApi -> Svs.Mongo: "Verwaltungsdaten"
Svs.Server.BoardCollab -> Svs.Mongo: "Boards und Socket-Adapter"
Svs.Server.BoardCollab -> Svs.Rabbit: "Dateien von Board-Elementen"
Svs.Server.LegacyFileArchive -> Svs.S3: "Archivierte Dateien"
Svs.Server.FwuLearningContents -> Svs.S3: "FWU-Bucket lesen"
Svs.Server.ServerConsole -> Svs.Mongo: "Datenmigrationen"
Svs.Server.ServerConsole -> Svs.S3: "Verwaiste Dateien löschen"
Svs.Server.LdapSyncConsole -> Svs.Rabbit: "Sync pro Schule einstellen"
Svs.Server.DeletionConsole -> Svs.Server.AdminApi: "Löschungen anstoßen"
Svs.Prometheus -> Svs.Server: "Metriken abfragen"
`;case`nbc`:return`direction: down

Nextcloud: {
  label: "Nextcloud"
}
Tools: {
  label: "Externe Tools"
}
User: {
  label: "Nutzerinnen und Nutzer"
  shape: c4-person
}
Support: {
  label: "Support"
  shape: c4-person
}
Svs: {
  label: "SVS"

  Server: {
    label: "schulcloud-server"

    LdapSyncConsole: {
      label: "ldap-sync-console"
    }
    Api: {
      label: "api"
    }
    BoardCollab: {
      label: "board-collaboration"
    }
    Worker: {
      label: "api-worker"
    }
    SchulconnexConsumers: {
      label: "Schulconnex-Consumer"
    }
    MigrationSystems: {
      label: "api-migration-systems"
    }
    LegacyFileArchive: {
      label: "legacy-file-archive"
    }
    ServerConsole: {
      label: "server-console"
    }
    IdpConsole: {
      label: "idp-console"
    }
    SyncConsole: {
      label: "sync-console"
    }
    DeletionConsole: {
      label: "deletion-console"
    }
    AdminApi: {
      label: "admin-api-server"
    }
  }
  Prometheus: {
    label: "Prometheus"
  }
  Nuxt: {
    label: "nuxt-client"
  }
  Superhero: {
    label: "superhero-dashboard"
  }
  Antivirus: {
    label: "antivirus_check_service"
  }
  Calendar: {
    label: "schulcloud-calendar"
  }
  VersionAggregator: {
    label: "version-aggregator"
  }
  Legacy: {
    label: "schulcloud-client"
  }
  TldrawClient: {
    label: "tldraw-client"
  }
  Collabora: {
    label: "Collabora"
  }
  Tldraw: {
    label: "tldraw-server"
  }
  Files: {
    label: "file-storage"
  }
  TldrawValkey: {
    label: "tldraw-Valkey"
    shape: stored_data
  }
  Rabbit: {
    label: "RabbitMQ"
    shape: queue
  }
  H5p: {
    label: "h5p-server"
  }
  Maildrop: {
    label: "maildrop"
  }
  Clammit: {
    label: "clammit"
  }
  Hydra: {
    label: "Hydra"
  }
  Etherpad: {
    label: "Etherpad"
  }
  Valkey: {
    label: "Session-Valkey"
    shape: stored_data
  }
  S3: {
    label: "S3"
    shape: stored_data
  }
  Postgres: {
    label: "PostgreSQL"
    shape: stored_data
  }
  Mongo: {
    label: "MongoDB"
    shape: stored_data
  }
}
H5pHub: {
  label: "H5P Hub"
}
Smtp: {
  label: "SMTP-Relay"
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Bbb: {
  label: "BigBlueButton"
}
Cachet: {
  label: "Cachet"
}
Web: {
  label: "Beliebige Webseiten"
}
Ldap: {
  label: "Schul-LDAP"
}
Schulconnex: {
  label: "Schulconnex-API"
}
Vidis: {
  label: "VIDIS"
}
Bilo: {
  label: "BILO"
}

Nextcloud -> Svs.Hydra: "Login über SVS"
Tools -> Svs.Hydra: "Login über SVS"
User -> Svs.Nuxt: "Nutzt umgezogene Seiten"
User -> Svs.Legacy: "Nutzt Login und nicht umgezogene Seiten"
User -> Svs.TldrawClient: "Zeichnet auf Whiteboards"
User -> Svs.Collabora: "Bearbeitet Office-Dokumente"
Support -> Svs.Superhero: "Verwaltet Schulen und Nutzer"
Svs.Nuxt -> Svs.Legacy: "Leitet Admin-Detailseiten weiter"
Svs.Nuxt -> Svs.TldrawClient: "Whiteboard öffnen"
Svs.Nuxt -> Svs.Files: "[...]"
Svs.Nuxt -> Svs.H5p: "[...]"
Svs.Nuxt -> Svs.Collabora: "Editor einbetten"
Svs.Legacy -> Svs.Hydra: "OAuth2-Consent"
Svs.TldrawClient -> Svs.Tldraw: "Zeichnung synchronisieren"
Svs.Superhero -> Svs.Files: "Dateien verwalten"
Svs.Files -> Svs.Mongo: "Datei-Metadaten"
Svs.Files -> Svs.S3: "[...]"
Svs.Files -> Svs.Rabbit: "[...]"
Svs.Antivirus -> Svs.Files: "Datei laden, Ergebnis melden"
Svs.Collabora -> Svs.Files: "Dokument laden und speichern"
Svs.Rabbit -> Svs.Files: "[...]"
Svs.H5p -> Svs.Clammit: "Uploads prüfen"
Svs.H5p -> Svs.Mongo: "Inhalts-Metadaten"
Svs.H5p -> Svs.S3: "[...]"
Svs.Clammit -> Svs.H5p: "Geprüfte Anfragen"
Svs.Rabbit -> Svs.H5p: "Kopieren und Löschen"
Svs.Tldraw -> Svs.TldrawValkey: "[...]"
Svs.Tldraw -> Svs.S3: "Zeichnungen speichern"
Svs.Calendar -> Svs.Postgres: "Termine"
Svs.Antivirus -> Svs.Rabbit: "Scan einstellen"
Svs.Rabbit -> Svs.Antivirus: "Scanauftrag"
Svs.Rabbit -> Svs.Maildrop: "E-Mail-Aufträge"
Svs.Hydra -> Svs.Postgres: "Clients, Consents, Tokens"
Svs.Etherpad -> Svs.Mongo: "Pads"
Svs.H5p -> H5pHub: "Bibliotheken laden"
Svs.Maildrop -> Smtp: "E-Mails versenden"
Tools -> Svs.Server.Api: "Klassenlisten abrufen"
Svs.Nuxt -> Svs.Server.Api: "Fachfunktionen"
Svs.Nuxt -> Svs.Server.BoardCollab: "Boards in Echtzeit bearbeiten"
Svs.Legacy -> Svs.Server.Api: "Rendert Seiten mit Daten aus der API"
Svs.Superhero -> Svs.Server.Api: "Fachdaten"
Svs.Superhero -> Svs.Server.AdminApi: "Verwaltungsaktionen"
Svs.Files -> Svs.Server.Api: "Rechte prüfen"
Svs.H5p -> Svs.Server.Api: "Rechte prüfen"
Svs.Tldraw -> Svs.Server.Api: "Rechte prüfen"
Svs.Calendar -> Svs.Server.Api: "Nutzer und Scopes auflösen"
Svs.Rabbit -> Svs.Server.Worker: "LDAP-Sync ausführen"
Svs.Rabbit -> Svs.Server.SchulconnexConsumers: "Provisionierung"
Svs.VersionAggregator -> Svs.Server.Api: "Version abfragen"
Svs.Server.Api -> Nextcloud: "Gruppen und Ordner für Teams"
Svs.Server.Api -> Svs.Hydra: "OAuth2-Clients und Consent verwalten"
Svs.Server.Api -> Tools: "Tools starten"
Svs.Server.Api -> Svs.Files: "Dateien kopieren und löschen"
Svs.Server.Api -> Svs.Tldraw: "Zeichnungen löschen"
Svs.Server.Api -> Svs.Calendar: "Termine"
Svs.Server.Api -> Svs.Antivirus: "Alte Dateien scannen"
Svs.Server.Api -> Svs.Etherpad: "Pads anlegen"
Svs.Server.Api -> Svs.Mongo: "Liest und schreibt Fachdaten"
Svs.Server.Api -> Svs.Valkey: "Sessions und JWT-Whitelist"
Svs.Server.Api -> Svs.S3: "Alte Dateiablage"
Svs.Server.Api -> Svs.Rabbit: "[...]"
Svs.Server.Api -> Idp: "Login über OIDC"
Svs.Server.Api -> Schulconnex: "Personen und Gruppen beim Login lesen"
Svs.Server.Api -> Ldap: "Login gegen das Schul-LDAP"
Svs.Server.Api -> Bbb: "Konferenzen anlegen und beitreten"
Svs.Server.Api -> Cachet: "Störungsmeldungen"
Svs.Server.Api -> Web: "Link-Vorschau laden"
Svs.Server.Worker -> Svs.Mongo: "Nutzer und Klassen schreiben"
Svs.Server.Worker -> Ldap: "Nutzer und Klassen lesen"
Svs.Server.MigrationSystems -> Svs.Mongo: "Importierte Nutzer zuordnen"
Svs.Server.AdminApi -> Svs.Mongo: "Verwaltungsdaten"
Svs.Server.BoardCollab -> Svs.Mongo: "Boards und Socket-Adapter"
Svs.Server.BoardCollab -> Svs.Rabbit: "Dateien von Board-Elementen"
Svs.Server.LegacyFileArchive -> Svs.S3: "Archivierte Dateien"
Svs.Server.SchulconnexConsumers -> Svs.Mongo: "Gruppen, Kurse und Lizenzen schreiben"
Svs.Server.SchulconnexConsumers -> Schulconnex: "Lizenzen und Gruppen nachladen"
Svs.Server.ServerConsole -> Svs.Mongo: "Datenmigrationen"
Svs.Server.ServerConsole -> Svs.S3: "Verwaiste Dateien löschen"
Svs.Server.IdpConsole -> Svs.Mongo: "Abgleich speichern"
Svs.Server.IdpConsole -> Schulconnex: "Nutzer mit moin.schule abgleichen"
Svs.Server.LdapSyncConsole -> Svs.Rabbit: "Sync pro Schule einstellen"
Svs.Server.SyncConsole -> Svs.Mongo: "Metadaten speichern"
Svs.Server.SyncConsole -> Vidis: "Medien-Metadaten"
Svs.Server.SyncConsole -> Bilo: "Medien-Metadaten"
Svs.Server.DeletionConsole -> Svs.Server.AdminApi: "Löschungen anstoßen"
Svs.Prometheus -> Svs.Server: "Metriken abfragen"
`;case`thr`:return`direction: down

Nextcloud: {
  label: "Nextcloud"
}
Tools: {
  label: "Externe Tools"
}
User: {
  label: "Nutzerinnen und Nutzer"
  shape: c4-person
}
Support: {
  label: "Support"
  shape: c4-person
}
Svs: {
  label: "SVS"

  Prometheus: {
    label: "Prometheus"
  }
  Nuxt: {
    label: "nuxt-client"
  }
  Superhero: {
    label: "superhero-dashboard"
  }
  Antivirus: {
    label: "antivirus_check_service"
  }
  Calendar: {
    label: "schulcloud-calendar"
  }
  VersionAggregator: {
    label: "version-aggregator"
  }
  Legacy: {
    label: "schulcloud-client"
  }
  TldrawClient: {
    label: "tldraw-client"
  }
  Collabora: {
    label: "Collabora"
  }
  Tldraw: {
    label: "tldraw-server"
  }
  Files: {
    label: "file-storage"
  }
  TldrawValkey: {
    label: "tldraw-Valkey"
    shape: stored_data
  }
  Rabbit: {
    label: "RabbitMQ"
    shape: queue
  }
  H5p: {
    label: "h5p-server"
  }
  Maildrop: {
    label: "maildrop"
  }
  Clammit: {
    label: "clammit"
  }
  Server: {
    label: "schulcloud-server"

    Api: {
      label: "api"
    }
    BoardCollab: {
      label: "board-collaboration"
    }
    LegacyFileArchive: {
      label: "legacy-file-archive"
    }
    ServerConsole: {
      label: "server-console"
    }
    TspSyncConsole: {
      label: "tsp-sync-console"
    }
    DeletionConsole: {
      label: "deletion-console"
    }
    AdminApi: {
      label: "admin-api-server"
    }
  }
  Hydra: {
    label: "Hydra"
  }
  Etherpad: {
    label: "Etherpad"
  }
  Valkey: {
    label: "Session-Valkey"
    shape: stored_data
  }
  S3: {
    label: "S3"
    shape: stored_data
  }
  Postgres: {
    label: "PostgreSQL"
    shape: stored_data
  }
  Mongo: {
    label: "MongoDB"
    shape: stored_data
  }
}
H5pHub: {
  label: "H5P Hub"
}
Smtp: {
  label: "SMTP-Relay"
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Bbb: {
  label: "BigBlueButton"
}
Cachet: {
  label: "Cachet"
}
Web: {
  label: "Beliebige Webseiten"
}
Tsp: {
  label: "TSP Thüringen"
}

Nextcloud -> Svs.Hydra: "Login über SVS"
Tools -> Svs.Hydra: "Login über SVS"
User -> Svs.Nuxt: "Nutzt umgezogene Seiten"
User -> Svs.Legacy: "Nutzt Login und nicht umgezogene Seiten"
User -> Svs.TldrawClient: "Zeichnet auf Whiteboards"
User -> Svs.Collabora: "Bearbeitet Office-Dokumente"
Support -> Svs.Superhero: "Verwaltet Schulen und Nutzer"
Svs.Nuxt -> Svs.Legacy: "Leitet Admin-Detailseiten weiter"
Svs.Nuxt -> Svs.TldrawClient: "Whiteboard öffnen"
Svs.Nuxt -> Svs.Files: "[...]"
Svs.Nuxt -> Svs.H5p: "[...]"
Svs.Nuxt -> Svs.Collabora: "Editor einbetten"
Svs.Legacy -> Svs.Hydra: "OAuth2-Consent"
Svs.TldrawClient -> Svs.Tldraw: "Zeichnung synchronisieren"
Svs.Superhero -> Svs.Files: "Dateien verwalten"
Svs.Files -> Svs.Mongo: "Datei-Metadaten"
Svs.Files -> Svs.S3: "[...]"
Svs.Files -> Svs.Rabbit: "[...]"
Svs.Antivirus -> Svs.Files: "Datei laden, Ergebnis melden"
Svs.Collabora -> Svs.Files: "Dokument laden und speichern"
Svs.Rabbit -> Svs.Files: "[...]"
Svs.H5p -> Svs.Clammit: "Uploads prüfen"
Svs.H5p -> Svs.Mongo: "Inhalts-Metadaten"
Svs.H5p -> Svs.S3: "[...]"
Svs.Clammit -> Svs.H5p: "Geprüfte Anfragen"
Svs.Rabbit -> Svs.H5p: "Kopieren und Löschen"
Svs.Tldraw -> Svs.TldrawValkey: "[...]"
Svs.Tldraw -> Svs.S3: "Zeichnungen speichern"
Svs.Calendar -> Svs.Postgres: "Termine"
Svs.Antivirus -> Svs.Rabbit: "Scan einstellen"
Svs.Rabbit -> Svs.Antivirus: "Scanauftrag"
Svs.Rabbit -> Svs.Maildrop: "E-Mail-Aufträge"
Svs.Hydra -> Svs.Postgres: "Clients, Consents, Tokens"
Svs.Etherpad -> Svs.Mongo: "Pads"
Svs.H5p -> H5pHub: "Bibliotheken laden"
Svs.Maildrop -> Smtp: "E-Mails versenden"
Tools -> Svs.Server.Api: "Klassenlisten abrufen"
Svs.Nuxt -> Svs.Server.Api: "Fachfunktionen"
Svs.Nuxt -> Svs.Server.BoardCollab: "Boards in Echtzeit bearbeiten"
Svs.Legacy -> Svs.Server.Api: "Rendert Seiten mit Daten aus der API"
Svs.Superhero -> Svs.Server.Api: "Fachdaten"
Svs.Superhero -> Svs.Server.AdminApi: "Verwaltungsaktionen"
Svs.Files -> Svs.Server.Api: "Rechte prüfen"
Svs.H5p -> Svs.Server.Api: "Rechte prüfen"
Svs.Tldraw -> Svs.Server.Api: "Rechte prüfen"
Svs.Calendar -> Svs.Server.Api: "Nutzer und Scopes auflösen"
Svs.VersionAggregator -> Svs.Server.Api: "Version abfragen"
Svs.Server.Api -> Nextcloud: "Gruppen und Ordner für Teams"
Svs.Server.Api -> Svs.Hydra: "OAuth2-Clients und Consent verwalten"
Svs.Server.Api -> Tools: "Tools starten"
Svs.Server.Api -> Svs.Files: "Dateien kopieren und löschen"
Svs.Server.Api -> Svs.Tldraw: "Zeichnungen löschen"
Svs.Server.Api -> Svs.Calendar: "Termine"
Svs.Server.Api -> Svs.Antivirus: "Alte Dateien scannen"
Svs.Server.Api -> Svs.Etherpad: "Pads anlegen"
Svs.Server.Api -> Svs.Mongo: "Liest und schreibt Fachdaten"
Svs.Server.Api -> Svs.Valkey: "Sessions und JWT-Whitelist"
Svs.Server.Api -> Svs.S3: "Alte Dateiablage"
Svs.Server.Api -> Svs.Rabbit: "[...]"
Svs.Server.Api -> Idp: "Login über OIDC"
Svs.Server.Api -> Tsp: "Login über das TSP"
Svs.Server.Api -> Bbb: "Konferenzen anlegen und beitreten"
Svs.Server.Api -> Cachet: "Störungsmeldungen"
Svs.Server.Api -> Web: "Link-Vorschau laden"
Svs.Server.AdminApi -> Svs.Mongo: "Verwaltungsdaten"
Svs.Server.BoardCollab -> Svs.Mongo: "Boards und Socket-Adapter"
Svs.Server.BoardCollab -> Svs.Rabbit: "Dateien von Board-Elementen"
Svs.Server.LegacyFileArchive -> Svs.S3: "Archivierte Dateien"
Svs.Server.ServerConsole -> Svs.Mongo: "Datenmigrationen"
Svs.Server.ServerConsole -> Svs.S3: "Verwaiste Dateien löschen"
Svs.Server.TspSyncConsole -> Svs.Mongo: "Stammdaten schreiben"
Svs.Server.TspSyncConsole -> Tsp: "Schulen, Klassen und Personen lesen"
Svs.Server.DeletionConsole -> Svs.Server.AdminApi: "Löschungen anstoßen"
Svs.Prometheus -> Svs.Server: "Metriken abfragen"
`;case`dbc`:return`direction: down

Tools: {
  label: "Externe Tools"
}
User: {
  label: "Nutzerinnen und Nutzer"
  shape: c4-person
}
Support: {
  label: "Support"
  shape: c4-person
}
Svs: {
  label: "SVS"

  Prometheus: {
    label: "Prometheus"
  }
  Nuxt: {
    label: "nuxt-client"
  }
  Superhero: {
    label: "superhero-dashboard"
  }
  Antivirus: {
    label: "antivirus_check_service"
  }
  Calendar: {
    label: "schulcloud-calendar"
  }
  VersionAggregator: {
    label: "version-aggregator"
  }
  Legacy: {
    label: "schulcloud-client"
  }
  TldrawClient: {
    label: "tldraw-client"
  }
  Files: {
    label: "file-storage"
  }
  Tldraw: {
    label: "tldraw-server"
  }
  Rabbit: {
    label: "RabbitMQ"
    shape: queue
  }
  TldrawValkey: {
    label: "tldraw-Valkey"
    shape: stored_data
  }
  H5p: {
    label: "h5p-server"
  }
  Maildrop: {
    label: "maildrop"
  }
  Clammit: {
    label: "clammit"
  }
  Server: {
    label: "schulcloud-server"

    Api: {
      label: "api"
    }
    BoardCollab: {
      label: "board-collaboration"
    }
    CommonCartridge: {
      label: "common-cartridge"
    }
    LegacyFileArchive: {
      label: "legacy-file-archive"
    }
    ServerConsole: {
      label: "server-console"
    }
    DeletionConsole: {
      label: "deletion-console"
    }
    AdminApi: {
      label: "admin-api-server"
    }
  }
  Hydra: {
    label: "Hydra"
  }
  Etherpad: {
    label: "Etherpad"
  }
  Valkey: {
    label: "Session-Valkey"
    shape: stored_data
  }
  S3: {
    label: "S3"
    shape: stored_data
  }
  Postgres: {
    label: "PostgreSQL"
    shape: stored_data
  }
  Mongo: {
    label: "MongoDB"
    shape: stored_data
  }
}
H5pHub: {
  label: "H5P Hub"
}
Smtp: {
  label: "SMTP-Relay"
}
Idp: {
  label: "Externe OIDC-IdPs"
}
Bbb: {
  label: "BigBlueButton"
}
Cachet: {
  label: "Cachet"
}
Web: {
  label: "Beliebige Webseiten"
}

Tools -> Svs.Hydra: "Login über SVS"
User -> Svs.Nuxt: "Nutzt umgezogene Seiten"
User -> Svs.Legacy: "Nutzt Login und nicht umgezogene Seiten"
User -> Svs.TldrawClient: "Zeichnet auf Whiteboards"
Support -> Svs.Superhero: "Verwaltet Schulen und Nutzer"
Svs.Nuxt -> Svs.Legacy: "Leitet Admin-Detailseiten weiter"
Svs.Nuxt -> Svs.TldrawClient: "Whiteboard öffnen"
Svs.Nuxt -> Svs.Files: "[...]"
Svs.Nuxt -> Svs.H5p: "[...]"
Svs.Legacy -> Svs.Hydra: "OAuth2-Consent"
Svs.TldrawClient -> Svs.Tldraw: "Zeichnung synchronisieren"
Svs.Superhero -> Svs.Files: "Dateien verwalten"
Svs.Files -> Svs.Mongo: "Datei-Metadaten"
Svs.Files -> Svs.S3: "[...]"
Svs.Files -> Svs.Rabbit: "[...]"
Svs.Antivirus -> Svs.Files: "Datei laden, Ergebnis melden"
Svs.Rabbit -> Svs.Files: "[...]"
Svs.H5p -> Svs.Clammit: "Uploads prüfen"
Svs.H5p -> Svs.Mongo: "Inhalts-Metadaten"
Svs.H5p -> Svs.S3: "[...]"
Svs.Clammit -> Svs.H5p: "Geprüfte Anfragen"
Svs.Rabbit -> Svs.H5p: "Kopieren und Löschen"
Svs.Tldraw -> Svs.TldrawValkey: "[...]"
Svs.Tldraw -> Svs.S3: "Zeichnungen speichern"
Svs.Calendar -> Svs.Postgres: "Termine"
Svs.Antivirus -> Svs.Rabbit: "Scan einstellen"
Svs.Rabbit -> Svs.Antivirus: "Scanauftrag"
Svs.Rabbit -> Svs.Maildrop: "E-Mail-Aufträge"
Svs.Hydra -> Svs.Postgres: "Clients, Consents, Tokens"
Svs.Etherpad -> Svs.Mongo: "Pads"
Svs.H5p -> H5pHub: "Bibliotheken laden"
Svs.Maildrop -> Smtp: "E-Mails versenden"
Tools -> Svs.Server.Api: "Klassenlisten abrufen"
Svs.Nuxt -> Svs.Server.Api: "Fachfunktionen"
Svs.Nuxt -> Svs.Server.BoardCollab: "Boards in Echtzeit bearbeiten"
Svs.Legacy -> Svs.Server.Api: "Rendert Seiten mit Daten aus der API"
Svs.Superhero -> Svs.Server.Api: "Fachdaten"
Svs.Superhero -> Svs.Server.AdminApi: "Verwaltungsaktionen"
Svs.Files -> Svs.Server.Api: "Rechte prüfen"
Svs.H5p -> Svs.Server.Api: "Rechte prüfen"
Svs.Tldraw -> Svs.Server.Api: "Rechte prüfen"
Svs.Calendar -> Svs.Server.Api: "Nutzer und Scopes auflösen"
Svs.VersionAggregator -> Svs.Server.Api: "Version abfragen"
Svs.Server.Api -> Svs.Hydra: "OAuth2-Clients und Consent verwalten"
Svs.Server.Api -> Tools: "Tools starten"
Svs.Server.Api -> Svs.Files: "Dateien kopieren und löschen"
Svs.Server.Api -> Svs.Tldraw: "Zeichnungen löschen"
Svs.Server.Api -> Svs.Calendar: "Termine"
Svs.Server.Api -> Svs.Antivirus: "Alte Dateien scannen"
Svs.Server.Api -> Svs.Etherpad: "Pads anlegen"
Svs.Server.Api -> Svs.Mongo: "Liest und schreibt Fachdaten"
Svs.Server.Api -> Svs.Valkey: "Sessions und JWT-Whitelist"
Svs.Server.Api -> Svs.S3: "Alte Dateiablage"
Svs.Server.Api -> Svs.Rabbit: "[...]"
Svs.Server.Api -> Idp: "Login über OIDC"
Svs.Server.Api -> Bbb: "Konferenzen anlegen und beitreten"
Svs.Server.Api -> Cachet: "Störungsmeldungen"
Svs.Server.Api -> Web: "Link-Vorschau laden"
Svs.Server.AdminApi -> Svs.Mongo: "Verwaltungsdaten"
Svs.Server.BoardCollab -> Svs.Mongo: "Boards und Socket-Adapter"
Svs.Server.BoardCollab -> Svs.Rabbit: "Dateien von Board-Elementen"
Svs.Server.CommonCartridge -> Svs.Mongo: "Kurse lesen und anlegen"
Svs.Server.CommonCartridge -> Svs.Rabbit: "Dateien im Paket"
Svs.Server.LegacyFileArchive -> Svs.S3: "Archivierte Dateien"
Svs.Server.ServerConsole -> Svs.Mongo: "Datenmigrationen"
Svs.Server.ServerConsole -> Svs.S3: "Verwaiste Dateien löschen"
Svs.Server.DeletionConsole -> Svs.Server.AdminApi: "Löschungen anstoßen"
Svs.Prometheus -> Svs.Server: "Metriken abfragen"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};