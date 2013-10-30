# [digginit](http://digginit.herokuapp.com)

Allows users to create public and private Markdown-based wikis.

Setup
-----

<b>Establish SendGrid User Account:</b>

1. This program uses SendGrid email via Heroku. Do the following to establish a user account on Heroku via the command prompt:
  - heroku auth:logout
  - heroku addons:add sendgrid:starter

2. Verify SendGrid was successfully installed by typing 'heroku addons'

3. Get Sendgrid's user name and password, type:
  - heroku config:get SENDGRID_USERNAME
  - heroku config:get SENDGRID_PASSWORD

4. Copy config/initializers/setup_mail.tmp.rb setup_mail.rb
5. Copy the SENDGRID user name & password into the appropriate location in setup_mail.rb


Usage
-----

