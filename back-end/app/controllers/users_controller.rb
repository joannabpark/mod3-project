class UsersController < ApplicationController

    def index
        users = User.all 
        render json: UserSerializer.new(users)
    end

    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user)
    end

    def new
        user = User.new
    end

    def create
        user = User.find_or_create_by(name: params[:user])
        render json: UserSerializer.new(user)
    end

    def edit
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: UserSerializer.new(user)
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: { message: 'success'}
    end

    private

    def user_params
        params.require(:user).permit(:name, :age, :image_url, :attracted_to, :occupation, :interests, :location, :phone_number, :email_address, :veggie_type)
    end

end
