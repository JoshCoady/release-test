FROM alpine

RUN echo "before ARG"

ARG ARG=default

RUN echo "after ARG: $ARG"
