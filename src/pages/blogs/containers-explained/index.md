---
    path: '/containers-explained'
    title: Containers Explained
    author: Ori Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/ori.jpg'
    date: '2021-02-15'
    description: Containers feel like a black box to me. Let's learn what they are, their history, and create one
    categories: [Virtualization, Technology Explained]
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/containers-explained/Containers+Explained.png'
    published: true
---

## Introduction

Containers have revolutionized the way we handle our infrastructure. From hard to manage custom VM’s for each instance of your app you're running to a set of steps that VM’s can follow making them all be in sync. This resulted in less time and money spent on managing each system separately reducing risks that come with it. On the table of contents below you will see each topic we are going to cover and of course we are going to have some practical exercises to familiarize yourself with containers. The best way to learn is to apply the concepts. Let’s take a look at what are containers.

### Table of Contents

* What are Containers?
* A brief history of containers
* What is Docker?
* How to create a container using Docker

## What are Containers?

Containers are a standard package or unit of software that bundles all the code for your application and its dependencies allowing you to run the application reliably from one computer environment to another.  Containers take advantage of a form of the host’s OS virtualization in which features of the OS like the Linux kernel namespaces and cgroup primitives are used to control and isolate the amount of CPU, memory, and disk that those processes have access to. Normally Container technologies are used in Linux environments and  [A brief history of containers section](#history-of-containers) has more info in why this is the case.

### Difference between containers and VM’s

VM’s can still be utilized with containers, but there is a difference between each other.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/containers-explained/VM's.png" alt="VM's Representation" />

A VM utilizes a <span id="hypervisor-word">[hypervisor](#hypervisor-def)</span> to virtualize the underlying hardware. Then each VM includes a guest OS, a simulated copy of the hardware, an application, related libraries, and dependencies that the OS needs to run. They can be quite large and more if you have multiple VM’s in a server.  They require manual configuration and can get out of sync if not managed properly. Furthermore, they are also slower to boot than containers. VM still has some benefits, and they won’t go anywhere. Some benefits are that you can have multiple VM’s on a server, each VM can have a different OS and you can provision a VM more quickly than setting a physical machine.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/containers-explained/Containers.png" alt="Containers Representation" />

Containers skip virtualization of the underlying hardware and virtualizes the OS making each container only have the application and its dependencies. Since containers don’t have a guest OS this makes them lightweight, fast and portable. Containers can take seconds to boot.  You don’t necessarily need a VM to run a container. You can run it on your local machine if you wish. This is incredible attractive to developers when testing containers. A problem with containers is that if you have a container that the OS defined is Linux you can’t run the container on a Windows machine. Both the container and the host OS must have the same type of OS.

### Why use Containers

Containers are loved by many and there are a few reasons why:

* Lightweight
  * Containers share with their host OS the kernel. This removes a lot of the overhead due to not needing a full OS per instance reducing the size and usage of resources. Because they are smaller they can be deployed faster than VM’s.
* Portable
  * Containers contain all the dependencies written eliminating the overhead of doing manual configuration to be the same for each instance of it. This solves the funny problem of “it works in my machine” since it should be the same no matter if you are running the container in a laptop or in the cloud.
* Scalable
  * Since containers don’t need to have a full OS per instance you can add more instances to the host OS than VM’s. Also since they are lightweight they can be stopped and started rapidly on demand.

### Use cases of Containers

Containers are used a lot in the cloud to allow companies to offer better performance in their applications and optimizing cost. Let’s take a look at a few areas where containers are used the most:

* Microservices
  * When applications are constructed on a lot of small but loosely coupled services you can leverage containers to deploy them easily due to how small and lightweight containers are.
* Hybrid, multi-cloud
  * Containers run consistently no matter what cloud provider or machine you are using, and it’s very attractive to companies who need a mix between private and public cloud or when they use multiple cloud providers.
* Application modernization and modernization
  * The first step to modernizing your application is to containerize it allowing it to be migrated to the cloud easily.

Now that we know why containers are important let’s take a look at the history of it

## <span id="history-of-containers">A brief history of containers</span>

We can trace modern containers back to 1979 when the <a href="https://man7.org/linux/man-pages/man1/chroot.1.html" rel="noopener" target="blank">chroot</a> system call and command line tool was released for Unix version 7. It allowed for the root system to be changed allowing it to narrow its view to a specific number of files and directories. This was the start of segregating file access for each process. Chroot was later added to BSD in 1982. This was useful from the late 1980s to early 1990 with the expansion of the internet because chroot was used to isolate network services to “jail” potential attackers from the rest of the system. This is where “chroot jail” comes from. The only problem was that all that chroot could do was restrict file system usage. If any service has root access chroot won’t be able to block the communication between those services. This allowed services to break from “chroot jail” and coined the term “jailbreak”.

In the early 2000 FreeBSD 4.0 released a vastly expanded concept of called FreeBSD jails that simulated a miniature system of its own. This allowed users to create several independent systems with their own IP addresses, CPU, file system, memory, etc. Every jail would have a root user but the only one with unrestricted access would be the root user from the root jail effectively solving the problem with chroot jails since different root users in different jails cannot speak to each other. Incremental innovations were done between 2000 and 2006 like Linux VServer, Solaris Containers and Open VZ.

In 2006 Google launched Process Containers. It was designed for limiting, accounting and isolating resource usage (CPU, memory, disk I/O, network) of a collection of processes. A year later it was renamed “Control Groups (cgroups)” merged to Linux kernel 2.6.24.

In 2013 Docker released, and it exploded in popularity due to having the ability to package applications, services and their dependencies for execution in a containerized environment. They were first released on Linux since it supplied the backend necessary to be able to run these containers. They became easy to deploy on all kinds of environments like on premise, the cloud or your own computer. On the next section we are going to look a bit deeper into what is Docker.

## What is Docker?

Docker is a platform that utilizes the [Docker Engine](#docker-engine) to package your application code and its dependencies in a [docker container image](#docker-container-image) to give you the ability to build, test, and deploy applications quickly and reliably. When a [docker container image](#docker-container-image) is run on the [Docker Engine](#docker-engine) they become full-fledged containers.  LXC (for LinuX Containers)  exclusively leveraged the first iterations of Docker, but Docker quickly developed its own custom containerization technology allowing Docker to be available not only on Linux but on Windows and Mac.

Docker also relates to Docker, Inc., the company that offers Docker's commercial edition, and also to the open source project Docker, to which Docker Inc. as well as several other organizations and individuals contribute.

### Why use Docker?

Docker simplifies the containerization process making it easy for developers to focus on building their applications. Let’s take a look at a few reasons why it’s loved so much:

* Lightweight
  * Each Docker container can only run one process at a time making it possible to build an application while one of its components is taken down for repair. In contrast with LXC where multiple processes can be running in a single container. Having one process per container can be useful for developers that want to have a <a href="https://www.techopedia.com/definition/16907/decoupled-architecture" rel="noopener" target="blank">decoupled architecture.</a>
* Portable
  * Docker containers can run without any specific machine based configurations on Desktop, data center or cloud environment as long as the container and the host machine has the same OS. Meanwhile, LXC containers will reference machine specific configurations.
* Scalable
  * Scaling docker containers horizontally is easier due to it only being able to run one process at a time as a result of usage. If you had an LXC container with an app, database, cron, etc. it would be difficult to determine what is getting used more and what is getting used less.
* Easy installation process
  * You can install all you need to run Docker containers with a single package getting up and running in minutes.
* Reusability
  * Docker containers can be used as a template for creating new containers.
* Versioning
  * You can track the changes made to a container and by whom have made changes to it making it easy to rollback as needed.
* Shared container libraries
  * The docker community provide open-source images you can utilize to run your containers.

### Docker Terms

#### <span id="docker-engine">Docker Engine</span>

The Docker Engine is a container runtime technology that allows you to build and containerize applications. It uses containerd that in turn manages the containers complete lifecycle. You can interact with your containers using the CLI making it easy to manage container instances.

#### Docker File

The Docker file is a text file with instructions on how to build the container image allowing you to automate the process of container image creation. You can view it as a script with a set of instructions.

#### <span id="docker-container-image">Docker Container Image</span>

Docker container images include all the tools, libraries, and dependencies needed to run your application as a container. These images are read only.

#### Docker Containers

Docker containers are the result of running Docker container images because they are live running instances. You can serve your container in a server where users can come and use your application.

## How to create a container using Docker

### Getting Started

Docker is a fun tool to play with, and it can be a great introduction to the command line. The first thing we need to do is install Docker in our machine using the <a href="https://docs.docker.com/engine/install/" rel="noopener" target="blank">installation docs.</a> They have a list of systems compatible with Docker.  If you have a Windows machine you might need to issue the docker command using administrator mode. <a href="https://docs.docker.com/docker-for-windows/" rel="noopener" target="blank">Review the documentation</a> if you have any questions.

### The application

<a href="https://binary-clock.org/" rel="noopener" target="blank">I built this application</a> a while ago that is a simple binary clock for the web. <a href="https://github.com/CommitHub/binary-clock" rel="nopener" target="blank">On the repository</a> the installation instructions are very simple, but we want to automate this process to be able to run it on any system regardless of the configuration.

* Navigate to that repository
* clone or download the code to your local system
* Open the directory on your favorite editor.
* On the root of the application create a file called Dockerfile

Dockerfile is just a text file where we are going to write the instructions on how this container will run. Paste the following code, and we will go over the different bits.

```
# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
Taken from Vue.js documentation

#### Details of Dockerfile

* <a href="https://hub.docker.com/_/node/" rel="noopener" target="blank">node:lts-alpine</a>
  * This is the version of node we can pull from the Docker hub to be able to build our application. We choose the latest version of node in this case since the application has a very simple dependency structure. In my experience when apps are more complicated I pick a specific version of node. That way when I build the container the dependencies don’t clash with node since they are incompatible. That will bork the container. Each new version of node needs to be audited and tested to make sure all the dependencies that need updating are updated.
* `COPY package*.json ./`
  * By copying the package.json and package.lock.json we take to take advantage of cached Docker layers
* <a href="https://hub.docker.com/_/nginx/" rel="noopener" target="blank">Nginx:stable-alpine</a>
  * Nginx is a server that handles our application and will show it to our users when they navigate there.
* Lastly, we expose port 80 to serve the application

Let’s continue working with the application. We need to build the Docker Image using the following command:

`docker build -t binary-clock .`

After that is all done. We can finally run the application on localhost:8080 using the following command:

`sudo docker run -dp 8080:80 --rm binary-clock`

Go to your browser and on a new tab type localhost:8080. You should be able to see the timer app.

### Next steps

If you are done with the lesson the next step is stopping the container from running since it won’t stop until you do. Run the following command:

`docker ps`

This will list all the containers that are currently running. What we need from that list is the CONTAINER ID. Copy that id and run the next command replaced containerid with the real id.

`docker stop containerid`

You did it! Now you can take that tinkering knowledge of containers and start building more of them for your applications. If you want to <a href="https://www.docker.com/play-with-docker" rel="noopener" target="blank">play with docker</a> click on that link. They have a ton of free and paid tutorials for you to dive deeper into the technology.

## Conclusion

Containers are here to stay and as this technology keeps maturing I’m excited to see what Docker and other container technologies do differently. If you want to learn more take a look at the resources section where the research done for this article is detailed there.

Happy Hacking! 🚀

## Definitions

* <span id="hypervisor-def">Hypervisor</span>
  *  “Hypervisors make it possible to use more of a system’s available resources and provide greater IT mobility since the guest VMs are independent of the host hardware. This means they can be easily moved between different servers.” (VMware) - [Go Back](#hypervisor-word)

## References

* Amazon. (n.d.). What is Docker? | AWS. Amazon Web Services, Inc. Retrieved February 11, 2021, from https://aws.amazon.com/docker/
* chroot(1) - Linux manual page. (n.d.). Man7. Retrieved February 11, 2021, from https://man7.org/linux/man-pages/man1/chroot.1.html
* containerd. (n.d.). containerd/containerd. GitHub. Retrieved February 11, 2021, from https://github.com/containerd/containerd
* Docker. (n.d.-a). Container Runtime. Retrieved February 11, 2021, from https://www.docker.com/products/container-runtime
* Docker. (n.d.-b). Docker Hub. Hub.Docker. Retrieved February 11, 2021, from https://hub.docker.com/_/nginx/
* Docker. (n.d.-c). Docker Hub. Hub.Docker. Retrieved February 11, 2021, from https://hub.docker.com/_/node/
* Docker. (n.d.-d). Play with Docker. Retrieved February 11, 2021, from https://www.docker.com/play-with-docker
* Docker. (n.d.-e). What is a Container? Retrieved February 11, 2021, from https://www.docker.com/resources/what-container
* Docker. (n.d.-f). Why Docker? Retrieved February 11, 2021, from https://www.docker.com/why-docker
* Docker. (2021a, February 11). Docker Desktop for Windows user manual. Docker Documentation. https://docs.docker.com/docker-for-windows/
* Docker. (2021b, February 11). Docker Engine overview. Docker Documentation. https://docs.docker.com/engine/
* Docker. (2021c, February 11). Install Docker Engine. Docker Documentation. https://docs.docker.com/engine/install/
* IBM Cloud Education. (2020a, January 6). Docker. IBM. https://www.ibm.com/cloud/learn/docker
* IBM Cloud Education. (2020b, December 2). Containers. IBM. https://www.ibm.com/cloud/learn/containers
* Microsoft. (n.d.). What is a container? Microsoft Azure. Retrieved February 11, 2021, from https://azure.microsoft.com/en-us/overview/what-is-a-container/
* N. (2018, August 31). What is Docker? Microsoft Docs. https://docs.microsoft.com/en-us/dotnet/architecture/microservices/container-docker-introduction/docker-defined
* Osnat, R. (2020, January 13). A Brief History of Containers: From the 1970s Till Now. Aqua. https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016
* Prakash, A. (2020, July 20). Stop Docker Container: Single, Multiple or All of Them. Linux Handbook. https://linuxhandbook.com/docker-stop-container/
* redhat. (n.d.). The History of Containers. Retrieved February 11, 2021, from https://www.redhat.com/en/blog/history-containers
* Team, O. S. (2018, March 1). The Story of Containers. Open Source Blog. https://blogs.vmware.com/opensource/2018/02/27/the-story-of-containers/
* Techopedia. (2013, January 11). Decoupled Architecture. Techopedia.Com. https://www.techopedia.com/definition/16907/decoupled-architecture
* VMware. (n.d.). Hypervisor. Retrieved February 11, 2021, from https://www.vmware.com/topics/glossary/content/hypervisor
* Vue.js. (n.d.). Dockerize Vue.js App â Vue.js. Vuejs. Retrieved February 11, 2021, from https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
