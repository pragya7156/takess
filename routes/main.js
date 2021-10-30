const router = require("express").Router();
const puppeteer = require("puppeteer");

router.get('/', function (req, res) {
    res.render('url')
});

router.post('/', async function (req, res) {
    let url = req.body.url;
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({
        width : 1000,
        height : 5000
    });
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url, {
        waitUntil: 'networkidle2'
    });
    await page.screenshot({ path: "ss.png", fullPage: true });
    await browser.close();
    return res.render('url')
})

module.exports = router;