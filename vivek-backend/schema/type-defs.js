const { gql } = require('apollo-server');

const typeDefs = gql `

 type user {
    id: ID
    name: String
    email: String
    address: String
 }

 input userInput{
    name: String
    email: String
    address: String
 }
 
 input userUpdate{
    userId:ID
    name: String
    email: String
    address: String
 }


 type Query{
    getUser:[user]
 }

 type Mutation{
    createUser(UserInput:userInput):user
    updateUser(UserUpdate:userUpdate):user
    deleteUser(userId:ID):user
 }

`

module.exports = { typeDefs }