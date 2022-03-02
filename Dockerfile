FROM node:14-alpine as build-set
MAINTAINER Maurice

# Create html dir
RUN mkdir -p /var/www/html/
RUN mkdir -p /tabaka
# Change working dir
WORKDIR /tabaka

# install package.json (o sea las dependencies)
COPY package.json /tabaka/package.json
COPY . /tabaka

# Install npm modules
RUN npm install

# Build
RUN npm run build

# Install Nginx
# FROM nginx:latest

# Copy Files to html dir
# COPY --from=build-set /tabaka/dist/tabaka-hos/ /var/www/html/


FROM nginx:1.17.1-alpine
COPY dist/angular-keycloak-app /usr/share/nginx/html
EXPOSE 80