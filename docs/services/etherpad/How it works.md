# How it works

## Session managment

### Column and List Board
An etherpad session is created for every click on the etherpad element. This session expires after the amount of time defined by `ETHERPAD_COOKIE__EXPIRES_SECONDS`. This means that a user will loose access to the pad after that time period is expired. Losing access means that after interaction with the pad an english non translated message "You do not have permission to access this pad." will be shown instead of the pad. If a user is not interacting with the pad he will be able to see the content also after the period of `ETHERPAD_COOKIE__EXPIRES_SECONDS`.

If a user clicks on the etherpad element for the second time, a session that already exists for this element might be returned. If the old session or a new one is created depends on the env var settings. `ETHERPAD_ETHERPAD_COOKIE_RELEASE_THRESHOLD` defines the amount of time a session must still be valid to be delivered to the user. Currenty in production `ETHERPAD_ETHERPAD_COOKIE_RELEASE_THRESHOLD` and 
`ETHERPAD_COOKIE__EXPIRES_SECONDS` are set to the same value of 2 hours. With that setting for every click on an etherpad element a new session is created.

There is no such thing as an automatic session renewal on interaction. Etherpad provides the config variable COOKIE_SESSION_REFRESH_INTERVAL which defines the amount of time after a session of a user gets automatically renewed in an open tab. Currently this is not set and so the default of 1 day has no influence because this value is greater than ETHERPAD_COOKIE__EXPIRES_SECONDS. So with that setting sessions are not automatically renewed.

When user logsout out of schulcloud all sessions are removed and user loses access to the pads on interaction. (Please see description above)

Currently on schulcloud user autologout, etherpad sessions are not removed automatically. But as long ETHERPAD_COOKIE__EXPIRES_SECONDS and JWT_TIMEOUT_SECONDS are set to the same value, all sessions should theoretically be invalid after autologout.

A cookie with the name sessionID is stored for every session. Cookies are not programmatically removed after ETHERPAD_COOKIE__EXPIRES_SECONDS or schulcloud logout.

### Legacy Topics

Same session behavior also applies to legacy code. Env vars are used by both implementations.

In contrast to the nest code in legacy code a session is created for every course and stored as a cookie for every etherpad.


