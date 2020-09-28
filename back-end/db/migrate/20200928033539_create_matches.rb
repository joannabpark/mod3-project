class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.belongs_to :user_id, null: false, foreign_key: true
      t.belongs_to :other_user_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
