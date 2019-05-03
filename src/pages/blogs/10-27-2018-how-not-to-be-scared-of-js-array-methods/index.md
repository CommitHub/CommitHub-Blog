---
    path: '/how-not-to-be-scared-of-js-array-methods'
    title: How not to be scared of JS array methods (ForEach, Map, Filter and Reduce)
    author: Luis Alvarez
    authorImage: '../images/authors/luis-alvarez.jpg'
    date: '10-27-2018'
    description: A tutorial with examples and practice exercise on how to use the array methods forEach, map, filter and reduce.
    tags: JavaScript, arrays, webdev
    backgroundImg: 'https://thepracticaldev.s3.amazonaws.com/i/rkr4dubai3tg46ddr4fo.jpeg'
    published: true
---

##Introduction

Since I found out of this methods I always got extremely confused on how to use them and at some points got scared and said "I rather just use the standard for loop. That I understand". Later on, I joined <a href="https://lambdaschool.com/">Lambda School</a> and they taught me how to use these methods and how useful they are. Maybe you are scared of this methods but don't worry we will run down through each method with examples and practice exercises you can try out.

To reduce complexity the methods will be shown in the ES5 way. I'll leave a link on the external resources if you're interested in learning more about arrow functions and the new things in JS. For the exercises you can use <a href="https://jsbin.com/?html,js,output">JS Bin</a>. It's a really cool tool. My recommendation is trying the exercises because they will help you out memorizing how they work. If you have any questions feel free to comment and I'll answer as fast as I can.

###The Basics

I know you probably know what an array is but it can't hurt to refresh memory. On MDN documentation the definition for arrays is "The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, **list-like objects.**". By understanding that arrays are like lists we can harness their power.  Now let's see a simple array as an example.

```
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

###forEach

The forEach method takes an array and it will execute for each item on the array. This can save time if we want to do something simple and return that value. When you are creating the forEach method it will take a function as a callback and for all methods including this one, we will always need a callback for it to be able to run.

####Parameters

<ul>
    <li>Current value: Optional</li>
    <li>Index: Optional</li>
    <li>Array: Optional </li>
    <li>thisArg: Optional </li>
</ul>

In the example below, we are using the current value parameter. Most of the time you will need this parameter even doe it's optional. A thing we have to take in consideration that the other methods do differently, this method will not create a new array so any modification to an array it will mutate the new array. We will explore this concept a bit deeper with the other methods just take a mental note.

```
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numberArray.forEach(function(element) {
    console.log(element);
});

//output: 1
//output: 2
//output: 3
//It will continue until it reaches 10
```
####What does that example do?

<ul>
    <li>Just like a for loop it will iterate through the numberArray</li>
    <li>For each one it will console.log that key item in the array to your dev console</li>
</ul>

####Exercise
```
/*Create a forEach loop that pushes the menu items to the whatIAte array. Remember that the current value can be named anything (it's called element on the example). */

var menu = ['pizza', 'hamburger', 'hotdogs', 'rice', 'fried chicken'];
var whatIAte = [];

return whatIAte;
```

###Map

Remember I wrote a bit back that the forEach element will not return a new array? Well, map will take a callback function and it will return a new array with the new items.

####Parameters

<ul>
    <li>Current value: required</li>
    <li>Index: Optional</li>
    <li>Array: Optional </li>
    <li>thisArg: Optional </li>
</ul>

This method parameters are a bit different because the current value is not optional apart from that all is the same. There is a bit of a debate between ForEach and Map. They are very similar in certain things. Both will iterate through the array but Map will return you a new array with values and forEach won't. You can use either I mostly use Map when trying I want to modify data and forEach just to iterate.

####Code example

```
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newNumberArray = numberArray.map(function(element) {
    return element + 10;
});

return newNumberArray;

//Iteration: [11]
//Iteration: [11, 12]
//Iteration: [11, 12, 13]
//It will keep iterating until it reaches 10 and return 110
```

####What does that example do?

<ul>
    <li>It will iterate through the numberArray and assign each key value item to element</li>
    <li>For each one it will sum that key value item with 10 and return it to the newNumberArray</li>
    <li>When it finished iterating it will return the new array with the new values</li>
</ul>

####Exercise

```
/* Use the map array method and return a new array with each number multiplied by any number you wish */
var numberArray = [7,6,788,2,8,125,52,48];

```

###Filter

Filter is pretty cool and it will do exactly as the word says. It will check the array for each element that passes the test and will return those values. The parameters are the same as map. This method is great if we have a huge array and just want a few to show. Imagine you got a 100 Dev.to posts but only want to show the 5 most loved that you have. With filter, we can do that by checking which one is over a 100 hearts or whichever parameter you choose.

###Code example

```
var data = [
  {
    country: 'China',
    population: 1409517397,
  },
  {
    country: 'India',
    population: 1339180127,
  },
  {
    country: 'USA',
    population: 324459463,
  },
  {
    country: 'Indonesia',
    population: 263991379,
  }
]

var cities = data.filter(val => {
  return val.population > 500000000;
});

//Output: cities = [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
```

####What does that example do?

<ul>
    <li>It will iterate through the data array of objects and each val will be one object</li>
    <li>With the dot notation we check if that object population is over 500000000</li>
    <li>If the object passes the condition it will return the whole object to that new array</li>
</ul>

####Exercise

```
/* Filter through the posts array of objects and return the posts that are over a 100 hearts */

var posts = [
  {
    title: 'How I mastered C',
    hearts: 1000,
  },
  {
    title: 'The art of programming',
    hearts: 10,
  },
  {
    title: 'Books I read in this year',
    hearts: 80,
  },
  {
    title: 'Redux explained',
    hearts: 50,
  },
  {
    title: 'JavaScript ES6',
    hearts: 100,
  }
]
```

###Reduce

This method is a bit difficult to understand at first but nothing worth doing is easy. Reduce uses an accumulator that will be the total of the calculation you are doing in the reduce method. It also uses current value that the previous methods use. Now let's see an example and run it down.

```
var numbers = [5, 10, 15, 20, 25, 30];

var sum = numbers.reduce(function(total, amount){
  return total + amount
});

return sum;

//Output: 105

```

####What does that example do?

<ul>
    <li>It will iterate through the numbers array</li>
    <li>Total will be equal to the first item in the array at first and amount will be the currentValue on the iteration</li>
    <li>On each iteration it will return the sum of total and ammount thus increasing the total</li>
    <li>In the end total will be returned and sum will be a single value of a 105</li>
</ul>

Reduce it's a good method to reduce your array to a single value making it a great tool for those little algorithms we come across in CodeWars that just require to reduce an array to a single value. There are a few other uses for reduce like finding an average as an example. In the external resources, there is a great post by FreeCodeCamp that will run you down through them if you are curious.


```
/* Reduce this numbers array to a single value using multiplication */

var numbers = [1000, 150, 890, 500];

```

###Conclusion

These methods will help you in your career and even if you're a hobbyist it will make those algorithms easier, cleaner and self-documented. I have been reading recently the book Code Complete by Steve McConnell and he describes the importance that your code it's simple to understand because you may understand it but maybe your co-worker may get confused. A good quote I read some time ago it's "Code like the next person to read it it's a serial killer". Hope you liked this article and it helps you make use of these methods that are wonderful.



###External Resources
<ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Arrays MDN</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach Method MDN</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map Method MDN</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">reduce Method MDN</a></li>
    <li><a href="https://medium.freecodecamp.org/reduce-f47a7da511a9">A more detailed explanation of reduce by FreeCodeCamp</a></li>
    <li><a href="https://www.youtube.com/playlist?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv">ES6 Tutorial Playlist by Traversy Media</a>
</ul>
