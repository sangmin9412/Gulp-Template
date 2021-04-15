const gulp = require("gulp");
const concat = require("gulp-concat");
const minifyCSS = require("gulp-minify-css");
const babel = require("gulp-babel");

const build = "assets/build/"

const dev = "assets/";

console.log(__dirname);

const paths = {
    js: dev + "js/",
    css: dev + "css/",
}

const cssFile = [
    paths.css + "reset.css",
    paths.css + "layout.css",
    paths.css + "sub.css",
];

const autoprefixer = require('gulp-autoprefixer');
gulp.task("css", function () {
    return gulp.src(cssFile)
        .pipe(autoprefixer())
        .pipe(concat("dist.css"))
        .pipe(gulp.dest(build + "css"));
});

gulp.task("minify-css", function () {
    return gulp.src(cssFile)
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(concat('dist.min.css'))
        .pipe(gulp.dest(build + "css"));
})

gulp.task("js", function () {
    return gulp.src([
        paths.js + "common.js",
        paths.js + "util.js",
        paths.js + "main.js",
    ])
        .pipe(babel())
        .pipe(concat("app.js"))
        .pipe(gulp.dest(build + "js"));
});

gulp.task("watch", function () {
    // gulp.watch(paths.css, gulp.series(["css"]));
    gulp.watch(paths.css, gulp.series(["minify-css"]));
    gulp.watch(paths.js, gulp.series(["js"]));
});

gulp.task("default", gulp.series(
    // ["css", "watch"],
    ["minify-css", "watch"],
    ["js", "watch"]
));