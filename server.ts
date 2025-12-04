import express from "express";
import { RenderHomePage } from "./internal/about";

const app = express();

app.use(express.static("public"));
app.get("/", async (_, resp) => {
  resp.set("Content-Type", "text/html");
  const html = await RenderHomePage();
  resp.send(html);
});

app.listen("42069", () => {
  console.log("server running on http://localhost:42069");
});
