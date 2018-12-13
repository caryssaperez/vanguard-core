module Types
  class MutationType < Types::BaseObject
    graphql_name "Mutation"

    field :sign_in_user, function: Mutations::SignInUser.new
  end
end
