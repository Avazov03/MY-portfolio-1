FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html

# Drop local tooling / archives from the public tree if copied
RUN rm -rf \
  /usr/share/nginx/html/.git \
  /usr/share/nginx/html/.agents \
  /usr/share/nginx/html/.cursor \
  /usr/share/nginx/html/node_modules \
  /usr/share/nginx/html/extracted \
  /usr/share/nginx/html/extracted_zip \
  /usr/share/nginx/html/"Landing Page Assest" \
  /usr/share/nginx/html/"Project Images" \
  /usr/share/nginx/html/*.zip \
  /usr/share/nginx/html/*.tsx \
  /usr/share/nginx/html/package.json \
  /usr/share/nginx/html/package-lock.json \
  || true

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
