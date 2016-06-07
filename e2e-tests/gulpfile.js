var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    protractor = require('gulp-protractor').protractor,
    shell = require('gulp-shell');


var protractorOptions = {
        configFile: 'protractor.conf.js',
        verbose: true,
        includeStackTrace: true,
        debug: false
};

gulp.task('typescript-compile', function(){
  return gulp.src(['specs/example.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('js/specs/'));
});

gulp.task('watch', function () {
  gulp.watch('specs/example.ts', ['typescript-compile']);
});



gulp.task('test', ['typescript-compile'], function() {
        gulp.src('js/specs/*.js')
            .pipe(protractor(protractorOptions))
            .on('error', function(error) {
                console.log(error);
                throw error;
            });

});

gulp.task('typescript-compile', ['compile-specs', 'compile-page-objects']);

gulp.task('compile-specs', ['clean', 'install-dependencies'], function () {
    return compileTs('specs/*.ts', 'js/specs');
});

gulp.task('compile-page-objects', ['clean', 'install-dependencies'], function () {
    return compileTs('page_objects/*.ts', 'js/page_objects');
});

gulp.task('clean', function() {
    del(['js']);
});
const tsCompilerOptions = {
        noImplicitAny: true,
        rootDir: '.',
        module: 'commonjs'
};

function compileTs(src, dst) {
    var tsResult = gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(ts(tsCompilerOptions));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dst));
}

gulp.task('default', ['test']);

gulp.task('install-dependencies', ['install-selenium', 'install-tsds']);

gulp.task('install-selenium', shell.task(['./node_modules/protractor/bin/webdriver-manager update']));

gulp.task('install-tsds', shell.task(['./node_modules/tsd/build/cli.js install']));
