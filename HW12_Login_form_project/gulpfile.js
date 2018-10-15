'use strict';
 
var gulp = require('gulp'); /*подключаем Gulp к нашему проекту, посредством функции require. 
Данная функция подключает пакеты из папки node_modules в наш проект, присваивая их переменной*/
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))/*Если нужен сжатый файл css, то заменить 
    на .pipe(sass({outputStyle: 'compressed'}))*/
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/ sass/**/*.scss', ['sass']);
});

gulp.task('html', function () {
	gulp.src("./src/index.html")
    .pipe(nunjucksRender())
    .pipe(gulp.dest("./dist"))
});



gulp.task('minify-css', function()  {
  return gulp.src('dist/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('autoprefixer', () =>
    gulp.src('dist/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('default',['html','sass'], function () {
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch("./src/**/*.html", ['html']);
});