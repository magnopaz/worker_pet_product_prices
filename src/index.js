const puppeteer = require("puppeteer");
const fs = require("fs");

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.petz.com.br/gato");
    await page.keyboard.press("End");
    await sleep(300000);
    const htmlgato = await page.content();
    fs.writeFileSync("petzgato.html", htmlgato);

    await page.goto("https://www.petz.com.br/cachorro");
    await page.keyboard.press("End");
    await sleep(300000);
    const htmlcachorro = await page.content();
    fs.writeFileSync("petzcachorro.html", htmlcachorro);

    await page.goto("https://www.petz.com.br/passaros");
    await page.keyboard.press("End");
    await sleep(300000);
    const htmlpassaros = await page.content();
    fs.writeFileSync("petzpassaros.html", htmlpassaros);

    await page.goto("https://www.petz.com.br/peixes");
    await page.keyboard.press("End");
    await sleep(300000);
    const htmlpeixes = await page.content();
    fs.writeFileSync("petzpeixes.html", htmlpeixes);

    await page.goto("https://www.petz.com.br/outros-pets");
    await page.keyboard.press("End");
    await sleep(300000);
    const htmloutrospets = await page.content();
    fs.writeFileSync("petzoutrospets.html", htmloutrospets);

}

main();