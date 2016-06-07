var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    protractor = require('gulp-protractor').protractor,
    shell = require('gulp-shell'),
    argv = require('yargs').argv,
    request = require('request'),
    Q = require('q');

const tsCompilerOptions = {
        noImplicitAny: true,
        rootDir: '.',
        module: 'commonjs'
};


// #############################################
// #              Test Execution               #
// #############################################

gulp.task('test', ['compile'], function() {

        gulp.src('built/specs/*.js')
            .on('error', function(error) {
                console.log(error);
                throw error;
            });
});

// #############################################
// #                  Build                    #
// #############################################

gulp.task('compile', ['compile-specs', 'compile-page-objects', 'compile-libs']);

gulp.task('compile-specs', ['clean', 'install-dependencies'], function () {
    return compileTs('specs/**/*.ts', 'built/specs');
});

gulp.task('compile-page-objects', ['clean', 'install-dependencies'], function () {
    return compileTs('page_objects/**/*.ts', 'built/page_objects');
});

gulp.task('compile-libs', ['clean', 'install-dependencies'], function () {
    return compileTs('libs/**/*.ts', 'built/libs');
});

gulp.task('clean', function() {
    del(['built']);
});

function compileTs(src, dst) {
    var tsResult = gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(ts(tsCompilerOptions));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dst));
}


// #############################################
// #              Project Setup                #
// #############################################

gulp.task('install-dependencies', ['install-selenium', 'install-tsds']);

gulp.task('install-selenium', shell.task(['./node_modules/protractor/bin/webdriver-manager update']));

gulp.task('install-tsds', shell.task(['./node_modules/tsd/build/cli.js install']));


// #############################################
// #                 Default                   #
// #############################################

gulp.task('default', ['compile']);
