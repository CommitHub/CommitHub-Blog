---
    path: '/sudo-what-the-heck-is-aws'
    title: Sudo 04 - What the heck is AWS
    author: Ori Alvarez & Nick Ronnei
    authorImage: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fauthor%2F%24%20sudo.png?alt=media&token=e4fb04d6-2397-4414-80c4-31b97ec38810'
    date: '2020-11-30'
    description: The script used for the Sudo podcast episode what the heck is aws
    categories: [Sudo]
    backgroundImg: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2FSudo%2Fwhat-the-heck-is-aws%2F04%20What%20the%20heck%20is%20aws!%20.png?alt=media&token=76bf4119-9285-4c5b-8c08-1df1786c6f8e'
    published: true
---

## Introduction

* **Ori**

  Hello everyone, welcome to another episode of the Sudo podcast! I’m Ori.

* **Nick**

  And I’m Nick.

* **Together**

  Thanks for listening!

## Topic Intro

* **Ori**

  Today we are going to talk about one of the most popular and biggest cloud providers in the world. The OG AWS! The topics we are going to talk about are:
    * What is Cloud Computing?
    * Why AWS?
    * A brief history of AWS
    * Some AWS Services
    * Our experience utilizing AWS
    * How can you get started with AWS
    * What is Cloud Computing

* **Nick**

  Very, very basically, cloud computing is renting small virtual servers from a company which operates some massive physical servers. You can pay more or less for smaller or larger servers to suit the needs of your application. Many providers, like AWS which we’re talking about today, sell specialized services in addition to customizable servers such as servers optimized for and only capable of running databases.

* **Ori**

  Yes, rather than maintaining your own physical hardware, you pay another company to do that and only use the infrastructure you need. By doing this, you reduce your own costs by sharing the investment in physical servers with other companies who also need them. This reduces the cost of getting a product in the market. It’s a win-win-win situation, and for several years now, has been the way nearly all modern tech solutions are built.

* **Nick**

  It’s pretty cool stuff. This idea didn’t exist 20 years ago. But, as we’ll talk about in a bit, it was on the horizon at Amazon! They were the first movers in this space and arguably the core creators of what we know today as The Cloud. So, other than this storied history, why should we use AWS, Ori?

## Why AWS?

* **Ori**

  As I mentioned on a previous episode AWS is one of the most popular cloud providers. There are a few main reasons why we picked it:
    * There is a ton of tutorials out there to get you acquainted with it.
    * The data centers are everywhere and new ones keep popping up. That means your servers can serve (pun intended) people in every corner of the planet quickly.
    * Benefit from economies of scale by launching applications at a pretty low cost maybe even free.
    * There is a huge number of services and that list keeps increasing. You might not need services outside AWS to make your application function.

## A brief history of AWS

* **Nick**

  In an excellent and informative article I read by John Furrier while researching this topic, he describes AWS as “the biggest disruptive force in tech history that happened by accident.” I was remarkably inspired by how true that was as I dug into my research, Ori. For a company that’s so dominant, it seems like it must’ve been born from a very deliberate plan. From everything I read, that wasn’t the case and it fascinated me.

* **Ori**

  Life is wild. In my point of view success can be just an accident, but how did the empire get started?

* **Nick**

  AWS as we know it today sprang out of internal tooling. Engineers at Amazon needed to solve a problem that I think we can all relate to: they had a very hard time predicting how long it would take to complete a project.

* **Ori**

  **sarcastically** Nope, I can’t relate to that at all. No idea what you’re talking about. I hit every estimate I make.

* **Nick**

  Right, me too, of course. I should’ve said other people probably can relate.
  So, it’s the year 2000 and Amazon has just grown out of selling only books online. They've become a full on marketplace. Major retailers across the U.S. don’t really have e-commerce websites yet. That’s not a common thing at this point. Instead, the more innovative ones are trying to work with Amazon to get their products listed on Amazon.com.
  According to an interview AWS CEO Andy Jassy gave to TechCrunch in 2016, as Amazon is working on these partner integrations, they keep having trouble estimating how long partner integrations will take. They’re hiring more engineers, they’ve got a skilled workforce, but it’s not going any faster or becoming more predictable.
  As they dig into the problem, they learn that one of the major reasons everything is taking so long is that every project has to stand up the same kind of infrastructure time and time again. It’s the same tools but with slightly different, non-standard configurations, so they can’t just be repeated from project to project. There’s no tooling around it. It’s a repeated, painful process. There’s room for improvement.
  So, Amazon engineers begin working on internal services for providing standardized infrastructure. They built the first pieces of AWS as internal tooling to speed up their own projects. It was only after they’d been doing this for a few years that they began to realize it could become a business.

* **Ori**

  That’s really cool.

* **Nick**

  It sure is. There was an awakening and two things happened and I’m not sure in what order. One, a couple of engineers working on these internal tools wrote a short paper for Jeff Bezos detailing what they saw as the business opportunities they could provide with these services, including renting virtual servers to external clients. Second, the senior leadership recognized their company’s infrastructure service competency as a core strength of their business and one that they could leverage. This was in the Summer of 2003, and it was when they began to see these internal tools as a sort of operating system for the internet.
  Web applications and websites rely on the same core bits to run. The idea was that if companies could just buy those bits as services rather than buying hardware and building those bits themselves, they would. Hardware and custom-built services are a pain in the butt, and Amazon had just built all this internal tooling to solve that very same pain in the butt. If they honed their APIs for provisioning those services, they’d essentially have an operating system for building websites and applications.
  At this point, they were not calling these tools AWS.

* **Ori**

  What was it called instead?

* **Nick**

  So, I’ve learned from a blog post by Amazon’s head Web Services Evangelist Jeff Barr that there was an AWS, but this original Amazon Web Service was actually a SOAP/XML Web Service for the Amazon Product Catalog. And it was actually the thing that got him interested in working for Amazon. Eventually, though, they’d add that “s” to Service and it would become an umbrella term for the extremely impressive array of services we’re going to talk about today. Back then, though, there were comparatively very few services that made up the group.
  After senior Amazon leadership decided that AWS was worth pursuing, they had to decide how to go after it. Should they start with just a storage layer? A compute layer? A database? All three? As we discussed in our Serverless episodes, many websites use all three. It would make sense to pick one and prove that it’d work as a service before going after the rest, but would it actually be useful in isolation?
  The AWS team decided that launching as a platform was the best option: give the developers all the tools they needed right out of the gate. It was an ambitious move. That early version of AWS consisted of just S3, EC2, and SQS, which we’ll learn more about later. According to a ZDNet article from 2012, the first private partners began using the earliest form of AWS in 2005 under strict NDAs. One year later, it became available to the public in the United States and developers flocked to the platform.
  Until now, building a complex web app was impossible for small shops. You had to buy the hardware first. Scaling up to meet demand was even harder. It was cost prohibitive for smaller shops, but now a kid in a college dorm room had as much access to web-scale infrastructure as Target Corporation. It was massive for the industry.
  In 2007, they expanded their offerings with their first hosted database solution, SimpleDB. In 2008, they took EC2 out of beta, launched S3 in Europe, and launched the CloudFront Content Distribution Network (CDN). In 2009, they launched RDS. By 2016, they began pushing into Machine Learning. But how did they really build this behemoth?
  All of this began by focusing on what their own needs as a company were, getting good at addressing them, and then seeing if there was a market for their skills. When AWS was born, the cloud was a crazy idea that they thought might just work based on things they’d heard from their partnerships doing ecommerce. As the Furrier article says, “Today AWS customers include NASA, the Obama Campaign, Pinterest, Netflix, Apple, and the CIA.” They took a good tool and made a business out of it.
  Today, that business is a very successful one! AWS pulled in $9.4b in Operating Income in 2019 according to Motley Fool, which represents 63% of Amazon’s total Operating Income. That’s despite representing only 12% of Amazon’s overall revenue. Super impressive.

* **Ori**

  That is insane. A total cash cow. At the very least we are seeing some benefits in the tech world. Let’s dive into the services.

* **Nick**

  We definitely are. It makes it easier for engineers to innovate and bring cool new products to market because it’s no longer impossibly expensive and it’s obviously good profit for Cloud Providers. Andy Jassy sees Cloud Infrastructure as major way to expand the Total Available Market in the computing sector because it adds so many new user segments. Really cool. So, let’s talk about what those new user segments are actually getting access to!

## AWS Services

* **Ori**

  There are a big number of services. Over 175 services at the time we recorded this. We are only going to talk of a few that we believe are the most important for you to know.

### S3

* **Ori**

  First one on the list is S3. One of the oldest services they got. Amazon Simple Storage Service or S3 notice those 3 S is an object storage service that has a high availability, security and performance. Think about it like a Google Drive but with a few more features. You can store images, videos, music, etc. You can also host static websites like HTML, CSS and JavaScript.
  In terms of durability they say they have 99.99999999999% durability. The 11 9’s. That durability is based on data replication.

* **Nick**

  It’s kinda like Spinal Tap’s special amp—most storage solutions go up to 10 Nines. AWS’s goes up to 11, baybeeee. How do they achieve that reliability?

* **Ori**

  Frankly, we don’t really know. Their software is proprietary and their strategies are trade secrets. For the most part, though, they do it! Their Service Level Agreement for S3 actually only guarantees two nines, but anything less than that makes you eligible for a discount.

* **Nick**

  Sneaky, but in a way you can’t get mad at. Interesting.

* **Ori**

  Exactly. S3 is also pretty cheap compared to other services out there. Unless you got a lot of data you might be ok on the free tier for a long time.
  They have 4 tiers of access and the pricing goes from high to low:
    * Frequent Access: You need the data to be highly available and fast
    * Infrequent Access: The data needs to be fast but it can take a little time since is hardly accesses
    * Archive Access: This is where you see some savings. If you don’t need to access the data at all you can archive it and the windows for accessing it increase dramatically.
    * Deep Archive Access: The most cheap alternative but that also means the retrieval times are really high. Mostly used for data backups you might access once a year or a bigger timeline.

### Lambda

* **Ori**

  Now to the next one called Lambda. This is a serverless solutions that allows you to call functions on the cloud that compute something without the need to provision a server yourself.
  Think about it this way. Let’s say you got an e-commerce application and you need to allow people to pay for a product. You can create a backend server that handles all the requests to take the payment and complete it or you can use a serverless function. The good thing about serverless functions is that you will only pay for the time it takes to compute the transaction. Meanwhile, with a server you will pay for its uptime.
  The other benefit is that it scales on demand without you needing to configure anything. For your server you will need to add auto-scaling and a bunch of other things.

* **Nick**

  Ori, for the folks out there that might not be familiar with the concept of scaling, could you explain it a bit and touch on why autoscaling is so nice?

* **Ori**

  Scaling is the ability to increase resources and responsiveness  to meet demands. A good example is when Pokémon Go released. The servers were slow due to how many people were interacting with the application. If you have an automatic scaling on demand you can make servers beefier or create more servers to allocate resources to all your clients. Autoscaling simply means this happens automatically in response to increased demand without need for human intervention.

* **Nick**

  Wonderful, thanks for the explanation. If that sounds interesting to you, we just did an episode of Sudo called “What the Heck is Serverless?” that covers Lambda and other, related concepts in detail. Check it out!

### EC2

* **Ori**

  Now, let’s talk about servers. You might need something to handle a big number of requests all the time or just get your web app up. That is where EC2 comes in. EC2 stands for Elastic Compute Cloud. Amazon loves its acronyms. They offer a choice of processor, storage, networking, operating system, and purchase model. You can use it for whatever you wish. Servers are love servers are life.

* **Nick**

  They sure are. As I discussed earlier, EC2 was one of the very first services that Amazon offered. It’s also the archetype for what I think of when I think of “Cloud Computing” or “Cloud Infrastructure”. It’s important to remember that these aren’t physical servers. They’re virtual machines running on Amazon’s hardware that you can do whatever you want with.
  Interestingly, many of us choose to run our own virtual servers on the ones we rent from Amazon. If you’ve heard of Docker or Kubernetes, these are tools for running super lightweight virtual servers called “containers”, and are very commonly used on EC2. Containers are definitely worth their own episode, so we’re not gonna cover them here. However, I get a big kick out of this. Turtles all the way down; virtual servers running virtual servers.

### IAM

* **Ori**

  This next service is free and its one I recommend you get started with before doing anything. It’s called IAM and stands for identity access management. It allows you to create users and groups with different levels of permissions to access AWS resources.

* **Nick**

  What does that look like in practice?

* **Ori**

  Let’s say you got an organization with a dev ops engineer, a few developers, and an accountant. The dev ops engineer will need access to all resources to be able to monitor and manage. Then for your developers might just need access to Lambda. The accountant only to billing. With IAM, you can set all these permissions easily. The permissions are not set in stone so you can change them as many times as needed.

* **Nick**

  Right on. That makes sense. But if you’re the admin, why not just use the admin login all the time?

* **Ori**

  When you open an AWS account the first account is a root user. Its good practice to create an IAM user account for yourself with a good permission set to allow you to create and manage AWS resources. That way if that IAM user account gets compromised you can log in as root, remove the compromised account and add a new one. You should add 2-factor authentication to your root account and then store it for emergencies.

### Elastic Beanstalk and CloudFormation

* **Ori**

  Now these 2 services will help you get started easily.
  The first one is Elastic Beanstalk and it's the fastest and easiest way to deploy your applications. It will automatically manage all your applications needed resources like deployment, capacity provisioning, load balancing, auto-scaling, and application health monitoring.
  Then we got CloudFormation. The difference between these 2 services is that with CloudFormation you can define a template on what conditions should resources be created, destroyed or consumed and it will handle everything for you.

* **Nick**

  Interesting, so Beanstalk is like infrastructure templating on easy mode, similar to Google App Engine. CloudFormation is like Beanstalk for Power Users who want total control of their infrastructure templates.

* **Ori**

  Yeah, to summarize: Elastic Beanstalk handles everything for you and it's not programmable. It's a good starting point but when you get more experience you might want to switch to CloudFormation where you can program your infrastructure to handle your needs. Both services are free but the resources that it uses like the servers it provisions are not.

### SQS

* **Nick**

  Up next, we have SQS the Simple Queue Service that is one of the OG services released by AWS. SQS is a messaging service. They are commonly used when you need communication with multiple servers when an event occurs. Those servers can be doing or not doing the same thing. It is a common way to send push notifications. Every time a notification or event gets created it gets pushed into a queue and when it's up it sends that notification to the phone. As an example. If you are a news organization and you pushed a new story using your CMS (Content Management System) it will push that notification into the queue and then send the users a push notification that a story is up.
  There are 2 types of queues in AWS:
    * Queue: high throughput. Sometimes you can have duplicate messages but you want to be really sure you don’t miss a message.
    * FIFO Queue: Make sure that things get entered on the queue they get sent in the order they were received into the server. As an example we use this for our reports server in Docnetwork. Someone requested a report and this creates an event for that report to be generated. It will go from the first request to the last in that order. Nobody is getting duplicate reports.

### CloudWatch

* **Ori**

  Lastly, we got CloudWatch that allows you to monitor AWS resources giving you logs, alarms, events, system wide performance metrics, etc. You can visualize your metrics of your infrastructure and plan ahead what you need to do to take the most advantage of your AWS resources.
  One of the main things you got to do with CloudWatch in the beginning is set a billing alarm in case you go over your budget it will email you telling you that you did and you don’t get surprised with a big bill.

* **Nick**

  Going back to our scaling conversation, another cool thing you can do is set usage alarms to trigger scaling events. This is super useful because while Lambda has default autoscaling, other services like EC2 don’t. EC2 has an autoscaling feature, but you need some way to tell the service to scale up or down. Using CloudFront alarms, you can trigger scaling events in EC2 to add or remove servers depending on demand.
Using AWS

## Our Experience with AWS

* **Nick**

  We use AWS at work, but we also use it in our personal projects. It’s the weekend, and we talk a lot about work on this podcast, so we’re gonna focus on personal projects this time.

* **Ori**

  I’ve been getting training through acloudguru about AWS since is one of the most popular services out there. As a developer I believe if I can understand and be able to work with infrastructure it will be a solid addition to my resume and workplace. Nothing is more dangerous than a developer who can do full stack and deploy their own infrastructure easily.
  At my workplace my experience has been limited to S3 and Lambda since we use a handful of serverless functions to do some business processes.

* **Nick**

  The vast majority of my experience is work-based as well. However, I’ve used S3 for hosting just-for-fun personal SPA’s before and it works like a charm. Very easy to set up a custom domain through SimpleDNS, Cloudflare, or if you want to stay in the AWS ecosystem, Route 53 or CloudFront.
  Additionally, I’ve used AWS Media Convert to set up a streaming pipeline. That was a pretty wild experiment and I know nothing about streaming services, but I was able to read a few articles and get a full pipeline in places with S3, Media Convert, and a front end player on a WordPress site. Shout out to Change the Outcome, which does really cool work on addiction education for young people in an honest, fact-based way. It was a streaming pipeline for their documentary, so they could more easily share their program with schools and communities.

## Getting yourself started with AWS

* **Ori**

  My recommendation as I mentioned before is setting that IAM user for yourself and getting your feet wet with Elastic Beanstalk. Most servers are run with Linux and a good way to get acquainted with the commands is either using a Mac or installing a distro like Ubuntu or Fedora (Fedora is my favorite). That way you will be able to work on the command line with no fear. The command line is pretty sweet and will make your workflow a bit easier when you are doing a lot of management with your system.

* **Nick**

  The command line is not that bad. It’s a skill and it takes practice but it doesn’t take much practice to get the hang of it. After some time you feel like a god. You cruise around like a hacker in a movie “We’re in”. It’s a lot of fun. The other piece I’m going to say about dual booting your PC to have a distro like Fedora. Almost all the commands you find in developer documentation will be using a Linux or Unix type of system. It's really easy to follow tutorials on Linux that on Windows. Don’t be afraid of Linux. It’s come so far in the recent decades making the user interface way easier. I haven’t used Windows as my main system since 2015. I installed Ubuntu without having knowledge of the command line. You can get in there and don’t need to be a computer guru to understand it.
  My 2 cents on starting with AWS. If you want to get started with S3 that’s a great way to start. You can host a static website there and see what else you need next.

## Conclusion

* **Ori**

  That’s a wrap! There’s everything you need to know about AWS. Totally comprehensive. Covered all 175 services. Boom.

* **Nick**

  Great job, absolutely nailed it.
* **Ori**

  In all seriousness, there’s a ton we didn’t talk about here today and you should totally go read about it if you’re interested in learning more. As always, we’ll post all the sources we used when researching this topic at the CommitHub blog. That’s a great place to start.

* **Nick**

  Sure is. And, if you’d rather just have us tell you about this stuff and perpetually blow your minds with our melodious and magnificent voices, that’s an option too. We’re going to be talking a lot more about Cloud tools in upcoming episodes.

* **Ori**
  We sure are. In fact, our next episode will cover what the heck are containers since we are on the train of cloud computing.

* **Nick**

  Until then, stay safe out there! We’ll talk to you soon. For our US listeners, Happy Thanksgiving!

## Citations

* Amazon CloudWatch: Complete visibility of your cloud resources and applications (2:02). (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/cloudwatch/
* Amazon EC2. (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc
* Amazon Macie - Amazon Web Services. (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/macie/
* AWS IAM Overview (2:15). (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/iam/
* Barr, J. (2014, August 19). My First 12 Years at Amazon.com. Jeff Barr’s Blog. http://jeff-barr.com/2014/08/19/my-first-12-years-at-amazon-dot-com/
* Barr, J. (2020, November 10). Amazon Simple Queue Service Released. Amazon Web Services. https://aws.amazon.com/blogs/aws/amazon_simple_q/
* Benjamin Black — EC2 Origins. (2009, January 25). Http://Blog.B3k.Us. http://blog.b3k.us/2009/01/25/ec2-origins.html
* Brandon, J. (2020, February 1). AWS: Your complete guide to Amazon Web Services & features. TechRadar. https://www.techradar.com/news/aws#complete-list-of-amazon-web-services
* Clark, J. (2012, June 7). How Amazon exposed its guts: The History of AWS’s EC2. ZDNet. https://www.zdnet.com/article/how-amazon-exposed-its-guts-the-history-of-awss-ec2/
* Configuring access management policies. (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/s3/features/block-public-access/
* Furrier, J. (2018a, June 6). Exclusive: The Story of AWS and Andy Jassy’s Trillion Dollar Baby. Medium. https://medium.com/@furrier/original-content-the-story-of-aws-and-andy-jassys-trillion-dollar-baby-4e8a35fd7ed#.g4p7t635j
* Furrier, J. (2018b, June 6). Exclusive: The Story of AWS and Andy Jassy’s Trillion Dollar Baby. Medium. https://medium.com/@furrier/original-content-the-story-of-aws-and-andy-jassys-trillion-dollar-baby-4e8a35fd7ed#.g4p7t635j
* Getting started with AWS Lambda (3:00). (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/lambda/
* Introduction to Amazon S3 (4:31). (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/s3/
* Introduction to AWS CloudFormation (3:01). (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/cloudformation/
* Introduction to AWS Elastic Beanstalk. (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/elasticbeanstalk/
* Miller, R. (2016, July 2). TechCrunch is now a part of Verizon Media. TechCrunch. https://techcrunch.com/2016/07/02/andy-jassys-brief-history-of-the-genesis-of-aws/
* Schonfeld, E. (2007, December 14). TechCrunch is now a part of Verizon Media. TechCrunch. https://techcrunch.com/2007/12/14/amazon-takes-on-oracle-and-ibm-with-simple-db-beta/
* Sparks, D. (2020, February 6). Amazon's Record 2019 in 7 Metrics. The Motley Fool. https://www.fool.com/investing/2020/02/06/amazons-record-2019-in-7-metrics.aspx
* What is AWS. (n.d.). Amazon Web Services, Inc. https://aws.amazon.com/what-is-aws/
* Wikipedia contributors. (2020, November 26). Timeline of Amazon Web Services. Wikipedia. https://en.wikipedia.org/wiki/Timeline_of_Amazon_Web_Services
