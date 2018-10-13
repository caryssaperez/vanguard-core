const graphql = require('graphql');
const pgp = require('pg-promise')();

const cn = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
};
const db = {};
db.conn = pgp(cn);

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = graphql;

const { ArcType, EventType } = require('./types');
const Arc = mongoose.model('arcs');
const Event = mongoose.model('events');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    arcs: {
      type: new GraphQLList(ArcType),
      args: { userId: { type: GraphQLID } },
      resolve(parent, args) {
        let castId = mongoose.Types.ObjectId(args.userId);
        return Arc.find({ _user: castId });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addArc: {
      type: ArcType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        _user: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let arc = new Arc({
          title: args.title,
          _user: args.userId,
        });

        return arc.save();
      },
    },
    addEvent: {
      type: EventType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        arcId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let event = new Event({
          title: args.title,
          arcId: args.arcId,
        });

        return event.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
