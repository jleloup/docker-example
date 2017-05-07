# Docker Example

## What ?

This is an example for Dockerized applications with :

* one mocked-up backend using Python + Flask
* one frontend using Nginx with HTML + JavaScript

## Requirements

Docker + docker-compose tooling.

## How to use it

### With docker-compose

```sh
docker-compose up
```

### Manually

```sh
docker build -t "backend:latest" backend/
docker build -t "frontend:latest" frontend/

docker run -d -p 5000:5000 backend
docker run -d -p 80:80 frontend
```
