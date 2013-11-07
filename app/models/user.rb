class User < ActiveRecord::Base

  has_secure_password

  ROLES = %w[member premium admin]
  def role?(base_role)
    role.nil? ? false : ROLES.index(base_role.to_s) <= ROLES.index(role)
  end  

end
