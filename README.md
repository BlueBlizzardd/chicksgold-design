# Solid + Typescript + Vite

One of two challenges made for Chicks Gold, both projects were made in SolidJS. I used Solid because I'm very fond of that framework, since it's very similar to React which means that it is very easy to read if you have previous React experience, while also offering a lot of niceties for DX and as a whole it's just faster to use and run. I'm just as comfortable in React, Angular and Astro, but this project is really just a single page with interactivity, which discards using the latter, while as for the former two I've already [showcased](https://prontopizzacantaclaro.netlify.app/home) [in some capacity](https://tanstack-portfolio-test.netlify.app) what I'm capable of with them, and also for a project as relatively small as this one I'd rather ship the least amount of JS possible.

## Technical Requirements

This test complies with the following technical requirements as far as I'm aware, excluding something I've missed or was not made aware of during my testing of this page:

1. The card proportions are 1-to-1 with what the current [chicksgold.com](chicksgold.com) page actually has on display, excluding minor differences that I may not have noticed, but I tested to the best of my capacity the resolution of the cards in all sizes to make sure they're practically the exact same, including their mobile/tablet breakpoints.
2. The application adapts itself nicely to all sizes on all of its elements, this includes the navbar, the filters for the cards, the footer and even minor details like the social media icons and payment methods row. It doesn't adapt itself in the exact same way as the live chicksgold page, but since I was not given a spec on how exactly to adapt it to all breakpoints I used a combination of the breakpoints on the live page and what I thought looked good to do what I could with almost every element.
3. As requested, the page uses no CSS frameworks or libraries at all. Every component uses vanilla CSS for styling, and the components were styled using the [CSS @scope](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope) rule to separate them into different "modules" so to speak, without using CSS modules or any other implementation. This has the benefit of being the "native" way to actually do this separation, but the caveat is that as of writing this readme, [this rule doesn't work on Firefox](https://caniuse.com/?search=css%20%40scope) without a flag.

Additionally, some minor details not asked for but added to give a better feel to the page include:

- Hover animations on all interactive buttons/links to match what the live page offers. Most of these match 1-to-1 with the animations currently present on it, but as a personal touch I added some extra animation to the arrow assets present on the navbar items and the inputs, just to give a more live feel to the static page.
- This project also implements some (very) basic cart functionality, in which if you click "Add" on an item it will add it to the cart equal to the amount it has on its input. This was done using Solid context, which, if you're familiar with React context, is pretty much the same thing, only using [Solid Signals](https://docs.solidjs.com/concepts/signals) as a base.

However, the project did not turn out 1-to-1 equal to the page like I wanted, some of the things I missed/wasn't able to do due to time constraints include the following:

1. The filter inputs above the cards container aren't exactly equal to the live page or the pdf. This was not due to time constraints, since they are exactly the same on responsive sizes, this was a genuine blunder on my part and were not intended to look different from the pdf, I just focused so much more on the responsive sizes that I didn't notice it until after having turned over the test.
2. The stars on the footer aren't aligned with the "trustpilot reviews" text. This was indeed due to time constraints, since I thought the stars were fine in terms of being a good looking end product, and the assets were a little bigger than what the pdf had I decided to give less priority to that. This resulted in me eventually running out of time to make sure they were displayed properly.
3. A 'filtering' feature using the filters for the cards was almost implemented, but the problem was that doing this messed with the background in case there were no items. This looked very ugly for the end user, and since this was also an additional feature and not something asked of me, I eventually scrapped it.

That includes most of my thought process and ideas behind the development process, most of the problems with the page are also documented here, but some information might be missing so in any case please take a look and tell me if you find anything else!

## Instructions

One detail that might be important is the fact that I use pnpm as a package manager. This means that if you want to run the page you would have to use pnpm dev, OR, alternatively, use npm install so you get a package-lock.json first, then run it through npm run dev.
