class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    #


    #
    # The first argument to `can` is the action you are giving the user 
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on. 
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/ryanb/cancan/wiki/Defining-Abilities

    user ||= User.new # guest user (not logged in)

    # Here's the Access Rules:
    # Public Wikis:
    #   Only digginIt Users can Create. 
    #   All Users/Non-Users can View. 
    #   Only the Creator/Admins can Update/Delete
    # Private Wikis:
    #   Only Premium Users/Admins can Create.
    #   Only the Creator, Collaborators & Admins can View, Update, Delete

    if user.account? :admin
      can :manage, :all
    elsif user.account? :premium
      can :create_public, Wiki
      can :create_private, Wiki
      can :create, Wiki
      can :read, Wiki, :user_id => user.id
      # can :read, Wiki.visible_to(user) do |w| !w.collaborators.empty? end
      can :update, Wiki, :user_id => user.id
      # can :update, Wiki.visible_to(user) do |w| !w.collaborators.empty? end
      can :destroy, Wiki, :user_id => user.id
      can :update_collaborators, Wiki, :public => false, :user_id => user.id
    elsif user.account? :member
      can :create_public, Wiki
      can :create, Wiki
      can :read, Wiki, :user_id => user.id
      # can :read, Wiki.visible_to(user) do |w| !w.collaborators.empty? end
      can :update, Wiki, :user_id => user.id
      # can :update, Wiki.visible_to(user) do |w| !w.collaborators.empty? end
      can :destroy, Wiki, :user_id => user.id
    end
    can :read, Wiki, public: true

  end
end
