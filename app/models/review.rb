class Review < ApplicationRecord
  # belongs_to :user
  def self.search(search)
    # Review.where('tmdb_id LIKE(?)', '%#{search}%')
    # Review.where('tmdb_id LIKE(?)', '%1%')
    Review.where(tmdb_id: "#{search}")
  end
end