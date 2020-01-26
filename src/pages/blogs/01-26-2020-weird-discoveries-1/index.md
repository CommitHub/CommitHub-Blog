---
    path: '/weird-discoveries-1'
    title: Weird Discoveries Entry 1 - Deleting null/undefined values on an object
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-01-26'
    description: An unlogical operation that somehow works
    category: Weird Discoveries
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/weird-discoveries-1/derpy-potato.jpeg'
    published: true
---

When working with JS I had an array with a bunch of objects that had a key of value of a string except the first one that was set to null.

```
const items = [
  {
    value: null
  },
  {
    value: 'web development'
  },
  {
    value: 'weird js logic'
  }
];
```

I had another piece of data coming from the DB that the key was the result of the value in our previous items array.

```
metadatada: {
  'web development': true,
  'weird js logic': true
}
```

I made a function that goes over the items array and runs a delete for each key.

```
function removeOldMetadata(metadata, items) {
  items.forEach(item => delete metadata[item.value]);
}
```

What weird is that a delete operation on null or undefined is successful so this `delete { }[null]` will return true. This makes no sense logically because running a delete operation on something that represents an absence of value should give at least a warning. My friend Blake Kelley analyzed this a little bit and mentioned that it's not confirmation that something was deleted, but confirmation that nothing failed to delete. The weirdest thing is that you could add a key to an object that is undefined or null and running a delete operation will actually delete that key.


I used this code snippet to test the extent this goes from truthy and falsy values and proves that delete operation and key assignment could take anything that can promote bad practices.

```
// Falsy values
console.log('test 1', delete { }[null]);
console.log('test 2', delete { }[undefined]);
console.log('test 3', delete { }[false]);

//Truthy values
console.log('test 4', delete { }[true]);

// Falsy values
const a = {};
a[null] = 'test 5';
console.log(a[null]);

a[undefined] = 'test 6';
console.log(a[undefined])

a[false] = 'test 7';
console.log(a[false]);

delete a[null];
console.log('test 8', a);

delete a[undefined];
console.log('test 9', a);

delete a[false];
console.log('test 10', a);


// Truthy

a[true] = 'test 11';
console.log(a[true]);

delete a[true];
console.log('test 12', a);
```

## Conclusion

The MDN docs mention that this characteristic from the delete operator and it's something that went over my head for a bit of time before realizing that it's a very weird logic. Having truthy or falsy keys are also a concern for me and should be taken into account when constructing the object to guard against malformed data. Keys should be descriptive of what their intent is. This makes me wonder what other nuances the language and makes it look worst in my eyes.

## Additional Resources

* [MDN working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* [MDN delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
