class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user
      if !user.confirmed_at
        flash[:alert] = "Email address has not been verified. Please click link in confirmation email to verify."
        render :new
      elsif user.authenticate(params[:password])
        session[:user_id] = user.id
        redirect_to Wiki.find(user.cur_wiki), notice: "You are signed in to digginIt."
      else
        flash[:alert] =  "Invalid user/password combination."
        render :new
      end
    else
      flash[:alert] =  "Invalid user/password combination."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "You are signed out."
  end
end
