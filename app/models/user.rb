class User < ActiveRecord::Base


  has_secure_password

  before_create :set_member

  ROLES = %w[member premium admin]
  def role?(base_role)
    role.nil? ? false : ROLES.index(base_role.to_s) <= ROLES.index(role)
  end  

  private

  def set_member
    self.role = 'member'
  end
end
