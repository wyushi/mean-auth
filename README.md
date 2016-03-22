
# OAuth 2.0 Server on MEAN stack

This project is the MEAN stack version of project [OAuth 2.0 Servers](https://github.com/wyushi/oauth2-servers).

It is used [MEAN.JS](http://meanjs.org/) to build the project structure.

And It is use [OAuth2orize](https://github.com/jaredhanson/oauth2orize) to handle OAuth 2.0 features.

[Docker](https://www.docker.com/) is used to make development environment setup easier.

## Setup

Build Image
```
$ docker build -t your_mean_image .
```
Image is based on [rmukhia/im-meanjs](https://hub.docker.com/r/rmukhia/im-meanjs/)

Run a MongoDB container
```
$ docker run --name some-mongo -d mongo
```
Run a MEAN container and link it with the MongoDB container above
```
$ docker run -it --name node-mongo --link mean-mongo:mongo -p 3000:3000 -v $(pwd):/home/dev/ node bash
```
Check [MEAN.JS](http://meanjs.org/) for more details on setup.

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
