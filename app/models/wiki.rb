class Wiki < ActiveRecord::Base
  attr_accessible :title, :description, :public

  validates :title, length: { minimum: 5 }, presence: true
  validates :description, length: { minimum: 20 }, presence: true

  has_many :collaborators

  scope :visible_to, lambda { |user| user.role == 'admin' ? scoped : Wiki.includes(:collaborators).where("wikis.public = true OR collaborators.user_id = ?", user.id) }

  def digginit_wiki
    Wiki.find_by_title('digginIt')
  end

end
