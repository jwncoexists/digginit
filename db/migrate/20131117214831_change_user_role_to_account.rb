class ChangeUserRoleToAccount < ActiveRecord::Migration
  def change
    rename_column :users, :role, :account
  end
end
