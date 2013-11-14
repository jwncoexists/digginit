class Wiki < ActiveRecord::Base
  attr_accessible :title, :description, :public, :user_id
  before_save :update_slug

  validates :title, length: { minimum: 5 }, presence: true
  validates :description, length: { minimum: 20 }, presence: true

  has_many :collaborators

  default_scope order('title ASC')
  scope :visible_to, lambda { |user| user.role == 'admin' ? scoped : Wiki.includes(:collaborators).where("wikis.public = true OR wikis.user_id = ? OR collaborators.user_id = ?", user.id, user.id) }
  def update_slug
    self.slug = self.title.parameterize
  end
  def to_param
    self.slug
  end
end
