// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/js/').sass('src/app.scss', 'dist/css/');