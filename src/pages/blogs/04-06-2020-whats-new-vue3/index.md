---
    path: '/what-is-new-in-vue3'
    title: What is new in Vue 3
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-04-06'
    description: Details of the upcoming changes in Vue 3
    categories: [Vue]
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/what-is-new-in-vue3/vue.png'
    published: true
---

Vue is one of the major frameworks used today in the front end world.
Its adoption has been fast and many developers love working with it due to the easy learning curve.
Vue has been having steady growth since 2016.
Major players like Nintendo and Gitlab use this framework.
I started using it while working at Docnetwork and immediately fell in love with it.
If you haven't used it before I would recommend using it to see for yourself how good this framework is.

## Vue 3 features & Changes

Late 2018 to 2019 the Vue team has been pushing from a prototype to a real product for V3.
They were rethinking major pieces of how Vue works to increase adoption and performance.

### Performance

One of Vue's bottleneck is how the traditional virtual DOM's performance is determined by the total size of the template rather than the dynamic content in it.
This is because when dynamic content updates on the template it recursively goes down the tree to find the dynamic element and then update it.
This is a highly inefficient cost of resources because even if some attributes are static it checks the props to make sure if any have changed.

```
<template>
  <div>
    <p>Lorem Ipsum</p>
    <p>Lorem Ipsum</p>
    <p>{{ message }}</p>
    <p>Lorem Ipsum</p>
    <p>Lorem Ipsum</p>
  </div>
</template>
```

How they got around this problem was to separate elements into blocks.
Each block is a flat array that tracks which element are dynamic and which are static.
When a structure is stable you don't need to traverse the tree to make sure it's correct.
With this new strategy, the updated performance is determined by the dynamic content and not the size of the template.
The performance boost gained is 133.69%.

<img src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/what-is-new-in-vue3/vue-3-sections.png" alt="Vue 3 Sections" />

### Composition API

This is another significant change that alters the ecosystem for the better.
The Composition API allows for a functional-based way of writing your component.
It allows you to encapsulate into what is called "composition functions" to later reuse that logic across components.
This, in turn, adds a lot of flexibility, performance and allowing the developer to write cleaner code.
The Options API that is the old way of writing the logic for your component won't be deprecated and this new API will be 100% compatible with that old syntax.
In my own opinion, the Composition API will be very useful for components that have a lot of logic that you can separate or reusable logic.
For small components that don't share logic, the Options API does the job fine.

### New Compiler

The new compiler was re-written from scratch to offer performance boosts and the following features:

* Full source map support
* Plugin-based transform pipeline
* Layered design for higher-order compilers


### SSR

SSR (Server Side Rendering) performance has improved 3X over V2.
The SSR renderer now seamlessly supports mixing templates and render fn based components.
It also adds an async setup() serving as a generic hook for async work (data fetching, code splitting, caching..)
This is very exciting for frameworks like Nuxt.js that use SSR to it's fullest.

### Suspense

This is a special component that renders fallback content instead of the component that you choose until the condition is met.
As you can tell this is pretty useful for async functionality to add a loader while the content is being retrieved.

```
<Suspense>
  <template #default>
    <Dashboard />
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
```

This method is a very clean way of adding functionality to dynamic async content that removed unnecessary `v-if` logic that requires a lot of mental overhead to tell what is going on.

### Multiple Root Nodes

In V2 if you try to create a template such as this:

```
<template>
  <div>Node 1</div>
  <div>Node 2</div>
</template>
```

It will give you a compilation and/or runtime error requiring that the template needs to have one root element.
This is typically fixed by wrapping the elements on a div as the parent.

```

<template>
  <div>
    <div>Node 1</div>
    <div>Node 2</div>
  </div>
</template>
```

For V3 you don't need to have only one root element.
You can have multiple root notes and have no errors.

### Portals

A portal like the name implies is rendering a component in a different place in the DOM tree.
You can achieve this even if the component is not in your app's scope.
Portals are very useful for modals, notifications, popups and other elements.
This feature was being used in V2 through a third party plugin called `portal-vue`.
You can see a good example of usage on the resources below.

### Filters

In V2 you can create a filter to apply text formatting like a money input as an example.
This will be a breaking change for V3 because now you will have to call the filter method directly instead of the interpolation.
This is how filters work in V2:


```
<template>
  <div>
    {{ amount | dollars }}
  </div>
```

To apply a filter to the template we just pipe it and it applies that filter accordingly.
In V3 you will need to call the filter method directly like this:

```
<template>
  <div>
    {{ dollars(amount) }}
  </div>
```

### Other Features

* Typescript support
* Global mounting API
* Transparent wrappers are simplified
* Slots unification
* Optional prop declaration
* Transition as root
* ...and more

### Vue 3 won't break your app

Apart from the filters that are the only breaking change I noticed.
All the other parts are gonna complement your codebase smoothly.
The Vue team is working hard on getting transition docs ready for all of us to take advantage of all V3 has to offer.
Vue is on the alpha stage at the time of writing this and it will take some time to release the stable version giving you time to transition those filters.

## Conclusion

Vue 3 is a few months away but you can take advantage and start looking at those new features now.
It will help the Vue team catch bugs before release helping the whole community.

Happy Coding! 🚀

## Resources

*  <a href="https://vueschool.io/articles/vuejs-tutorials/suspense-new-feature-in-vue-3/" rel="noopener" target="_blank">Suspense</a>
*  <a href="https://vueschool.io/articles/vuejs-tutorials/portal-a-new-feature-in-vue-3/" rel="noopener" target="_blank">Portals</a>
*  <a href="https://www.youtube.com/watch?v=eQpVcZa8dVQ" rel="noopener" target="_blank">What you'll love in Vue 3</a>
*  <a href="https://www.youtube.com/watch?v=P_IsppdGPsw&t=2792s" rel="noopener" target="_blank">State of Vuenion 2020</a>
