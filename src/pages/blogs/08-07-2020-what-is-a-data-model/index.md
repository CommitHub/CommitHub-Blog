---
    path: '/what-is-a-data-model'
    title: What is a Data Model?
    author: Ori Alvarez
    authorImage: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fauthor%2Fluis.jpg?alt=media&token=56f5f968-08c9-40a6-9583-4cc361ec550f'
    date: '2020-08-07'
    description: Demystifying the concept of a data model
    categories: [Technology Explained]
    backgroundImg: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fwhat-is-a-data-model%2Fdata%20model.png?alt=media&token=f6980dbc-191d-427d-92be-b35ec3ffdeab'
    published: true
---

A data model standardizes and organizes the data and how they can relate to one another.
The data in essence represents reality by documenting people, places, things, and the events between them.
Often they are used to aid communication between business people that define the requirements for a computer software program and the technical people design the architecture in response to those requirements.
Data models can be represented in graphical form.

<img class="section-jumbo" alt="data-model-example" src="https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fwhat-is-a-data-model%2Fdiagram.png?alt=media&token=ba32df0f-63c1-41f0-8b39-0354306d1417" />

A data model in software development can be referred to as a data structure.
It's used is to define how the data will look like to abstract work between different departments e.g. front end engineers and back end engineers.
They can be complemented using classes and functions that instantiate the object representing the data.
In JavaScript we can define a data model using a class for example:

```
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
```

This will allow us to initialize an object that has the same properties as all the other objects that use the same class.
As you can see this can allow us to communicate how the data should look like on a central location.

## Types of Data Models

* Conceptual data model: It's a high-level model that relates to business structures and concepts.
* Logical data model: Contains descriptions of software-related processes e.g. tables, columns, object-oriented classes, etc.
* Physical data model: Describes the physical model on how and where data is stored e.g. partitions, CPUs, databases, etc.

## Benefits of Data Modeling

* By defining what requirements are needed beforehand and considering different approaches it can yield higher quality code.
* You can reduce costs by catching problems with the requirements beforehand. It's easier to fix a data model than fix errors on software after is written. Worst-case scenario on customer's hands.
* Utilizing models allows engineers to output code faster since all requirements are put to the test beforehand. They can focus on writing the code in confidence.
* Clearer scope since all requirements are written and tested before writing any code
* For database having a good model will yield higher performance due to how simple it is to tune a model. A model must be crisp and coherent with all rules laid out to allow an easy transition to database land.
* Better documentation due to how easy is to edit a model between teams. Models display information without all the tech jargon that can be hard to communicate.
* Fewer errors due to how easy is to communicate a good model. People can misunderstand requirements and having a visual indicator can help communicate complicated data.

## Conclusion

Data models are a pretty interesting subject I enjoy. I've been utilizing them to explain complex ideas to my coworkers that on paper would be too complicated.

Happy Coding! 🚀

## Resources

* <a href="https://cedar.princeton.edu/understanding-data/what-data-model" rel="noopener" target="_blank">What is a data model?</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" rel="noopener" target="_blank">Classes MDN</a>
* <a href="https://en.wikipedia.org/wiki/Data_model" rel="noopener" target="_blank">Wikipedia Data Model</a>
