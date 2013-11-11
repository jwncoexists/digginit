class AddConfirmedAtDefault < ActiveRecord::Migration
  def up
    change_column :users, :confirmed_at, :date, :default => nil
  end

  def down
    change_column :users, :confirmed_at, :date
  end
end
