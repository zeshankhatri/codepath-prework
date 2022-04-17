# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Zeshan Khatri

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/simon-says-game-zk?path=index.html%3A27%3A42

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Theme buttons that change background image when pressed

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Start/Stop](http://g.recordit.co/QeOxftmu5T.gif)
![Lose](http://g.recordit.co/u6dN8uU9PV.gif)
![WinPt1](http://g.recordit.co/C4lYWVqjtT.gif)
![WinPt2](http://g.recordit.co/mdMIM03Thb.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Coding help:

https://stackoverflow.com/questions/30035932/how-do-i-use-this-javascript-variable-in-html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.w3schools.com/html/html_images_background.asp
https://www.w3schools.com/howto/howto_css_center_button.asp
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_js_background-image
https://programminghead.com/how-to-play-audio-in-html-using-javascript/

Assets and design:

https://www.rapidtables.com/web/css/css-color.html
https://jayuzumi.com/star-wars-soundboards
https://www.myinstants.com/instant/roger-roger-star-wars-droid/
https://www.deviantart.com/rotane/art/Jedi-vs-Sith-WP-pack-wide-20636679
https://wallpapersafari.com/w/Gt5v2h
https://starwars-universe.fandom.com/wiki/R2-D2

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

My experience with web development is quite limited so this project was a learning experience, although I found myself following along with it quite well. I hold greatest experience with Java and C,
making the syntax for JavaScript familiar despite it being a completely new language for me. I only encountered two main troubles when implementing some of the optional features of the project. The first involved the Math.random class particularly because I assumed it held the same functionality as found in Java’s version of that same class. Java’s class has a nextInt() method which allows one to get a random integer between 0 and a max value passed as an argument, however the JavaScript version only utilizes a Math.random() method that returns a random floating-point value between 0 and 1. To get a random integer, I had to find a way to manipulate that floating point to become an integer (using Math.floor() following other calculations). Later, when implementing the strike system, I wished to showcase the current strikes left on the webpage. To do this, I had to learn how to display the strike variable on the website, and this was accomplished in JavaScript by using the property “innerHTML” on a HTML paragraph block element created specifically for the strike information to be presented in. Overall, this project provided a great introduction to web development and I learned many new things.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I'd love to learn about the many intricacies that exist within JavaScript, HTML, and CSS, especially when it comes to completing more complex programming and data structures. Gaining a deeper understanding of how those three languages relate and manipulate each other would further aid any development I attempt in the future as modern websites have more animated and fluid content. A good example is the dinosaur game that Google Chrome provides you if you try to use it without an internet connection. Currently, my knowledge of web development is not enough to even guess how the dinosaur is able to move with the background, let alone be able to recreate that same game myself. Hopefully in the future, more experiences are able to teach me.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Considering there are some optional features that haven't been completed, I would spend some time finishing those, particularly the timer and audio change ones. There's a bit of sound theory that would benefit the button audio, therefore it would be wonderful to explore that topic as it also interests me. For one of the assignments in my Systems Programming class, I was tasked with creating a timer in C for a chess game, so completing a time limit for this project intrigues me as I'd be capable of comparing the two codes. Aside from these features, implementing an endless game mode that would keep track of high scores is an idea that crossed my mind. The game would run for an unlimited number of rounds and lose following an incorrect button press. A feature like this is greatly benefitted by JavaScript having dynamic arrays, meaning adding to the pattern array becomes much simpler.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/7edd47d35be24be2a42ddfad252e5dca)


## License

    Copyright Zeshan Khatri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
