class Book < ActiveRecord::Base
  attr_accessible :title, :promo_link, :description, :quote, :author

  has_and_belongs_to_many :tags
  has_many :reviews
end
