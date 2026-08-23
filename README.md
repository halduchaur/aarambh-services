# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# https://github.com/halduchaur/aarambh-services/




docker pull image_name (pull docker image from locally or docker hub)
docker images (to check all local docker images)
docker run image_name (to create an docker container from specific image)
docker run -it image_name (to pull and create an docker container from specific image and attach an interactive terminal with it)
exit (exit from an docker container)
docker ps -a (to check all containers)
docker ps (to check running containers)
docker start container_id (to start an docker container by its id)
docker stop container_id (to stop an docker container by its id)
docker rmi image_id (to remove an docker image by its id)
docker rm container_id (to remove an docker container by its id)
docker pull image_name:version_no (to pull an specific version docker image)
docker run -d -e MYSQL_ROOT_PASSWORD=root mysql:8.0 (create docker container with mysql version_no in detach mode with environment variable)
docker run -p host_port:container_port image_name (create an container and map host_port to container_port)
docker logs container_id (to check container logs)
docker network (if we need to communicate one container to another container, then we need to create docker network & both container should create inside network)
docker network ls (to check all network)
docker network create mongo-network (to create docker network)
docker network rm mongo-network (to delete docker network)
docker run -d -p27017:27017 --name mongo --network mongo-network -e MONGO_INITDB_ROOT_USERNAME=admin mongo (pull & create an container with detach  mode, port mapping, defalt container name, inside network, environment variables, image name)
docker compose (to create containers we will create an .yaml file which hold info regarding newly containers, no need to mention docker network, when docker compose will run this file will create an auto docker network for defined containers)
docker compose -f file_name up -d (will create defined containers from file with an default docker network)
docker compose -f file_name down (will delete all defined containers with default docker network)

create an docker file(Dockerfile) to dockerize our app
docker build -t image_name . (to make app image)
docker build -t aarambh_services_image . (after creating docker file, go to file location & run command to create docker image)
docker run -p 5173:5173 aarambh_services_image (after successful image, run docker container, visit to http://localhost:5173)
create an docker hub account and create repository, then image name should be repository name
docker build -t e3dfsdfs/aarambh-services . (create image, as same as repository name)
docker push e3dfsdfs/aarambh-services (push local docker image to docker hub repository)

docker pull e3dfsdfs/aarambh-services:latest (pull docker image from remote docker hub)
docker run -p 5173:5173 e3dfsdfs/aarambh-services:latest (run docker container)
