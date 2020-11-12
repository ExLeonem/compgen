
# FSP - Figma style parser

A parser which takes figma files and generates whatever you like.



## Index

1. [Roadmap](#Roadmap)
2. [Installation](#Installation)
3. [Setup](#Setup)
4. [Contribution](#Contribution)


## Dependencies

1. [Commander](https://github.com/tj/commander.js#readme)
2. [envinfo](https://github.com/tabrindle/envinfo#readme)
3. [configstore](https://github.com/yeoman/configstore#readme)
4. [Signale](https://github.com/klaussinani/signale#readme)


## TODO

- [ ] Cipher/Decipher api token to be used. Save token on machine (crypto nodejs library)
- [ ]  


## Roadmap

- [ ] Configuration file format
- [ ] React Component Library 
- [ ] React-Native Application
- [ ] Templates
    - [ ] Component Library (React/Vue/Angular)
    - [ ] Application (Link to component library)
    - [ ] Native Application (electron)
    - [ ] Mobile Application (React Native/Flutter) 


## Installation

```javascript
    $ npm i -g figma-style-parser
```

## Setup

### How to create a new Project?

1. Generate and save a figma [access Token](https://www.figma.com/developers/api#authentication). You can delete them anytime to revoke access.
2. Create a project with `figma-style-parser init myProjectName`


## Commands

| Command | Description
| ---   | ---
| init | Initialize a new component library
| add | Parse single file 
| sync | Synchronize the component library with current stylesheets
| config | Set global configurations to be used.
| link | Link generated component library to wireframes


## Creating a template



## Contribution