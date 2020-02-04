---
    path: '/what-is-graphql'
    title: What is GraphQL?
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2019-05-31'
    description: A quick introduction to GraphQL to get you started with this technology.
    categories: [GraphQL]
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/what-is-graphql%3F/cover-image.jpg'
    published: true
---

Recently I had the chance to work with GraphQL and I really enjoyed how easy is to get started with it. GraphQL is a language agnostic query language for API's that queries your existing data. The part I like the most it gives you what you ask for and nothing more. It also follows a reference of the relationships with different data resources and what cost you either a complex request or multiple ones can be achieved easily with one query.

## A little history

It was made by Facebook internally in 2012 before being publicly released in 2015. The GraphQL project was moved from Facebook to the newly-established GraphQL Foundation on November 7, 2018, hosted by the Linux Foundation. It makes total sense for a company like Facebook to think about a concept like this because they manage a lot of data with a lot of relationships and need something that handles all that very quickly.

## How does work?

If you're like me just with an explanation you can sell me the idea but what convinces me is that sweet code. For you to use GraphQL you will need to define the schema for your data beforehand.

```
type Post {
  title: String
  tagline: String
  author: User
}
```

After you get your schema defined you can start asking for data.

```
{
  post(name: "What is GraphQL?") {
    tagline
  }
}
```

Then you will get back specifically what you asked for.

```
{
  "post": {
    "tagline": "A quick introduction to GraphQL to get you started with this technology."
  }
}
```

It's that simple to get started! Don't think all that GraphQL does is query data. It can also modify data allowing us to edit, add or delete using <a href="https://graphql.org/learn/queries/" rel="noopener" target="_blank">Mutations</a>.

## Why should I use it?

### Specific data

Using RESTful API's to get specific data can be a daunting task and lead to very hard to understand the code. You might end up with something like this:

```
GET api.example.com/users/123?include=friend.friend.name&friend.friend.ocupation=engineer
```

With GraphQL we can get make this query in a cleaner more readable way.

```
{
 user(id: 123) {
   friends {
     friends(job: "engineer") {
       name
     }
   }
 }
}
```

### Fetching multiple resources

We often have the problem that in one route with REST we have to get the user then with that information we need to query another resource. With GraphQL it maintains a record on the relationships between data and you can query once and get all the information you need.

## Conclusion

GraphQL is a very exciting technology and it's getting rapid adoption. I am advise you to start looking deeper into the nicks and crannies of GraphQL because this might become a fundamental building block of web development in the future. Only time will tell.

Happy Coding! :smiley:

## Resources

* <a href="https://www.freecodecamp.org/news/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf/" rel="noopener" target="_blank">What is this GraphQL thing I keep hearing about?</a>
* <a href="https://graphql.org/" rel="noopener" target="_blank">GraphQL.org</a>
* <a href="https://adityasridhar.com/posts/what-is-graphql-and-how-to-use-it" rel="noopener" target="_blank">What is GraphQL and how to use it</a>
* <a href="https://www.moesif.com/blog/technical/graphql/REST-vs-GraphQL-APIs-the-good-the-bad-the-ugly/#" rel="noopener" target="_blank">REST vs GraphQL</a>
* <a href="https://www.howtographql.com/" rel="noopener" target="_blank">How to GraphQL Tutorial</a>
* <a href="https://blog.apollographql.com/" rel="noopener" target="_blank">Apollo Blog</a>
* <a href="https://www.graphqlweekly.com/" rel="noopener" target="_blank">GraphQL Weekly Newsletter</a>
* <a href="https://github.com/chentsulin/awesome-graphql" rel="noopener" target="_blank">A GraphQL list of resources</a>
