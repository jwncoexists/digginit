class CollaboratorsController < ApplicationController
  def index
    @collaborators = Collaborator.all
    @users = User.all
  end

  def show
    @collaborator = Collaborator.find(params[:id])
    @wiki = Wiki.find_by_slug(params[:wiki_id])
  end

  def new
    @collaborator = Collaborator.new
    @wiki = Wiki.new
  end

  def create
    @wiki = Wiki.find_by_slug(params[:wiki_id])
    @collaborator = Collaborator.new(params[:collaborator])
    @collaborator.wiki_id = @wiki.id
    @collaborator.user_id = current_user.id
    if @collaborator.save
      flash[:notice] = "Collaborator was saved successfully."
      redirect_to root
    else
      flash[:error] = "Error creating collaborator. Please try again."
      render :new
    end
  end  

  def edit

  end

  def update

  end  
end
