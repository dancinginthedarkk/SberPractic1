package main

import (
	"SberPracticExcursion1/cmd"
	"SberPracticExcursion1/internal/transport/rest"
	"github.com/gofiber/fiber/v2"
	"log"
)

func main() {

	cmd.Prepare()

	app := fiber.New()

	rest.GetMain(app)
	rest.GetPicture(app)

	log.Fatal(app.Listen(":3999"))

}
