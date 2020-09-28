class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def show
        user = OtherUser.find(params[:id])
        render json: UserSerializer.new(user)
    end

end
