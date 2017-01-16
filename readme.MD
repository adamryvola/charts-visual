REQUIREMENTS:
- npm
  - browserify
  - watchify
  -babelify

BUILD
browserify components/index.js -o dist/bundle.js -t [ babelify --presets [ es2015 react ] ]

DEVEL
watchify components/index.js -o dist/bundle.js -t [ babelify --presets [ es2015 react ] ] -v

PROTOTYPE
http://g.onsz.cz/

REPO
https://github.com/nanookilla/APP

GITHUB-PAGES
https://adamryvola.github.io/charts-visual/
