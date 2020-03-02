$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Basket.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author : Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: New NHS website  - Logged In - Basket screen regression"
    }
  ],
  "line": 3,
  "name": "Basket screen scenarios",
  "description": "",
  "id": "basket-screen-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a Logged in user i should be able to navigate to screen and perform different actions"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User navigate to homepage and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select Basket link available on the HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 20165638800,
  "status": "passed"
});
formatter.match({
  "location": "Basket_SD.User_navigate_to_homepage_and_Login$()"
});
formatter.result({
  "duration": 7442091100,
  "status": "passed"
});
formatter.match({
  "location": "Basket_SD.select_Basket_link_available_on_the_HomePage()"
});
formatter.result({
  "duration": 10492200000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Logged In User -  verify the option Back to browsing and select the link",
  "description": "",
  "id": "basket-screen-scenarios;logged-in-user----verify-the-option-back-to-browsing-and-select-the-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "verify the option Back to browsing and select the link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Basket_SD.verify_the_option_Back_to_browsing_and_select_the_link()"
});
formatter.result({
  "duration": 15355265200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[@class \u003d \u0027search-results__heading\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65171}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 20165626bef9b4cce124f8c4bfe9cbb8\n*** Element info: {Using\u003dxpath, value\u003d//h2[@class \u003d \u0027search-results__heading\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.SearchResultPage.verifySearchRsltPage(SearchResultPage.java:113)\r\n\tat kajima.newnhswebsite.stepDefinition.Basket_SD.verify_the_option_Back_to_browsing_and_select_the_link(Basket_SD.java:54)\r\n\tat ✽.Then verify the option Back to browsing and select the link(Basket.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a Logged in user i should be able to navigate to screen and perform different actions"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User navigate to homepage and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select Basket link available on the HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 21860376200,
  "status": "passed"
});
formatter.match({
  "location": "Basket_SD.User_navigate_to_homepage_and_Login$()"
});
formatter.result({
  "duration": 7572935000,
  "status": "passed"
});
formatter.match({
  "location": "Basket_SD.select_Basket_link_available_on_the_HomePage()"
});
formatter.result({
  "duration": 10626516800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Logged In User -  verify the option search for rooms and select the button",
  "description": "",
  "id": "basket-screen-scenarios;logged-in-user----verify-the-option-search-for-rooms-and-select-the-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "verify the option search for rooms and select the button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Basket_SD.verify_the_option_search_for_rooms_and_select_the_button()"
});
formatter.result({
  "duration": 5009536000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text() \u003d \u0027Search for rooms\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65222}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 0cd882393144ea8b191d6a99aad6e3dc\n*** Element info: {Using\u003dxpath, value\u003d//a[text() \u003d \u0027Search for rooms\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.Basket.clkSrchForRoomsButton(Basket.java:56)\r\n\tat kajima.newnhswebsite.stepDefinition.Basket_SD.verify_the_option_search_for_rooms_and_select_the_button(Basket_SD.java:62)\r\n\tat ✽.Then verify the option search for rooms and select the button(Basket.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("BookingWidget.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: New NHS website  - Booking widget scenarios"
    }
  ],
  "line": 3,
  "name": "Booking Widget scenarios",
  "description": "",
  "id": "booking-widget-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to add/Remove properties/rooms in the booking widget,Save/remove the favourite properties/Rooms,Clear booking etc"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage and Login as primary user",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User search the properties/Rooms from the home page and navigate to search result page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User verifies the booking widget",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User add the booking to the booking widget",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 18617759700,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "duration": 565156900,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.LoginPage.loginToApp(LoginPage.java:40)\r\n\tat kajima.newnhswebsite.stepDefinition.BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user(BookingWidget_SD.java:37)\r\n\tat ✽.Then User navigate to homepage and Login as primary user(BookingWidget.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BookingWidget_SD.user_search_the_properties_Rooms_from_the_home_page_and_navigate_to_search_result_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_the_booking_widget()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_add_the_booking_to_the_booking_widget()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Booking widget - Click Add new host link and Close Add new host Popup",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---click-add-new-host-link-and-close-add-new-host-popup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User selects the Add new host link",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And User clicks X on the pop up"
    }
  ],
  "line": 20,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("HelpAndContactUs.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author : Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: New NHS website  - Help and Contact Us Page Regression"
    }
  ],
  "line": 3,
  "name": "Help and Contact Us scenarios",
  "description": "",
  "id": "help-and-contact-us-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "#@Test1"
    },
    {
      "line": 15,
      "value": "#Scenario: Help Page - To ensure links/images are responding successfully and none of them are broken"
    },
    {
      "line": 16,
      "value": "#   And User check all the link \u0026 Image URLs, with http connection api and get the response"
    },
    {
      "line": 17,
      "value": "#  user quit the browser"
    }
  ],
  "line": 20,
  "name": "Help Page - Click Contact Us link and Send a query",
  "description": "",
  "id": "help-and-contact-us-scenarios;help-page---click-contact-us-link-and-send-a-query",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User verify help screen and click on Contact Us page and navigate to Query form screen",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User  perform the basic validation for the available text fields",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enters \"\u003cname\u003e\"\"\u003cEmail\u003e\"\"\u003cPhone\u003e\"\"\u003cMessage\u003e\" and click Submit",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User opens the Mail trap to check that Query has been recieved",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "help-and-contact-us-scenarios;help-page---click-contact-us-link-and-send-a-query;",
  "rows": [
    {
      "cells": [
        "name",
        "Email",
        "Phone",
        "Message"
      ],
      "line": 29,
      "id": "help-and-contact-us-scenarios;help-page---click-contact-us-link-and-send-a-query;;1"
    },
    {
      "cells": [
        "AUTO",
        "AUTO@TEST.COM",
        "07459615019",
        "This is Automated Message"
      ],
      "line": 30,
      "id": "help-and-contact-us-scenarios;help-page---click-contact-us-link-and-send-a-query;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i should be able to navigate to see Help Page and check all the available Frequently asked questions and thier related answers."
    },
    {
      "line": 6,
      "value": "#Also i should be able to navigate to Contact Us page and able to send my queries"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Help link displays on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
