const GULP         = require("gulp");
const SASS         = require("gulp-sass");
const PREFIX       = require("gulp-autoprefixer");


// CHANGE THESE VARIABLE VALUES

// Change the value to the exact name you changed the _s folder too 
const THEME_NAME= "Change_This";

// location variable
//example- const DEST = `/home/eric/Projects-Server/wordpress-test/wp-content/themes/${THEME_NAME}/`;
const THEME_DESTINATION = `./${THEME_NAME}/`; // location of your wordpress themes on your server

// location of the development files
const THEME_FOLDERS = `_WP-Themes/${THEME_NAME}/**`;

// location to save sass build
const CSS_DESTINATION = `_WP-Theme/${THEME_NAME}/`;


/**
 * Compile scss files
 * save css build in theme folder
 */
GULP.task("sass", function () {
  return GULP.src("sass/style.scss")
  .pipe(SASS())
  .pipe(PREFIX(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
  .pipe(GULP.dest(CSS_DESTINATION));
});

/*
*  Move development files to theme location
*/
GULP.task("move-files", function() {
  return GULP.src(THEME_FOLDERS)
  .pipe(GULP.dest(THEME_DESTINATION));
});

/*
* Watch folders for changes
*/
GULP.task("watch", function() {
  GULP.watch("sass/**", ["sass"]);
  GULP.watch(THEME_FOLDERS, ["move-files"]);
});


GULP.task("default", ["watch"]);


