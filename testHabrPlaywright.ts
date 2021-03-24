const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium', 'firefox']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();
        await page.goto('https://google.by');
        await page.fill('[name=q]','playwright');
        await page.keyboard.press('Enter',{delay:2000});
        await page.waitForSelector('text=microsoft/playwright: Node.js library to automate ... - GitHub');
        await page.click('text=microsoft/playwright: Node.js library to automate ... - GitHub');
        await page.waitForSelector('text= Playwright');
        await page.screenshot({ path: `simple/screenshots/${browserType}${Date.now()}.png` });
        await browser.close();
    }
})();
