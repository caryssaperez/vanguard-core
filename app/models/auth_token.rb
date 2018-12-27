class AuthToken

  JWT_ALGORITHM = "HS256".freeze

  attr_reader :user

  def initialize(user:)
    @user = user
  end

  def token
    JWT.encode(payload, ENV["JWT_SECRET"], JWT_ALGORITHM)
  end

  private

  def payload
    {
      exp: Time.now.to_i + 60 * 60,
      iat: Time.now.to_i,
      iss: ENV["JWT_ISSUER"],
      user: {
        email: user.email
      }
    }
  end
end
