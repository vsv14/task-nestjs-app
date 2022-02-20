# Тестовое задание на позицию Backend - разработчика 


## Описание

### Учебная задача:
```
Нужно сделать на Nest.js простейший круд.

Попробовать две бд: MongoDB и PostgreSQL, можно любые сущности. 

Единственное усложнение: надо, чтобы у них была связь - многие ко многим. 

Есть две сущности: user и group.
У пользователя может быть много групп, и у групп может быть много пользователей. 
Также у пользователей должно быть поле friends, в котором содержатся объекты user.

Нужно сначала сделать REST, а потом перенести тоже самое на GraphQL.
```

# Проект

- PostgreSQL (api/postgres) - [ Users ](https://github.com/vsv14/task-nestjs-app/blob/main/src/postgres/users/README.MD), [ Groups ](https://github.com/vsv14/task-nestjs-app/blob/main/src/postgres/groups/README.MD);
- MongoDB (api/mongodb) - [ Users ](https://github.com/vsv14/task-nestjs-app/blob/main/src/mongodb/users/README.MD), [ Groups ](https://github.com/vsv14/task-nestjs-app/blob/main/src/mongodb/groups/README.MD);
- GraphQL и MongoDB (api/graphql) - [Schema](https://github.com/vsv14/task-nestjs-app/blob/main/src/graphql/schemas/schema.gql).

# PostgreSQL
```
Сущности:

  user {
    id,
    email,
    username
  }

  group {
    id,
    name,
    authorId
  }

  group_users_user { 
    groupId,
    userId
  }

  user_friends_user {
    userId_1,
    userId_2
  }
```

# MongoDB
```
Коллекции:

users: user.schema
{
  _id?: string
  email: string
  username: string
  groups?: Group[]
  friendsId?: string[]
}

groups: group.schema
{
  __id?: string    
  name: string
  authorId?: string
  usersId?: string[]
}
```
# MongoDB + GraphQL
```
# ------------------------------------------------------
# AUTOMATICALLY GENERATED SCHEMA
# ------------------------------------------------------

type Group {
  _id: String
  name: String!
  authorId: String
  usersId: [String!]
}

type User {
  _id: String
  email: String
  username: String
  groups: [Group!]
  friendsId: [String!]
}

type UserType {
  _id: String
  email: String
  username: String
  groups: [Group!]
  friendsId: [User!]
}

type GroupType {
  _id: String
  name: String
  authorId: User
  usersId: [User!]
}

type Query {
  getUser(_id: String!): UserType!
  getUsers: [User!]!
  removeUser(_id: String!): User!
  getGroup(_id: String!): GroupType!
  getGroups: [Group!]!
  removeGroup(_id: String!): Group!
}

type Mutation {
  createUser(user: CreateUserDto!): User!
  updateUser(_id: String!, user: CreateUserDto!): User!
  addFriends(user: AddFriendsDto!): User!
  createGroup(group: CreateGroupDto!): Group!
  updateGroup(_id: String!, group: CreateGroupDto!): Group!
  addUsersGroup(group: AddUsersGroupDto!): Group!
}

input CreateUserDto {
  email: String!
  username: String!
  friendsId: [String!]
}

input AddFriendsDto {
  _id: String!
  friendsId: [String!]!
}

input CreateGroupDto {
  name: String!
  authorId: String!
  usersId: [String!]!
}

input AddUsersGroupDto {
  _id: String!
  usersId: [String!]!
}

```