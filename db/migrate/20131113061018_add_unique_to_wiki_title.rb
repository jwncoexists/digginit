class AddUniqueToWikiTitle < ActiveRecord::Migration
  def up
    change_column :wikis, :title, :string, :unique => true
  end

  def down
    change_column :wikis, :title, :string
  end
end
