class Book < ActiveRecord::Base
  attr_accessible :title, :promo_link, :description, :quote, :author

  has_many :tags
  has_many :reviews
end
