---
    path: '/what-is-the-virtual-dom'
    title: What is the virtual DOM
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-02-05'
    description: Looking at the concept of the virtual DOM that React, Vue and many frameworks and libraries use
    categories: [Web Development]
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/beginners-guide-to-vim/vim-terminal.png'
    published: true
---

Driving alongside my partner I was talking about the concept of what is the virtual DOM. It came clear very quickly that since I haven't touched
this concept in such a long time I forgotten about how it operates. More importantly the virtual DOM is becoming the norm for building web applications.
Getting a good understanding of what it is, how it operates and what advantages and disadvantages it has over regular websites are key for every software
engineer's role in the future. Now before we dive right in let's learn what is the DOM.

## What is the DOM?

The Document Object Model or DOM is an object representation of the html elements of a webpage. It gives us an interface that interact and manipulate the page, change the document structure,
content, and styling. How this is generated is when a browser loads a web page it first looks at the HTML. The browser uses the HTML as a blueprint, or instructions on how to build the page
(then it applies the CSS later). When the browser parses the instructions it builds a model of how the model should look and work in JavaScript. This model contains every element
in order of the page in a tree like structure. Each DOM element being a tree node, containing all the same property keys as each other node.
Some of these node properties are informational while others are methods that we can use for interaction. The DOM, creating and propagating event objects, which hold information
about the event type and target, up the tree.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/what-is-the-virtual-dom/dom.jpg" alt="DOM representation" />

When the DOM is built and the webpage is loaded, developers get access to it in the form of the global Javascript object document. document contains the entire hierarchy of
the page, each element (or DOM node), and it also contains dozens of built in methods and properties. We can use these methods and properties to manipulate what we see on the screen.

## What is the virtual DOM?

The virtual DOM is a programming concept where the DOM is represented "virtually" where the UI is kept in memory and then synced with the real DOM we spoke of before. This concept
became popular with React because it uses the library ReactDOM to reconcile the virtual DOM with the real one. When working with React you tell it what state you want the UI to be in
and React makes sure it matches the DOM. This makes managing state way easier since it abstracts out the attribute manipulation, event handling and manual DOM updating.
The virtual DOM was not created by the React team but it's a tool that is provided for free from them. Vue also utilizes the virtual DOM to update the UI.

### Benefits of the virtual DOM over the original DOM

Managing the DOM performing calculations, changing attributes or event handling we need to utilize the DOM APIs and can reduce performance significally. When the DOM was released in 1998 it was not
the envisioned that the page was gonna be updated as frequently as we do today. The virtual DOM was created to solve this problem of needing to update frequently the DOM in a more performant way.
The virtual DOM can be manipulated and updated without using the DOM APIs. Once all the updates have finished on the Virtual DOM it will look for the specific changes needed to be made to the original DOM
and make them targetted and optimized in a process called <a href="https://reactjs.org/docs/reconciliation.html" rel="noopener" target="_blank">reconciliation</a>.

## Conclusion

The virtual DOM is a great tool for providing performant applications to your users that need frequent updates. More importantly it's offered on tools like React and Vue that are free and open source.
I'm a big advocate of open source and if there are performance bottlenecks usually programmers jump in and fix it. This tools are very popular and have excellent documentation and tutorials available
so you can jump on the train of awesome front end code.

Happy Coding! 🚀

## Resources

* <a href="https://reactjs.org/docs/faq-internals.html" rel="noopener" target="_blank">React Docs on the virtual DOM</a>
* <a href="https://reactjs.org/docs/reconciliation.html" rel="noopener" target="_blank">React Docs on reconciliation</a>
* <a href="https://bitsofco.de/understanding-the-virtual-dom/" rel="noopener" target="_blank">Understanding the virtual DOM</a>
* <a href="https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/" rel="noopener" target="_blank">Difference between the virtual DOM and the DOM</a>
