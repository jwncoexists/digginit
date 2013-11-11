class WikiUsersController < ApplicationController
  def index
    @wiki_users = Wiki_User.all
  end

  def show
    @wiki_user = Wiki_User.find(params[:id])
  end

  def new
    @wiki_user = Wiki_User.new
  end

  def create
    @wiki_user = Wiki_User.new(params[:wiki_user])
    if @wiki_user.save
      flash[:notice] = "Wiki User was saved successfully."
      redirect_to @wiki_user
    else
      flash[:error] = "Error creating wiki user. Please try again."
      render :new
    end
  end  

  def edit
    @wiki_user = Wiki_user.find(params[:id])
  end

  def update
    @wiki_user = Wiki_User.find(params[:id])
    if @wiki_user.update_attributes(params[:wiki_user])
      redirect_to @wiki_user
    else
      flash[:error] = "Error saving wiki user.  Please try again"
      render :edit
    end
  end  
end
