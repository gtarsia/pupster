const puppeteer = require('puppeteer')
const { launch, record, waitForLog } = require('../');

(async () => {
  const browser = await launch(puppeteer)
  const page = await browser.newPage()
  const logs = record(page, 'console')
  const goTo = await page.goto('https://jsbin.com/?html,output')

  await waitForLog(logs, 'Dave is ready.')
  console.log('Dave is ready message was waited')
  await new Promise(resolve => setTimeout(resolve, 30000))
  await browser.close()
})()
