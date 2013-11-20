class ChargesController < ApplicationController
  def new
    @user = params[:user]
  end

  def create
    # Amount in cents
    @amount = 500
    user = User.find_by_email(params[:stripeEmail])
    user.update_attribute(:account, "premium")

    customer = Stripe::Customer.create(
      :email => user.email,
      :card  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'digginIt Premium User',
      :currency    => 'usd'
    )
  if (current_user)
    redirect_to user_path(current_user), notice: 'Thank you for your payment'
  else
    redirect_to login_path, notice: 'Thank you for your payment'
  end
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to charges_path
  end
end
