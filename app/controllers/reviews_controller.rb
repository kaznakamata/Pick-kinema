class ReviewsController < ApplicationController
  def index
  end
  def new
  end
  def create
    Review.create(review_params)
    redirect_to root_path
  end

  private
  def review_params
    params.require(:review).permit(:tmdb_id, :body)
  end
end
