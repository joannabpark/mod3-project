class OtherUsersController < ApplicationController

    def index
        other_users = OtherUser.all
        render json: OtherUserSerializer.new(other_users)
    end

    def show
        other_user = OtherUser.find(params[:id])
        render json: OtherUserSerializer.new(other_user)
    end

end
