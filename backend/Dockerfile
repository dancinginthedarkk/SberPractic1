FROM golang:latest
LABEL authors="mark"

WORKDIR /app

COPY ./backend .

RUN go build -o main .

ENV PORT=3999

CMD ["./main"]

EXPOSE 3999

#ENTRYPOINT ["top", "-b"]