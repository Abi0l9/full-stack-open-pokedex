import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npm  start",
    url: "http://localhost:8080",
    timeout: 120 * 1000, // 120 seconds
    reuseExistingServer:!process.env.CI,
  }, use: {
    baseURL: "http://localhost:8080/",
  },
});
