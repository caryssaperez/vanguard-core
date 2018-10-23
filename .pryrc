require "colorize"

# Note: If you do not wish to load pry as your default rails console,
# you can opt out with DISABLE_PRY_RAILS=1 (set by the `pry-rails` gem)
#
# eg.
# heroku run DISABLE_PRY_RAILS=1 rails console -a lessonly-staging

class CustomPrySettings
  def initialize
    set_prompt
    set_vi_mode if ENV["PRY_VI_MODE"] == "true"
  end

  private

  def set_vi_mode
    Readline.vi_editing_mode
  end

  def set_prompt
    rails_env = ENV["RAILS_ENV"]
    color = case rails_env
    when "production"
      :red
    when "review", "development"
      :blue
    when "test"
      :yellow
    else
      puts "Unknown rails environment (#{rails_env}) - Set it in `.pryrc` to customize it."
      :pink
    end

    custom_prompt = rails_env.colorize(color)
    Pry.config.prompt = proc { |obj, nest_level, _| "#{custom_prompt} > " }
  end
end

@vancore = CustomPrySettings.new
