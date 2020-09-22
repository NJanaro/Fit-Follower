class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
      render json: ["password or username was incorrect"], status: 401
    end

  end

  def destroy
    @user = current_user
    if @user
      sign_out!
      render 'api/users/show'
    else
      render json: ["You aren't currently signed in"]
    end
  end

end
  

