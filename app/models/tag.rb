class Tag < ActiveRecord::Base
  belongs_to :book
  attr_accessible :name, :book_id
end
