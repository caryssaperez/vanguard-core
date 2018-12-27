class CreateUsers < ActiveRecord::Migration[5.1]
  tag :predeploy

  def change
    create_table :users, id: :uuid do |t|
      t.string :email, unique: true
      t.string :password_digest
      t.string :password_reset_token
      t.datetime :password_reset_at
      t.string :remember_token
      t.string :name
      t.string :locale, default: "en"
      t.datetime :deleted_at
      t.timestamps

      t.index :deleted_at
      t.index :email
    end
  end
end
