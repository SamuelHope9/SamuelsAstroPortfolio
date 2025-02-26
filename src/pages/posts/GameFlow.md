---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My First Blog Post'
SlideIndex: '4'
description: 'This is the first post of my new Astro blog.'
tags: ["astro", "blogging", "learning in public"]

---


# GameFlow system
---
I noticed we were spending a large amount of time dealing with monolithic blueprints.  
They were taking up too much time to build and maintain.  
These blueprints were used to manage the game flow through the entire experience.  




To solve this problem and to allow our designer to easily change stuff for testing I created the gameflow system.  
This is a custom C++ plugin for Unreal Engine that utilizes a graph and custom detail panels, built using Slate.  
 I drew a lot of inspiration from LogicDriver, but we chose not to use it because it wasn’t as user-friendly and didn't do exactly what we wanted.  
 
 Throughout development, ease of use was always my top priority.  
 In essence, this is a glorified state machine with many added features, designed to be easily accessible for anyone.     
 The system uses a custom flowchart-like visual interface, enabling users to easily create complex game logic while also keeping it tidy.

______
### Click me to see the documentation. 

Newer documentation has been moved to our internal dokuwiki that I have setup and maintain
______

@todo add gameflow chart image here