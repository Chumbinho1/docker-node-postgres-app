# Docker Node.js and PostgreSQL App

This project was created as a learning exercise to study and improve my Docker skills. It demonstrates how to containerize a Node.js application with a PostgreSQL database using Docker.

## Features

- Node.js backend
- PostgreSQL database
- Dockerized environment with `docker-compose`

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/docker-node-postgres-app.git

    # Enter in the app folder
    cd docker-node-postgres-app
    ```

2. Start the containers:
    ```bash
    docker-compose up
    ```
3. Install Node.js dependencies:
    ```bash
    docker-compose exec app npm install
    ```

4. Run database migrations:
    ```bash
    docker-compose exec app npm run migrate
    ```

5. Start the application:
    ```bash
    docker-compose exec app npm start
    ```

6. Access the application:
    - The Node.js app will be running at `http://localhost:3000`
    - PostgreSQL will be accessible on port `5432`

---

## Running in Production

1.  Build and start the production containers:
    ```bash
    docker compose -f docker/production/docker-compose.production.yml --env-file .env.production up --build -d
    ```

2. Run database migrations:
    ```bash
    docker exec -it app npm run migrate
    ```

3. Access the application:
   - The nginx will be serving Node.js application at `http://localhost`
   - PostgreSQL will be accessible on port `5432`

## Purpose

This project serves as a hands-on example to:

- Create and manage multi-container Docker setups  
- Orchestrate services using Docker Compose  
- Connect a Node.js backend with a PostgreSQL database in containers  
- Apply environment variables and production-ready Docker best practices