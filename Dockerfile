FROM digitallyseamless/nodejs-bower-grunt:0.12

COPY src /app/src
ADD gruntfile.js /app
ADD grunt.sh /app
ADD package.json /app
ADD parse-logs.py /app
WORKDIR /app
RUN npm install --production
RUN cp src/server/local_utils.js.tpl src/server/local_utils.js
RUN ./grunt.sh create-database

EXPOSE 15000

ENTRYPOINT [ "/app/grunt.sh", "watch" ]

# It is likely that you will want to extend this Dockerfile by adding a configuration
# file with -v source:target when creating the container. Also, you might need to
# create CouchDB administrators by extending this Dockerfile and adding new *.ini files
# into /opt/couchdb/etc/local.d/.
