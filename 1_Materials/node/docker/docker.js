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

Commands:
docker ps -a - list all containers (running and stopped)
docker images - list all images (downloaded and built)
docker run -it node or id - run a container in interactive mode 
docker rm id - remove a container
docker container prune - remove all stopped containers
*/