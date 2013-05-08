class BookSerializer < ActiveModel::Serializer

  embed :ids

  attributes :id, :title, :promo_link, :description, :quote, :author
  
  has_many :tags, :reviews
end