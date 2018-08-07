const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('./deps/chromedriver').build();
chrome.setDefaultService(service);

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

describe('Lawencon Card Shop', () => {
  let driver;

  before(() => {
    //driver = new webdriver.Builder()
    //  .withCapabilities(webdriver.Capabilities.chrome()).build();
	  driver = new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:9515').build();
	 
  });

  // after(() => {
  //   return driver.quit();
  // })

  beforeEach(() => {
    return driver.get('http://localhost:8000');
  });
  
  no1
  it('should do something', async () => {
    assert(true);
  });
	
  //no2
    it('should do something', async () => {
      driver.sleep(2000).then(function() {
        driver.getTitle().then(function(title) {
          if(title === 'Buy') {
            console.log('Test passed');
          } else {
            console.log('Test failed');
          }
        });
      });
    });
    

    //no3
    it('should do something', async () => {
      driver.find_element_by_css_selector('a.nav-link js-help-link')
      driver.sleep(2000).then(function() {
        driver.getTitle().then(function(title) {
          if(title === 'Help') {
            console.log('Test passed');
          } else {
            console.log('Test failed');
          }
        });
      });
    });

    //no4
    it('should do something', async () => {
      driver.find_element_by_css_selector('section.feature-area.js-shop')
    });

    //no5
    it('should do something', async () => {
      driver.findElement(By.xpath("//img[@src='assets/images/01.png']")).click();
      driver.findElement(By.xpath("//img[@src='assets/images/02.png']")).click();
      driver.findElement(By.xpath("//img[@src='assets/images/03.png']")).click();
    });


});
