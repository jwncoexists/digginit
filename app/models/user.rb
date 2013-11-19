class User < ActiveRecord::Base

  attr_accessible :name, :email, :password, :password_confirmation, :confirmed_at, :account
  has_secure_password
  has_many :collaborators

  ACCOUNTS = %w[member premium admin]
  def account?(base_account)
    account.nil? ? false : ACCOUNTS.index(base_account.to_s) <= ACCOUNTS.index(account)
  end  

end
