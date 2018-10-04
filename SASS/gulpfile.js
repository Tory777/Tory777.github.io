'use strict';
 
var gulp = require('gulp'); /*подключаем Gulp к нашему проекту, посредством функции require. Данная функция подключает пакеты из папки node_modules в наш проект, присваивая их переменной*/
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))/*Если нужен сжатый файл css, то заменить на .pipe(sass({outputStyle: 'compressed'}))*/
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});