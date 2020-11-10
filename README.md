# A Viewport that Works

## Problem

CSS provides easy ways to measure content on screen according to the viewport, but some browsers and some devices don't quite behave the way you'd expect.

### Example
#### Keyboard closed
Notice the "end of viewport" label at the bottom.

<br><img src="img/ios1.png" width="363" height="667">

#### Keyboard open
Once we toggle the Safari keyboard, the viewport calculation does not take into account the space obscured by the keyboard.

<br><img src="img/ios2.png" width="363" height="667">

With A Viewport that Works, we can fix this instantly with very little CSS and JavaScript

#### Keyboard closed

<br><img src="img/ios3.png" width="363" height="667">

#### Keyboard open

<br><img src="img/ios4.png" width="363" height="667">

# How to use

## Quickstart

Copy `index.html` and delete these lines

~~~html
<!-- To use this HTML file in a real project, remove these lines. -->
<link rel="stylesheet" href="css/demo.css">
<script src="js/demo.js"></script>
~~~

Now just treat `<div id="viewport"></div>` as if it were the `<body>` tag.

## From scratch

In an existing HTML file, you'll need the following:

1. Import normalize and viewport-fix.css in the `<head>`

   ~~~html
   <link rel="stylesheet" href="css/normalize.css">
   <link rel="stylesheet" href="css/viewport-fix.css">
   ~~~

2. `<div id="viewport"></div>` Directly under the `<body>` tag.
3. Import and instantiate viewport-fix.js

   ~~~html
   <script src="js/viewport-fix.js"></script>
   <script>new VVP()</script>
   ~~~
