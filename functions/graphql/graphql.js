const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
    type Query {
        hello: String
        allAuthors: [Author!]
        author(id: Int!): Author
        authorByName(name: String!): Author
        allEvents: [Evento!]
        eventsByFecha(name: String!): Evento
    }
    type Author {
        id: ID!
        name: String!
        married: Boolean!
    }
    type Evento {
        id: ID!
        fecha: String!
        motivo: String!
    }
`;

const authors = [
    { id: 1, name: 'Terry Pratchett', married: false },
    { id: 2, name: 'Stephen King', married: true },
    { id: 3, name: 'JK Rowling', married: false },
];

const events = [
    { id: 1, fecha: '13 de Septiembre', motivo: 'Comprar regalos de Navidad' },
    { id: 2, fecha: '22 de Octubre', motivo: 'Cumpleaños Gabriel' },
    { id: 3, fecha: '1 de Enero de 2021', motivo: 'Feliz año Nuevo!' },
];

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello, world!';
        },
        allAuthors: () => {
            return authors;
        },
        author: () => {},
        authorByName: (root, args) => {
            console.log('hihhihi', args.name);
            return (
                authors.find((author) => author.name === args.name) ||
                'NOTFOUND'
            );
        },
        allEvents: () => {
            return events;
        },
        eventsByFecha: (root, args) => {
            console.log('hihhihi', args.fecha);
            return (
                events.find((event) => event.fecha === args.fecha) || 'NOTFOUND'
            );
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
