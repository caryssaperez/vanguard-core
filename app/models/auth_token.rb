class AuthToken

  JWT_ALGORITHM = "HS256".freeze

  def self.payload(user)
    {
      exp: Time.now.to_i + 60 * 60,
      iat: Time.now.to_i,
      iss: ENV["JWT_ISSUER"],
      user: {
        email: user.email
      }
    }
  end

  def self.token
    JWT.encode(payload, ENV["JWT_SECRET"], JWT_ALGORITHM)
  end
end
