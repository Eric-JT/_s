const GULP         = require("gulp");
const SASS         = require("gulp-sass");
const PREFIX       = require("gulp-autoprefixer");

// destination variable
const DEST = "/home/eric/Projects-Server/wordpress-test/wp-content/themes/aliquid-infigo/";
 // used to check if changes are made in files
const THEME_FOLDERS = "_WP-Theme/aliquid-infigo/**";
// location to save sass build
const CSS_DESTINATION = "_WP-Theme/aliquid-infigo/";


/**
 * Compile scss files
 */
GULP.task("sass", function () {
  return GULP.src("sass/style.scss")
  .pipe(SASS())
  .pipe(PREFIX(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
  .pipe(GULP.dest(CSS_DESTINATION));
});

/*
*  Move folders to theme location
*/
GULP.task("move-files", function() {
  return GULP.src(THEME_FOLDERS)
  .pipe(GULP.dest(DEST));
});

/*
* Watch folders for changes
*/
GULP.task("watch", function() {
  GULP.watch("sass/**", ["sass"]);
  GULP.watch(THEME_FOLDERS, ["move-files"]);
});


GULP.task("default", ["watch"]);


