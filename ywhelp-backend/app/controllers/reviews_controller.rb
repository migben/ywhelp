class ReviewsController < ApplicationController
    before_action :authorized, only: [:create]

    def create
   
        @new_review = Review.create(user: @user)

        params[:restaurant_ids].each do |rest_id|
            Review.create(restaurant_id: rest_id, review: @new_review)
        end


        render json: @new_review
    end
end
