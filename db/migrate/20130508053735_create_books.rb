class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :promo_link
      t.string :author
      t.text :description
      t.text :quote

      t.timestamps
    end
  end
end
