---
    path: '/how-to-create-gnome-desktop-entry'
    title: How to create a Gnome Desktop Entry
    author: Ori Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-07-18'
    description: An easy approach to adding a desktop entry for gnome desktops
    categories: [Linux]
    backgroundImg: 'https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fhow-to-create-gnome-desktop-entry%2Fgnome.png?alt=media&token=11c75603-1145-47cc-83b0-8ef7560c91be'
    published: true
---

I'm an avid user of Linux and my favorite distro is Fedora that comes with the gnome desktop.
I find their search bar one of the most powerful things in my workflow allowing me to find programs with ease.
Sometimes when I download programs that are executables they don't have a desktop entry disallowing me to use this feature.
I could run them on my terminal but if I close the terminal it closes the program.
Adding a desktop entry on these few cases is a quick solution that just requires a little bit of elbow grease.
We can always automate the process in the future.

## What is a desktop entry?

On your desktop, each program that you find when clicking the super key is a desktop entry.
Every new program that doesn't do this for you needs to be registered.
How new desktop entries are registered is by having a `.desktop` extension after the name of the application.

## Where is the desktop entries located?

The entries are located in `/usr/share/applications` directory.

## What do I need to do to create one?

You will need to create a file with a unique name that doesn't have spaces or international characters e.g. `minecraft.desktop`.
You can copy-paste this template to get started:

```
[Desktop Entry]
Name=FooCorp Painter Pro
Exec=foocorp-painter-pro
Icon=foocorp-painter-pro
Type=Application
Categories=GTK;GNOME;Utility;
```

Following that template if for example, you have your executable on the home directory for your user you can do something like this:

```
[Desktop Entry]
Name=Minecraft
Exec=/home/zero/Minecraft/minecraft-launcher/minecraft-launcher
Icon=/home/zero/Minecraft/minecraft-launcher/icon.png
Type=Application
Categories=Game;
```

You can find more information on [Gnome Official Documentation](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)

Happy Hacking! 🚀
