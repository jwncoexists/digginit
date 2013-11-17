class WikisController < ApplicationController

  def index
    @wikis = Wiki.visible_to(current_user)
  end

  def new
    @wiki = Wiki.new
    @wiki.user_id = current_user.id

  end

  def show
    # @wiki = Wiki.find_by_slug(params[:id])
    @wiki = Wiki.find(params[:id])
    current_user.cur_wiki = @wiki.id
    current_user.save
  end

  def edit
    # @wiki = Wiki.find_by_slug(params[:id])
    @wiki = Wiki.find(params[:id])
    authorize! :update, @wiki, message: "You don't have access to edit this wiki."
  end

  def create
    @wiki = Wiki.new(params[:wiki])
    authorize! :create, @wiki, message: "You need to register for a Free account to create Public wikis, or a Premium account to create Priviate wikis."
    @wiki.user_id = current_user.id
    # assign user to wiki in collaborator and set wiki role = admin
    if @wiki.save
      flash[:notice] = "Wiki was created successfully."
      redirect_to @wiki
    else
      flash[:error] = "Error creating wiki. Please try again."
      render :new
    end
  end

   def update
     # @wiki = Wiki.find_by_slug(params[:id])
     @wiki = Wiki.find(params[:id])
     authorize! :update, @wiki, message: "You don't have access to this wiki to update it."
     if @wiki.update_attributes(params[:wiki])
       redirect_to @wiki
     else
       flash[:error] = "Error saving wiki.  Please try again."
       render :edit
     end
   end

  def destroy
    # @wiki = Wiki.find_by_slug(params[:id])
    @wiki = Wiki.find(params[:id])
    title = @wiki.title
    authorize! :destroy, @wiki, message: "You don't have acccess to delete this wiki."
    if @wiki.destroy
      flash[:notice] = "\"#{title}\" was deleted successfully."
      redirect_to root_path
    else
      flash[:error] = "There was an error deleting the wiki."
      render :show
    end
  end

end
