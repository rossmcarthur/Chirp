class Api::UsersController < ApplicationController
  def create
  @user = User.new(user_params)
  if @user.save
    login(@user)
    render "api/users/show"
  else
    render json: @user.errors.full_messages, status: 422
  end
end

def show
  @user = User.find_by(params[:username])
  render :show
end

private

  def user_params
    params.require(:user).permit(:id, :email, :password, :username)
  end

end
