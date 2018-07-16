FROM nginx:alpine
MAINTAINER Anirban Chakraborty (anirban2.c@gmail.com)

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/ .

EXPOSE 4200