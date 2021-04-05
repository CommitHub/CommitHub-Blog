---
    path: '/sudo-what-the-heck-is-are-containers'
    title: Sudo 05 - What the heck are containers?!
    author: Ori Alvarez & Nick Ronnei
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/%24+sudo.png'
    date: '2021-04-01'
    description: The script used for the Sudo podcast episode what the heck is aws
    categories: [Sudo]
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/sudo-05-what-the-heck-are-containers/05+What+the+heck+are+containers!+.png'
    published: true
---

## Introduction

We finally did it! We transcribed our podcast to be as accurate as possible using Amazon Transcribe. The words weren't fully accurate, but we edited the text to be as close as possible.
Hope you enjoy.

You can [listen to the episode here](https://rss.com/podcasts/sudo/)

### Table of Contents

* [Script](#containers-script)
* [Citations](#containers-citations)

## <span id="containers-script">Script</span>

[Ori]
Hello, everyone. Welcome to another episode of the Sudo podcast. I am Ori!

[Nick]
And I'm Nick.

[Both]
Thanks for listening.

[Ori]
So today we will be talking about one of the most popular technologies out there, called containers, that can make your work flow faster and easier. The topics we're gonna talk about are: what is virtualization and what will I care? That's very important. Because if you don't care, then I mean that's a wrap, folks.

[Nick]
_laughing_ Yeah, why listen?

[Ori]
I'll brief history of containers, virtualization tools, and container technologies.

[Nick]
Right on! Getting into the meat and potatoes. What is virtualization and why should I care?

Breaking it down Simple, "What's virtualization?" is a great question. The "explain like I'm five" version is that we run smaller, pretend computers on a larger actual computer. You might think about it like the difference between a house and and apartment building. Both are buildings for people to live in, but apartment buildings have numerous smaller quote unquote "buildings" for people who live in all under the same roof.

[Ori]
And that's a great analogy. So in apartment buildings people technically live together, but they can lead completely independent lives because they're separated by walls and doors and stuff. So additionally, apartments can be more efficient than houses because they can share core resources like electricity, water and trash services. An individual apartment may pay more or less for each depending on how much they use, but the building manager actually sources low utilities and manages them. The individual houses have their source and manage each of those things on their own and a great example is like my apartment building. We don't pay for water, that is sourced by the apartment. And then we talked to electrical company and we get our bills sent to us. So depending on the place, things are different, but they're still managed by that primary person.

[Nick]
So, yeah, I know what you're thinking. Uh, cool story, Nick and or Ori. Can I have five minutes of my life back? No, no, you can't. Those minutes belonged to us.

[Ori]
_laughing_ Now cool it Nick. Just tell them why they should care.

[Nick]
All right, thanks. Sorry. Recentering.

Uh, okay. Well, virtualization is super important to the modern Internet. In fact, we've talked a lot about it on our last podcast on AWS. Even though he probably didn't explicitly say we were talking about virtualization very often. Just to give you an idea, according to The Verge in a 2018 article titled "Using the Internet Without the Amazon Cloud", AWS controlled 40% of the cloud market. AWS and all other cloud providers rely on virtualization to make their businesses work. According to 451 Research, 90% of the organizations they surveyed as part of a 2019 report were using some type of cloud service. In other words, virtualization is an essential part of the Internet as we know it today. Pretty neat, eh?

As Ori mentioned, we're talking about a specific type of virtualization technology today called containers. So now that we care about them, let's learn a bit about where they come from.

[Ori]
Yeah, and I love the history of everything. I like to learn about it because that we can tell how technology evolved.

So we can trace modern containers back to 1979 when the "croot" or "c-h-root" or "ch-root"? I don't know how people say it, I say croot. It sounds like Groot, so...

[Nick]
I say "ch-root", but sounds like about the same.

[Ori]
Technologies hard. There's never a consensus.

So when the chroot system calling Command Line Tool was released for UNIX Version seven, it allowed for the root system to be changed, allowing it to narrow its view to a specific number off files and directories. This was the start of segregating file access for each process, so chroot was later added to BSD in 1982.

This was useful from the late 19 eighties to early 19 nineties with expansion off the Internet because chroot was used to isolate network services to "jail" unquote potential attackers from the rest of system. This is where "chroot jail" come from. The only problem was that all that chroot could do was restrict file system usage. If any service has root, access, chroot won't be able to block the communication between those services. This allows services break from chroot jail and coined the term ".

[Nick]
That's pretty spooky and fascinating and just for it's also very clearly problematic, the whole jail problem. But what it actually means to change the root: you think about going into like your home directory on a Linux machine or My Computer on Windows and that's like where you see the whole computer, right? That's your root. That's kind of like, you can think about that as your root. It's not actually the root on these machines, but from like a File Explorer kind of way, that's the root.

So that is the whole world as your computer sees it; that is what we mean by chroot. So you could change the root to just be My Documents, and then that part of the computer would only think that My Documents is the world, which is kind of an interesting thing. It basically just narrows down the definition of a computer system to a small subsystem of that thing. Um, but as Ori already just said, the original idea for it was pretty insecure. And that's problematic.

[Ori]
Yeah, and something to note with specific Linux: pretty much the file system, in terms of the root, that is where all the configurations are there. Not like Windows, where the system is closed and it's really hard to change things. But with Linux, you can change anything in the system with files. So if someone had root access to your system, they could go into your files and delete a file that is very important making your system break or add a tracker so that they could see your system or stuff like that.

But I digress. Let's continue with the with the story.

So in the early 2000s, Free BSD 4.0 released a vastly expanded concept called FreeBSD Jails that simulated a miniature system off its own. This allowed users to create several independent systems with their own IP addresses, CPU file systems, memory and etcetera. So it created a whole little system with everything that it needed andnd then every Jail will have root user, but the only one with unrestricted access will be the root user from the root jail, effectively solving a problem with chroot jails, since different chroot users in different jails cannot speak to each other.

Incremental innovations were done between 2000 and 2006, like Linux V-servers, Solaris Containers and Open VC. So in this case, though, the attacker will be part of a subsystem, but wouldn't part be part of the main system. So even if they had root access, they won't be able to change those files that we talked before and couldn't do damage to your system.

In 2006, Google launched Process Containers. It was designed for limiting , accounting, and isolated resource usage. So that will be CPU, memory, disk input and output, and networking of a collection of processes. A year later, it was renamed Control groups, cgroups, and then merged to the Linux kernel on 2.6.24 as a version.

Then, the latest thing is that in 2013, Docker released and exploded popularity due to having the ability to package applications, services, and their dependencies for execution in containerized environments. They were first released on Linux since it supplied the back and necessary to be able to run these containers. They became easy to deploy on all kinds of environments, like on-premise, on the cloud, or even on your own computer.

Now, on the next session, we're gonna look a bit deeper into what is docker.

[Nick]
We sure are, but before we get there, we want to understand some of the different virtualization tools that are out there is a high level.

We've been talking about containers, but another common virtualization tools that you might hear about is virtual machines. We want to talk about this a little bit just so we can understand how the two differ.

So virtual machines, same kind of a thing. A smaller pretend computer that runs on your actual computer. But for virtual machines, it's the entire computer. It's the operating system, resources, file system, hardware, everything. It's all isolated from your main machine. Not only that, but it's also pre allocated. That's important. Remember that. You have to decide how big your virtual machine is before you start it up, and you can't change it afterwards.

[Ori]
And then next up we have hypervisors.

So hypervisors are tools—either hardware, software, or firmware—that run and modern virtual machines. So, according to VMWare, hypervisors make it possible to use more of a systems available resources and provide greater IT mobility. Since the guest VMs are independent of the host's hardware, this means they can be easily moved between different servers.

[Nick]
There are two types of hypervisor. The first known as a Type One, or Bare Metal Hypervisor, acts as a lightweight operating system that directly runs on the host machine's hardware. Type One hypervisors rely on the host machines operating system, but other operating systems can be installed directly to the hypervisor. That means each VM and the hypervisor that manages it can run a different operating system using the hardware of the host machine. That's a key difference between Type One and Type Two hypervisors.

Type Two or Hosted Hypervisors run as a software layer on an operating system, just like most other computer programs. They're much easier to set up than Type Ones, but they have a higher latency because they're running on the host operating system. That means they have to emulate the hardware that other OSes require.

So, Type One can just directly tap into that hardware, versus the emulation that has to happen with the Type Two. Just a... just a little teaser for later.

Hyper visors are pretty similar to container orchestration tools in this regard: they're meant for managing the actual virtualized system that you're working with.

[Ori]
I think a great example off a Type Two will be if, let's say you have a Windows machine and you're trying to emulate a Mac machine.

[Nick]
Exactly.

[Ori]
I think that the hardware is completely different. Not exactly too different, but different systems and technologies that they're using that are proprietary and they don't share with anybody. So it's harder to emulate something that it's like that.

But now we talk about containers! Spooky!

So containers bundle all of code for your application and its dependencies, allowing you to run the application reliably from one computer to another. So, containers take advantage of the host OS packages like the kernel and use its resources like CPU, memory, etcetera, to be able to run the application by virtualizing the OS.

Usually, containers to run in Linux environment. It is important to keep—if you're running a container on Linux, the host machine has to be a Linux machine. And if it's Windows in the host machine also needs to be Windows.

So there are a few reasons why people love containers.

They are lightweight, because they share the host OS kernel. Removing of the overhead by reducing the size and usage of resources. Now for the good part: because they're smaller, they can deploy faster than VMs. So, if you're a system administrator, it will be way faster to deploy a container than a VM. Containers are portable because they contain the application and its dependencies.

There's no manual configuration needed to be made, solving that funny problem, "Well, it worked on my machine!" And, yes, there are some code you have to write. But it's more of you do it once and then you don't have to do it again unless you got to modify a file.

And then lastly, containers are scalable because they require less resources to add more instances. Since they are lighetweight, they can be stopped and started rapidly on demand. They also are cheaper, because if something takes less resources and you put on the cloud like AWS, it will be cheaper in the long run.

So, a good way to visualize containers are as actual shipping containers that we find in real life.

Containers look the same, and no matter what port, they will have the same resemblance. That's because deep water ports from Hong Kong to San Diego have agreed on a common set of rules of how to transport goods. They might contain different items inside, like how we can package software inside the container, and then each container doesn't need to run the same software. We can think of each port as a compatible computer that can contain the container.

You might be asking yourself how or for what purpose I use containers? Well, you can use them for microservices. And that is why applications are constructed on a lot of small but loosely coupled services that you can leverage containers to deploy them easily due to how small lightweight containers are.

And that's actually how Netflix has this infrastructure. They have a bunch of microservices, and they use containers to be able to scale them up and down. The containers run consistently, no matter what cloud provider or machine you're using. And it's very attractive to companies who need a mix between private and public cloud or when they use multiple cloud providers.

If you need to modernize your application, you need to containerize it to allow it to be migrated to the cloud easily. Right now, if you don't have it on the cloud, it's very difficult to get application running. You will have to create a VM, get the software from either GitHub or GitLab or wherever you have it hosted, and then actually install the packages, and you will have to do this every single time. Unless you have a script. And you cannot guarantee will run reliably.

Then we have containers.

You can ease development onboarding by providing a new employee a container that they can run quickly and get a glimpse of the application they're going to be working on. This is something we're considering at DocNetwork, since the dependencies of are app are a bit complicated, and the on boarding process might take a lot of time just making sure system runs properly.

And it is something we struggle with because we have to install a database, we have to install the packages, we gotta make sure everything is running and there are multiple services we'refor using. So if we had multiple containers that relied on microservice architecture, it could be way easier on board someone and also to manage configurations.

Do it once and never do it again.

[Nick]
Yes, indeed, it's—it's so nice to have a script that's repeatable. And I know, Ori, you and I both have, like, install scripts for our environments. But doing it with containers is like the pro version of that.

Like, yeah, you can run an ionstall script, but at the most common reason I end up running an install script is because I've, like, switched my my particular flavor of Linux or something along those lines, and different things have to change for what I'm pulling from versus you know, if you have a container, you could do it exactly the same every time. And it runs.

[Ori]
Yeah, and for work, sometimes you don't need to have those dependencies are on your computer. Like you can have a container that just runs those dependencies, and as long as they're installed, it will work fine. So there are big advantages just on the on boarding process, and you can actually go step by step with a person be like, "Hey, this is our database. This is what we do with the database. This is RDS. I mean, Redis." So there's a lot of benefits.

But now that we covered what are VMs and what are Containers, we kind of want to see the difference between them because it's very nuanced. It's a very nuanced relationship that they have.

So as we talked, VMS and containers are similar. You can even run containers inside VM's. This is how it is done in the real world. When you're uploading apps to the cloud, as an example. The difference is that the VM uses a hypervisor to virtualize the underlying hardware. Then each VM includes a guest operating system, a simluated copy of the hardware, and application and related libraries and dependencies that the OS needs to run. They require manual configuration and can get out of sync if not managed properly. Furthermore, they're also slower to boot than containers.

VM still have some benefits, and they won't go anywhere. Some benefits are that you can have multiple VMs on a server. Each VM can have a different OS. And you can provision a VM more quickly than setting a physical machine. And honestly, on AWS, most of the time your running VMs. You're not gonna have a physical machine if you're going 100% cloud.

[Nick]
Containers, on the other hand, skip virtualization of the underlying hardware and virtualize the operating system instead.

Each container only has the application that's going to run on it, and the applications dependencies. Since containers don't have a guest OS, they use the host's OS. This makes them lightweight, fast, and portable. Containers can take seconds to boot.

You don't need a VM to run a container. They run just as well—and most importantly, identically—on your local machine. This is incredibly attractive to developers because it makes testing containers easy.

One of the main drawbacks of containers is also one of their main strengths: the same reliance on the host OS that makes containers lightweight, fast, and portable limits them. If you have a container that relies on the Linux OS, you can't run the container on a Windows machine. Even if your host is running Red Hat Enterprise Linux and your container is running Ubuntu, you may run into compatibility issues if the container relies on Ubuntu-specific kernel functionality.

Both the container and the host OS must have the same type of OS at the very least, and really the same kernel because it's a virtualized copy of the OS once again. So you're not really running a different OS. You're just pretending to.

[Ori]
Yep. Just to summarize all this, let's use another analogy. You're probably tired of all our analogies, but it will make sense and will make it things easier—just trust the process.

[Nick]
*Laughs*

[Ori]
Imagine a car factory with two separate, self-contained production lines. Think of the factory building itself as the host machine. It's got all the infrastructure. So all the underlying hardware we need to build stuff—so electricity, water, and more.

Then we can think of each production line as a VM. It's entirely self-contained and has all the pieces it needs to do its job. It only leverages the host machine to use its hardware.

Then, switching to containers. We can understand each machine in the entire factory as a container. It happily does his own job, whatever that might be, regardless of where it's running. It makes use of all the factory facilities it can, including the other machines that work with it on the assembly line.

A car being built travels down the production line and gets shared between each machine, being slowly built each step of the way. Machines don't care about where the car came from or where it's going. They just do their own job.

[Nick]
Yeah, exactly. And that I like that analogy, Ori, because it demonstrates actually how containers and VMs can be used simultaneously.

But if that analogy doesn't work for you, we've got yet another one. We've got a ton of these because this concept is really abstract, and so relating it to more concrete concepts that we can understand is really helpful for helping us understand containers. But ahh, another example.

Imagine a really talented hairstylist. To do their best work, they need their work environment to have certain tools and amenities. If they just try to go to another salon, they'll have to get acquainted with the whole new set of tools before they can work.

One way to fix that might be to buy a tiny house on wheels and create a whole salon right inside. That way, the stylist can depend on everything being exactly the same, no matter what city they work in. This would be the virtual machine approach.

Alternatively, the stylist might get a couple of well organized bags that they can store all of their important tools in. They'll have to rely on the salon to provide them certain basic requirements like a chair, proper mirrors, and electricity. But it's much easier to carry around a couple of bags than it is to move an entire tiny house, and they can get to work way faster. But, if the salon doesn't match the stylist requirements, they can't work there. That's like the container approach.

[Ori]
Correct, because if you're trying to run a container, a Linux container on Windows, it's not gonna run. It's gonna fail terribly and it will tell you, "Why are you doing this? Why are you doing this to me?"

But let's take a deeper look into container technologies, specifically containeriization tools.

So in any discussion of those tools, Docker must come first. It was the first and is still the most popular container technology. Docker's open source containerization engine works with most of the products that follow, as well as many other open source tools. If you're getting started with containers, with how I recommend you take a tutorial and start playing with Docker. There are many good tutorials out there, and you won't regret it.

And when you hear people talking about Docker, it's important to know that is composed of several container technologies. Docker is a container engine that relies on the Docker daemon for a CLI user interface, containerd for container interface, and runC for a container runtime. So many, so many technologies. See the Computing for Geeks article in our source list to learn more.

[Nick]
Yes, indeed, it is a great article very helpful.

Next on our list is CRI-O or Cryo. I'm not sure how people actually say it, but the latter sounds cooler. So that's what I'm going to say.

Cryo is the first implementation of the Container Runtime Interface. It's an incredibly lightweight, open source reference implementation of that CRI spec. Cryo operates at the same level as containerd does in Docker's engine stack, but it's more commonly used with the Kubernetes orchestration tool that we'll talk about in a bit.

Remember when we were talking about how internationally, deep water ports have agreed on a set of standard rules for shipping containers?

[Ori]
Yup.

[Nick]
Well, Cryo is like the first publicly available example of how to implement those rules.

Think of it is like the first crane ever built to move shipping containers around at a port. It's useful for actually shipping stuff, but its real purpose is to give other engineers a starting point for building their own tools that follow the Container Runtime Interface standard. Today, most container tools are CRI compatible.

[Ori]
Then next, we'll specifically address containerd. It's a product of the Cloud Native Computing Foundation and was an early interface for interacting with container runtimes. More recently, the developers of containerd built a CRI plug-in that lets Kubernetes run containerd in the same way it runs C-R-I dash O. Or Cryo.

Once again, referring to are chipping analogy, you might think of containerd and Cryo as different types off crane the uses to move containers around. They are built differently, but they serve the same purpose. Cryo is more common for Kubernetes ports and containerd is more common for a Docker port.

[Nick]
So we've talked about the cranes. But what are they actually moving around? Well, that would be the container runtimes we mentioned briefly when we talked about Docker, and just now, when we talked about Kubernetes a little bit there.

The most common of these container runtimes is called runC, which is the default for both docker/containerd and Cryo. There are other ones, though, such as rocket, cata containers, and more.

As with Cryo itself, there's an open source standard for container runtimes managed by the Open Container Initiative, and Cryo will work with any container runtime that implements the correct interface.

Last on our list is Microsoft Containers. Of course, Microsoft the containers, even though it is very difficult because Microsoft doesn't really have a way off making containers, at least not at the, at the time.

Positioned as an alternative to Linux, this is funny—Microsoft Container can support Windows Container under very specific circumstances. As I mentioned, they didn't have containers as Linux did, but still funny, funny joke that they think it's an alternative.

Anyways, they generally run in a true virtual machine, and not in a cluster manager like Kubernetes. They're available in the cloud through both Microsoft Azure and AWS.

And take my words with a grain of salt. Um, we believe that the Microsoft Containers itself are for running like a container for like actual Windows machine, like a Windows 10 operating system instead of just running stuff like you're on on Linux.

[Nick]
I don't know anything about it, Ori, because I'm a purist! The worst kind of ideological zealot. Don't use Windows.

[Ori]
Yep, I am ahh, I'm part of that subreddit too haha.

[Nick]
So, uh, now that we've shown our true colors, let's move on to talking about container orchestration, which is another part of this and it's a really part of important part of containers, the container ecosystem.

So we've talked about how individual containers work and the fact that you can, in fact run many containers on a single machine. But why would you want to?

Well, as we've discussed in previous episodes, modern apps are made up of many different pieces. You might have a database server, an application server and numerous other pieces of dedicated infrastructure. You may even have more than one piece of each infrastructure. At DocNetwork, We run several instances of our application server at all times.

Think about a large company like Netflix. They've got tons of servers running their application. If in error happens and one breaks, they'll want to replace it immediately.

They'll also want to know if the overall system load is getting too high or too low. In those cases, they can scale their application containers up or down to meet demand. There are software tools out there to help do exactly that. They're container orchestration tools.

At DocNetwork we're not using any of the tools will mention here right now, so major shout out to Matthew Heusser, I don't know how to say his name, for his "30 essential container technology tools and resources" article on TechBeacon. It was a great starting point for us.

[Ori]
And something to note about the whole Netflix saying that we talked before about their microservice architecture. So one thing they actually do is that because they have microservices, you can actually create a decoupled system. So if one system fails, the other one doesn't fail immediately, and they can reroute stuff as needed. And that is a really good architecture for when you're building systems.

[Nick]
We should talk a bit more about them sometime because their whole, like chaos engineering philosophy is so interesting. That might be worth an episode.

[Ori]
Yeah, that's probably worth an episode. Something I learned on the AWS exam is that they, pretty much they want you to create decoupled systems. So that again, if one system fails, the other one doesn't fail because systems fail all the time we have to account for failure. So we wanna create redundancy.

Kind of like when they send astronauts to the space station. They always have redundant systems, because if one fails, they can take the other one.

But going back to the script uh, the new hotness! Well, kind of... The old hotness, but it's still the hotness in container orchestration is Kubernetes. K8s. So, you probably heard of it somewhere. Probably Twitter.

While there is no standard for cluster management, the Kubernetes open source cluster manager, originally developed by Google, is far and away the most popular. Supported by Amazon AWS, Google Cloud Engine, and Microsoft Azure Container Service, Kubernetes is relatively portable, which helps prevent vendor lock in coordinates. It can even run on a private cloud. Open Stack, Microsoft, Amazon, Google all provide container services on Kubernetes with commercial support options available.

[Nick]
On its own, Kubernetes takes care of load balancing, scaling, and all the other essentials we talked about while explaining the reasons for orchestration. But it's still missing a few nice-to-have features such as intra-cluster traffic encryption and monitoring. In other words, security and metrics.

We can cover these use cases by relying on on service mesh technologies like Envoy. Originally created by a Lyft, Envoy provides a security and metrics layer that can operate alongside Kubernetes. Another notable open source tool that fills the same niche is Istio. It's built on top of Envoy but further extends it with, like nifty dashboards and other user-centric features.

[Ori]
Now Docker didn't just hand the key to the kingdom, you know. They create a service called Docker Swarm. That's an alternative to Kubernetes made specifically for docker containers.

So that, that's a great note there. So with Kubernetes, you can run no matter the container technology. As long as it's supported, you can run it. You don't need to use Docker. But with Docker Swarm, you're kind of stuck there into that technology.

Docker Swarm, it can run directly on the command line and comes bundled with Docker 1.12 and higher. So you're—you have it available if you have new Docker versions, that's ah, like a little card under there: "You don't need Kubernetes, you already have Swarm!"

[Nick]
"Pay no mind to the new kid on the block, you have Swarm!"

[Ori]
Yeah, the only downsides are that it does not support autoscaling or load balancing. And those two things are very important for something like k8s, so I don't really understand why they don't, but you can add third party extensions to give it that missing functionality.

[Nick]
And the reason I think that they don't include those in swarm is because they're trying to trying to milk you a bit. Because if you want to use this at, like, an enterprise level, there is Docker Data Center, which is the commercial alternative to Kubernetes and is very similar to Docker Swarm, but it's designed to containerize an entire data center. It's basically the enterprise version of Docker Swarm.

The tool gives you like a Web based dashboard that contains a control panel registry, monitoring, logging, continuous integration. It also adds that missing load balancing and scaling that we don't have in Swarm. And, of course, it's compatible with Docker Enterprise. So it really is like their full enterprise solution at Docker.

[Ori]
Yep, that's how they get you. They they put a treat in front of you and then they take your whole hand.

[Nick]
Uh, you know, just just a little incentive to get started and then you're never gonna look back, Docker for life.

[Ori]
Well, that's a wrap for containers.

[Nick]
We know we just threw a lot of information at you, but key takeaways are: containers are like a bunch of small computers running on a big computer. They make the Internet as we know it today possible. And, most importantly, they're not going anywhere. Containerization, that is building applications to run in containers, is the best practice for shipping modern scalable software.

So get out there and try it for yourself! It's free and there are tons of guides to help you.

[Ori]
And if you're like me, working with technology you don't understand creates an era of anxiety. I hate working with black boxes. Um, sometimes you have to, but taking the time to understand the containers is really important if you really wanna be an infrastructure engineer or you're just doing this for fun. So I hope you can take away that knowledge and feel that containers are not so scary after all.

When I was researching this subject and saw the evolution of containers, how it started with Linux, with chroot, and it just time went on until a reach Docker, it reminded me of the thing people say that, "We stand on the shoulder of giants." Technologies like Docker used lessons and technologies of the past to drive that future.

And also remember that on commithub.com, we will be uploading that transcript. And for the first time, utilize Amazon Transcribe! Because, we write a script to kind of like know what we're gonna talk about in the subject, but we want to be more accurate for people who have disabilities so that they have the proper translation. I don't want to deliver something like when that people dub an anime and the subtitles are completely off. And I know our script is not completely off, but it's still a bit off, and it's annoying. I hate that.

[Nick]
Yeah.

[Ori]
So if I hate that you probably people with disabilities hate that and I don't wanna deliver that badness.

So also, all our sources will be there, too. So if you wanna learn more dive deep in those sources, they're amazing sources there. Actually, we found the sources from the actual, like, fan companies that really talk about this because it's very important to them because containers are very popular and that means more money.

[Nick]
No doubt. Well, that's it for this episode. Thank you so much for listening. And we look forward to talking with you again soon.

## <span id="containers-citations">Citations</span>

* 451 Research. (n.d.). 451 Research: 69% of enterprises will have multi-cloud/hybrid IT environments by 2019,but greater choice brings excessive complexity. 451 Research PDF. https://451research.com/images/Marketing/press_releases/Pre_Re-Invent_2018_press_release_final_11_22.pdf
* Brandom, R. (2018, July 28). Using the internet without the Amazon Cloud. The Verge. https://www.theverge.com/2018/7/28/17622792/plugin-use-the-internet-without-the-amazon-cloud#:%7E:text=Amazon%20servers%20make%20up%20so,visible%20connection%20to%20the%20company
* containerd/cri. (n.d.). GitHub. https://github.com/containerd/cri
* cri-o. (n.d.). cri-o. https://cri-o.io/
* Docker. (n.d.-a). Docker Hub. Hub.Docker.Com. https://hub.docker.com/bundles/docker-datacenter
* Docker. (n.d.-b). What is a Container? https://www.docker.com/resources/what-container
* docker/classicswarm. (n.d.). GitHub. https://github.com/docker/classicswarm
* Education, I. C. (2021, March 25). Containers. Ibm. https://www.ibm.com/cloud/learn/containers
* Envoy. (n.d.). Envoy Proxy - Home. Envoyproxy. https://www.envoyproxy.io/
* Heusser, M. (2019, July 9). 30 essential container technology tools and resources. TechBeacon. https://techbeacon.com/enterprise-it/30-essential-container-technology-tools-resources-0
* Kone, V. (2016, July 27). Apache Mesos 1.0.0 Released. Mesos.Apache.Org. http://mesos.apache.org/blog/mesos-1-0-0-released/
* Kubernetes. (n.d.). Production-Grade Container Orchestration. https://kubernetes.io/
* kubernetes-retired/rktlet. (n.d.). GitHub. https://github.com/kubernetes-retired/rktlet
* Microsoft. (2019, October 22). Windows Container Requirements. Microsoft Docs. https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/system-requirements
* Moby. (n.d.). moby/moby. GitHub. https://github.com/moby/moby/blob/master/image/spec/v1.md
* Stack Overflow. (2015a, April 28). Docker container isolation, does it care about underlying Linux OS? https://stackoverflow.com/questions/29911415/docker-container-isolation-does-it-care-about-underlying-linux-os?lq=1
* Stack Overflow. (2015b, October 13). Run Different Linux OS in Docker Container? https://stackoverflow.com/questions/33112137/run-different-linux-os-in-docker-container/33120232#33120232
* The Definitive Platform for Modern Apps. (n.d.). DC/OS. https://dcos.io/
* vmware. (n.d.). Hypervisor. https://www.vmware.com/topics/glossary/content/hypervisor
* Wikipedia contributors. (2021, March 23). Hypervisor. Wikipedia. https://en.wikipedia.org/wiki/Hypervisor
