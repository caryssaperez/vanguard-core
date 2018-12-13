module Mutations
  class SignInUser
    argument :email, Types::AuthProviderEmailInput, null: false

    type Types::AuthenticateType

    def call(obj, args, ctx)

    end
  end
end
