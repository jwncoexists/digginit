class User < ActiveRecord::Base
  attr_accessible :email, :password_digest, :name, 
  validates :name, presence: true, uniqueness: true
  before_create :set_member
  has_secure_password

  ROLES = %w[member premium admin]
  def role?(base_role)
    role.nil? ? false : ROLES.index(base_role.to_s) <= ROLES.index(role)
  end  

  private

  def set_member
    self.role = 'member'
  end
end
