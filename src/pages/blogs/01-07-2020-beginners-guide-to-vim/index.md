---
    path: '/beginners-guide-to-vim'
    title: Beginners guide to Vim
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-01-07'
    description: An introduction to one of the most powerful text editors available in your terminal
    category: Developer Tools
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/beginners-guide-to-vim/vim-terminal.png'
    published: true
---

Vim is a very powerful open-source tool that has been in development since 1988 with its first public release in 1991. It was derived from [Vi](https://en.wikipedia.org/wiki/Vi) and it was an improvement to that software. The good news about this text editor that it's installed by default on most Linux distributions. If you are into dev ops or just a developer you might have come across Vim and get frustrated not knowing how to quit. I won't lie learning Vim has a learning curve due to the many commands it has but this is what it makes it so powerful. It's worth the time put it to get to know this tool, at least the basics.

## Why Vim?

The first thing people say about Vim is that it's very hard and they are right. It has a steep learning curve making it one of the most complicated text editors out there. That complexity does give it a lot of power on the sheer number of commands that can lead to an easier life after much suffering.

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/beginners-guide-to-vim/graph.png" alt="editors difficulty" />

Photo retrieved from <a href="http://www.terminally-incoherent.com/blog/2012/03/21/why-vim/" rel="noopener" target="_blank">here</a>

As you can see it looks very bad but after passing that it's smooth sailing. Something that makes Vim a bit more complex is that unlike most editors Vim is modal. Each mode changes the behavior, shortcuts and the functionality of the keys. A good example is that when you open Vim for the first time the keys do separate things but don't really type any words but when you type `i` you go into insert mode and you can start typing sentences until you hit escape and come back to normal mode.

The following are the different modes that Vim offer

- **Normal**: For navigation and manipulation of text. This is the mode that vim will usually start in, which you can usually get back to with **ESC**.
- **Insert**: For inserting new text. The main difference from vi is that many important "normal" commands are also available in insert mode - provided you have a keyboard with enough meta keys (such as Ctrl, Alt, Windows-key, etc.).
- **Visual**: For navigation and manipulation of text selections, this mode allows you to perform most normal commands, and a few extra commands, on the selected text.
- **Select**: Similar to visual, but with a more MS Windows-like behavior.
- **Command-line mode**: For entering editor commands
- **Ex mode**: Similar to the command-line mode but optimized for batch processing.

This was found <a href="https://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes" rel="noopener" target="_blank">here</a>

The complexity makes Vim a pretty fun tool to use when you get the hang of it. What also makes it fun is that it makes editing easier by reducing keystrokes and time editing something simple. You start thinking about how to achieve your goal faster with fewer keystrokes pushing creativity. I often ask myself what could I do faster and consult the <a href="https://vim.rtorr.com" rel="noopener" target="_blank">Vim Cheatsheet</a> for quick reference.

How editing can become easier as an example is that you can skip through sentences or words faster. Let's say you want to move to the third word and copy that word you will type `3wyw`. In 4 keystrokes you can get it done and quickly. Meanwhile, in a normal editor, you either can move your mouse to the word, highlight it and then `control+c` taking a bit of time. Let's explore why Vim was made in such a way.

## Backstory of Vim

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/beginners-guide-to-vim/adm-3a.png" />

Designers of the <a href="https://en.wikipedia.org/wiki/ADM-3A" rel="noopener" target="_blank">ADM-3A terminal</a> put the arrow keys on `h,j,k,l` forcing modality. <a href="https://en.wikipedia.org/wiki/Bill_Joy" rel="noopener" target="_blank">Bill Joy</a> was utilizing it over a 300 baud connection making each keystroke take seconds to register on the terminal. This pushed Bill Joy to produce one of the most powerful text editors that are useful to this day. Just imagine trying to SSH to a slow server and trying to edit a file. Pure nightmare.

## A few more reasons to consider Vim

Vim if associated as a language can improve the flow of learning it making you gain a lot of speed with your editor.

Some guidelines to help you associate it as a language:

- learn some verbs: **v** (visual), **c** (change), **d** (delete), **y** (yank/copy). these are the most important. there are others
- learn some modifiers: **i** (inside), **a** (around), **t** (till..finds a character), **f** (find..like till except including the char), **/** (search..find a string/regex)
- learn some text objects: **w** (word), **s** (sentence) **p** (paragraph) **b** (block/parentheses), **t** (tag, works for HTML/XML) there are others

Found <a href="https://yanpritzker.com/learn-to-speak-vim-verbs-nouns-and-modifiers-d7bfed1f6b2d" rel="noopener" target="_blank">here</a>

Vim is available on all major platforms (Linux, Windows, and Mac) making it easy for you to start using it. One thing that I love the most is how customizable it is. Vim has thousands of plugins and can be configurable very easily. The best thing is that you can share your custom setup with anybody since it's saved in a file called .vimrc. Here is my <a href="https://gist.github.com/TheGameFreak720/ec95e3e523d25f596aad8431abcd765e" rel="noopener" target="_blank">file</a> that you can take a look as to what you can accomplish but I would take the time to explore and get a setup that is your own. That is kinda the whole point.

## Learn Vim

When you have installed Vim there is this very cool tutorial called vimtutor. You can type it anytime in the terminal and it would take you through the basics of Vim. Don't feel discouraged and don't hesitate to take it many times, maybe daily. It takes a bit to get familiar with the basics. The following are additional resources to help you learn Vim:

- <a href="https://vim-adventures.com" rel="noopener" target="_blank">Vim Adventures</a>
- [<a href="https://www.openvim.com" rel="noopener" target="_blank">Open Vim</a>

## Conclusion

Vim is very challenging, fun to learn and the benefits you get from it are priceless. Not only you will improve speed but get an editor that is just you. You also get to feel proud you are using a code editor that has lasted decades and will be there for you at the darkest pit of a server terminal when you need it the most.

Happy Coding!

## Additional Resources

- <a href="https://yanpritzker.com/learn-to-speak-vim-verbs-nouns-and-modifiers-d7bfed1f6b2d" rel="noopener" target="_blank">Learn to speak vim — verbs, nouns, and modifiers!</a>
- <a href="https://vimawesome.com/" rel="noopener" target="_blank">Vim Awesome</a>
- <a href="https://www.linuxtrainingacademy.com/10-reasons-to-learn-the-vim-editor/" rel="noopener" target="_blank">10 reasons to learn the Vim editor</a>
- <a href="https://gist.github.com/nifl/1178878" rel="noopener" target="_blank">You don't grok vi</a>
- <a href="http://www.terminally-incoherent.com/blog/2012/03/21/why-vim/" rel="noopener" target="_blank">Why Vim</a>

