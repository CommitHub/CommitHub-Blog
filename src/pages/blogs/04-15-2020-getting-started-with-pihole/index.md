---
    path: '/getting-stated-with-pihole'
    title: Getting Started with Pi-hole
    author: Luis Alvarez
    authorImage: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fauthor%2Fluis.jpg?alt=media&token=56f5f968-08c9-40a6-9583-4cc361ec550f'
    date: '2020-04-15'
    description: A guide to getting Pi-hole installed in your home
    categories: [Raspberry Pi]
    backgroundImg: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fgetting-started-with-pihole%2Fpi.jpg?alt=media&token=42db3481-2f76-48d7-8cee-0f07d3763be9'
    published: true
---

Pi-hole is an open source application that serves as a DNS sinkhole that blocks advertisements through the network.
It uses publicly available lists to block queries from common ad domains making them unavailable on the website that you are looking at.
Because it's blocking queries to those servers the performance of the network increases due to not waiting to fetch a resource.
Another added bonus is that you can block sites that you don't want accessed in your network that can have malware.
The installation is very simple and quick but we got to follow a few steps to make sure it's secure from the outside.
You can use any device or have a docker container dedicated for this only purpose.

I used a Raspberry Pi Zero since it meets the minimum requirements and it's very cheap.
The board only cost $5.00 but you need a bit more than that.
The only regret I got with that Pi is that it doesn't have an enthernet port.
You can buy an adapter but if you spend a bit more money on a pi with an enthernet port you will be better off.
You can still use it over Wifi and that is what I'm doing currently but it may slow down the connection.
I haven't had any issues with my network slowing down but wired is always more reliable.

Now if you do take the Raspberry Pi route we need to do some steps to get the Pi setup.
Some steps are skipable but I would recommend going through each one to guarantee your Pi is secure and ready to install Pi-hole.
The easiest way to install Raspian is with NOOBS and you can follow <a href="https://projects.raspberrypi.org/en/projects/noobs-install" rel="noopener" target="_blank">this guide</a> to get started.
If you are using the Pi only for this I would install Raspian Lite that has no GUI.
It's fast and takes little resources to run.

## Getting Started

After you get Raspian installed you will get a login screen.
Since you haven't created a new user or configured the root password you need to give the default login and password that every Pi has.
Enter the following:

```
user: pi
password: raspberry
```

As you noticed since this is the default information we cannot leave it on the pi or anybody that has access to your network or device can log in and do stuff.

## Setting up new credentials

You can do this in several ways.
You can either delete or change the password for the pi user.

### Changing passwords

We do need to change the password for the root user because the credential is the default of every pi.
This is how you change the password for the root user:

```
sudo passwd root
```

You can also use the same command to change the password of the pi user.

### Create a new user

If like me you want your own user making the pi be more yours input this command:

```
sudo adduser username
```

You will be asked to add a password and input some other information.
I would use a password generator and save the password in a password manager for safe keeping.

#### Add new user to sudo group

This new user is not part of the sudo group that means that your privileges are very limited.
If this user is gonna be the main user type the following:

```
sudo usermod -aG sudo username
```

You can then type `exit` and log in as your user.

### Delete a user

It's time for that pi user to die and honestly is for the best.
Type the following:

```
sudo userdel pi
```

If you want to list the users to make sure you deleted the pi user type the following:

```
cut -d: -f1 /etc/passwd
```

We are done setting all the credentials for the Pi.

## Naming your Pi

This is optional but I like my devices to have a name and raspberry is not fun at all.
I use Vim as a text editor but you can use any other one that you prefer.
We need to change the name in 2 places just make sure to only use the letters 'a' to 'z' (upper or lower), digits '0' to '9', and the dash '-'.
Now type the following:

```
sudo vim /etc/hostname
```

The only thing it will contain on the first line is the name of the device.
Change the name with your new hostname.
After you change it type `:wq` to save and exit the file.

Then type the following:

```
sudo vim /etc/hosts
```

Find the line starting with 127.0.0.1, and change the name following it to your new hostname.
Save, quit and reboot the pi by typing `reboot` command and you should see the name changed.

## Set a static IP

This set is a bit more involved that any of the other ones and must be set properly for Pi-hole to work.
I didn't do this step properly the first time and my Pi shutdown because it was disconnected from the outlet.
When it rebooted the IP changed and the router couldn't find the associated IP.
The internet was down for a bit until I figured out that the DNS IP on the router was wrong.
Let's get started with this.

First we need to make sure the DHCPCD client is running.
Type the following:

```
sudo service dhcpcd status
```

If it's not active you can type these 2 commands to get it running

```
sudo service dhcpcd start
sudo systemctl enable dhcpcd
```

We need to edit the `dhcpcd.conf` but you need a bit of information to be able to set it up correctly.

1. interface = This defines which network interface you are setting the configuration for.
2. static ip_address = This is the IP address that you want to set your device to. (Make sure you leave the /24 at the end)
3. static routers = This is the IP address of your gateway (Most likely the IP address or your router)
4. static domain_name_servers = This is the IP address of your DNS (Most likely the IP address of your router). You can add multiple IP addresses here separated with a single space.

You can get all this information by typing the `ifconfig` command and checking your router.

The file we are gonna edit is gonna be the following:

```
sudo vim /etc/dhcpcd.conf
```

Then you can use the following template to set up your static IP replacing the fields accordingly.

```
interface eth0

static ip_address=192.168.0.10/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1

interface wlan0

static ip_address=192.168.0.200/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1
```

After that is done save, quit and then reboot the Pi.
You should see the same IP address on each reboot.

## Set up SSH

Now if you want to access your Pi from the comfort of your desk instead of dragging monitors, keyboards and mouse around I would consider this part vital.
This step also confirms that your static IP is available in the network and can be accessed remotely.
Luckily it's a very simple step.
Type the following commands:

```
sudo systemctl enable ssh
sudo systemctl start ssh
```

Now through a different device try to access your Pi using the following command:

```
ssh user@192.168.0.1
```

Make sure to replace the text with the appropiate user and IP address.
It should prompt you to enter the password for that user and when it's succesful you should be able to do stuff on your Pi on another device.

## Installing Pi-hole

The installation process is simple and leaving it at the defaults is always recommended.
Make sure to not skip the static IP part or Pi-hole might run into issues later on.
To get Pi-hole installed type the following command:

```
curl -sSL https://install.pi-hole.net | bash
```

The installation should be painless and the defaults should work perfectly.
If you need to consult the documentation due to issues you can go <a href="https://docs.pi-hole.net/" rel="noopener" target="_blank">here</a>.
After you finish the installation you need to go to your routers settings to have the DHCP clients use Pi-hole as their DNS server.
You will need to find this on your relative routers documentation since each one can be different.
After that Pi-hole should have given you the generated password on your terminal and you can check the Pi-hole dashboard at your `192.168.0.1/admin` with your IP instead of the one here.
You should see ads start being blocked.

## Conclusion

I would try with popular blog websites that have ads to see how it's being blocked and the Pi-hole dashboard should give you concrete data of what it's doing.
Not all ads will be blocked for example Youtube ads.
Google is very smart on the way they deliver ads making it very hard to block them unless the IP for that server is found and later updated.
You would ask but why browser ad blockers have the ability to remove all of them?
I'm not an expert on this technology and cannot say for certain if this is the case but browser ad blockers can scan a website and identify the ad then do it's magic blocking it.
Pi-hole just sits in your network and monitors requests that are sent to ad servers and all devices in the same network are covered with Pi-hole.
I love this tool and I hope you had fun building it.

Happy Hacking! 🚀

## Resources

* <a href="https://docs.pi-hole.net/" rel="noopener" target="_blank">Pi-hole Documentation</a>
* <a href="https://projects.raspberrypi.org/en/projects/noobs-install" rel="noopener" target="_blank">Noobs Installation Guide</a>
* <a href="https://www.youtube.com/watch?v=D1eD60_jhKI" rel="noopener" target="_blank">Youtube tutorial to set a static IP</a>
