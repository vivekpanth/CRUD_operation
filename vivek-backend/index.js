const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');
const server = new ApolloServer({ typeDefs, resolvers });


mongoose.connect('mongodb+srv://vivekpanth09:Deloitte123@cluster0.uvi2gur.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    server.listen({ port: 4000 }).then(() => {
        console.log('Server is running!!!')
    })
}).catch(err => {
    console.log(err)
})