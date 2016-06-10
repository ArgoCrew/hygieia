[![Hygieia. Detail aus der Medizin by Gustav Klimt](http://www.austria.info/media/17083/thumbnails/klimt-und-die-ringstrasse--belvedere--.jpg.3023126.jpg) </br> Hygieia. Detail aus der Medizin by Gustav Klimt](https://www.kunstkopie.nl/a/gustav-klimt/hygieia-detail-aus-der-me.html)

# Hygieia Services

> In Greek as well as Roman mythology, Hygieia (also Hygiea or Hygeia; Ancient Greek: Ὑγιεία or Ὑγεία, Latin: Hygēa or Hygīa), was the daughter of the god of medicine, Asclepius, and Epione. She was the goddess/personification of health (Greek: ὑγίεια - hugieia), cleanliness and hygiene. ~ [Wikipedia](https://en.wikipedia.org/wiki/Hygieia)

Hygieia consists of an API and a management interface focused on the healthcare industry.

**This software is not ready for production! It is still being developed and it will change in the future.**


## Healthcare Features

- When a blood transfusion is done it is sending a customized message to the donor


## Technical Features

- A LoopBack REST API with authentication enabled built on the [LoopBack Generator](https://www.npmjs.org/package/generator-loopback)
- A GUI built with AngularJS based on the [Angular Generator](https://github.com/yeoman/generator-angular)
- Angular UI-Router
- JSON-based forms by [angular-formly](https://formly-js.github.io/angular-formly/)
- Notifications by [angular-toasty](https://github.com/Salakar/angular-toasty)
- File upload with [LoopBack storage services](https://github.com/strongloop/loopback-component-storage/)
- Admin template powered by [almasaeed2010/AdminLTE](https://github.com/almasaeed2010/AdminLTE)
- Markdown Editor with live preview with [angular-markdown-editor](https://github.com/JimLiu/angular-markdown-editor)
- Bunch of useful filters for AngularJS: [a8m/angular-filter](https://github.com/a8m/angular-filter)
- [t4t5/sweetalert](https://github.com/t4t5/sweetalert) provided by [oitozero/ngSweetAlert](https://github.com/oitozero/ngSweetAlert)
- Automatically growing textarea's by [monospaced/angular-elastic](https://github.com/monospaced/angular-elastic)
- Social authentication with [LoopBack passport](https://github.com/strongloop/loopback-component-passport/)
- Multi-language support by [rubenv/angular-gettext](https://github.com/rubenv/angular-gettext)
- User management
- Send SMS and make Calls with [loopback-connector-twilio](https://github.com/dashby3000/loopback-connector-twilio)
- Loading indicators [chieffancypants/angular-loading-bar](https://github.com/chieffancypants/angular-loading-bar)?


## Try it now!

Deploy an instance on your Heroku account to play around with it!

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

An alternative way to get it running at Heroku is to install the [Heroku Toolbelt](https://toolbelt.heroku.com) and follow these steps:

```
git clone https://github.com/ArgonautsCrew/hygieia.git
cd hygieia
heroku apps:create hygieia
git push heroku master
```

### Users

After an installation the following users are created:

- **Admin user**: Email: ```admin@admin.com```, password: ```admin```
- **Regular user**: Email: ```user@user.com```:, password ```user```

Please note, at this moment there is no difference in permissions for admin users or regular users. This needs to change in the future!


## Installation

### Dependencies

Installation depends on `node`/`npm` with `grunt` and `bower` installed globally.

```shell
npm install -g bower grunt-cli
```

### The one-liner install

Please create an [issue](https://github.com/ArgonautsCrew/hygieia/issues/new) if this one does not work!

```shell
git clone https://github.com/ArgonautsCrew/hygieia.git && cd hygieia && npm install && grunt build && grunt serve
```

### The steps above of one-liner install:

#### Checkout the project:

```shell
git clone https://github.com/ArgonautsCrew/hygieia.git
```

#### Install the Node packages:

```shell
npm install
```

#### Run grunt build:

```shell
grunt build
```

#### Run grunt serve to start the API and frontend:

```shell
grunt serve
```

## Running

The project is separated in a server and a client.

### Server

To run the server you issue the command:

```shell
npm start
```

Or to run it with nodemon (needs `nodemon` installed globally). This will
automatically restart the server when you change its code:

```shell
npm run dev
```

The command `grunt serve` explained below will automatically start the API.

### Client

Rebuild the lb-services.js file with the correct `API_URL` for development.

    API_URL=http://0.0.0.0:3000/api grunt

To run the client you issue the command. This will also start the API.

```shell
grunt serve
```

It will open the project in your default browser with livereload enabled.
This will take care of reloading the page when you change your code.


## Connect to a database

You can specify the URL to the MongoDB database you want to use with the `MONGODB_URL` environment variable in `.env` file, if the file does not exist then create one.

```
MONGODB_URL=mongodb://localhost:27017/loopback-angular-admin
```

Set `INITDB` to true in `.env` file if you want to load the initial dataset, if the file does not exist then create one, which creates the admin user. The memory database (default) does this automatically.

```
INITDB=true
```

This also works with the free hosted MongoDB instances at [compose.io](https://www.compose.io) and [mongolab.com](https://mongolab.com)!


## Connect to Twilio to send SMS

You need specify the `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` environment variable in `.env` file, if the file does not exist then create one. [More information about Twilio Acount SID and Twilio Auth Tokens](https://www.twilio.com/help/faq/twilio-basics/what-is-the-auth-token-and-how-can-i-change-it)

```
TWILIO_ACCOUNT_SID=YouTwilioAccountSid
TWILIO_AUTH_TOKEN=YouTwilioAuthToken
```

## Unit Testing using Karma/Jasmine

$ node_modules/.bin/karma start client/test/karma.conf.js

```shell
INFO [karma]: Karma v0.12.31 server started at http://localhost:8080/
INFO [launcher]: Starting browser PhantomJS
INFO [PhantomJS 1.9.8 (Linux)]: Connected on socket aLJmRuSNUH2rPfpWgS3l with id 89641972
PhantomJS 1.9.8 (Linux): Executed 1 of 1 SUCCESS (0.007 secs / 0.029 secs)
```

# Issues

If you have any problems please [contact us](https://github.com/ArgonautsCrew/hygieia/issues/new).
