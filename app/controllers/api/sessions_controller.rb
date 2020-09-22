class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status 401 
    end

  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end

end
  

