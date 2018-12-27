module Types
  class AuthProviderInputType < BaseObject
    graphql_name "AuthProviderInput"

    field :email, String, null: false
    field :password, String, null: false
  end
end
