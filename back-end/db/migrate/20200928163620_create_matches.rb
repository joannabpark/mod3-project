class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.belongs_to :matcher, null: false, foreign_key: true
      t.belongs_to :matchee, null: false, foreign_key: true
    end
  end
end
