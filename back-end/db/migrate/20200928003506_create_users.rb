class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :image_url
      t.string :attracted_to
      t.string :occupation
      t.string :interests
      t.string :location
      t.string :phone_number
      t.string :email_address
      t.string :veggie_type

      t.timestamps
    end
  end
end
