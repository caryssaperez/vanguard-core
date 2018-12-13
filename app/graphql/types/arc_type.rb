module Types
  class ArcType < BaseObject
    graphql_name "Arc"

    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :creator, Types::UserType, null: false, resolve: -> (arc, args, ctx) do
      arc.creator
    end
  end
end
