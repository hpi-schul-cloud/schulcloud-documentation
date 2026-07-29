# Media Integration

Several sources for external media have been integrated into SVS:

*[Bildungslogin](bilo-integration.md)* and *[VIDIS](vidis-integration.md)* are media catalogs that have been integrated into SVS.
However, users must be authorized for a specific medium in order to be able to access this medium from SVS.

Here SVS distinguishes between **user-related-authorization-data** and **school-wide-authorization-data**.

The integration of Bildungslogin is based on user-related-authorization-data.
The authorization-data for Bildungslogin media is transferred from moin.schule to the SVS during the ad-hoc provisioning.

The integration of VIDIS is based on school-wide-authorization-data.
VIDIS-media must be queried via an external VIDIS-interface.

In addition to authorization-data, metadata for media is also updated regularly and automatically in background.
For both Bildungslogin and VIDIS, there is a background job that retrieves and updates metadata for the corresponding media via external interfaces.
