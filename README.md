# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Zeshan Khatri

Time spent: 14 hours spent in total

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
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Theme buttons that change background image when pressed
* [x] Custom font
* [x] Buttons can't be pressed while pattern is playing if game has started
* [x] Extra game mode that runs for unlimited number of rounds until player gets too many strikes
* [x] Instructions menu that fades ins when icon is pressed and fades out when "Close" is pressed.
* [x] Prompt that accepts a name and displays it in end game alert
* [x] Working leaderboard that uses current session data (resets at browser refresh)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Beginning](https://i.imgur.com/cyCySII.gif)
![Start/Stop](http://g.recordit.co/QeOxftmu5T.gif)
![Lose](http://g.recordit.co/u6dN8uU9PV.gif)
![WinPt1](http://g.recordit.co/C4lYWVqjtT.gif)
![WinPt2](http://g.recordit.co/mdMIM03Thb.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Coding help: \
https://stackoverflow.com/questions/30035932/how-do-i-use-this-javascript-variable-in-html \
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random \
https://www.w3schools.com/html/html_images_background.asp \
https://www.w3schools.com/howto/howto_css_center_button.asp \
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_js_background-image \
https://programminghead.com/how-to-play-audio-in-html-using-javascript/ \
https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css \
https://developer.mozilla.org/en-US/docs/Web/API/setInterval \
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text \
https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css \
https://sebhastian.com/javascript-console-input/ \
https://www.w3schools.com/jsref/jsref_foreach.asp \
https://css-tricks.com/snippets/css/a-guide-to-flexbox/ \
https://www.w3schools.com/cssref/pr_text_word-spacing.asp \
https://stackoverflow.com/questions/47918195/creating-a-basic-html-javascript-leaderboard \
https://www.tutorialspoint.com/how-to-add-a-new-element-to-html-dom-in-javascript

Assets and design: \
https://www.rapidtables.com/web/css/css-color.html \
https://jayuzumi.com/star-wars-soundboards \
https://www.myinstants.com/instant/roger-roger-star-wars-droid/ \
https://www.deviantart.com/rotane/art/Jedi-vs-Sith-WP-pack-wide-20636679 \
https://wallpapersafari.com/w/Gt5v2h \
https://starwars-universe.fandom.com/wiki/R2-D2 \
https://www.dafont.com/star-jedi.font \
https://stackoverflow.com/questions/33878539/is-there-an-html-entity-for-an-info-icon \
https://icons8.com/icons/set/leaderboard

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

What I found most surprising about this project was that the features I expected to be difficult were quite easily implemented and my real troubles came elsewhere, places which I would've guessed to be relatively simple. For example, I held off setting up the timer and creating the unlimited game mode as I assumed they would be tricky, but when I actually started developing them, the total time I spent may have been about half an hour! Comparatively, replacing the tone with individual audio clips took up a greater chunk of my time as I was very particular in adjusting their properties such as their runtime and playback. 

Earlier in my developmental process, I ran into two specific challenges. The first involved the Math.random class particularly because I assumed it held the same functionality as found in Java’s version of that same class. Java’s class has a nextInt() method which allows one to get a random integer between 0 and a max value passed as an argument, however the JavaScript version only utilizes a Math.random() method that returns a random floating-point value between 0 and 1. To get a random integer, I had to find a way to manipulate that floating point to become an integer (using Math.floor() following other calculations). Later, when constructing the instruction and leaderboard menus, I wished to have a fade in and fade out effect when they were opened and closed. Initially, I utilized the animation property in CSS, which was effective for fading in but would not function properly for fading out. Further inquiries led me to the transition property and that allowed me to add in both effects.

To conclude this project, I had to overcome its largest hurdle which was incorporating some sort of leaderboard system. Majority of the time spent could likely be attributed to researching multiple different ways in establishing a link to an external server for holding game data, and when that proved too challenging for my current knowledge, settling on methods to display the local game data from an existing web session. My working function involded appending a players array after each unlimited mode game, sorting the array from highest to lowest rounds, and finally using the "createElement" method to recreate the leaderboard menu with the new entry included. Overall, this project provided a great introduction to web development, allowing me to learn a plethora of new things.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I'd love to learn about the many intricacies that exist within JavaScript, HTML, and CSS, especially when it comes to completing more complex programming and data structures. Gaining a deeper understanding of how those three languages relate and manipulate each other would further aid any development I attempt in the future as modern websites have more animated and fluid content. A good example is the dinosaur game that Google Chrome provides you if you try to use it without an internet connection. Currently, my knowledge of web development is not enough to even guess how the dinosaur is able to move with the background, let alone be able to recreate that same game myself. Hopefully in the future, more experiences are able to teach me.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Although I was able to accomplish most of the goals provided for this project by the prework and myself, the biggest disappointment I had was not figuring out how to set up a remote database for the leaderboard. Currently, the data is specific to the running web session and resets if that session is closed. My idea was to host a persistent leaderboard which showcased the highest scores from every player that had ever played the game. Provided some greater time to work on this project, I would familiarize myself further with databases themselves (my only experience being a class taken this semester), gain a deeper understanding of Node.js and JSON files, and then finally apply that larger skillset into implementing a proper leaderboard system.

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
