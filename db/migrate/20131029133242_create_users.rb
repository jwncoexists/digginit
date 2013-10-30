class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name,             :null => false
      t.string :password_digest,  :null => false, :default => ""
      t.string :email,            :null => false, :default => ""
      t.string :role

      t.timestamps
    end
    add_index :users, :email
  end
end
