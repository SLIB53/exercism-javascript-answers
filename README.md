Exercism JavaScript Answers
================================================================================

<!-- [![Build Status](https://travis-ci.com/SLIB53/exercism-javascript-answers.svg?branch=master)](https://travis-ci.com/SLIB53/exercism-javascript-answers) -->

[Exercism.io][exercism] provides practice problems and mentorship for many programming langauges. This repository contains my solutions to the ["JavaScript Track"][exercism-javascript-track]. JavaScript seems to be everywhere and a must know language today. Because it's so ubiquitous, I felt like I should keep up with this language and be sure that I'm comfortable with it.

I'll be the first to admit that I'm not JavaScript's biggest fan, but I do think it has a lot of good things going for it. JavaScript has an incredible ecosystem, and despite the language's criticisms and widely acknowledged flaws, it has many great new additions and is still an easy langauge to learn and use. My experience so far has been that the tooling and solutions available are really enjoyable. As a result, JavaScript is understandably quite dependable to use for creating applications, and it remains useful to know how to use it regularly.

As with all exercism tracks, I practice creating these solutions to acquire a basic knowledge of the syntax and built-in functionality of the language, as well as improved fluency in reading and writing idiomatic code for the language.

Running Tests
--------------------------------------------------------------------------------

For each solution, install dependencies (I use [`yarn`][yarn-homepage]), then run the package test script. Check the README for further instructions.

```sh
yarn && yarn test
```

<!-- To run all the tests, use the `test_all.sh` script.

```sh
sh test_all.sh
``` -->

Why yarn?
--------------------------------------------------------------------------------

Bluntly, it's because cloning this repo and running tests for all of the exercises is understandably much faster with yarn. With each exercise being extremely similar subprojects, it became impractical and unwise to not take advantage of yarn's package caching.

[exercism]: https://exercism.io
[exercism-javascript-track]: https://exercism.io/tracks/javascript
[yarn-homepage]: https://yarnpkg.com
