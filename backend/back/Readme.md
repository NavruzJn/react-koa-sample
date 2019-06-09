# Qweep Backend
Before start server, create .env file in root folder and add 2 keys (SECRET and SMS_KEY)

```
src
├── app.js
├── config.js
├── db
│   └── mysql.js
├── lib
│   └── index.js
├── middleware
│   ├── error-handler.js
│   ├── http-logger.js
│   ├── index.js
│   ├── not-found.js
│   └── verify-jwt.js
├── model
│   └── client.js
├── router
│   ├── authMiddleware.js
│   └── index.js
└── util
    ├── logger.js
    ├── object-validator.js
    └── tools.js
```


To start the server
```sh
$ npm install
$ npm run dev
```
All server commands
```sh
$ npm run dev
$ npm run build
$ npm run start
$ npm run stop
$ npm run restart
$ npm run lint
```
