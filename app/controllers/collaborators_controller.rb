class CollaboratorsController < ApplicationController
  def index
    @collaborators = Collaborator.all
  end

  def show
    @collaborator = Collaborator.find(params[:id])
  end

  def new
    @collaborator = Collaborator.new
  end

  def create
    @collaborator = Collaborator.new(params[:collaborator])
    if @collaborator.save
      flash[:notice] = "Collaborator was saved successfully."
      redirect_to @collaborator
    else
      flash[:error] = "Error creating collaborator. Please try again."
      render :new
    end
  end  

  def edit
    @collaborator = Collaborator.find(params[:id])
  end

  def update
    @collaborator = Collaborator.find(params[:id])
    if @collaborator.update_attributes(params[:collaborator])
      redirect_to @collaborator
    else
      flash[:error] = "Error saving collaborator.  Please try again"
      render :edit
    end
  end  
end
