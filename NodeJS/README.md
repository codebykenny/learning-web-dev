# NodeJS

Lets start making your own NodeJS Apps!

<br>
<div>
  <a href="../README.md#contents">:arrow_left: Back to Main Menu</a>
</div>

# Contents
- [3.2. Installing Node & NVM](#installing-node-nvm)
  - [Install NVM](install-nvm)
  - [Install Node](install-node)
- [3.3. NPM & Packages](npm-packages)
  - [Concept of Packages](npm-packages)
- [3.4. Initiating Project](#initiating-project)
  - [npm init](#initiating-project)
  - [git init](#initiating-project)
- [3.5. Hello World App](#hello-world-app)
  - [app.js]()
  - [npm install ]()
  - [running application]()
  - [npm scripts]()
- [3.6. Web App]()
  - [Requests & Responses]()
  - [Router]()
  - [Middleware]()
  - [Controllers]()
  - [Components]()
  - [Views]()
  - [Static Files]()
  - [Headers & Cookies]()
  - [Database]()
  - [GZip Compression & Optimizations]()
  - [SSL & Security]()

# Installing Node & NVM

**NVM** (_Node Version Manager_) is a handy tool that lets you manage multiple(or just one) version of node on yoru system. It's the easiest way to get Node installed.


## Install NVM
To install NVM fire up your terminal and type in the following:

``` bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

or if you prefer wget:

``` bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

After the installation is complete, we need to reload your Bash shell so type in:

``` bash
source ~/.bashrc
```

## Verify
Now to verify you have NVM running on your system type:

``` bash
command -v nvm
```

which should output 'nvm' if the installation was successful. 

[If you have problems installing NVM or are experiencing any sort of errors, read the installation instructions straight from NVM here.](https://github.com/creationix/nvm#install-script)

## Install Node

Now that we have NVM running, installing Node couldnt be easier.

Simple run: 

``` bash
nvm install node
```

This will download, compile and install the latest version of node!

# NPM & Packages

We should now have a working copy of Node on our system and can proceed to learn about packages.

## Concept of Packages

Every NodeJS application is considered a "package". All of them. Regardless of what type of app it is, it's a package.

The beautiful world of NodeJS is there are thousands and thousands of open-sourced packages that you can simply add to your application. Everytime someone in the world creates a piece of code that can be used for something, they can package it up and share it with the world. So at your fingertips you have all these packages you can use to accomplish just about anything.

When you write your very own NodeJS application, 100% of the time you will use packages from other users all over the world. All the *hard* parts of coding, have usually already been taken care of by other users and you can simply add a package to your application to take advantage of that.

> The takeaway here is: your app is a application(package) comprised of other packages from other users.

We will take a further look into packages in the next section as we create our first NodeJS app.

# Initiating Project

Lets create our first NodeJS app.

## Step 1: Create Directory

Lets create a folder for our nodejs app:

``` bash
mkdir first-node-app
cd first-node-app
```

## Step 2: Initiate App

Lets create an application file:

``` bash
  touch app.js
```
> This simply creates an empty file for you, this is where we are going to write our code.

Now Node has a very handy tool called *NPM* we can use in our terminal. So lets run the following:

``` bash
npm init
```

Now NPM will ask you a series of questions regarding your new app. For the purpose of this tutorial you can simple press **[ENTER]** for every question to use the default settings.

Now if you type `ls -l` in your directory you should have the following:

``` bash
❯ ls
app.js       package.json
```

Sweet! Now lets go over the structure of a node application.

The structure of a nodejs application usually consists of the following:

- A NodeJS App file (e.g. app.js or server.js)
- A NodeJS Package file (package.json)
- node_modules (a directory filled with other NodeJS packages from other users)

The `App file` is where you write your code.

The `Package file` is where you describe your application, and include all the other packages you wish to use

The `node_modules` folder is where all the packages you use will be installed to.

This is the very basic structure of every application. All Node apps require these 3 fundamental things.

# Hello World App

Alright alright alright.... lets make your firsy NodeJS app!

Open up `app.js` using your editor of choice.

Type in the following lines inside your file:

``` javascript
let today = new Date();

console.log("Hello World! The date is: " + today);
```
> new Date() is a function built into node, it simply creates a "Date" object with todays date and time :) Simple enough.

Save that file and go back to your terminal.

Now type: 
``` bash
node app.js
```

You should see:

<div>
  <img src="./images/app-1.png" align="center" width"500px">
</div>


Lets see an example of how you can use someone elses Package inside of your package:

``` javascript
// This is your application file (app.js)

const chalk = require('chalk');  // This is a package named Chalk created by a user. It lets you write messages in different colors.

console.log(chalk.blue('Hello world!')); // This will write the words "Hello World!" in blue text

```
> In this simple application we wrote our own app that uses a package from another user called "chalk".
>
> We simply displayed a blue message that says "Hello World"

Awesome!

But... the package "chalk", how does node know what "chalk" is and how to download the package.

Well, we have to add "chalk" to our application, and we do this