import * as fs from "fs";
import * as path from "path";

export async function RenderHomePage(): Promise<string> {
  try {
    return fs.readFileSync(path.join(__dirname, "home.html"),"utf-8") as string;
  } catch (e: any) {
    return `<h1 class="text-white text-3xl h-screen w-full flex items-center justify-center">An internal server error occured</h1>`;
  }
}
