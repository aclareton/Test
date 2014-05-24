
var gulp      = require('gulp'),
	sass      = require('gulp-sass'),
	uglify    = require('gulp-uglify'),
	concat    = require('gulp-concat'),
	plumber   = require('gulp-plumber'),
	jade      = require('gulp-jade')
	;

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// JAVASCRIPTS
//
///////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('libs', function() {
	return gulp.src([
		'node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.min.js',
		'bower_components/angular/angular.min.js',
		])
		.pipe(plumber())
		.pipe(uglify({mangle: false}))
		.pipe(concat('core.js', {newLine: ';'}))
		.pipe(gulp.dest('public/js'));
});

///////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('javascripts', function() {
	return gulp.src([
		'private/assets/javascripts/main.js',
		'private/assets/javascripts/**/*.js',
		])
		.pipe(plumber())
		.pipe(uglify({mangle: false}))
		.pipe(concat('main.js', {newLine: ';'}))
		.pipe(gulp.dest('public/js'));
});

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// STYLESHEETS
//
///////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('stylesheets', function() {
	return gulp.src([
		'private/assets/stylesheets/main.scss',
		])
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'compressed', errLogToConsole: true }))
		.pipe(gulp.dest('public/css'));
});

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// TEMPLATES
//
///////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('templates', function() {
	return gulp.src('private/assets/templates/**/*.jade')
		.pipe(plumber())
		.pipe(jade({
			basedir: 'private/assets/templates'
		}))
		.pipe(gulp.dest('public/tpl'));
});

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// WATCH
//
///////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('watch', function() {
	gulp.watch('private/assets/javascripts/**/*.js', ['javascripts']);
	gulp.watch('private/assets/stylesheets/**/*.scss', ['stylesheets']);
	gulp.watch('private/assets/templates/**/*.jade', ['templates']);
});

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// DEFAULT
//
///////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('default', [
	'libs',
	'javascripts',
	'stylesheets',
	'templates',
	'watch',
	]);
