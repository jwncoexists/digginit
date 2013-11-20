class CreateCollaborations < ActiveRecord::Migration
  def change
    create_table :collaborations do |t|
      t.references :wiki, index: true
      t.references :user, index: true

      t.timestamps
    end
    add_foreign_key(:collaborations, :users, dependent: :delete)
    add_foreign_key(:collaborations, :wikis, dependent: :delete)
  end
end
