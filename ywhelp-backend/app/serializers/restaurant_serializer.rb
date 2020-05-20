class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :category, :rating, :price_range
end
