# Hackers & painters

Server - Nodejs, Express, Typescript, Redis (for caching only), PostgresSQL, Swagger (docs), pm2, PM2

NPM SCRIPTS:
npm run dev - runs development server and watches for every .ts file change
npm run build - transpiles .ts files to .js (to dist folder)
npm start - starts pm2 locally with production env
npm run test - run tests

Base route: /api/{version}/{route}

Testing:
Tests files - {filename}.test.{extension}
Unit-testing - jest
Integration-testing - supertest
