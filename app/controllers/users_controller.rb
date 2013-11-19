class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.order(:name)
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
    set_account
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    @user.account = @account

    if @user.save
      @user.update_attribute(:token, SecureRandom.hex(6))
      RegistrationMailer.registration_confirmation(@user, new_email_confirmation_url(token: @user.token)).deliver
      if( @account == "premium")
        redirect_to root_path, notice: "An email has been sent to your account. Please click the link in the email to verify address and complete your registration."
      else
        redirect_to new_charge_path, notice: "An email has been sent to your account. Please click the link in the email to verify address and complete your registration."
      end
    else
      flash[:error] = "Error creating new user. Please try again."
      render :new
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update

  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def set_account
      @account = params[:account]
      @user.account = @account
    end

    # Never trust parameters from the internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :account)
    end
end
