package rest

import (
	"SberPracticExcursion1/cmd"
	internal "SberPracticExcursion1/internal/script"
	"github.com/gofiber/fiber/v2"
)

func GetMain(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hallo, dies ist die Starter \n Hi. This is home page \n Привет. Это главная страница")
	})
}

func GetPicture(app *fiber.App) {

	app.Get("/:value", func(c *fiber.Ctx) error {
		param := c.Params("value")
		if param != "" || !internal.Contains(cmd.PanoramaArray, param) {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "Ошибка при поиске картинки",
			})
		}
		return c.SendFile(param)
	})
}
