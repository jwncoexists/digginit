class WikisController < ApplicationController
  def index
    @wikis = Wiki.visible_to(current_user)
  end

  def new
    @wiki = Wiki.new
  end

  def show
    @wiki = Wiki.find(params[:id])
    current_user.cur_wiki = @wiki.id
    current_user.save
  end

  def edit
    @wiki = Wiki.find(params[:id])
    authorize! :update, @wiki, message: "You need to be an administrator to do that."
  end

  def create
    @wiki = Wiki.new(params[:wiki])
    authorize! :create, @wiki, message: "You need to have a premium account to create a wiki."
    
    # assign user to wiki in collaborator and set wiki role = admin
    authorize! :create, @wiki, message: "You need to be a premium member to create a wiki."
    if @wiki.save
      collaborator = Collaborator.new( wiki_id: @wiki.id, user_id: current_user.id)
      collaborator.update_attribute(:wiki_role, 'admin')
      collaborator.save
      flash[:notice] = "Wiki was created successfully."
      redirect_to @wiki
    else
      flash[:error] = "Error creating wiki. Please try again."
      render :new
    end
  end

   def update
     @wiki = Wiki.find(params[:id])
     authorize! :update, @wiki, message: "You need to be an administrator of the wiki to update it."
     if @wiki.update_attributes(params[:wiki])
       redirect_to @wiki
     else
       flash[:error] = "Error saving wiki.  Please try again"
       render :edit
     end
   end

  def destroy
    @wiki = Wiki.find(params[:id])
    title = @wiki.title
    authorize! :destroy, @wiki, message: "You need to be an administrator to delete a wiki."
    if @wiki.destroy
      flash[:notice] = "\"#{title}\" was deleted successfully."
      redirect_to root_path
    else
      flash[:error] = "There was an error deleting the wiki."
      render :show
    end
  end
end
