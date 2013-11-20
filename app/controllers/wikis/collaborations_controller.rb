class Wikis::CollaborationsController < ApplicationController
  def index
    @wiki = Wiki.find(params[:wiki_id])
    @collaborations = Collaboration.all
    @users = User.all
  end

  def create
    # @wiki = Wiki.find_by_slug(params[:wiki_id])
    @wiki = Wiki.find(params[:wiki_id])
    @collaboration = Collaboration.new(params[:collaboration])
    if @collaboration.save
      flash[:notice] = "Collaboration was saved successfully."
      redirect_to wikis_path
    else
      flash[:error] = "Error creating collaboration. Please try again."
      render :new
    end
  end  
end
