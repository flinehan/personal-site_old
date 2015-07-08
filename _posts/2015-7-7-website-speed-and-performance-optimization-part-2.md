---
layout: post
title: How to improve website speed and performance - Part 2
---


Before testing and applying changes to your website, it is best to understand the difference between development and production. Development environment is where the developer lives. Production is where the site lives out on the internet. The development environment should have the tools to recreate production or at least something similar, but the code shouldn’t be minified and concatenated until it goes to the production server.

##Development and Production where to optimize?

Think of a web application or website like a ship. Ships aren’t built out at sea, they are built at a dock and launched when completed. Same with making repairs to a ship or website. In emergencies some changes might be made out at sea or on the live website, but most of the time its better to make the changes at the dock or in a dev environment.

Some things shouldn’t be optimized during development, for example don’t minify your JS and CSS while doing development. Its better to run a build script before you push your application to development.

##Optimization Steps

First things first let's profile the website:

Google Speed Test:
<div class="row">
  <img class="fc-center-img" src="/img/frankcode-before-desk.png" alt="Frank Code before desktop">
</div>
<div class="row">
  <img class="fc-center-img" src="/img/frankcode-before-mobile.png" alt="Frank Code before mobile">
</div>

Web Page Speed test:

<div class="row">
  <img class="fc-center-img" src="/img/frankcode-speed-before.png" alt="Don't worry webpage speed test - i got this.">
</div>

With these profiles I now have a baseline and I can start looking for ways to improve the speed.

Looking into the scores, I noticed that the first byte time could use some improvement. The reason for the B is I am using [materializecss](http://materializecss.com/) and loading their icon library.I don’t need all of their icons and using the [icomoon]( https://icomoon.io/app/#/select) tool I converted the icons that i was using to base64 and loaded them through css (after a few tweaks i have removed the icons totally for now).

The next thing loading the custom fonts. Improving this will help to reduce render-blocking CSS in above-the-fold content.

There are a handful of solutions that can fix this. One is to inject the link tag on to the page using JavaScript. The con to this approach is that there will be a noticeable change when the fonts switch to the custom font (flash of unstyled fonts). Another option would be only loading the custom fonts on large screen devices with css media queries. The con on this approach is the site might not look the same on mobile devices. One last solution is to put a style tag at the bottom of the document and import the font through the style tag. This isn’t valid html though and could lead to some strange behavior.

After that round of research on loading custom fonts. I decided not to make any changes simply because the pros don’t outweigh the cons.

##Automation
Doing some of these changes by hand every time you have to deploy the website would be a tremendous waste of time, why do something manually when we can have computers do it for us!

##CSS Preprocessors
During Development use a CSS preprocessors to build CSS faster. Both [sass](http://sass-lang.com) and [lesscss](http://lesscss.org/) can place all of your css into one file. They can also minify your css for you as well. Sass and Less also allow you to keep your css files modular which helps you build CSS faster.

Main Sass file for FrankCode.com:
<div class="row">
  <img class="fc-center-img" src="/img/frankcode-sass-example.png" alt="Frankcode Sass.">
</div>

##Build tasks with gulp and grunt
Gulp and Grunt are task runners they both use build task for: minification and copying of all JavaScript files, static images, capable of watching files to automatically rerun the task when a file changes. These are both wonderful tools and speed up much of the optimization process both during development and launching a website.

I created a very basic example for some of the tasks that gulp can preform, it can be found at: [gulp-simple](https://github.com/flinehan/gulp-simple) (it is extremly simple). Place a site in the src folder and run some of the commands found on the read me. Keep in mind this build script isn’t for production it's a super basic to only show how Gulp could be used in a build process.

##New Scores
With these changes applied we will rerun the tests to see if there has been any improvements to the load times and scores.

<div class="row">
  <img class="fc-center-img" src="/img/frankcode-after-desk.png" alt="Frankcode desktop after.">
</div>

<div class="row">
  <img class="fc-center-img" src="/img/frankcode-after-mobile.png" alt="Frankcode mobile after.">
</div>

<div class="row">
  <img class="fc-center-img" src="/img/frankcode-speed-after.png" alt="Awww yeah, all A's kind of...">
</div>

Some improvements to the overall performance. The first load on the site is now 1.409s, which isn’t too bad. I could improve this further with some more optimization. Repeat views of the site load 0.726s not bad as well! I still need to fix the caching of static content, but that will be another day.

##Take Away
The 5 easy tips to speed up your site:

<ol>
  <li>Profile your site.</li>
  <li>Reduce the number of http requests your pages make by combining files.</li>
  <li>Reduce the file sizes using minification, optimizing images, and cut out the bloat.</li>
  <li>Use build tools and preprocessors to automate as much of this work as you can.</li>
  <li>Continue to profile your site.</li>
</ol>





