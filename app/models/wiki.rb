class Wiki < ActiveRecord::Base
  attr_accessible :title, :body, :public, :user_id, :user_ids
  before_save :update_slug

  validates :title, length: { minimum: 5 }, presence: true
  validates :body, length: { minimum: 20 }, presence: true

  has_many :collaborations
  has_many :users, :through => :collaborations

  default_scope order('title ASC')
  scope :visible_to, lambda { |user| user.account == 'admin' ? scoped : Wiki.includes(:collaborations).where("wikis.public = true OR wikis.user_id = ? OR collaborations.user_id = ?", user.id, user.id) }
  # scope :visible_to, lambda { |user| user.role == 'admin' ? scoped : joins(:collaborators).where("wikis.public = true OR wikis.user_id = ? OR wikis.collaborators.user_id = ?", user.id, user.id) }
  # scope :visible_to, lambda { |user| user.account == 'admin' ? scoped : Wiki.where('public=true OR user_id = ?', user.id)}

  def update_slug
    self.slug = self.title.parameterize
  end

  def to_param
    self.slug
    # self.id
  end
end
