class RenameWikiUsersToCollaborators < ActiveRecord::Migration
  def change
    rename_table :wiki_users, :collaborators
  end
end
