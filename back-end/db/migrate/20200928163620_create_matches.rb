class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.integer :matcher_id, foreign_key: true
      t.integer :matchee_id, foreign_key: true
    end
  end
end
