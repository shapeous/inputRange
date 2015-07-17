var gulp = require("gulp")
  , util = require("gulp-util")
  , conn = require("gulp-connect")
  ;

// sources
var root = "dist/"
  , htmlSrc = root + "**/*.html"
  , jscrSrc = root + "js/**/*.js"
  , cssSrc  = root + "css/**/*.js"
  ;

gulp.task("connect", function() {
  // I create a Web server which I will use to live reload the page as changes occur.
  conn.server(
    { "livereload": true
    , "root": root
    }) // If running gulp from project's root there is no need to supply root argument here.
});

gulp.task("html", function() {
  // I handle html files
  gulp.src(htmlSrc)
    .pipe(conn.reload());
});

gulp.task("js", function() {
  // I handle the JavaScript files
  gulp.src(jscrSrc)
    .pipe(conn.reload());
});

gulp.task("css", function() {
  // I handle the CSS files
  gulp.src(cssSrc)
    .pipe(conn.reload());
});

gulp.task("watch", function() {
  // I watch for file changes and run tasks
  gulp.watch(htmlSrc, ["html"]);
  gulp.watch(jscrSrc, ["js"]);
  gulp.watch(cssSrc, ["css"]);
});

gulp.task("default", ["connect", "html", "js", "css", "watch"], function() {
  util.log("- I loaded all above tasks ;)");
});
