# Retrieving and storing license information per user

### Delivered Information

We need to store license information per user. This information is provided as a complete list PER USER by moin.schule in the following structure:

#### Per User
```json
{
  "uid":"https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
  "target":{
    "uid":"urn:bilo:medium:123456789",
    "partOf":"https://www.bildungslogin-test.de/api/external/univention/media"
  },
  "permission":[
    {
      "action":[
        "execute"
      ]
    }
  ]
}
```

This response is (presumably) delivered as a JSON Array.

This response can also contain Information if this is a PER SCHOOL or PER COURSE/GROUP or even PER ROLE license. These restrictions can be combined if necessary

#### Per School
```json
{
  "uid":"https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
  "target":{
    "uid":"urn:bilo:medium:123456789",
    "partOf":"https://www.bildungslogin-test.de/api/external/univention/media"
  },
  "permission":[
    {
      "action":[
        "execute"
      ],
      "assignee":{
        "partOf":{
          "refinement":[
            {
              "leftOperand":"urn:schulconnex:de:personenkontext:organisation:kennung",
              "operator":"eq",
              "rightOperand":"NI_12345"
            }
          ]
        }
      }
    }
  ]
}
```


#### Per Course (with time constraints)
```json
{
  "uid":"https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
  "target":{
    "uid":"urn:bilo:medium:123456789",
    "partOf":"https://www.bildungslogin-test.de/api/external/univention/media"
  },
  "permission":[
    {
      "action":[
        "execute"
      ],
      "assignee":{
        "partOf":{
          "refinement":[
            {
              "leftOperand":"urn:schulconnex:de:personenkontext:gruppe",
              "operator":"eq",
              "rightOperand":"ffceeb40-01e6-483f-a909-382ff576b429"
            }
          ]
        }
      },
      "constraint":[
        {
          "leftOperand":"dateTime",
          "operator":"gteq",
          "rightOperand":"2023-08-01T00:00+0200"
        },
        {
          "leftOperand":"dateTime",
          "operator":"lt",
          "rightOperand":"2024-08-01T00:00+0200"
        }
      ]
    }
  ]
}
```

#### Per Role
```json
{
  "uid":"https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
  "target":{
    "uid":"urn:bilo:medium:123456789",
    "partOf":"https://www.bildungslogin-test.de/api/external/univention/media"
  },
  "permission":[
    {
      "action":[
        "execute"
      ],
      "assignee":{
        "refinement":[
          {
            "leftOperand":"urn:schulconnex:de:personenkontext:rolle",
            "operator":"eq",
            "rightOperand":"lehr"
          }
        ]
      }
    }
  ],
  "anlagen":{
    "lizenzschluessel":[
      {
        "code":"e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
      }
    ]
  }
}
```

**NOTE**: These last 3 are not relevant yet as we only work with personal licenses for now


### Handling License Data

License information is loaded in the same way as the provisioned data. In fact it should be loaded at the same time and handled like another part of provisioning. 

UserLicenses should be handled by their own module though which has initially no API module, only a Domain-Module

The /lizenz-info Endpoint will be supporting ETags for checking if the requested resource has been altered.

If there was no change it will send a 304 Response and no action is required.

#### Storing Data
* During Provisioning, call /lizenz-info from moin.schule with the AccessToken  from the user provisioning and ETag (if there is at least one MediaUserLicense entry for this user)
* Get the corresponding users MediaUserLicense entries from database
* For every Entry from lizenz-info:
  * Get the fitting MediaUserLicense by the target:uid identifier as mediumId
  * If the MediaUserLicense does not exist, create it with target:uid as mediumId the target:partOf as the mediaSourceId
  * Update the ETag if it is present 
  * Add the MediaUserLicense to a processed list
* After all entries from /lizenz-info have been processed, delete all MediaUserLicense entries that have not been processed (License is missing)

#### Loading MediaBoard
1. When loading the MediaBoard, load also the MediaUserLicenses
2. Every Tool that contains a mediaIdentifier should be checked against the MediaUserLicenses
3. If the mediumId of the Tool has no fitting MediaUserLicense for the user, don't load it for the user
4. Else proceed as usual

### A General draft of the Module structure
![Bildschirmfoto 2026-07-24 um 09.32.42.png](img/Bildschirmfoto%202026-07-24%20um%2009.32.42.png)
