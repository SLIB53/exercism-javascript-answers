#!/bin/env sh

# Must run from the project root directory!

# Runs tests for each exercise, exiting with 1 if a test fails.

BASE_DIR_PATH=$(pwd)

for exercise_dirname in */; do
    cd $BASE_DIR_PATH'/'$exercise_dirname

    if [ -f *.spec.js ]; then
        yarn

        if ! yarn test; then
            echo "Testing failed in $exercise_dirname"
            exit 1
        fi
    fi
done
