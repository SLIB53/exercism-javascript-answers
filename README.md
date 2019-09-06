Exercism JavaScript Answers
================================================================================

[![DeepScan grade](https://deepscan.io/api/teams/5096/projects/6886/branches/60468/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5096&pid=6886&bid=60468)

[Exercism.io][exercism] provides practice problems and mentorship for many programming langauges. This repository contains my solutions to the ["JavaScript Track"][exercism-javascript-track].

As with all exercism tracks, I practice creating these solutions to acquire a basic knowledge of the syntax and built-in functionality of the language, as well as improved fluency in reading and writing idiomatic code for the language.

Exercises
--------------------------------------------------------------------------------

### Easy

- [Anagram](anagram)
- [Armstrong Numbers](armstrong-numbers)
- [Collatz Conjecture](collatz-conjecture)
- [D&D Character](dnd-character)
- [Darts](darts)
- [ETL](etl)
- [Hamming](hamming)
- [Hello World](hello-world)
- [Isogram](isogram)
- [Leap](leap)
- [Pangram](pangram)
- [Protein Translation](protein-translation)
- [Raindrops](raindrops)
- [Resistor Color Duo](resistor-color-duo)
- [Resistor Color](resistor-color)
- [Reverse String](reverse-string)
- [RNA Transcription](rna-transcription)
- [Roman Numerals](roman-numerals)
- [Run Length Encoding](run-length-encoding)
- [Triangle](triangle)
- [Two Fer](two-fer)

### Medium

- [All Your Base](all-your-base)
- [Allergies](allergies)
- [Bob](bob)
- [Flatten Array](flatten-array)
- [Grains](grains)
- [Linked List](linked-list)
- [Minesweeper](minesweeper)
- [Nucleotide Count](nucleotide-count)
- [Robot Name](robot-name)
- [Scrabble Score](scrabble-score)
- [Simple Cipher](simple-cipher)
- [Sum of Multiples](sum-of-multiples)
- [Pascal's Triangle](pascals-triangle)

### Hard

- [Simple Linked List*](simple-linked-list)
- [Queen Attack](queen-attack)

\* Exercism's JavaScript track has categorized the [Simple Linked List](simple-linked-list) implementation exercise as "hard", while the more advanced doubly linked list ([Linked List](linked-list)) implementation exercise has been categorized as "medium".

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
