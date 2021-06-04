# Spellbook

RPG Spellbook is an app for Dungeons and Dragons 5th edition players to manage their various character spell books. This apps goal is to provide all useful spell information with an accessible UI. 

[Demo Video Guide](https://www.youtube.com/watch?v=MvgMYP8EYvI&t=12s)

## Download and Installation Instructions

Begin by cloning the [Spellbook API](https://github.com/BeccaN/spell-book-backend) and following the API instructions below.

### API Instructions
* After opening and changing into the API directory make sure to install all dependencies with
```
bundle install
```
* Make sure Postgresql server is running (follow instructions on how to start that based the machine you are using)

* Run migrations and seed the database with
```
rails db:migrate && rails db:seed
```
* Start the Spellbook server with 
```
rails s -p 8000
```

### Frontend Instructions

* Clone the spell-book-frontend repository and install any dependencies with
```
npm install
```

* Start server with 
```
npm start
```

The program is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
