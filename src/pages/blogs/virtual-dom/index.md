---
    path: '/what-is-the-virtual-dom'
    title: What is the virtual DOM
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-01-07'
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
in order of the page in a tree like structure.Each DOM element being a tree node, containing all the same property keys as each other node.
Some of these node properties are informational while others are methods that we can use for interaction. The DOM, creating and propagating event objects, which hold information
about the event type and target, up the tree.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/what-is-the-virtual-dom/dom.jpg" alt="DOM representation" />

When the DOM is built and the webpage is loaded, developers get access to it in the form of the global Javascript object document. document contains the entire hierarchy of
the page, each element (or DOM node), and it also contains dozens of built in methods and properties. We can use these methods and properties to manipulate what we see on the screen.

## What is the virtual DOM?
