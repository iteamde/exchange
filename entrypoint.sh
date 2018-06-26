#!/bin/bash
cd /var/www
./composer.phar install
npm i
npm run watch