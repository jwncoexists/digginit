class User < ActiveRecord::Base

  attr_accessible :name, :email, :password, :password_confirmation, :confirmed_at, :account
  before_save :update_slug
  has_secure_password
  has_many :collaborations
  has_many :wikis, :through => :collaborations

  ACCOUNTS = %w[member premium admin]
  def account?(base_account)
    account.nil? ? false : ACCOUNTS.index(base_account.to_s) <= ACCOUNTS.index(account)
  end 

  def update_slug
    self.slug = self.name.parameterize
  end

  def to_param
    self.slug
    # self.id
  end
end
