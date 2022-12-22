/* 
What is a container?
  Simply put, a container is a sandboxed process on your machine that is isolated from all other processes on the host machine. That isolation leverages kernel namespaces and cgroups, features that have been in Linux for a long time. Docker has worked to make these capabilities approachable and easy to use. To summarize, a container:
    -is a runnable instance of an image. You can create, start, stop, move, or delete a container using the DockerAPI or CLI.
    -can be run on local machines, virtual machines or deployed to the cloud.
    -is portable (can be run on any OS).
    -is isolated from other containers and runs its own software, binaries, and configurations.
What is a container image?
  When running a container, it uses an isolated filesystem. This custom filesystem is provided by a container image. Since the image contains the container’s filesystem, 
  it must contain everything needed to run an application - all dependencies, configurations, scripts, binaries, etc. The image also contains other configuration for the container, 
  such as environment variables, a default command to run, and other metadata.
  You’ll dive deeper into images later on in this guide, covering topics such as layering, best practices, and more.
https://hub.docker.com/ - Docker Hub is a service provided by Docker for finding and sharing container images with your team.

+Commands:
  docker ps -a - list all containers (running and stopped)
  docker images - list all images (downloaded and built)
  docker run -it node or id - run a container in interactive mode 
  docker rm id - remove a container
  docker container prune - remove all stopped containers

Create a Dockerfile: image for node.js app
+Dump algorithm
  FROM node:12-alpine - use node:12-alpine image
  WORKDIR /app - set working directory in container (where situated our app)
  COPY . . - copy all files to working directory
  RUN npm install - install dependencies
  EXPOSE 3000 - expose port 3000
  CMD ["node", "app.js"] - run npm start command
  
  docker build . - build image from Dockerfile (in current directory)
  docker run id - run a container created from image each time we run this command we create a new container
  docker stop id - stop a container
  docker start id - start a container 
  
  docker run (-d detached - we don't dive into console container ) -p 3000:3000 id - run a container in interactive mode and map port 3000 to 3000 (1st 3000 - local, 2nd 3000 - within docker container)
  
  ?Difference between start and run:
    start - start a container (automatically in detached mode)
    run use and work with image, not with container
  
  run and change app:
    Example run:
      docker run -d -p 3000:3000 id (if we make changes in our app and want to see them in browser we need to rebuild image and run a new container)
    Rebuild image and run a new container:
      docker build . - build image from Dockerfile (in current directory) and tag it
    Again run a new container:
      docker run -d -p 3000:3000 id
  
+Clever way to run a new container:
  FROM node:12-alpine - use node:12-alpine image
  WORKDIR /app - set working directory in container (where situated our app)
  COPY package*.json ./ - copy package.json and package-lock.json to working directory
  RUN npm install - install dependencies
  COPY . . - copy all rest files to working directory
  COPY ./dist ./dist - copy dist folder to working directory 
  In this way, if we don't change node_modules and package.json we get a new container build from cache (faster)

+Other useful commands:
  docker logs id - show logs of a container
  Addidional parameters when run a container:
    --name - set a name for a container (docker run -d -p 3000:3000 --name myName id)
    --rm - remove a container after it stops (docker run -d -p 3000:3000 --rm id)
  Build parameters:
    -t - tag an image (docker build -t myName .)







*/