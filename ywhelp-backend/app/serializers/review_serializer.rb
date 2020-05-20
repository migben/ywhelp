class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :stars, :image, :comment
end
