class WikiChangeUsersIdToSingular < ActiveRecord::Migration
  def change
     rename_column :wikis, :users_id, :user_id
  end
end
