# frontendOS-gulp

## Scope
On this presentation, we created a simple Gulp script to:
* Create simple connect server for index.html and all static files
* concat & uglify all javascript files in app/scripts folder
* parse .sass files and add sourcemaps for all files in app/styles folder (beware that _***.scss will be excluded)
* Watch for any change in source files and live-reload browser after build

## Guide
To successfully use this source, pelase follow these instructions:

1. Install npm packages
```javascript
npm install
```

2. Run default gulp task to compile app/scripts, app/styles and add watchers on both folders.
```javascript
gulp
```