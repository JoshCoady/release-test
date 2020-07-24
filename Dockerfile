FROM alpine

RUN echo "before ARG" > before && cat before

ARG ARG=default

RUN echo "after ARG: $ARG" > after && cat after
