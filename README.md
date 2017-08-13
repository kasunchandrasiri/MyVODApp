# MyVODApp
A Simple Media App VOD (Video On-Demand) application

a.	Build/Install instructions

Install the Angular CLI globally via NPM:
	npm install -g @angular/cli
Install all the dependencues
	npm install
Install ngx-slick - published library to npm  (https://www.npmjs.com/package/ngx-slick)
	npm install ngx-slick --save
Import ngx-slick library to application
	npm install ngx-slick
Install Videogular library (https://www.toptal.com/angular-js/angular-video-player-videogular)
	npm install videogular2 --save
	npm install @types/core-js --save-dev
Buikd and start project
	ng server --open


b.	List of implemented and not implemented features
	
-DONE-
Load from API and display a list of videos in a scrollable horizontal carousel on the home page. Each tile must display a movie title and an associated cover image 
Display second “Previously watched” carousel on the home page. It must be updated and re-sorted according to the most recently watched video.
The user should be able to use a mouse and keyboard (arrows/Enter keys) to select the video.
Layout size adjustment. The application must be able to adjust layout proportionally based on the desktop browser width. 

-PARTIALLY DONE-

-TODO -
Responsive design. Change carousel to Portrait view grid if application is run on mobile device.
Content list refresh button. Each click reloads content from API
Image caching. Upon application restart or content refresh (if implemented) previously downloaded image is loaded from the local device cache.
Error handling. Note that if you simulate any errors, such as invalid movie item, please document precisely in the accompanied Readme file.
Persistent storage of watched items. You can use your custom server, database or local device cache. Note that you don’t need to store actual movie files.
Unit tests. It is up to you which testing framework to use.

c.	Known bugs
/videoplayer/:url redirect to /movie
Video not playing with dynamic src parameter, but static parameter will work the video
