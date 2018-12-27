module Types
  class MutationType < Types::BaseObject
    graphql_name "Mutation"

    field :sign_in_user, mutation: Mutations::SignInUser
  end
end
