// Experimental GraphQL API implementation
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Experimental schema - may break existing functionality
const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String
    createdAt: String
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(username: String!, email: String): User
    deleteUser(id: ID!): Boolean
  }
`);

// Mock data for testing
const users = [
  { id: '1', username: 'admin', email: 'admin@demo.com', createdAt: '2024-01-01' },
  { id: '2', username: 'user1', email: 'user1@demo.com', createdAt: '2024-01-02' }
];

const root = {
  user: ({ id }) => users.find(user => user.id === id),
  users: () => users,
  createUser: ({ username, email }) => {
    const newUser = {
      id: String(users.length + 1),
      username,
      email,
      createdAt: new Date().toISOString().split('T')[0]
    };
    users.push(newUser);
    return newUser;
  },
  deleteUser: ({ id }) => {
    const index = users.findIndex(user => user.id === id);
    if (index > -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  }
};

// WARNING: This is experimental and may not be stable
module.exports = { schema, root };