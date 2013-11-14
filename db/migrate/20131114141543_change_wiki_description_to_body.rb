class ChangeWikiDescriptionToBody < ActiveRecord::Migration
  def self.up
    rename_column :wikis, :description, :body
  end

  def self.down
    rename_column :wikis, :body, :description
  end
end
