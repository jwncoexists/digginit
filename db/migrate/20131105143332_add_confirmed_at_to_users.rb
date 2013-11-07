class AddConfirmedAtToUsers < ActiveRecord::Migration
  def change
    add_column :users, :confirmed_at, :date
    add_index :users, :confirmed_at
  end
end
