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

    if user.role? :admin
      can :manage, :all
    elsif user.role? :premium
      can :create, Wiki
      can :read, Wiki.visible_to(user) do |w| !w.collaborators.empty? end
      can :update, Wiki.visible_to(user) do |w| !w.collaborators.empty? end
    elsif user.role? :member
      can :read, Wiki, public: true
      can :read, Wiki.visible_to(user) do |w| !w.collaborators.empty? end
      can :update, Wiki.visible_to(user) do |w| !w.collaborators.empty? end
    end
    can :read, Wiki, public: true

  end
end
