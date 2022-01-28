
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
    await driver.sleep(1000)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    await driver.sleep(1000)
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking the Draw button displays the div with id = choices', async()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    const botsToDraw = await driver.findElement(By.id('choices'))
    const displayed = await botsToDraw.isDisplayed()
    expect(displayed).toBe(true)

})

test('Check that clicking an “Add to Duo” button displays the div with id = player-duo', async()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//button[contains(text(),"Add to Duo")]')).click()
    await driver.sleep(2000)
    const duoBot = await driver.findElement(By.id('player-duo'))
    const displayed = await duoBot.isDisplayed()
    expect(displayed).toBe(true)

})