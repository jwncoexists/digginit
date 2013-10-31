class RegistrationMailer < ActionMailer::Base
  default from: "jenniferwnelson@sbcglobal.net"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.registration_mailer.registration.subject
  #
  def registration_confirmation(user, url)
    @message = "Dear #{user.name},<br><br>Click the following link to complete your registration with digginIt:<br><br><a href='#{url}'>Confirm digginIt email</a>"

    mail to: user.email, subject: "digginit Registration Confirmation"
  end
end
