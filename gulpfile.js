'use strict';
const { src, dest, watch, series,} = require('gulp');
const
	prefixer = require("gulp-autoprefixer"),
	sass = require('gulp-sass')(require('sass')),
	notify = require("gulp-notify"),
	// sourcemap = require("gulp-sourcemaps"),
	rename = require("gulp-rename"),
	plumber = require("gulp-plumber"),
	pug = require("gulp-pug"),
	// jsmin = require("gulp-jsmin"),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	// uncss = require("gulp-uncss"),
	// fileindex = require('gulp-fileindex'),
	csscomb = require('gulp-csscomb'),
	browserSync = require("browser-sync");


function PUG(){
	return src('src/pages/*.pug')
		.pipe(plumber({
			errorHandler: function (err) {
				notify.onError({
					title: "Ошибка в pug",
					message: "<%= error.message %>"
				})(err);
			}
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(dest('build/'))
		.pipe(browserSync.reload({
			stream: true
		}));
}
exports.PUG = PUG

function SASS() {
    return src("src/static/style/global.sass")
		.pipe(plumber({
			errorHandler: function (err) {
				notify.onError({
					title: "Ошибка в SASS",
					message: "<%= error.message %>"
				})(err);
			}
		}))
		.pipe(sass())
		.pipe(csscomb())
		.pipe(prefixer("last 10 versions"))
		.pipe(rename("style.css"))
		.pipe(dest("build/css"))
		.pipe(browserSync.reload({
			stream: true
		}));
}
exports.SASS = SASS;

function JS() {
    return src(['src/static/js/_polyfill.js', 'src/static/js/_core.js', 'src/modules/**/**/*.js'])
		.pipe(plumber({
			errorHandler: function (err) {
				notify.onError({
					title: "Ошибка в JS",
					message: "<%= error.message %>"
				})(err);
			}
		}))
		.pipe(babel({
      presets: ['@babel/env']
		}))
		.pipe(concat('common.js'))
		.pipe(dest('build/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
}
exports.JS = JS;

function myServer() {
	browserSync.init({
		server: "./build",
		host: 'localhost',
		port: 2500,
		logPrefix: "MAXIFEED"
	});
	watch('src/**/*.sass', { usePolling: true }, SASS)
  watch('src/**/*.pug', { usePolling: true }, PUG);
  watch('src/**/*.js', { usePolling: true }, JS);
}

exports.default = series(SASS, PUG, JS, myServer);

function fileindex() {
	return src("build/*.html")
  .pipe(fileindex({ showExtension: false, server: 'http://192.168.1.9:2000' }))
  .pipe(gulp.dest("build/"));
}

exports.fileindex = fileindex;