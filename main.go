package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"os/exec"
	"net/http"

	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
)

//go:embed build/*
var content embed.FS

func main() {
	gin.SetMode(gin.ReleaseMode) // 设置为生产环境

	exec.Command("cmd", "/c", "start", "http://127.0.0.1:15026").Start()

	err := startServer()
	if err != nil {
		log.Fatal(err)
	}
}

func startServer() error {
	router := gin.Default()

	router.Use(gzip.Gzip(gzip.DefaultCompression)) // 开启 Gzip 压缩

	subFS, err := fs.Sub(content, "build")
	if err != nil {
		log.Printf("获取嵌入文件系统失败：%s", err)
		return err
	}

	router.StaticFS("/", http.FS(subFS))

	router.NoRoute(func(c *gin.Context) {
		c.FileFromFS("/", http.FS(subFS))
	})

	// 启动 HTTP 服务器

	fmt.Println("HTTP 服务器地址：127.0.0.1:15026")

	err = router.Run("0.0.0.0:15026")
	if err != nil {
		log.Printf("启动 HTTP 服务器失败：%s", err)
		return fmt.Errorf("启动 HTTP 服务器失败：%w", err)
	}

	return nil
}
