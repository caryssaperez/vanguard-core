module Types
  class QueryType < BaseObject
    graphql_name "Query"

    field :user, Types::UserType, null: true do
      description "Find a post by ID"
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end
  end
end
