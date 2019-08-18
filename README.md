Exercism JavaScript Answers
================================================================================

[![Build Status](https://travis-ci.com/SLIB53/exercism-javascript-answers.svg?branch=master)](https://travis-ci.com/SLIB53/exercism-javascript-answers)
[![DeepScan grade](https://deepscan.io/api/teams/5096/projects/6886/branches/60468/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5096&pid=6886&bid=60468)

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

Why Yarn?
--------------------------------------------------------------------------------

When I first began developing this project, Yarn performed much better due to its package caching.

[exercism]: https://exercism.io
[exercism-javascript-track]: https://exercism.io/tracks/javascript
[yarn-homepage]: https://yarnpkg.com
