---
    path: '/big-o-explained'
    title: Big O Explained
    author: Ori Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/ori.jpg'
    date: '2020-12-17'
    description: In depth explanation of Big O covering what is an algorithm, what is big O, formal definition, techniques to identify the time complexity with examples
    categories: [Computer Science]
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/Big+O.png'
    published: true
---

## Introduction

Big O is one of those subjects that is very hard to master as a junior developer. At least for me. Taking the time to understand it will help when writing code in the real world. Generally you want to avoid code that has a high complexity if possible.  Let’s jump right in with looking at what is an algorithm.

### Table of Contents

* What is an algorithm?
* What is Big O?
* Formal Big O definition
* Techniques to identify the time complexity with examples

## What is an algorithm?

In computer science an algorithm is a defined set of steps that resolves a computational problem. It uses logic written by software developers to produces an output. Let’s take a look at an example:

```
function getUser(users, id) {
  return users.find(user => user.id === id);
}
```

In this method we go over an array of users and find the first element that has the correspondent id.

We want an algorithm that is fast. Following the example the more users we have the longer it will take to find the user. This can be relative to the language you are using. An algorithm might take longer to perform in JavaScript that in C due to JavaScript being a slower language. Because of this discrepancy of speeds the best way to know if an algorithm will perform well no matter the number of inputs is by looking at the number of operations.

### What is complexity in an algorithm?

When we are working with the number of operations we are defining what the complexity of the algorithm is. The fewer operations we do in an algorithm the less computational power we use. This will yield good results no matter the input size. We have a few cases to work with when it comes to classifying the algorithm's behavior:

* **The best case**: When the input requires the smallest number of operations for any input of that size
* **The worst case**: When the input requires the largest number of operations for any input of that size
* **The average case**: When the input requires the average number of operations for any input of that size.

```
function getUser(users, id) {
  return users.find(user => user.id === id);
}
```

Going back to the example, if we have an input of 100 users. The best case is that the user we want is on the top 10. The worst case if its on the bottom 10 and the average case if its somewhere between. We can be optimistic, but we have to prepare for the worst. We are going to use the worst case as a guideline to know how our algorithm grows in complexity with the number of operations. Now that we know what an algorithm is we can tackle Big O.

## What is Big O?

Big O notation is a way to determine how an algorithm responds to different inputs focusing on its growth rate. The letter O is used for the growth rate of a function is also referred to as the order of the function.  We pick the worst case scenario, even if there are multiple operations, and think how that algorithm will perform on an input of let’s say 1000 items. Maybe even more.  Let’s look at the previous example:

```
function getUser(users, id) {
  return users.find(user => user.id === id);
}
```

As we talked about before the more users we have the longer it will take for it to find the correct user. This function will grow depending on the inputs. Big O helps us categorize algorithms based on that growth rate giving us an estimate of the worst case scenario. On this example this algorithm would be categorized as an O(n), n being the number of inputs, because depending on the size of the input it will need to iterate over every single item. It will have a linear growth as shows in the graph.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/o(n).png" alt="O(n) graph" />
<br>
<center>O(n) Illustration from <a href="https://towardsdatascience.com/the-big-o-notation-d35d52f38134" target="_blank" rel="noopener">The Big O Notation</a></center>

There are cases when a function will not grow no matter the number of inputs. Let’s take a look at an example:

```
const users = {
    1: {
          name: 'Ori',
          role: 'engineer',
          hobbies: 'shit posting'
    },
    2: {
          name: 'Billy',
          role: 'carpenter',
          hobbies: 'visit restaurants'
    }
    // Imagine we have a random amount of users
}

delete users[1]
```

Here we have an object with a key value pair that identifies each user. No matter how big the input. Can be thousands, millions. As long as we know the id (the object key) we can delete that user and not need to iterate over it. This algorithm is classified as an O(1) due to no matter the size of the input it will only take 1 computation to complete its operation. The graph will just be a straight line.


<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/O(1).png" alt="O(1) graph" />
<br>
<center>O(1) Illustration from <a href="https://towardsdatascience.com/the-big-o-notation-d35d52f38134" target="_blank" rel="noopener">The Big O Notation</a></center>

Let’s take a look at the formal definition of Big O. It will be scary at first, but we are going to go each step of that definition to be able to understand it as computer scientist do.

### Formal Big O Definition

<em>Big O notation is a mathematical notation that explains the limiting behavior of a function when the argument tends toward a particular value or infinity. Big O is a member of the notation family invented by Paul Bachmann, Edmund Landau, and others commonly referred to as Bachmann – Landau notation or asymptotic notation.

Let f and g be two functions defined on some subset of the real numbers. One writes f(x) = O(g(x)) as x -> infinity if and only if there is a positive constant M such that for all sufficiently large values of x, the absolute value of f(x) is at most M multiplied by the absolute value of g(x). That is, f(x) = O(g(x)) if and only if there exists a positive real number M and real number x0 such that |f(x)| <= M * |g(x)| for all x >= x0.</em>

(Wikipedia, 2020)

Let’s dissect this definition because at the moment is very hard to read.

* We have two functions. One is named f and the other g. The function f is the one we are trying to find the big O of.
* The g function is an attempt to classify our f function. We are going to classify it as an O(n) for this example.
* We will know that f is an O(n) if and only if we can graph the two functions and the lines never cross each other.
* The definition says you get to choose the x constant (input) value to verify if the functions doesn’t cross each other. We omit adding the input to the equation because all it will do is make the graph steeper while the curve has the same general shape if you have a bigger input. The value you choose must be a real value like 45, not infinity. The graph below is an O(n) graph and if the function g is an O(n) as well it will never cross since they will have the same shape.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/o(n).png" alt="O(n) graph" />
<br>
<center>O(n) Illustration from <a href="https://towardsdatascience.com/the-big-o-notation-d35d52f38134" target="_blank" rel="noopener">The Big O Notation</a></center>
<br>

* Following that train of thought smaller Big O Functions if we choose to multiply O(1) by O(n) it will always cross each other at some point.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/O(n)+vs+O(1).png" alt="O(n) vs O(1) graph" />
<br>
<center>O(n) vs O(1) Illustration from <a href="https://towardsdatascience.com/the-big-o-notation-d35d52f38134" target="_blank" rel="noopener">The Big O Notation</a></center>

## Techniques to identify the time complexity

Now that we are armed with the formal definition of Big O and understand what we should be looking for let’s take a look at a couple of Big O notations with code examples to be able to identify it when we need to.

### O(1)

```
const users = {
    1: {
          name: 'Ori',
          role: 'engineer',
          hobbies: 'shit posting'
    },
    2: {
          name: 'Billy',
          role: 'carpenter',
          hobbies: 'visit restaurants'
    }
    // Imagine we have a random amount of users
}

delete users[1]
```

This example was used previously but to summarize that previous explanation. The number of users can be a thousand, a million, infinitely many but as long as we know the id that is the key value pair we can delete it without needing to iterate over the list. If we graph what this would look like it would be a straight line therefore it only takes 1 computation to solve.

#### Plot

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/O(1).png" alt="O(1) graph" />
<br>
<center>O(1) Illustration from <a href="https://towardsdatascience.com/the-big-o-notation-d35d52f38134" target="_blank" rel="noopener">The Big O Notation</a></center>

### O(log n)

```
/* Returns either the index of the location in the array, or -1 if the array did not contain the targetValue */

 function binarySearch(array, targetValue) {
    let min = 0;
    let max = array.length - 1;
    let guess;

    while(min <= max) {
          guess = Math.floor((max + min) / 2);

          if (array[guess] === targetValue) {
                return guess;
          }
          else if (array[guess] < targetValue) {
                min = guess + 1;
          }
          else {
                max = guess - 1;
          }

    }

    return -1;
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const result = binarySearch(primes, 7);
```

The algorithm binary search is a great example for a  O(log n) algorithm. What it does is that given a sorted array it divides the results in half and checks if the value that it needs to look is over or under one of the chunks. Then it keeps splitting the values until it finds it. Let’s use an example to understand this a bit better since it's tricky to visualize.

Let’s say you got a bunch of files in a folder called best friends. The files look like this:

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/binary-search-1.txt.png" alt="binary search 1" />

We need to find Katy.txt from the group. For this type of search you will divide the group into two pairs by picking the file that is in the center. Fiona would be the one in the center of the 2 groups. Since Fiona is not the friend we are looking for we discard it from the temporary list we are making. The two groups would look like this:

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/binary-search-2.txt.png" alt="binary search 2" />

Since Fiona was our file that was the one to classify the groups in two pairs we know the first group is not where Katy is at. We also discard that group. Now we use Ignus as our center point. The letter K is after the letter I. We further divide the group into two groups discarding Ignus. The next result would look like this:

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/binary-search-3.txt.png" alt="binary search 3" />

We discard that first group due to Ignus telling us the next group is probably where Katy is at. On this next one we divide the group into two again, and we can tell that Katy is on the second group. We finally found here.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/binary-search-4.txt.png" alt="binary search 4" />

This algorithm is more efficient when trying to look on a list of n elements that are in order because we don’t need to look over each element. We just keep dividing until we only get one item. Another example that might help would be the <a href="https://www.youtube.com/watch?v=P3YID7liBug" target="_blank" rel="noopener">following video</a>.

This is an algorithm that would make your app run way faster, and we can visualize the growth on the following graph:

#### Plot

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/O(log+n).png" alt="O(log n) graph" />
<br>
<center>O(log n) Illustration from <a href="https://towardsdatascience.com/the-big-o-notation-d35d52f38134" target="_blank" rel="noopener">The Big O Notation</a></center>
<br>

### O(n)

```
function getUser(users, id) {
  return users.find(user => user.id === id);
}
```

We talked a lot about this one earlier. Pretty much what it means is that no matter the amount of values we got on a list we would go over every single entry on the worst case scenario to find the element we seek. Not the worst algorithm there is but it has a linear growth. A better solution would be to sort the list beforehand with an id and then do the binary search we talked about before. Sometimes this is not an option. How it will look in the graph is like so:

#### Plot

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/o(n).png" alt="O(n) graph" />
<br>
<center>O(n) Illustration from <a href="https://towardsdatascience.com/the-big-o-notation-d35d52f38134" target="_blank" rel="noopener">The Big O Notation</a></center>
<br>

### O(n * log n)

```
const items = [5,3,7,6,2,9];

function swap(items, leftIndex, rightIndex){
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)], // middle element
        i   = left, // left pointer
        j   = right; // right pointer
    while (i <= j) {
          while (items[i] < pivot) {
                i++;
          }
          while (items[j] > pivot) {
                j--;
          }
          if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
          }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
          index = partition(items, left, right); // index returned from partition
          if (left < index - 1) { // more elements on the left side of the pivot
                quickSort(items, left, index - 1);
          }
          if (index < right) { // more elements on the right side of the pivot
                quickSort(items, index, right);
          }
    }
    return items;
}

// first call to quick sort
const sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); // prints [2,3,5,6,7,9]
```

The quick sort algorithm is a great example for this kind of complexity. It follows a divide and conquer approach where it divides the elements into smaller pieces based on a condition and then sorts those divided smaller pieces. By far this is the most popular sorting algorithm out there. Sorting big lists is a pretty complex operation. If you didn’t this algorithm you would have to go over every element multiple times  putting each one in the correct spot. That will yield a higher complexity. By cutting the array into chunks you won’t have to go over every single element multiple times.  A good thing to note that the array method in JS called `.sort` uses quick sort to sort all the elements. Let’s take a look at how quick sort works exactly:

1. We first need to find the pivot element (it can be anything) of the array

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/Quick+Sort+1.png" alt="Quick sort 1" />
<br>

2. Then we go over each element from left and right of the pivot swapping elements that are less than the pivot.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/Quick+Sort+2.png" alt="Quick sort 2" />
<br>
<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/Quick+Sort+3.png" alt="Quick sort 3" />
<br>
<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/Quick+Sort+4.png" alt="Quick sort 4" />
<br>

3. Since 2 is less than 7 we swap them.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/Quick+Sort+5.png" alt="Quick sort 5" />
<br>

4. We will then repeat this process of picking a random pivot and swapping elements less or higher than the pivot on the correct order until the list is sorted.

Another explanation of quick sort can be <a href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank" rel="noopener">found here</a>.

One thing to be aware of is that the worse case can still be O(n^2) if the pivot picked randomly is a bad one. There are ways to remedy this by picking the pivot in the center or try not to pick the same position each time.

On the following general graph we can see how a O(n * log n) compares to a O(n^2) will perform:

#### Plot

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/big-o-explained/big-o-complexity.png" alt="Big o complexity graph" />
<br>
<center>Complexity Growth Illustration from <a href="http://bigocheatsheet.com/" target="_blank" rel="noopener">Big O Cheatsheet</a></center>
<br>

### O(n^2)
