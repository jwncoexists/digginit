class DropCollaboratorsTable < ActiveRecord::Migration
  def change
    drop_table :collaborators
  end
end