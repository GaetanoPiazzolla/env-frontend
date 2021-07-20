docker build -t react-env:<version> .
docker run --env ENV_API_BACKEND_URL="VALUE IS ACTUALLY WORKING" -p 8080:80 react-env:<version>