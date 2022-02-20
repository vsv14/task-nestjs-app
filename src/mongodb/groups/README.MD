## Запросы Groups:

Method: Post, Request: api/mongodb/groups
```
Body (JSON):

{
  "name": "name-4 of group",
    "authorId": "6211eef7ae5873fa816c15ec",
    "usersId": []
}
```

Формат ответа:
```
  "usersId": [
    "6211eef7ae5873fa816c15ec"
  ],
  "authorId": "6211eef7ae5873fa816c15ec",
  "name": "name-4 of group",
  "_id": "6211f714428a75ed9f19c08e",
  "__v": 0
}
```
Method: Put, Request: api/mongodb/groups/6211f714428a75ed9f19c08e/update
```
Body (JSON):

{
  "name": "new name-4 of group"
}
```

Формат ответа:
```
{
  "_id": "6211f714428a75ed9f19c08e",
  "usersId": [
    "6211eef7ae5873fa816c15ec"
  ],
  "authorId": "6211eef7ae5873fa816c15ec",
  "name": "new name-4 of group",
  "__v": 0
}
```

Method: Post, Request: api/mongodb/groups/users
```
Body (JSON):

{
  "_id": "6211f714428a75ed9f19c08e",
  "usersId": [
    "6211efc8ae5873fa816c15f1",
    "6211efe2ae5873fa816c15f3"
  ]
}
```

Формат ответа:
```
status: 201
  "_id": "6211f714428a75ed9f19c08e",
  "usersId": [
    "6211eef7ae5873fa816c15ec",
    "6211efc8ae5873fa816c15f1",
    "6211efe2ae5873fa816c15f3"
  ],
  "authorId": "6211eef7ae5873fa816c15ec",
  "name": "new name-4 of group",
  "__v": 0
}
``````
Method: Get, Request: api/mongodb/groups/6211f714428a75ed9f19c08e

Формат ответа:
```
{
  "_id": "6211f714428a75ed9f19c08e",
  "usersId": [
    {
      "_id": "6211eef7ae5873fa816c15ec",
      "friendsId": [
        "6211efc8ae5873fa816c15f1",
        "6211efe2ae5873fa816c15f3"
      ],
      "groups": [],
      "username": "new name",
      "email": "new email",
      "__v": 0
    },
    {
      "_id": "6211efc8ae5873fa816c15f1",
      "friendsId": [
        "6211eef7ae5873fa816c15ec"
      ],
      "groups": [],
      "username": "name-2",
      "email": "email-2",
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
  "authorId": {
    "_id": "6211eef7ae5873fa816c15ec",
    "friendsId": [
      "6211efc8ae5873fa816c15f1",
      "6211efe2ae5873fa816c15f3"
    ],
    "groups": [],
    "username": "new name",
    "email": "new email",
    "__v": 0
  },
  "name": "new name-4 of group",
  "__v": 0
}
```
Method: Get, Request: api/mongodb/groups

Формат ответа:
```
[
  {
    "_id": "6211f714428a75ed9f19c08e",
    "usersId": [
      "6211eef7ae5873fa816c15ec",
      "6211efc8ae5873fa816c15f1",
      "6211efe2ae5873fa816c15f3"
    ],
    "authorId": {
      "_id": "6211eef7ae5873fa816c15ec",
      "friendsId": [
        "6211efc8ae5873fa816c15f1",
        "6211efe2ae5873fa816c15f3"
      ],
      "groups": [],
      "username": "new name",
      "email": "new email",
      "__v": 0
    },
    "name": "new name-4 of group",
    "__v": 0
  },
  {
    "_id": "6211f9999f9107901e8b50c2",
    "usersId": [
      "6211efc8ae5873fa816c15f1"
    ],
    "authorId": {
      "_id": "6211efc8ae5873fa816c15f1",
      "friendsId": [
        "6211eef7ae5873fa816c15ec"
      ],
      "groups": [],
      "username": "name-2",
      "email": "email-2",
      "__v": 0
    },
    "name": "name-2 of group",
    "__v": 0
  },
  {
    "_id": "6211f99e9f9107901e8b50c4",
    "usersId": [
      "6211efc8ae5873fa816c15f1"
    ],
    "authorId": {
      "_id": "6211efc8ae5873fa816c15f1",
      "friendsId": [
        "6211eef7ae5873fa816c15ec"
      ],
      "groups": [],
      "username": "name-2",
      "email": "email-2",
      "__v": 0
    },
    "name": "name-1 of group",
    "__v": 0
  }
]
```
Method: Delete, Request: api/mongodb/groups/6211f99e9f9107901e8b50c4/remove

Формат ответа:
```
status: 200
{
  "_id": "6211f99e9f9107901e8b50c4",
  "usersId": [
    "6211efc8ae5873fa816c15f1"
  ],
  "authorId": "6211efc8ae5873fa816c15f1",
  "name": "name-1 of group",
  "__v": 0
}
```