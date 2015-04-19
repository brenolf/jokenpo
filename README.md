# jokenpo
Simple jokenpo using ECMA Script 6

# Dojo
This branch contains the files fora JS Dojo, where ECMA Script 6 can be learnt.

# Installing

### Node.js and nmp
Check node is installed. In a terminal run `node -v`. If you have an output like `v0.12.0`, then everything is fine. Otherwise, [download the latest version](https://nodejs.org/).

When installed, you should have access to `npm`. Run thee following command:

### Gulp
`npm install --save-dev gulp babelify browserify vinyl-source-stream vinyl-buffer gulp-sass gulp-minify-css gulp-autoprefixer gulp-copy gulp-uglify gulp-watch gulp-gh-pages gulp-imagemin gulp-size`

It will build our `gulp` environment.

### Sass
Follow the install instructions in [their site](http://sass-lang.com/install).

# Running
Running `gulp`, everything should be fine now. You can either run your project opening `build/index.html` or you can run `python -m SimpleHTTPServer 1234` inside `build`, and then accessing `localhost:1234`.
