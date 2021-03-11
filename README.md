# Laravel/Vue.js CRUD example

Develop a simple Tasks CRUD operations with Laravel/Vue.js. It uses Laravel, Vue.js and jQuery. 

## Getting Started

Clone the project repository by running the command below if you use SSH

```bash
git clone git@github.com:mbphaghighi/TasksApp.git
```

If you use https, use this instead

```bash
git clone https://github.com/mbphaghighi/TasksApp.git
```

After cloning,run:

```bash
composer install
```

Duplicate `.env.example` and rename it `.env`.
Then update the database properties with your database config.

Then run:

```bash
php artisan key:generate
```

After that, migrate and seed with the test data (it uses factory and seeder to input the table's entries with the fake data):

```bash
php artisan migrate:refresh --seed
```

## Using the Web App

And finally, start the application:

```bash
php artisan serve
```

You can see all tasks in a table and also you can add/edit/delete task using Vue.js API. 

and visit [http://localhost:8000/](http://localhost:8000/) to see the application in action.

## Built With

* [Laravel](https://laravel.com) - The PHP Framework For Web Artisans
* [Vue.js](https://vuejs.org) - The Progressive JavaScript Framework

