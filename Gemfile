source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby "2.4.2"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
gem "railties", "~> 5.1.6"

# Supported DBs
gem 'pg'

# Use Puma as the app server
gem 'puma', '~> 3.7'
gem "puma_worker_killer", "~> 0.1"

# API
gem 'grape', '~> 1.1'
gem 'grape-entity', '~> 0.7.1'
gem "rack-throttle", "~> 0.4"
gem 'rack-cors', '~> 1.0.0', require: 'rack/cors'

# GraphQL API
gem 'graphql', '~> 1.8.0'
gem 'graphiql-rails', '~> 1.4.10'

# Pagination
gem 'kaminari', '~> 1.0'

# Cache
gem 'redis-rails', '~> 5.0.2'

# Redis
gem 'redis', '~> 3.2'
gem 'connection_pool', '~> 2.0'

# Protect against bruteforcing
gem 'rack-attack', '~> 4.4.1'

# Debugging helpers
gem "colorize", "~> 0.7.7", require: false
gem "pry", "~> 0.10"
gem "pry-nav", "~> 0.2"
gem "pry-rails", "~> 0.3.4"
gem 'awesome_print', require: false

# Authorization
gem "jwt", "~> 1.5.1"

gem "amoeba", "~> 3.1"
gem "json", "~> 2.0"
gem "sprockets", "~> 3.7.0"
gem "nokogiri", "~> 1.8.2"
gem "oauth", "0.4.7"
gem "bcrypt-ruby", "3.1.2"
gem "accessly", "~> 1.0"

group :development, :test do
  # Testing
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'database_cleaner', '~> 1.5.0'
  gem 'factory_bot_rails', '~> 4.8.2'
  gem 'rspec-rails', '~> 3.7.0'
  gem 'rspec-retry', '~> 0.4.5'

  # Linting
  gem 'rubocop', '~> 0.54.0'
  gem 'rubocop-rspec', '~> 1.22.1'

  # Benchmarking
  gem 'benchmark-ips', '~> 2.3.0', require: false
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'letter_opener_web', '~> 1.3.0'
end

group :test do
  gem "fakeredis", require: "fakeredis/rspec"
  gem "json_expressions", "~> 0.9"
  gem "vcr", "~> 3.0"
  gem "webmock", "~> 2.3"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'graphiql-rails', group: :development