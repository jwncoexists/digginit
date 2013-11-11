class WikisController < ApplicationController
  def index
    @wikis = Wiki.visible_to(current_user)
  end

  def new
    @wiki = Wiki.new
  end

  def show
    @wiki = Wiki.find(params[:id])
  end

  def edit
    @wiki = Wiki.find(params[:id])
  end

  def create
    @wiki = Wiki.new(params[:wiki])
    
    # assign user to wiki in wiki_user and set wiki role = admin
    wiki_user = WikiUser.new( wiki_id: @wiki.id, user_id: current_user.id)
    if @wiki.save and wiki_user.save
      wiki_user.update_attribute(:wiki_role, 'admin')
      flash[:notice] = "Wiki was saved successfully."
      redirect_to @wiki
    else
      flash[:error] = "Error creating wiki. Please try again."
      render :new
    end
  end

   def update
     @wiki = Wiki.find(params[:id])
     if @wiki.update_attributes(params[:wiki])
       redirect_to @wiki
     else
       flash[:error] = "Error saving wiki.  Please try again"
       render :edit
     end
   end

end
