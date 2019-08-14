FROM node:alpine

WORKDIR /home/exercism-javascript-answers/

COPY . ./

RUN sh _scripts/test_all.sh

CMD [ "/bin/sh" ]
