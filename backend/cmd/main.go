package main

import (
	"github.com/gofiber/fiber/v2"
	"io/ioutil"
	"log"
)

func contains(s []string, str string) bool {
	for _, v := range s {
		if v == str {
			return true
		}
	}

	return false
}

func main() {

	dirPanorama := "deployments/templates/panorama"
	files, err := ioutil.ReadDir(dirPanorama)
	if err != nil {
		log.Fatal(err)
	}

	var panoramaArray []string
	for _, file := range files {
		panoramaArray = append(panoramaArray, file.Name())
	}

	app := fiber.New()

	app.Static("/", "./deployments/templates/panorama")

	app.Get("/:value", func(c *fiber.Ctx) error {
		param := c.Params("value")
		if param != "" || !contains(panoramaArray, param) {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "Ошибка при поиске картинки",
			})
		}
		return c.SendFile(param)
	})

	log.Fatal(app.Listen(":3000"))
}
