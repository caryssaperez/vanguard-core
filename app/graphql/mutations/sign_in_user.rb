module Mutations
  class SignInUser < BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true

    type Types::AuthenticateType

    def resolve(email:, password:)
      user = User.find_by(email: email)
      return unless user
      return unless user.authenticate(password)

      OpenStruct.new(
        token: AuthToken.new(user: user).token,
        user: user
      )
    end
  end
end
