class ChargesController < ApplicationController
  def new
  end

  def create
    # Amount in cents
    @amount = 500

    customer = Stripe::Customer.create(
      :email => params[:email],
      :card  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'digginIt Premium User',
      :currency    => 'usd'
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to charges_path
  end
end
