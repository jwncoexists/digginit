class User < ActiveRecord::Base

  attr_accessible :name, :email, :password, :password_confirmation, :confirmed_at, :role
  has_secure_password
  has_many :wiki_users
  after_create :set_cur_wiki_to_digginit

  def set_cur_wiki_to_digginit
    self.update_attribute(:cur_wiki, Wiki.find_by_title('digginIt').id)
  end

  ROLES = %w[member premium admin]
  def role?(base_role)
    role.nil? ? false : ROLES.index(base_role.to_s) <= ROLES.index(role)
  end  

end
