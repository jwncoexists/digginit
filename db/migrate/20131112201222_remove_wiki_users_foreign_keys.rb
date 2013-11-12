class RemoveWikiUsersForeignKeys < ActiveRecord::Migration
  def change
    remove_foreign_key(:collaborators, name: 'wiki_users_user_id_fk')
    remove_foreign_key(:collaborators, name: 'wiki_users_wiki_id_fk')
    add_foreign_key(:collaborators, :users, dependent: :delete)
    add_foreign_key(:collaborators, :wikis, dependent: :delete)
  end
end
