module ApplicationHelper

  class ApplicationController
    def current_user
      # temporarily, just find the first user for now
      User.find(1) 
    end
  end

end
