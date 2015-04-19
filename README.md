# jokenpo
Simple jokenpo using ECMA Script 6

# Dojo
This branch contains the files for a JS Dojo, where some ECMA Script 6 features can be taught.

# Installing

### Node.js and nmp
Check if node is installed by running `node -v` in a terminal window. If you have an output like `v0.12.0`, then everything is fine. Otherwise, [download the latest version](https://nodejs.org/). When installed, you should have access to `npm`.

### Gulp
Install all gulp dependencies used in this project.

`npm install --save-dev gulp babelify browserify vinyl-source-stream vinyl-buffer gulp-sass gulp-minify-css gulp-autoprefixer gulp-copy gulp-uglify gulp-watch gulp-gh-pages gulp-imagemin gulp-size`

### Sass
Follow the install instructions in [their site](http://sass-lang.com/install).

# Running
You can now build the project by running `gulp` in the project folder. You can either run it opening `build/index.html` or you running `python -m SimpleHTTPServer 1234` inside `build`, and then accessing `localhost:1234`.
