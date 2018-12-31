require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you"ve limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module VanguardCore
  class Application < Rails::Application
    require_dependency Rails.root.join("lib/jwt_authorize.rb")

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.api_only = true

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :options]
      end
    end

    config.middleware.insert_after Rails::Rack::Logger, ::JwtAuthorize

    config.generators do |g|
      g.orm :active_record, primary_key_type: :uuid
    end

    config.active_record.schema_format = :sql
  end
end
