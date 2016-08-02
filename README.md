### initial setup
- setup public folder
- create index.html (goes under public folder)
- create style.css (goes under public folder)

### webserver to serve files (express)
- `npm install express`

### bootstrap (design)
- `npm install bootstrap`
- Bootstrap is installed and stored under `node_modules` folder

### Build our server-side file
- `touch app-server.js`
- require webserver (express)
- add middleware (bootstrap, etc.)
- setup port

### Add stylesheet and bootstrap
- change `index.html` to contain boostrap and stylesheet

### Run server
- `node app-server.js`

### Install react
- `npm install react`
- Add `components` folder in root directory
- Add `APP.js` inside `components folder`

### Create first client side javacript file
- add `app-client.js` to root folder
- add `react-container` main div

### Now you must prepare the app to be able to support the reading of the app-client.js and the jsx code in react component
- first the javascript in (APP.js and app-client.js) needs to be compiled and packaged into one file.
- webpack - package javascript files
- install webpack globally: `sudo npm install -g webpack`
- install babel loader  (convert jsx code, es6): `npm install babel-loader`
- patch for supporting react `npm install babel-preset-react` 
- configure webpack `webpack.config.js`
- then run `webpack`




