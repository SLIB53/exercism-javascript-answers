Exercism JavaScript Answers
================================================================================

[![Build Status](https://travis-ci.com/SLIB53/exercism-javascript-answers.svg?branch=master)](https://travis-ci.com/SLIB53/exercism-javascript-answers)

[Exercism.io][exercism] provides practice problems and mentorship for many programming langauges. This repository contains my solutions to the ["JavaScript Track"][exercism-javascript-track].

As with all exercism tracks, I practice creating these solutions to acquire a basic knowledge of the syntax and built-in functionality of the language, as well as improved fluency in reading and writing idiomatic code for the language.

Running Tests
--------------------------------------------------------------------------------

For each solution, install dependencies (I use [`yarn`][yarn-homepage]), then run the package test script. Check the README for further instructions.

```sh
yarn && yarn test
```

To run all the tests, use the `test_all.sh` script.

```sh
sh _scripts/test_all.sh
```

Alternatively, tests can be run from a container using the ['Dockerfile'](Dockerfile). Tests will run on build.

```sh
docker build --tag exercism-javascript-answers:latest .
```

Why yarn?
--------------------------------------------------------------------------------

Bluntly, it's because cloning this repo and running tests for all of the exercises is understandably much faster with yarn. With each exercise being extremely similar subprojects, it became impractical and unwise to not take advantage of yarn's package caching.

[exercism]: https://exercism.io
[exercism-javascript-track]: https://exercism.io/tracks/javascript
[yarn-homepage]: https://yarnpkg.com
