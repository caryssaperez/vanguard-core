module Types
  class UserType < BaseObject
    graphql_name "User"

    field :id, ID, null: false
    field :email, String, null: false
    field :name, String, null: false
    field :arcs, [Types::ArcType], null: true, resolve: -> (user, args, ctx) do
      user.arcs.without_deleted
    end
  end
end
