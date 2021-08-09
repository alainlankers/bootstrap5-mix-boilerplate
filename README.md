# Bootstrap 5 with Laravel Mix (Webpack)  
## Steps to setup 
Create your project folder 
```
npm init -y
npm install bootstrap@next @popperjs/core --save-dev
npm install laravel-mix --save-dev
touch webpack.mix.js
```

Add following code to webpack.mix.js
```javascript
// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/js').sass('src/app.scss', 'dist/css');
```
Create /src folder and add app.js and app.scss  
Add following code to app.js
```javascript
import 'bootstrap';
```  
Add following code to app.scss
```css
@import "~bootstrap/scss/bootstrap";
```
```
npx mix watch
npx mix
```