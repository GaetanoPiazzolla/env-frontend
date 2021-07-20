docker build -t angular-env:<version> .
docker run --env ENV_API_BACKEND_URL="VALUE IS ACTUALLY WORKING" -p 8090:80 angular-env:<version>
