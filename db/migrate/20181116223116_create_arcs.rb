class CreateArcs < ActiveRecord::Migration[5.1]
  def change
    create_table :arcs, id: :uuid do |t|
      t.belongs_to :creator, references: :user, index: true, type: :uuid
      t.string :title, null: false
      t.text :description
      t.datetime :deleted_at
      t.timestamps
    end

    add_foreign_key :arcs, :users, column: :creator_id, on_delete: :nullify
  end
end
