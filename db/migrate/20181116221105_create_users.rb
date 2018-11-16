class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email
      t.string :password_digest
      t.string :password_reset_token
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
