const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://tr-yös.com",
      changeOrigin: true,
    })
  );
};
