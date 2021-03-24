import { firefox } from "playwright";

describe("lounch firefox test", () => {

  xtest("lounch firefox", async () => {
    const browser = await firefox.launch({ headless: true });
    const context = await browser.newContext();
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
