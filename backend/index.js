import express from "express";
import { graphqlHTTP } from "express-graphql";
import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const app = express();

const UsersList = [
  { id: "1", name: "ramesh", email: "test@gmail.com" },
  { id: "2", name: "jayesh", email: "test@gmail.com" },
  { id: "3", name: "shuresh", email: "test@gmail.com" },
  { id: "4", name: "mahesh", email: "test@gmail.com" },
];

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // to get the all users
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return UsersList;
      },
    },
    // get user by id
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return UsersList.find((user) => user.id === args.id);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // add user
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, { name, email }) {
        const newUser = { name, email, id: Date.now().toString() };
        UsersList.push(newUser);
        return newUser;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
