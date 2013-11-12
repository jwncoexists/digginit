class Collaborator < ActiveRecord::Base
  attr_accessible :wiki_id, :user_id, :wiki_role
  belongs_to :wiki
  belongs_to :user
end
