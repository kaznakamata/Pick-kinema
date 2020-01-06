class Review < ApplicationRecord
  # belongs_to :user
  def self.search(search)
    Review.where('tmdb_id = #{search}')
  end
end
