# Solid + Typescript + Vite

One of two challenges made for Chicks Gold, both projects were made in SolidJS. I used Solid because I'm very fond of that framework, since it's very similar to React which means that it is very easy to read if you have previous React experience, while also offering a lot of niceties for DX and as a whole it's just faster to use and run. I'm just as comfortable in React, Angular and Astro, but this project is really just a single page with interactivity, which discards using the latter, while as for the former two I've already showcased in some capacity what I'm capable of with them, and also for a project as relatively small as this one I'd rather ship the least amount of JS possible.

This project in particular implements some (very) basic cart functionality, just as a little extra detail. This was done using Solid context, which, if you're familiar with React context, is pretty much the same thing, only using [Solid Signals](https://docs.solidjs.com/concepts/signals) as a base.

## Instructions

One detail that might be important is the fact that I use pnpm as a package manager. This means that if you want to run the page you would have to use pnpm dev, OR, alternatively, use npm install so you get a package-lock.json first, then run it through npm run dev.
