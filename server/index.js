import express from "express";
import eg from "express-graphql";
import {schema} from "./schema.js";
import {resolvers} from "./resolvers.js";


const app = express();

app.use(
  "/graphql",
  eg.graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);


const port = process.env.PORT || 4200;

app.listen(port);

console.log(`🚀 Server ready at http://localhost:4200/graphql`);