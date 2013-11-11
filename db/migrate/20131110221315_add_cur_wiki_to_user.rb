class AddCurWikiToUser < ActiveRecord::Migration
  def change
    add_column :users, :cur_wiki, :integer, default: nil
  end
end
