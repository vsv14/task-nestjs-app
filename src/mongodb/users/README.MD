## Запросы Users:

Method: Post, Request: api/mongodb/users
```
Body (JSON):

{
  "username": "name",
  "email":"email"
}
```

Формат ответа:
```
{
  "friendsId": [],
  "groups": [],
  "username": "name",
  "email": "email",
  "_id": "6211eef7ae5873fa816c15ec",
  "__v": 0
}
```
Method: Put, Request: api/mongodb/users/6211eef7ae5873fa816c15ec/update
```
Body (JSON):

{
  "username": "new name",
  "email":"new email"
}
```

Формат ответа:
```
{
  "_id": "6211eef7ae5873fa816c15ec",
  "friendsId": [],
  "groups": [],
  "username": "new name",
  "email": "new email",
  "__v": 0
}
```

Method: Post, Request: api/mongodb/users/friends
```
Body (JSON):

{
  "_id": "6211eef7ae5873fa816c15ec",
  "friendsId": [
    "6211efb3ae5873fa816c15ef",
    "6211efc8ae5873fa816c15f1",
    "6211efe2ae5873fa816c15f3"
  ]
}
```

Формат ответа:
```
status: 201
{
  "_id": "6211eef7ae5873fa816c15ec",
  "friendsId": [
    "6211efb3ae5873fa816c15ef",
    "6211efc8ae5873fa816c15f1",
    "6211efe2ae5873fa816c15f3"
  ],
  "groups": [],
  "username": "new name",
  "email": "new email",
  "__v": 0
}
``````
Method: Get, Request: api/mongodb/users/6211eef7ae5873fa816c15ec

Формат ответа:
```
"_id": "6211eef7ae5873fa816c15ec",
  "friendsId": [
    {
      "_id": "6211efb3ae5873fa816c15ef",
      "friendsId": [
        "6211eef7ae5873fa816c15ec"
      ],
      "groups": [],
      "username": "name-2",
      "email": "email-2",
      "__v": 0
    },
    {
      "_id": "6211efc8ae5873fa816c15f1",
      "friendsId": [
        "6211eef7ae5873fa816c15ec"
      ],
      "groups": [],
      "username": "name-3",
      "email": "email-3",
      "__v": 0
    },
    {
      "_id": "6211efe2ae5873fa816c15f3",
      "friendsId": [
        "6211eef7ae5873fa816c15ec"
      ],
      "groups": [],
      "username": "name-3",
      "email": "email-3",
      "__v": 0
    }
  ],
  "groups": [],
  "username": "new name",
  "email": "new email",
  "__v": 0
}
```
Method: Get, Request: api/mongodb/users

Формат ответа:
```
[
  {
    "_id": "6211eef7ae5873fa816c15ec",
    "friendsId": [
      "6211efb3ae5873fa816c15ef",
      "6211efc8ae5873fa816c15f1",
      "6211efe2ae5873fa816c15f3"
    ],
    "groups": [],
    "username": "new name",
    "email": "new email",
    "__v": 0
  },
  {
    "_id": "6211efb3ae5873fa816c15ef",
    "friendsId": [
      "6211eef7ae5873fa816c15ec"
    ],
    "groups": [],
    "username": "name-2",
    "email": "email-2",
    "__v": 0
  },
  {
    "_id": "6211efc8ae5873fa816c15f1",
    "friendsId": [
      "6211eef7ae5873fa816c15ec"
    ],
    "groups": [],
    "username": "name-3",
    "email": "email-3",
    "__v": 0
  },
  {
    "_id": "6211efe2ae5873fa816c15f3",
    "friendsId": [
      "6211eef7ae5873fa816c15ec"
    ],
    "groups": [],
    "username": "name-3",
    "email": "email-3",
    "__v": 0
  }
]
```
Method: Delete, Request: api/mongodb/users/6/remove

Формат ответа:
```
status: 200
{
  "_id": "6211efb3ae5873fa816c15ef",
  "friendsId": [
    "6211eef7ae5873fa816c15ec"
  ],
  "groups": [],
  "username": "name-2",
  "email": "email-2",
  "__v": 0
}
```