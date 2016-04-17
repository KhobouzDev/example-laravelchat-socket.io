var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

require('laravel-elixir-webpack');

elixir(function(mix) {
    mix.sass('app.scss')
      .webpack('app.js', require('./webpack.config.js'))
      .version(['js/app.js', 'js/vendor.js', 'css/app.css']);
});
