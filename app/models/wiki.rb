class Wiki < ActiveRecord::Base
  attr_accessible :title, :description, :public

  validates :title, length: { minimum: 5 }, presence: true
  validates :description, length: { minimum: 20 }, presence: true

  has_many :wiki_users

  scope :visible_to, lambda { |user| user.role == 'admin' ? scoped : Wiki.includes(:wiki_users).where("wikis.public = true OR wiki_users.user_id = ?", user.id) }

  def digginit_wiki
    Wiki.find_by_title('digginIt')
  end

end
