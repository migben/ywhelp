class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :location
      t.string :category
      t.float :rating
      t.string :price_range

      t.timestamps
    end
  end
end
