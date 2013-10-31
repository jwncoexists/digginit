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

3. To configure your SendGrid user name/password, copy the "config/application.example.yml" file, and remove "example" from the name, then specify your configurations in this file. Your application.yml should contain your sensitive credentials. It should be included in .gitnore as well.


Usage
-----

