# Docker demo for FS9
To run docker-compose:
1. Create a file `.env` in the repos root folder and put the following information, for example:
```
TYPEORM_HOST=db
TYPEORM_USERNAME=user
TYPEORM_PASSWORD=password
TYPEORM_PORT=5432
TYPEORM_DATABASE=nestjs_demo
SERVER_PORT=8080
```
You can change the database name, password, username if needed
2. Run: `docker-compose up` from the repos root folder
