class EmailConfirmationsController < ApplicationController

  def new
    u = User.find_by(token: params[:token])
    u.update_attribute(:confirmed_at, Time.now)
    # redirect to the last wiki used
    redirect_to Wiki.find(u.cur_wiki), notice: "Your registration with digginIt has been confirmed."
  end

end
