

aliquid-infigo
===

Hi. I was a starter theme called _s, or underscores. Now I'm called aliquid-infigo. I'm a theme meant for hacking. Instead of turning me into the next, most awesome, WordPress theme out there, this doofus is using me for his grotesque experiments by butchering my code.


** Curently learning how to make Wordpress themes. **


* A just right amount of lard, horribly-commented, modern?, HTML5 templates.
* A not so helpful 404 template.

## Everything below is probably broken by now
* A custom header implementation in `inc/custom-header.php` just add the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/template-functions.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts/` for a sidebar on either side of your content.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :)

Getting Started
---------------

If you want to keep it simple, head over to https://underscores.me and generate your `_s` based theme from there. You just input the name of the theme you want to create, click the "Generate" button, and you get your ready-to-awesomize starter theme.


** In the gulpfile, change the `DEST` variable to the location of your Wordpress themes **
I use the `move-files` task to copy the build files from my development location to my themes location whenever changes are made. Until I figure out how to only move the changed files, everything is copied over everytime :unamused:


You may need to grant you wordpress theme this permission.. or you may not, I had to.
** sudo chown -R _user_:www-data _path/to/destination/WP-themes/_ **

Use `gulp watch` to start gulp 

** I dont recommend you use this repo for anything, I have no idea what I am doing! **

