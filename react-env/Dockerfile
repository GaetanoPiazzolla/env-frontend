FROM tiangolo/node-frontend:10 as build-1
WORKDIR /app
COPY ./src /app/src/
COPY *.* /app/
RUN npm install && npm run build

FROM nginx:1.15
COPY --from=build-1 /app/dist/ /usr/share/nginx/html
COPY --from=build-1 /nginx.conf /etc/nginx/conf.d/default.conf
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
