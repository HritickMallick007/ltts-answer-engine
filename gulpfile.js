const { src, dest, watch, series } = require('gulp');
const sassCompiler = require('sass');
const gulpSass = require('gulp-sass')(sassCompiler);

function compileScss() {
    return src('scss/**/*.scss')     // Source: all .scss files in scss/
        .pipe(gulpSass().on('error', gulpSass.logError))  // Compile SCSS
        .pipe(dest('css'));            // Output: css/ directory
}

function watchFiles() {
    watch('scss/**/*.scss', compileScss); // Watch all SCSS files and run compileScss
}

exports.default = series(compileScss, watchFiles);