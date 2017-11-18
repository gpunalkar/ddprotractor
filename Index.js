browser.ignoreSynchronization=true;
browser.get("https://developer.servicenow.com/app.do")

browser.sleep(10000)



describe("I want to test for developer", function() {
	it("I wat to check text of login", function() {
		var ele =element(by.id('dp-hdr-login-link'))

 ele.click();

	})
	
	
	 
})


describe("Login Page", function() {
 
	
	
	it("Log in user name and password", function() {
		
		browser.sleep(120000)
element(by.id("username")).sendKeys("quickitdotnet@gmail.com")

element(by.id("password")).sendKeys("Quick@123")
element(by.id("submitButton")).click();

	})
})


describe("After Login Page", function() {
 
	
	
	it("After login", function() {
		
		browser.sleep(120000)
element(by.id("username")).sendKeys("quickitdotnet@gmail.com")

element(by.id("password")).sendKeys("Quick@123")
element(by.id("submitButton")).click();

	})
})