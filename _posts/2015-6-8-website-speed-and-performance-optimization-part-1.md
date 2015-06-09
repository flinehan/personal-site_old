---
layout: post
title: Website Speed and Performance Optimization - Part 1
---

Website optimization is extremely important with the advent of the mobile devices. Your website costs your visitors money, whether they know it or not, because bytes aren’t free.

The average website weighs in at a mobile device crushing 2mbs and it’s only growing. Add in old devices, mobile networks, and slow speeds and that’s a recipe for some slow websites.

##Why does this matter?
Even if you don’t care about performance, Google cares and has created a speed metric in their ranking algorithm. That’s right. By improving your site’s load time, you can improve your SEO and that will improve the overall UX on your website. Another plus is faster sites have lower operating costs.

##Where to start?
The first step is to run your site through some of the free profiling tools that exist. Here are two I really like to use:

<ul class="fc-list">
  <li>
    <a href="http://www.webpagetest.org/">WebPagetest </a> shows a waterfall view of your pages' load performance plus an optimization checklist.
  </li>
  <li>
    <a href="https://developers.google.com/speed/pagespeed/insights/">  PageSpeed Insights</a> is a free tool from google. This gives you a UX score and breaks down the score into a mobile and desktop category.

  </li>
</ul>

Check out the Chrome Dev. tools for another excellent resource.

By profiling your website, you create a baseline to ensure the changes are improving site performance.

##The Nitty Gritty
You need to reduce the number of HTTP requests your website makes, reduce the size of your files, and improve the sites perceived performance. Assets that can be, should be placed behind CDNs.

You’ll need to combine and minify your javascript. This will reduce the number of HTTP requests and the minified javascript will have a smaller file size.

Apply the same steps for your css: combine and minify. Another thing to avoid is using inline style tags. They don’t get cached by the browser and are better off in a style sheet.

To improve your perceived performance, move your javascript files to the bottom of your website, near the footer. This won’t improve your page load time, but it can improve the perceived performance. The reason to move your scripts to the bottom, is the HTTP/1.1 specification suggests browser's download no more than two components in parallel per hostname.

Keep in mind not all browsers follow this rule of two. Most modern browser support up to six per hostname. This is why sometimes it is better to serve site assets from multiple domains. The exception to this being mobile devices, where multiple domains either have no effect or can even increase load times.


While a script is downloading, the browser won't start any other downloads even on different hostnames. When the javascript is not coming from a sub domain or CDN, the browser will load it **synchronously**.

You also have the option to use a defer tag. This lets the browser know it should load the script after the html renders.

{% highlight html %}

<script src="app.js" type="text/javascript" defer="defer"></script>
{% endhighlight %}

When jquery, angularjs, modernizr, etc are not places in the head, users can experience page flickering or strange artifacts.

##Next Time, How.
In this post I wrote a lot about the about what and why. In next week's post I will write about the how.

<ol>
  <li>
    Website speed and performance optimization - Part 1
    </li>
  <li>
    How to improve website speed and performance- Part 2
  </li>
</ol>

