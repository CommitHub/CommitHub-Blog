---
    path: '/sudo-what-the-heck-is-serverless'
    title: Sudo 03 - What the heck is serverless
    author: Ori Alvarez & Nick Ronnei
    authorImage: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fauthor%2F%24%20sudo.png?alt=media&token=e4fb04d6-2397-4414-80c4-31b97ec38810'
    date: '2020-10-22'
    description: The script used for the Sudo podcast episode what the heck is serverless
    categories: [Sudo]
    backgroundImg: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2FSudo%2Fwhat-the-heck-is-serverless%2F03%20What%20the%20heck%20is%20serverless%20!.png?alt=media&token=98b10baf-f5eb-4d65-803a-a3a7e3fcfaf9'
    published: true
---

You can listen to the episode [here](https://rss.com/podcasts/sudo/86689/)

## Introduction

* **Ori**

  Hello everyone, welcome to another episode of the Sudo podcast! I’m Ori.

* **Nick**

  And I’m Nick.

* **Together**

  Thanks for listening!

## Topic Intro

* **Ori**

  Serverless is a topic we hear new things about every day. The term itself is confusing because there is a server that handles that architecture just not on our end. For this episode the topics we are going to talk about are:

  * What the heck is serverless
  * Brief History of Serverless Architecture
  * Benefits of serverless
  * Drawbacks of serverless
  * Different companies that offer serverless

## Serverless Architecture: Spark Notes Edition

* **Nick**

  According to Cloudflare, “Serverless computing is a method of providing backend services on an as-used basis.” It's essentially pay-as-you-go computing. Amazon Web Services explains that Serverless “eliminates infrastructure management tasks such as server or cluster provisioning, patching, operating system maintenance, and capacity provisioning.”
In plain English: Serverless lets you use computer resources for whatever task you need without worrying about where those resources are coming from. You don’t pay for anything you don’t use and you don’t pay for the overhead of maintaining infrastructure. That’s all fine and dandy, but we know that code runs on servers. So, Ori, where the heck are the servers?

* **Ori**

  You may have noticed above that none of those definitions say, “there are no servers!” They say, “You don’t have to maintain the servers.” That’s the essence of Serverless Architecture: you’re a consumer of a service. You’re using infrastructure that someone else set up specifically for the purpose of providing that service, rather than building your own infrastructure to create a custom version of that service for yourself.
Understanding that concept is very important to understand the concept of “Serverless Architecture” overall. Rather than running an entire ecosystem of servers with unique purposes to power a complex application, you rely on an ecosystem of isolated services that address each of those unique needs of your application. There are many different parts to Serverless Architecture.


* **Nick**

  There sure are. It’s a lot more than “Functions as a Service”, which is primarily what I think of when I think about serverless architecture. For me, that’s the clearest use case for serverless stuff that’s easy to grok. However, these architectures are multi-faceted, covering everything from Compute Resources (FaaS) to Push Notifications (Messaging). We’ll talk a little bit about some of the core types of Serverless Services now, and we’ll get a look at how different companies offer these services later on.

### Compute Resources

* **Nick**

  Compute Resources, or Functions as a Service, are for running code. Maybe you need to process some user input and save it to your database. Maybe you need to generate a report when someone clicks a button. For those operations, you need some server time. In a traditional Cloud infrastructure, you’d run a server so you could have this compute power on hand when you need it. You’d also be paying for it when you don’t need it.

### Storage

* **Ori**

  Many sites or applications need to save stuff. Think about uploading profile pictures to a social media platform or saving custom recipes to your fitness tracker application. That information needs to persist somewhere so that we can access it later. Storage might be as simple as a static file server. You make a request to the server and you get a file back in response. This is a common solution for uploading documents like photos, music, and videos. As another example, static HTML websites often use a serverless solution like AWS Simple Static Storage (S3) for hosting because each request only needs to return an HTML page for your browser to render.
Storage can also be dynamic and data-oriented. Databases work best here. NoSQL databases are very common parts of serverless. Imagine a fitness tracker application that takes in custom recipes from users and stores their nutrition information. Those recipes are then available to other users in the app. That information needs to be stored in a database so it can be retrieved later. Numerous vendors offer database solutions that don’t require you to maintain your own database server.

### Request Interfaces

* **Nick**

  Compute Resources are like the muscles that connect and operate on the Storage layer of a Serverless Application, but we still need a way for the Interface layer (visual part of an app) to interact with that back end infrastructure. That’s where Request Interfaces come in. The overwhelming majority of applications interact with their back ends via the good ol’ Hypertext Transfer Protocol (HTTP). Many serverless providers offer tools for making requests to a web server they manage, which in turn activates Compute Resources or connects to a dynamic storage solution. These services can take many different forms, but the important thing is that they let an application talk to other parts of a serverless infrastructure.

### Messaging

* **Ori**

  The last major type of serverless infrastructure we’ll discuss here is Messaging. It’s very common for applications to need a way to activate different services based on some event. Push notifications, email list subscriptions, and data processing pipelines are all event-driven use cases that traditionally require some kind of messaging server.
Push notifications and email lists often follow the Pub-Sub (Publish and Subscribe) pattern. They have a group of people subscribed to a “topic”. When a new event is “published” with that topic, everyone subscribed to the topic receives a notification. Asynchronous data pipelines often operate on a Queue pattern. Imagine uploading a data file to some website for processing. When that file is uploaded, it gets put into a queue. Once all of the other files ahead of yours in the queue finish processing, yours gets processed and the results get stored. Again, traditionally, you’d have to run a Queue server to manage all of those messages. Now, many companies offer dedicated queueing services so that you don’t have to maintain the server yourself, but you can still get the benefits of queueing.

* **Nick**

  There are certainly other pieces of serverless architecture out there, but these are the 4 main areas that we’ll keep in mind as we unpack Serverless Architecture. They’re illustrative enough to help us understand what’s going on without getting too deep into the technical weeds. Plus, they’re the 4 that we’re personally most familiar with so we can speak with more knowledge about them.
Now that we’ve gotten an overview of what Serverless Architecture actually means, let’s talk a bit about how Serverless became a thing in the first place!

## History of Serverless

* **Nick**

  Though serverless architecture is kind of “the new hotness” right now, the concept has actually been around for a very long time. However, it’s only grown into its own as a fully viable choice for complex applications in the last 5 years. But when did what we think of as serverless architecture really come onto the scene, Ori?

* **Ori**

  The first commercial product that offered serverless Compute Resources was called Zimki and was launched in 2006 by the UK-based company Fotango (owned by Canon, the camera company). It created a “grid” of Zimki servers that developers can use to execute arbitrary JS code. It used a shared-capacity billing model. How it worked was that developers had the ability to host and create a network with other developers of Zimki Servers increasing the capacity of the grid. They would then figure out the billing based on the network capacity. This makes me think of the video game death stranding where every person you bring into the chiralium network increases the network capacity allowing the player to build more stuff. They also wanted the project to be open source with the promise of giving back to the community. Unfortunately, the platform did not last long. There were many issues on the corporate level by making the platform open source. The COO Simon Wardley quit due to that at a keynote speech on Jul 27, 2007. Such a baller moved right there.

* **Nick**

  Next up: Google App Engine launched in 2008 as a metered billing platform for custom python applications but didn’t allow for arbitrary code execution. It used WSGI for a request interface (HTTP requests to lightweight server; standard, implementation-agnostic API for calling through to a Python app). It was more of a platform as a service really and is still around covering more languages than it initially was.

* **Ori**

  After that came PiCloud: one of the first to be a true FaaS platform for python. It launched in 2010. It was then acquired by Dropbox in 2013. Little is known today about it. The website is dead.

* **Nick**

  AWS Lambda launched in November 2014 and it was a true watershed moment in serverless computing. Other services like (S3) had been around for years before this, but complex applications still needed servers. Lambda opened the door to a different future. AWS API Gateway launched in 2015 with a very abstract user interface helping realize the power of serverless. Compute is the connective tissue that ties all services together.  API Gateway provided a de-coupled way for applications to communicate with serverless services. The same API could call services in Java, JS, Python, Go, Ruby, or any other language supported on AWS Lambda. In turn, those Lambda functions could hook into other services like S3, DynamoDB, and SNS.

* **Ori**

  Firebase was founded as an independent company in 2011 and its first product was the real-time database that is still available today. In 2014 they launched their authentication and hosting services. The same year they were acquired by Google. In May 2016 at Google/IO Firebase introduced Analytics and announced that it was expanding its services to become a unified backend-as-a-service (BaaS) platform for mobile developers. In October 2017, Firebase launched Cloud Firestore, a real-time document database as the successor product to the original Firebase Realtime Database. I’m a big fan of firebase and this history plays a lot into why these services are so popular now. Let’s talk about the current serverless provider’s Nick.

## Current Serverless Providers

* **Nick**

  AWS is one of the most popular providers right now with a variety of services. One of the most popular ones are:
    * Compute: Lambda (Functions as a Service)
    * Request Interface: API Gateway (HTTP Interface)
    * Storage: DynamoDB (NoSQL Database)
    * Storage: S3 (Static Storage)
    * Messaging: SNS (Pub/sub messaging)
    * Messaging: SQS (Queueing)

* **Ori**

  Then there is my baby firebase that I truly love to work on due to how easy and pretty the interface is. The docs are amazing. Firebase runs on top of the google cloud platform.  Services they offer are:
    * Firebase Firestore
    * NoSQL Database but queries can be performed using the npm package - No need for routes
    * Cloud functions (Functions as a service)
    * Authentication (Independent of the database but does not need routes too)
    * Firebase Storage (Static Storage)
    * Hosting
    * Machine Learning

  Google cloud has more services than firebase since it mirrors what AWS is. Some of their services for serverless are:
    * Cloud functions (Same as Firebase)
    * App Engine: With zero server management or configuration deployments, developers can focus on building highly scalable applications without the management overhead.
    * Cloud Run: Run stateless HTTP containers on a fully managed platform or on Anthos. Knative, an open API and runtime environment built on Kubernetes, enables you to run workloads anywhere: fully managed on Google Cloud, on-premises, or on a third-party cloud provider via Anthos.

* **Nick**

  For the third one, we got Azure that is growing in popularity. As AWS they offer a lot of services we are not going to cover but these are the main cloud/serverless that you can use:
    * Bot Service: Intelligent, serverless bot service that scales on demand
    * Cognitive Search: AI-powered cloud search service for mobile and web app development
    * Machine learning: Bring AI to everyone with an end-to-end, scalable, trusted platform with experimentation and model management
    * Functions: Process events with serverless code
    * Cosmos DB: Fast NoSQL database with open APIs for any scale

* **Ori**

  Lastly, we got Cloudflare that has a limited-service called Cloudflare workers. They are the equivalent of AWS Lambda and they offer very low latency in all regions. It's very interesting to me because I truly believe that if they buckle down they can really become a competitor to the big three.

## Why Use Serverless Architecture

* **Nick**

### Lower Cost
  Depending on your application, this can be a cheaper route because you will only be paying when the services are being used. This can be crucial for a new application when you don't have many users and need to go for the cheapest alternative. This likely doesn’t hold true for applications that do heavy processing because most serverless platforms are optimized for very short-running operations. Serverless can also help lower dev overhead costs because it can cut a lot of the development time due to its simplicity. Your devs don’t need to spend time learning how to work with your custom server setup and can focus purely on development. Additionally, you don’t need to worry over maintaining those servers saving you money on wages for an infrastructure engineer and for the server itself.

## Simplified Back End Code

  Since you don't have to worry about configuring your server you can create serverless functions that carry out simple operations. This can be sending an email or updating a database. Maintaining only the code necessary to run those operations means your devs won’t need to spend time maintaining the server code you’d need to make them available via your own API.

## Simplified Scaling
  Developers using serverless don't have to worry about policies to scale up their code. The vendor takes care of scaling your application on demand. If you see a spike in usage, your provider will automatically allocate more resources without any intervention from you. Similarly, when traffic drops, the resources automatically scale back down you won’t be paying for any increased server capacity.

## Quicker Turnaround
  Having a simplified backend can help you increase the speed of the development process getting your application into the market sooner. One of the main points of a lean startup is to get an MVP as quickly as possible into the market to collect feedback and pivot your application to what the market wants. Even if you are working for a bigger company if you are building something and need it done quickly, serverless can be a great option.

  Now, that all sounds pretty good. But it can’t be all sunshine and roses, right? What are some of the drawbacks of Serverless Architecture, Ori?

* **Ori**

  Yes, it’s important to know when serverless is a good choice for you and when it isn’t. There are many reasons why it might not be a good choice for your project, but I’ll address the three main ones that I see.

## Drawbacks of Serverless Architecture

### Vendor Lock-in
  When choosing a vendor you must be aware that you might get locked into their services for the long run. Your AWS Lambda function can’t run on Google Cloud Platform without serious changes to the code. You lose control over the hardware and updates that it could lead to issues in your application. You could transition your serverless functions to an actual server that you set up yourself but that will take time to do. They also don't make it easy to switch to another vendor.

### Unsustainable for Long-running Tasks

  If you are running a data-heavy backend that does a bunch of computing it could rack up a pretty big bill. Serverless is more for doing small computing problems like fetching data or sending an email. They are not meant to be run for a long time. In fact, most providers only allow functions to run for a short period of time before they’re automatically terminated. For example, you would not want to use serverless computing resources to try and solve for the 3 millionth digit of Pi. That’s a lot of computation that’s going to take a lot of time. Another example would be a function that waits on some request that takes a long time. If you use a serverless function to make a DB query that takes 3 minutes to resolve, your function is just waiting for 3 minutes without doing any work. That’s wasted money. There may be other, more cost-effective ways to get that done with serverless architecture, but they’d require a different approach to the problem.

### Cold Starts
The final reason you might want to avoid serverless functions is the Cold Start problem. When you run a serverless function, your provider needs to spin up a virtual environment to execute your code. That “cold start” takes time. Most providers will keep these environments on hand for a short period of time to help alleviate some of the impacts of cold starts, but it’s not a silver bullet. If your function is used infrequently, it goes dormant. When it’s called again, it becomes active and runs the code. Cold starts will make that slow even if the code itself is really fast, which can have a real negative impact on User Experience. On the other hand, if you have a function that’s invoked all the time, it can re-use the environment from the previous invocation to avoid the cold start problem.

## Examples of Serverless Architecture in the Wild

* **Nick**

  Now that we’ve talked about some of the theoretical benefits and drawbacks of Serverless Architecture, let’s see how it works in the real world! That’s always more fun anyway, right?

* **Ori**

  Yes, absolutely. Lots of big companies use serverless for all kinds of operations like Netlflix, T-Mobile, Square Enix, MLB, Vogue, and our very own Docnetwork.

* **Nick**

  When have you used Serverless Architecture in your projects Ori?

* **Ori**

  I use Serverless stuff for a few different personal projects. For the most simple example, I use a Firebase cloud function for sending emails on my CommitHub site.

  For a more advanced example, I’ll point to my Privacy Not Included project. There, I use Firebase Firestore to store information on each company we highlight. Then, I use their npm package to make queries to my database from the client-side. The npm package is basically a nifty helper library that lets you do complex interactions through an easy to use service.

  We also use a fair amount of serverless infrastructure at DocNetwork.

* **Nick**

  We sure do. We’ve played with it extensively for our production application. We’ve found some good uses and some not so good uses for it, but I think we should talk about a success story. Not long after you started, Ori, we ran into a major problem with our Notification system. It’s business-critical for a lot of our clients, and in the Summer of 2019 it basically ground to a halt.

* **Ori**

  We had tens of thousands of notifications that were backed up, waiting to go out. Some of those were time-sensitive. It was not a good look.

* **Nick**

  No, no it was not.

* **Ori**

  The original Notifications system used a traditional server architecture. Sending notifications was a scheduled job that ran with very high frequency. We run a dedicated cron server, like many other companies. That server was responsible for reading unsent notifications from our database, sending them via our email service provider, and then marking them as sent in the database. There were several major problems with this setup. First, because our cron server’s architecture, one job must finish execution before another can begin. We won’t discuss the technical and processal reasons for that here, but that’s an important constraint to understand. As a result, other long-running jobs can stall our Send Notifications job.

  Second, our query for unsent notifications takes longer and longer to run as the number of unsent notifications increases. That created a self-reinforcing problem. In an attempt to reduce the impact of that problem, we’d long ago added an arbitrary limit to the query, so we could only send a certain number of notifications per second. This helped our query complete faster, but also made it harder to work through our notification backlog.

  Finally, the most common use case for notifications in our application is for direct communication between our clients (camps, schools, and businesses) and their “participants”, so to speak (campers, students, and employees). That means most of our clients’ notifications are time critical and send in bulk. This use case combined with the technical limitations I just described created a perfect storm for unhappiness, and we had to scramble to address it.
To meet the needs of our clients we had to create a solution that 1) scaled with their demand 2) guaranteed a timely delivery and 3) didn’t degrade other clients’ experience on our platform under heavy load.

* **Nick**

  Given those needs, the Serverless approach was clearly the best one. We’d been experimenting with AWS Lambda for a while at this point, so it wasn’t a new paradigm for us.
When analyzing the issues Ori just outlined, we realized we were trying to solve a messaging problem. As we discussed before, all the major Cloud Service providers offer messaging services we could leverage. We run on AWS, so chose the Simple Queue Service (SQS) as a way to track what messages we needed to send. Right off the bat, that let us cut out the most time consuming part of our old process: querying for notifications to send. Furthermore, it dramatically reduced the load on our database, improving both real and perceived performance.

  That was great, but SQS wasn’t a complete solution. We still needed to send out the emails. There are solutions—specifically the Simple Notification Service—that can directly send emails via SQS messages. But that wouldn’t fit our needs. We didn’t want to break any other functionality our clients relied on. As a result, we decided to use AWS Lambda to 1) send each notification via the service of our choice and 2) to update our database accordingly. This further reduced load on our application servers and database, though to a much lesser extent. At this point, we were certain we’d achieved our core goal of improving app-wide client experience, but what about the scalability and delivery times?

  At the technical level, our delivery process is really fast because we can horizontally scale it so much. Without any special tweaking we could, in theory, send between 1 and 2 thousand notifications per second. Maybe more. We never tested our upper limits (I’ll address that in a second). Because of the Serverless architecture we chose, all that scaling would happen automatically as demand for the feature increased. And we are sending at least a few notifications every minute throughout normal business hours in the United States, and even much of the night.

* **Ori**

  That frequency is important for two reasons. First, we avoid the Cold Start penalties we talked about earlier because this particular function is so highly used and therefore available. Second, it means that we’re only paying for the extra compute power when we really need it.

  Also, for a brief “Explain like I’m 5” of scaling terms, think of “horizontal scaling” as having a bunch of really small computers doing the same job and “vertical scaling” as having one computer that gets more powerful to do the same job faster. Generally, horizontal scaling works better in Cloud Infrastructure because it’s easier and cheaper to throw more small computers at a hard problem than to upgrade a small computer to a big computer. In our case here, the job itself is relatively small but there’s a ton of them, so horizontal scaling is the ideal paradigm.

* **Nick**
  Ah, I totally just slipped that jargon in there. Thanks.

  So! Before, our bottleneck was, “How fast can we query for unsent notifications?” Now, our bottleneck is, “How much throughput does our email service provider allow?” We literally aren’t allowed to send as many notifications as we possibly can and have no reason to pay for the privilege. The new scalability we have can match any problem we’ve seen so far, and if that ever becomes an issue, we can work with our service providers to up our limits. Nice. Scalability achieved.

  As a result, our delivery times are also capped by our service provider’s throughput. Every time we save a new notification to our database, we also push a message into SQS. In turn, the queue automatically triggers our Lambda function. We only allow a certain number of that function to be run at once so we don’t exceed our email sending limits and to manage our costs. Our notifications no longer wait on long-running cron jobs to send—only on other processes that complete in less than a second.


## Conclusion
* **Ori**

   I hope you enjoyed this episode of Sudo. This is a subject I hold dear since it has made my workflows on my personal projects smoother and quicker.

* **Nick**

  For the next episode, we are going to talk about ALL THINGS AWS! We’ll cover several services that we’re familiar with in a bit more depth, focusing on what each service is and good practices for using them. Talk to you then! Thanks for listening!

## Citations

* Amazon. (n.d.-a). AWS Lambda – Case Studies. Amazon Web Services, Inc. Retrieved September 19, 2020, from https://aws.amazon.com/lambda/resources/customer-case-studies/
* Amazon. (n.d.-b). Serverless Computing – Amazon Web Services. Amazon Web Services, Inc. Retrieved September 19, 2020, from https://aws.amazon.com/serverless/
* Cloudflare. (n.d.). Attention Required! | Cloudflare. Cloudflare.Com. Retrieved September 19, 2020, from https://www.cloudflare.com/learning/serverless/what-is-serverless/
* Forrest, B. (2006, September 25). Zimki, hosted JavaScript environment. O’Reilly Radar. http://radar.oreilly.com/2006/09/zimki-hosted-javascript-enviro.html
* Google. (n.d.-a). Python 2 Runtime Environment. Google Cloud. Retrieved September 19, 2020, from https://cloud.google.com/appengine/docs/standard/python/runtime?csw=1
* Google. (n.d.-b). Serverless Architecture |. Google Cloud. Retrieved September 19, 2020, from https://cloud.google.com/serverless/whitepaper
* Lardinois, F. L. (2014, October 21). TechCrunch is now a part of Verizon Media. Techcrunch. https://techcrunch.com/2014/10/21/google-acquires-firebase-to-help-developers-build-better-realtime-apps/
* Miller, R. M. (2014, November 13). TechCrunch is now a part of Verizon Media. Techcrunch.Com. https://techcrunch.com/2014/11/13/amazon-launches-lambda-an-event-driven-compute-service/
* Msv, J. (2015, July 16). PaaS Vendors, Watch Out! Amazon Is All Set To Disrupt the Market. Forbes. https://www.forbes.com/sites/janakirammsv/2015/07/16/paas-vendors-watch-out-amazon-is-all-set-to-disrupt-the-market/#2586a708e88d
* Rao, L. R. (2010, July 19). TechCrunch is now a part of Verizon Media. Techcrunch. https://techcrunch.com/2010/07/19/picloud-launches-serverless-computing-platform-to-the-public/
* Staff, W. (2017, June 3). Dropbox Buys Supercomputing Startup — And That Makes Perfect Sense. WIRED. https://www.wired.com/2013/11/dropbox-piclou/
* Wikipedia contributors. (2020a, August 17). Firebase. Wikipedia. https://en.wikipedia.org/wiki/Firebase
* Vance, A. (2007, July 27). Fotango COO quits job during keynote speech. Theregister.Com. https://www.theregister.com/2007/07/27/wardley_zimki_fotango/
* Wikipedia contributors. (2020, September 2). Web Server Gateway Interface. Wikipedia. https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface
* Williams, C. (2007, September 26). Fotango to smother Zimki on Christmas Eve. Theregister.Com. https://www.theregister.com/2007/09/25/zimki_fotango_shut/
