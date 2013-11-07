class SessionsController < ApplicationController
  def new

  end

  def create
    user = User.find_by(email: params[:email])
    if user and user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "You are logged in."
    else
      redirect_to root_path, alert: "Invalid user/password combination."
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "You are logged out."
  end
end
