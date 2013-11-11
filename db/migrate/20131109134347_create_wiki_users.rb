class CreateWikiUsers < ActiveRecord::Migration
  def change
    create_table :wiki_users do |t|
      t.references :wiki, index: true
      t.references :user, index: true
      t.string :role

      t.timestamps
    end
    add_foreign_key(:wiki_users, :users, dependent: :delete)
    add_foreign_key(:wiki_users, :wikis, dependent: :delete)
  end
end
