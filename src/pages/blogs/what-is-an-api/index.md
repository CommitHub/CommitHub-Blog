---
    path: '/what-is-an-api'
    title: What is an API?
    author: Ori Alvarez
    authorImage: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fauthor%2Fluis.jpg?alt=media&token=56f5f968-08c9-40a6-9583-4cc361ec550f'
    date: '2020-08-21'
    description: An explanation about what is an API and how to build one
    categories: [Technology Explained, JavaScript]
    backgroundImg: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fwhat-is-a-api%2FAPI.png?alt=media&token=3ff8cbfd-e6fc-44b7-9154-43c87f6cd917'
    published: true
---

Humans are social creatures that develop tools to connect and share information.
We use the internet to share information, connect with other people or purchase items.
The question that should be asked is how data gets from there to here allowing us to connect.
That is where the Application Programming Interface or for short API comes in.

## What is an API?

The API is in charge of taking in requests for data and sending a response of the data requested.
To give it more context imagine you are in a restaurant and the waiter (API) comes to your table asking what are you going to order.
You will then tell the waiter and they will go back to the kitchen (Server) telling the chefs the order.
After some time the waiter will pick up the food you ordered and serve it to you.
This is not the most perfect metaphor but provides some context to understand the concept.

Let's extend the definition since we are missing some key features to by taking a look at one type of API called the Data API.
This type of API is in charge of not only getting data but updating, deleting and creating that data.
This is called CRUD for Create Read Update and Delete.
It can also be in charged of authenticating the user doing an operation.
You don't want a user that doesn't own an account to delete it as an example.
API's may need a server that handles each request to verify, run the operation then return the result.
Servers are just another computer that is designed for a specific use case.

On it's core API's help communication between services controlling access and how that data is distributed.
Let's take a look at other types of API

## Types of API

These are the main types of API's

### Open API's

They are publicly available allowing access to developers to use them.
These API's might require having an account to them but are still open for personal or commercial use.

### Partner API's

They are open only to business partners having restrictions who can access them and what the developer can do.

### Internal API's

API's that are only used by the person or entity that made them.
They are not distributed to nobody outside that group.

### Composite API's

Combines multiple data services or API's allowing the developer to use more than one endpoint.
An example of this type of API are micro-services arquitecture.

There are other type of API's that help developers by providing access to hardware or software.
This helps developers save time by not having to write every piece of code that is needed.

## Other API's

This is another approach to categorize API's

### Data API's

As we talked about above they provide us with a way of manipulating data on softwware application by using CRUD operations.

### Hardware API's

Let's say you want to develop an app for Android and you need access to the camera to allow users to take a profile picture.
Android has a large numbers of APIs that allow these operations on the hardware of the device.
Depending on the device and OS they can differ.


## API's can be more than one type

API's can have a combination of hardware and software to complete an operation.
Using our picture example when we take a picture using the camera API on the hardware we might need to send that data to update the user profile picture on the database doing an Update operation.
The hardware API's can be considered open API's because they can be accessed by any developer meanwhile the API that is updating the profile picture can be an internal because no other developer can access it.
Just the application.


## Types of API Protocols

When utilizing API's we need certain protocols to allow developers to be in the same page when utilizing an API.
These protocols give rules to the API that it must adhere to.
We are going to take a look at the major ones.

### REST API

Representational State Transfer or for short REST is a web service API and architectural style for a distributed system.
It was presented by Roy Fielding in the 2000.

#### Protocols for REST

1. Client-server: By separating concerns between the user interface from the data concerns we simplify the process of portability and scalability.
2. Stateless: Every request of the client to the server must contain all the information necessary to understand the request sending back the data.
Any session storage is therefore saved on the client.
3. Cacheable: By defining if a request can be cached or not the client can reuse a common request for data later by saving it on the clients cache.
4. Uniform Interface: A client and a server communicate through HTTP (HyperText Transfer Protocol) and providing an adequate response on the data formatted in the type choosen. Typically JSON.
5. Layered System: Allows an architecture to be composed of different hierarchical layers. Each layer is loosely coupled and allow for encapsulation.

### SOAP

Simple Object Access Protocol or SOAP is a protocol similar to REST in that it's a type of Web API.
It was the first to standarize how applications should communicate and manage services.
The data is formatted in XML format.
SOAP didn't get major adoption due to it's rigid standards that were heavy and very resource intensive.
Most developers pick REST over SOAP.

### GraphQL

GraphQL is a query language that allows the client to structure the data it needs and then GraphQL sends that data back.
It was made to get over some of the limitations of REST where if you needed a lot of different data types you would have to make multiple calls.
We wrote a blog post explaining [What is GraphQL](https://commithub.com/what-is-graphql).

### And many more

There are a few we didn't cover like JSON-RPC, gRPC and Thrift.

## Let's get practical

We are going to build a basic Node REST API using Express.
For this practical exercise you will need to [install Node.js](https://nodejs.org/en/download/).
After you got Node installed let's get the project started.
This will initialize the application with a package.json that will be responsible of handling dependencies.

```
npm init
```

After that we need Express.js to be able to build our queries easily. This is a very famous web framework.

```
npm install express --save
```

Create a file called `index.js` and open it up on your code editor of choice.
We are going to write our server initialization process

```
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});

```

This requires express into our application, initializes the server then it listens on port 3000 for requests.
Pretty simple setup.
Now open up your terminal on the directory that the app is on and write this command

```
node index.js
```

You should see on the command line `Server running on port 3000 🚀`.
What you can do now is open up the package.json and on the scripts key add a new line like this:

```
"scripts": {
  "server": "node index.js"
}
```

Now everytime you need to run the server you just type `npm run server`.
You can type `CTRL + C` to shut down the server.
Our server is not doing anything at the moment.
Let's send a response everytime someone hits this port.
On `index.js` add the following at the end of the file.

```
app.get("/", (req, res) => {
  res.send("hello world");
});
```

Everytime someone hits the base route this will send hello world back.
Type `npm run server` and then go to your browser and type `localhost:3000`.
Since we are serving the server through our device using localhost allows us to access servers we are running locally.
You should see in your screen `hello world`.
You can take a look at the [source code here](https://github.com/CommitHub/what-is-an-api-example).

## Conclusion

Knowing what is API's will get you very far since this is a concept that can be difficult to grasp at first.
There are many articles that talk more about the subject that I couldn't cover but I hope this serves as a good start in the beautiful world of API's.

Happy Hacking! 🚀

## Additional Resources

* <a href="What is an API" rel="noopener" target="_blank">https://www.youtube.com/watch?v=s7wmiS2mSXY</a>
* <a href="Wikipedia API" rel="noopener" target="_blank">https://en.wikipedia.org/wiki/API</a>
* <a href="What is an API in English please" rel="noopener" target="_blank">https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/</a>
* <a href="What is an API? How to Geek" rel="noopener" target="_blank">https://www.howtogeek.com/343877/what-is-an-api/</a>
* <a href="Different Types of API's" rel="noopener" target="_blank">https://apifriends.com/api-creation/different-types-apis/</a>
* <a href="API Types" rel="noopener" target="_blank">https://apifriends.com/api-creation/different-types-apis/</a>
* <a href="What is REST?" rel="noopener" target="_blank">https://restfulapi.net</a>
* <a href="What is SOAP?" rel="noopener" target="_blank">https://www.tutorialspoint.com/soap/what_is_soap.htm</a>
* <a href="Know API Protocols" rel="noopener" target="_blank">https://www.mertech.com/blog/know-your-api-protocols</a>
* <a href="Node.js" rel="noopener" target="_blank">https://nodejs.org/en/</a>
* <a href="Express" rel="noopener" target="_blank">https://expressjs.com/</a>

