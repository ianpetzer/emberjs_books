class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name
      t.references :book

      t.timestamps
    end
    add_index :tags, :book_id

	# create_table :books_tags, :id => false do |t|
	#   t.references :book, :tag
	# end

	# add_index :books_tags, [:book_id, :tag_id]

  end
end
