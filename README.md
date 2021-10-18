# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](images/Screenshot.png)


### Links

- Solution URL: [GitHub](https://github.com/agarioch/fm-accordion-card)
- Live Site URL: [Netifly](https://stupefied-golick-6de835.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Vanilla JS

### What I learned

Interesting and challenging exercise, useful to practice mobile first design and positioning (the images & shadows were difficult to position correctly). 

* There are a couple of easy ways to crop an image to its container:
1. use object-fit and object-position
2. use overflow: hidden (the approach I used for this project)
* That said, those approaches only work well in certain circumstances and in my case neither seemed to work perfectly. Overflow: hidden hid all child elements including the box that should float over the container (even when setting it to position: absolute), the only way I could find to fix that was to use position fixed and then use the trick here (https://stackoverflow.com/a/45030989) to keep it positioned relative to its parent

* if you need to transition a class removal you should put the transition on the parent element (e.g. see the up/down arrows)
* you cannot transition display none, you can however use keyframes to animate something after the element appears

### Continued development

* Still not comfortable with BEM
* Need to continue experimenting with object fit
* Need to continue to practice 
* Still need to work on understanding where/when to use aria tags