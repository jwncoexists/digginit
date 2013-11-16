class Collaborator < ActiveRecord::Base
  attr_accessible :wiki_id, :user_id
  has_and_belongs_to_many :wikis
  belongs_to :user
end
