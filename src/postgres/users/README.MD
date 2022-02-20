## Запросы Users:

Method: Post, Request: api/postgres/users
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
  "email": "email",
  "username": "name",
  "id": 9
}
```
Method: Put, Request: api/postgres/users/9/update
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
  "id": 9,
  "email": "new email",
  "username": "new name"
}
```

Method: Post, Request: api/postgres/users/friends
```
Body (JSON):

{
  "id": 9,
  "friends": [
    {"id":1},
    {"id":5},
    {"id":6}
  ]
}
```

Формат ответа:
```
status: 201
``````
Method: Get, Request: api/postgres/users/9

Формат ответа:
```
{
  "user": {
    "id": 9,
    "email": "new email",
    "username": "new name"
  },
  "friends": [
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
      "id": 6,
      "email": "email-3",
      "username": "name-3"
    }
  ]
}
```
Method: Get, Request: api/postgres/users

Формат ответа:
```
[
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
    "id": 6,
    "email": "email-3",
    "username": "name-3"
  },
  {
    "id": 7,
    "email": "email-4",
    "username": "name-4"
  },
  {
    "id": 9,
    "email": "new email",
    "username": "new name"
  }
]
```
Method: Delete, Request: api/postgres/users/6/remove

Формат ответа:
```
status: 200
```