# React Starter Project

## Tech Stack

React  
Redux  
ESLint using [Airbnb's Javascript and React style guides](https://github.com/airbnb/javascript)  
Babel for Javascript ES8  
Webpack 4  
node 8.5.0
npm 6.4.1  
SASS  
Docker  

## Getting Started

### Docker

The recommended way to get started is to run the containerized development environment in Docker. This will mirror the production build environment exactly.

Install [Docker](https://docs.docker.com/install/).

Start hot-swapping `webpack-dev-server` on [http://localhost:8080](http://localhost:8080):  

```
docker-compose up
``` 

Stop all Docker processes:
```
docker-compose down
```

### Local Install

Alternately, you can run development locally. However, because your OS, node, and npm versions may differ from what's expected in the configured setup, additional configuration may be necessary.

#### Dependencies:
node v8.5.0  
npm v6.4.1

Start webpack-dev-server locally:
```
npm run start:dev
```

## Contributing

### Style Guide
This project is configured use ESLint with [Airbnb's Javascript and React style guides](https://github.com/airbnb/javascript). The Webpack bundler will not compile the Javascript unless all the rules pass, so it is strongly suggested you go through the style guide at least once before beginning to code.