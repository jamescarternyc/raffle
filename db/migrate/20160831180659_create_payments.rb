class CreatePayments < ActiveRecord::Migration[5.0]
  def change
    create_table :payments do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :token

      t.timestamps
    end
  end
end
