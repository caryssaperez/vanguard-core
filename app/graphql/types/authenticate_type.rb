module Types
  class AuthenticateType < BaseObject
    graphql_name "Authenticate"

    field :token, String
    field :user, Types::UserType
  end
end
