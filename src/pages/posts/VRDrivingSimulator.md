---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'VR driving simulator'
SlideIndex: '0'
tags: ["astro", "blogging"]

---

#VR driving simulator
The simulator consists of a wooden frame equipped with a computer, steering wheel, pedals, and a VR headset.  
This project has over 30 simulators deployed in schools and community centers. It uses Unreal Engine, primarily with C++ and minimal Blueprints.  
I was solely responsible for building the quest system, VR interaction, and eye tracking system. I also worked on product assembly, sound, and C# utility applications to automate data processing.  

##Quest system
The quest system was the first major system that i built.  
It was developed in C++ and designed to evaluate driving performance. With support for quests that can pass, fail, or assign a dynamic score based on the user's data.  
Quests are entered into an XML file or a data table. The quest system then parses the quests and continuously checks them against recorded data using a set of conditions.   
If I were to do it again, I would create an interface in Unreal to build and manage quests, making the system more user-friendly.
