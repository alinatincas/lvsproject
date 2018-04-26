## PROJECT: LANDSFORENING AF VÆRESTEDER
### DEMO

LIVE DEMO(http://stef183a.my.eal.dk/projects/wep-lvs-github-clone/index.html)

## SASS STRUCTURE

### Modules

Convention:
> All modules are stored into their corresponding folders, while only the _*_z-module*_ files are called into styles.scss

> Modules have the _*z-*_ prefix to be pinned at the bottom of the file explorer in the IDE (faster visual recognition)

* base
* components
* helpers
* layout
* pages
* themes
* vendors

## SETUP
Install NPM 

it comes with nodejs

https://nodejs.org/en/

install gulp and install packages using following:

    1: npm install gulp -g
    2: npm install

Run gulp using

    gulp watch
    

Other commands: 

    gulp scss       // compile
    gulp minify     // compile and minify in a new file
    gulp watch      // watches for changes, starts webserver, reloads and compailes.
    gulp            // the default command.

Compaile bootstrap

    gulp bootstrap  // compailes the bootstrap.css
    gulp miniboot   // compailes and minifys the bootstrap.min.css
