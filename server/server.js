const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
require('dotenv').config({path: 'variable.env'});
const Client = require('./models/Client');
const Invoice = require('./models/Invoice');
const User = require('./models/User');
const { graphiqlExpress, graphqlExpress} = require('apollo-server-express');
const { makeExecutableSchema} = require('graphql-tools');
var cors = require('cors')

const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers');


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


const app = express();
app.use('/graphiql', graphiqlExpress({ endpointURL:'/graphql'}))
app.use('/graphql', bodyParser.json(),
    graphqlExpress(({ cureentUser }) => ({
    schema,
    context:{
        Client,
        Invoice,
        User,
        
    }  
}))
);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch(err => console.error(err));


const PORT = process.env.PORT || 5555;



app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
});