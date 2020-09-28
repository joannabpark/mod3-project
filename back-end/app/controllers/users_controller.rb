class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def show
        user = OtherUser.find(params[:id])
        render json: UserSerializer.new(user)
    end

    def new

    end

    def create

    end

    def edit

    end

    def update

    end

    def destroy

    end

end
