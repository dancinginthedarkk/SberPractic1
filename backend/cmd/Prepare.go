package cmd

import (
	"io/ioutil"
	"log"
)

var PanoramaArray []string

func Prepare() {

	dirPanorama := "deployments/templates/panorama"
	files, err := ioutil.ReadDir(dirPanorama)
	if err != nil {
		log.Fatal(err)
	}

	for _, file := range files {
		PanoramaArray = append(PanoramaArray, file.Name())
	}

}
