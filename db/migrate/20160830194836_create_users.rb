class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.float :phonenumber
      t.integer :numofentry
      t.string  :token
     
      t.timestamps
    end
  end
end
