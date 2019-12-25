class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :tmdb_id
      t.text :body
      t.integer :user_id, foreign_key: true
      t.timestamps
    end
  end
end
