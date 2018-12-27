class JwtAuthorize

  JWT_ALGORITHM = "HS256".freeze

  def initialize(app)
    @app = app
  end

  def call(env)
    unless env["REQUEST_PATH"].match?(/\/graphiql\/?/)
      begin
        payload, header = JWT.decode(bearer, ENV["JWT_SECRET"], true, options)
        env[:user] = payload["user"]

        @app.call env
      rescue JWT::DecodeError
        [401, { "Content-Type" => "text/plain" }, ["A token must be passed."]]
      rescue JWT::ExpiredSignature
        [403, { "Content-Type" => "text/plain" }, ["The token has expired."]]
      rescue JWT::InvalidIssuerError
        [403, { "Content-Type" => "text/plain" }, ["The token does not have a valid issuer."]]
      rescue JWT::InvalidIatError
        [403, { "Content-Type" => "text/plain" }, ["The token does not have a valid 'issued at' time."]]
      end
    end

    @app.call env
  end

  private

  def options
    {
      algorithm: JWT_ALGORITHM,
      iss: ENV["JWT_ISSUER"]
    }
  end

  def bearer
    env.fetch("HTTP_AUTHORIZATION", "").slice(7..-1)
  end
end
