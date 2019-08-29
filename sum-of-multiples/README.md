# Sum Of Multiples

Given a number, find the sum of all the unique multiples of particular numbers up to
but not including that number.

If we list all the natural numbers below 20 that are multiples of 3 or 5,
we get 3, 5, 6, 9, 10, 12, 15, and 18.

The sum of these multiples is 78.

## Implementation Notes

The source provides both a functional programming approach, as well as the traditional structured programming approach.

While I found the functional approach to be more intuitive, I am not confident about its performance in JavaScript. The general approach of the "functional" implementation however lends itself to parallelization if one were to explore high performance optimizations.

## Requirements

Install assignment dependencies:

```bash
$ yarn
```

## Making the test suite pass

Execute the tests with:

```bash
$ yarn test
```

## Source

A variation on Problem 1 at Project Euler [http://projecteuler.net/problem=1](http://projecteuler.net/problem=1)
