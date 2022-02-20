## Запросы Groups:

Method: Post, Request: api/postgres/groups
```
Body (JSON):

{
  "name":"name of group",
  "author": {"id":9},
  "users":[]
}
```

Формат ответа:
```
{
  "name": "name of group",
  "author": {
    "id": 9
  },
  "users": [
    {
      "id": 9
    }
  ],
  "id": 5
}
```
Method: Put, Request: api/postgres/groups/5/update
```
Body (JSON):

{
  "name":"new name of group"
}
```

Формат ответа:
```
{
  "id": 5,
  "name": "new name of group"
}
```

Method: Post, Request: api/postgres/groups/users
```
Body (JSON):

{
  "id": 5,
  "users": [
    {"id":1},
    {"id":5},
    {"id":7}
  ]
}
```

Формат ответа:
```
status: 201
``````
Method: Get, Request: api/postgres/groups/5

Формат ответа:
```
[
  {
    "id": 5,
    "name": "new name of group",
    "author": {
      "id": 9,
      "email": "new email",
      "username": "new name"
    },
    "users": [
      {
        "id": 9,
        "email": "new email",
        "username": "new name"
      },
      {
        "id": 1,
        "email": "email-1",
        "username": "name-1"
      },
      {
        "id": 5,
        "email": "email-2",
        "username": "name-2"
      },
      {
        "id": 7,
        "email": "email-4",
        "username": "name-4"
      }
    ]
  }
]
```
Method: Get, Request: api/postgres/groups

Формат ответа:
```
[
  {
    "id": 6,
    "name": "name-2 of group",
    "author": {
      "id": 9,
      "email": "new email",
      "username": "new name"
    },
    "users": [
      {
        "id": 9,
        "email": "new email",
        "username": "new name"
      }
    ]
  },
  {
    "id": 7,
    "name": "name-3 of group",
    "author": {
      "id": 9,
      "email": "new email",
      "username": "new name"
    },
    "users": [
      {
        "id": 9,
        "email": "new email",
        "username": "new name"
      }
    ]
  },
  {
    "id": 8,
    "name": "name-4 of group",
    "author": {
      "id": 9,
      "email": "new email",
      "username": "new name"
    },
    "users": [
      {
        "id": 9,
        "email": "new email",
        "username": "new name"
      }
    ]
  }
]
```
Method: Delete, Request: api/postgres/groups/8/remove

Формат ответа:
```
status: 200
{
  "raw": [],
  "affected": 1
}
```