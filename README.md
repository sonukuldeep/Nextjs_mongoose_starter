
# Nextjs mongoose template
## With next-auth

![main image](https://cdn.devdojo.com/posts/images/April2022/how-to-use-mongoose-with-nextjs-for-mongodb2.jpg?auto=format&q=70&w=600)

This is a starter repo for all projects that need Nextjs and mongo database using mongoose.

[This](https://blog.usmans.me/how-to-use-mongoose-with-nextjs-for-mongodb) article was followed in part to make mongoose work with latest version on nextjs.

It is also possible to connect Nextjs and mongodb using versel by following [this](https://www.youtube.com/watch?v=JIlYroSsInU) video.

All credit goes to these articles and video for this repo to exist. 

## Mongoose
Enter mongodb atlas uri into .env file so that the program can connect to your database

## Next-auth
Follow the official docs to setup oauth on google, facebook or whatever provider you want. Enter credentials in .env file.
Check old-way repo to see how i used next-auth earlier.
I have demonstarted 4 ways in which next-auth can be used
- 3 server methods
- 1 client method. check /client to see the emplementation

## Acknowledgements
 - Mongodb 
 - [Dave](https://github.com/gitdagray/next-auth-intro)
 - Vercel
 - Opensource community
 - My brain


## Installation

The project requires node js and git.

Clone the website using
```npm
git clone 
```

Install this project with npm

```bash
  cd project-directory
  npm i
```

## Run using

```bash
  npm run dev
```

## In the browser open

```bash
  http://localhost:3000/
```

## Important files
```css
utils
├── mongoose.ts
└── mongodb.ts

models
└── testModels.ts
```

Note:- Enable serverActions as done in next.config.js file if you're not cloning this repo since these setting are still in experimental as of nextjs 13.4.5

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) 
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Author
- [@sonukuldeep](https://www.github.com/sonukuldeep)


## 🛠 Skills

[![My Skills](https://skillicons.dev/icons?i=js,ts,html,css,tailwind,sass,nodejs,react,vue,flask,rust,python,php,solidity,mongodb,mysql,prisma,figma,threejs)](https://github.com/sonukuldeep)
