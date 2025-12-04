import * as fs from "fs";
import * as path from "path";

let homePageHtml: string = "";

export async function RenderHomePage(): Promise<string> {
  try {
    if (homePageHtml === "") {
      homePageHtml = fs.readFileSync(
        path.join(__dirname, "home.html"),
        "utf-8"
      ) as string;
    }

    return homePageHtml;
  } catch (e: any) {
    return `<h1 class="text-white text-3xl h-screen w-full flex items-center justify-center">An internal server error occured</h1>`;
  }
}
