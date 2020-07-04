## Description

This project created as a setup for reproducing issue related to config option 'fallbackLanguage' described in https://github.com/ToonvanStrijp/nestjs-i18n/issues/153


The main codes to look are located in following files:

1. nestjs-i18n configuring in nestjs/src/main.ts 
2. test controller in nestjs/src/test/test.controller.ts

## Installation

```bash
$ docker-compose up -d
```

## Run test to reproduce

### here we use curl to request by explicitly passing the language and we get json response `{"i18nLang":"de"}` :
```bash
$ curl 'http://localhost:3777/test?l=de'
```


### issue can be seen here when we request without passing language in query string and as not working prove we get json response `{}` : 
```bash
$ curl 'http://localhost:3777/test'
```