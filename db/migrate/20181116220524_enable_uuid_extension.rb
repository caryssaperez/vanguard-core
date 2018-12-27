class EnableUuidExtension < ActiveRecord::Migration[5.1]
  tag :predeploy

  def change
    enable_extension "pgcrypto"
  end
end
