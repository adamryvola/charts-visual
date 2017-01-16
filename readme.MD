BUILD
browserify App.js -o dist/bundle.js -t [ babelify --presets [ es2015 react ] ]

DEVEL
watchify App.js -o dist/bundle.js -t [ babelify --presets [ es2015 react ] ] -v

PROTOTYPE
http://g.onsz.cz/

REPO
https://github.com/nanookilla/APP