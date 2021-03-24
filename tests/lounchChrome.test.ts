import { chromium } from "playwright";

describe("Lounch chrome test", () => {

  test("lounch chrome", async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      recordVideo: { dir: "./videos/", size: { width: 800, height: 600 } },
    });
    const page = await browser.newPage();
    await page.goto("https://google.by");
    await page.fill("[name=q]", "playwright");
    await page.keyboard.press("Enter", { delay: 2000 });
    // await page.waitForSelector('text=microsoft/playwright: Node.js library to automate ... - GitHub');
    await page.click(
      "text=microsoft/playwright: Node.js library to automate ... - GitHub"
    );
    // await page.waitForSelector('text= Playwright');
    await page.screenshot({ path: `screenshots/${Date.now()}.png` });
    await browser.close();
  });
});
