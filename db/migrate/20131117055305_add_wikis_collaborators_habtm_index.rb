class AddWikisCollaboratorsHabtmIndex < ActiveRecord::Migration
  def change
    add_index :collaborators, [:wiki_id, :user_id]
  end
end
