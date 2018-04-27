import resolvers from './resolvers/index';
import {defaultErrorFormatter} from './defaultErrorFormatter';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {getUser} from './helpers/getUser';

const {GraphQLServer} = require('graphql-yoga');

createConnection().then(async connection => {
    const server = new GraphQLServer({
        typeDefs: './src/schemes/schema.graphql',
        resolvers: resolvers,
        context: req => ({
            ...req,
        })
    });

    server.options.port = 4001;
    server.options.formatError = defaultErrorFormatter;
    server.express.post(server.options.endpoint, (req, res, next) =>
        getUser(req, res, next)
    );
    return server.start(() => console.log(`The server is running on http://localhost:4001`));
});
