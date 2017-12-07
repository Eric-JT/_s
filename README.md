
my_s
===

Starter theme for wordpress development. Forked from [_s](https://github.com/Automattic/_s). Set up for my current development style. The idea is to develelolp in 
my projects directory and send over my builds to my wordpress theme in my server directory.

In the gulpfile I use the `move-files` task to copy the build files from my development location to my themes location whenever changes are made. Files are moved upon save, and only the changed files are moved.


* A helpful 404 template.
* A custom header implementation in `_WP-THEME/_s/inc/custom-header.php` just add the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `_WP-THEME/_s/inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `_WP-THEME/_s/inc/template-functions.php` that can improve your theming experience.
* A script at `_WP-THEME/_s/js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `_WP-THEME/_s/layouts/` for a sidebar on either side of your content.
* Smartly organized starter CSS in `_WP-THEME/_s/style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :)

Getting Started
---------------

If you want to keep it simple, head over to https://underscores.me and generate your `_s` based theme from there. You just input the name of the theme you want to create, click the "Generate" button, and you get your ready-to-awesomize starter theme.


## This project uses the following tools

[Gulp](http://gulpjs.com/)
[SASS](https://www.npmjs.com/package/gulp-sass)
[Autoprefix](https://www.npmjs.com/package/gulp-autoprefixer)


## System Preparation

To use this project, you'll need the following software installed on your machine.

1. [NodeJS](http://nodejs.org) - use the installer.
2. [GulpJS](https://github.com/gulpjs/gulp)

## Local Installation

1. Clone or fork this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.

## Usage

**development mode**

1. Rename the `_s` folder in `_WP-THEME` to your theme name.
2. In the gulpfile, change the `THEME_NAME` variable to the name you gave in step one.
3. In the gulpfile, change the `THEME_DESTINATION` variable to the location of your Wordpress themes**


**You may need to grant you wordpress theme this permission.. or you may not, I had to.**

`sudo chown -R _user_:www-data _path/to/destination/WP-themes/_`


In project root
```shell
$ gulp
```
