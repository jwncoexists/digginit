class RenameWikiUsersToCollaborators < ActiveRecord::Migration
  def change
    rename_column :wiki, :wiki_users, :wiki_user
  end
end
