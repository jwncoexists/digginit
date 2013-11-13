class AddCreatorToWikiModifyDefaultForPublic < ActiveRecord::Migration
  def change
    add_reference :wikis, :users, index: true, presence: true
    change_column :wikis, :public, :boolean, :default => true
  end
end
