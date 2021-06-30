const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// this is a resolver function for each API endpoint you have
const root = {
  hello: () => {
    return "hello world";
  },
};

graphql(schema, "{ hello }", root).then((response) => {
  console.log(response);
});
