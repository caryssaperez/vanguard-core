const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;

const Event = require('../../models/Event');

const EventType = new GraphQLObjectType({
  name: 'event',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    arcId: { type: new GraphQLNonNull(GraphQLID) }
  })
});

const ArcType = new GraphQLObjectType({
  name: 'arc',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    _user: { type: new GraphQLNonNull(GraphQLID) },
    events: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return Event.findBy({ arcId: args.arcId });
      }
    }
  })
});

module.exports = { EventType, ArcType };
