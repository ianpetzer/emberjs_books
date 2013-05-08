class ReviewSerializer < ActiveModel::Serializer

  embed :ids

  attributes :id, :title, :body

  has_one :book
end