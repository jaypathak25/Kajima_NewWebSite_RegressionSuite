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
  "duration": 12734713600,
  "status": "passed"
});
formatter.match({
  "location": "Basket_SD.User_navigate_to_homepage_and_Login$()"
});
formatter.result({
  "duration": 586876200,
  "status": "passed"
});
formatter.match({
  "location": "Basket_SD.select_Basket_link_available_on_the_HomePage()"
});
formatter.result({
  "duration": 15064784200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text() \u003d \u0027Basket\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49334}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 52e1440925537991af2a7f7ad9e41c77\n*** Element info: {Using\u003dxpath, value\u003d//a[text() \u003d \u0027Basket\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.slectBasketLink(HomePage.java:307)\r\n\tat kajima.newnhswebsite.stepDefinition.Basket_SD.select_Basket_link_available_on_the_HomePage(Basket_SD.java:44)\r\n\tat ✽.Then Select Basket link available on the HomePage(Basket.feature:10)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 12113125500,
  "status": "passed"
});
formatter.match({
  "location": "Basket_SD.User_navigate_to_homepage_and_Login$()"
});
formatter.result({
  "duration": 1251698600,
  "status": "passed"
});
formatter.match({
  "location": "Basket_SD.select_Basket_link_available_on_the_HomePage()"
});
formatter.result({
  "duration": 10467238400,
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
  "duration": 10404955100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 831576100,
  "status": "passed"
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
  "duration": 11815672700,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "duration": 779857300,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_search_the_properties_Rooms_from_the_home_page_and_navigate_to_search_result_page()"
});
formatter.result({
  "duration": 7870742500,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_the_booking_widget()"
});
formatter.result({
  "duration": 373222800,
  "error_message": "java.lang.AssertionError: expected [Add rooms to start your booking.] but found [To book, see room price and availability please register for FREE now.]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat kajima.newnhswebsite.pom_pages.BookingWidget.verifyEmptyBookingWidget(BookingWidget.java:61)\r\n\tat kajima.newnhswebsite.stepDefinition.BookingWidget_SD.user_verifies_the_booking_widget(BookingWidget_SD.java:52)\r\n\tat ✽.And User verifies the booking widget(BookingWidget.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BookingWidget_SD.user_add_the_booking_to_the_booking_widget()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Booking widget - Clear all the added booking",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---clear-all-the-added-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User verifies the booking added to the widget",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click the Clear all link and verify that Booking widget cleared off successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_the_booking_added_to_the_widget()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_click_the_Clear_all_link_and_verify_that_Booking_widget_cleared_off_successfully()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 12036407000,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "duration": 1020352400,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_search_the_properties_Rooms_from_the_home_page_and_navigate_to_search_result_page()"
});
formatter.result({
  "duration": 7454931400,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_the_booking_widget()"
});
formatter.result({
  "duration": 2922775000,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_add_the_booking_to_the_booking_widget()"
});
formatter.result({
  "duration": 1200796600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Booking widget - Click remove next to added rooms in the booking widget",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---click-remove-next-to-added-rooms-in-the-booking-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User click the remove button displays next to Room name",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user verifies that room has been removed successfully",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_click_the_remove_button_displays_next_to_Room_name()"
});
formatter.result({
  "duration": 6613099000,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_that_room_has_been_removed_successfully()"
});
formatter.result({
  "duration": 97972200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 829133700,
  "status": "passed"
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
  "duration": 11912131600,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "duration": 563030200,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_search_the_properties_Rooms_from_the_home_page_and_navigate_to_search_result_page()"
});
formatter.result({
  "duration": 7876863100,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_the_booking_widget()"
});
formatter.result({
  "duration": 568339700,
  "error_message": "java.lang.AssertionError: expected [Add rooms to start your booking.] but found [To book, see room price and availability please register for FREE now.]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat kajima.newnhswebsite.pom_pages.BookingWidget.verifyEmptyBookingWidget(BookingWidget.java:61)\r\n\tat kajima.newnhswebsite.stepDefinition.BookingWidget_SD.user_verifies_the_booking_widget(BookingWidget_SD.java:52)\r\n\tat ✽.And User verifies the booking widget(BookingWidget.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BookingWidget_SD.user_add_the_booking_to_the_booking_widget()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Booking widget - verify Your saved properties section on the screen",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---verify-your-saved-properties-section-on-the-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "verify Your saved properties section on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.verify_Your_saved_properties_section_on_the_screen()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 12906891300,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "duration": 602745900,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_search_the_properties_Rooms_from_the_home_page_and_navigate_to_search_result_page()"
});
formatter.result({
  "duration": 7534440500,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_the_booking_widget()"
});
formatter.result({
  "duration": 1167150900,
  "error_message": "java.lang.AssertionError: expected [Add rooms to start your booking.] but found [To book, see room price and availability please register for FREE now.]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat kajima.newnhswebsite.pom_pages.BookingWidget.verifyEmptyBookingWidget(BookingWidget.java:61)\r\n\tat kajima.newnhswebsite.stepDefinition.BookingWidget_SD.user_verifies_the_booking_widget(BookingWidget_SD.java:52)\r\n\tat ✽.And User verifies the booking widget(BookingWidget.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BookingWidget_SD.user_add_the_booking_to_the_booking_widget()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "Booking widget - verify Your saved rooms section on the screen",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---verify-your-saved-rooms-section-on-the-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "verify Your saved rooms section on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.verify_Your_saved_rooms_section_on_the_screen()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 13311420900,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "duration": 1010439600,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_search_the_properties_Rooms_from_the_home_page_and_navigate_to_search_result_page()"
});
formatter.result({
  "duration": 7559238500,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_the_booking_widget()"
});
formatter.result({
  "duration": 2641233000,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.user_add_the_booking_to_the_booking_widget()"
});
formatter.result({
  "duration": 1432722800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Booking widget - Remove all saved properties/Rooms from the favourite widgets",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---remove-all-saved-properties/rooms-from-the-favourite-widgets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User verify the Favourite widget and remove the saved properties/rooms",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User verifies the favourite widgets again",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.User_verify_the_Favourite_widget_and_remove_the_saved_propertiesrooms()"
});
formatter.result({
  "duration": 10849034300,
  "status": "passed"
});
formatter.match({
  "location": "BookingWidget_SD.User_verifies_the_favourite_widgets_again()"
});
formatter.result({
  "duration": 10125115800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 867319600,
  "status": "passed"
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
formatter.result({
  "duration": 15902687400,
  "status": "passed"
});
formatter.match({
  "location": "HelpAndContactUs_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 16080800,
  "status": "passed"
});
formatter.match({
  "location": "HelpAndContactUs_SD.user_clicks_on_Help_link_displays_on_the_home_page()"
});
formatter.result({
  "duration": 378284500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Help Page - Click Contact Us link and Send a query",
  "description": "",
  "id": "help-and-contact-us-scenarios;help-page---click-contact-us-link-and-send-a-query;;2",
  "type": "scenario",
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
  "name": "User enters \"AUTO\"\"AUTO@TEST.COM\"\"07459615019\"\"This is Automated Message\" and click Submit",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
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
formatter.match({
  "location": "HelpAndContactUs_SD.user_click_on_Contact_Us_page_and_navigate_to_Query_form_screen()"
});
formatter.result({
  "duration": 5123885300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text() \u003d \u0027Contact Us\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49682}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: a5dba900a741aa1e5f89569e092bd3de\n*** Element info: {Using\u003dxpath, value\u003d//*[text() \u003d \u0027Contact Us\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.HelpAndContactUs.valContactUsScrn(HelpAndContactUs.java:87)\r\n\tat kajima.newnhswebsite.stepDefinition.HelpAndContactUs_SD.user_click_on_Contact_Us_page_and_navigate_to_Query_form_screen(HelpAndContactUs_SD.java:68)\r\n\tat ✽.Then User verify help screen and click on Contact Us page and navigate to Query form screen(HelpAndContactUs.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HelpAndContactUs_SD.user_perform_the_basic_validation_for_the_available_text_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTO",
      "offset": 13
    },
    {
      "val": "AUTO@TEST.COM",
      "offset": 19
    },
    {
      "val": "07459615019",
      "offset": 34
    },
    {
      "val": "This is Automated Message",
      "offset": 47
    }
  ],
  "location": "HelpAndContactUs_SD.user_enters_and_click_Submit(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HelpAndContactUs_SD.user_opens_the_Mail_trap_to_check_that_Query_has_been_recieved()"
});
formatter.result({
  "status": "skipped"
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
formatter.result({
  "duration": 14161460600,
  "status": "passed"
});
formatter.match({
  "location": "HelpAndContactUs_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 14435400,
  "status": "passed"
});
formatter.match({
  "location": "HelpAndContactUs_SD.user_clicks_on_Help_link_displays_on_the_home_page()"
});
formatter.result({
  "duration": 413104500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Contact Us Page - Click FAQ \u0026 Help Centre link",
  "description": "",
  "id": "help-and-contact-us-scenarios;contact-us-page---click-faq-\u0026-help-centre-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Navigate to Enquiry form page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on FAQ \u0026 Help Centre link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HelpAndContactUs_SD.navigate_to_Enquiry_form_page()"
});
formatter.result({
  "duration": 340138800,
  "status": "passed"
});
formatter.match({
  "location": "HelpAndContactUs_SD.click_on_FAQ_Help_Centre_link()"
});
formatter.result({
  "duration": 395721600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 792738700,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author : Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: New NHS website  - Non Logged In - Home Page regression"
    }
  ],
  "line": 3,
  "name": "Home Page screen scenarios",
  "description": "",
  "id": "home-page-screen-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to check/select all the Weblements like"
    },
    {
      "line": 6,
      "value": "#links, images , buttons , Drop downs, radio buttons and text fields available on home page and able to perform search"
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
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 17058851500,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 12563500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "HomePage - To ensure links/images are responding successfully and none of them are broken",
  "description": "",
  "id": "home-page-screen-scenarios;homepage---to-ensure-links/images-are-responding-successfully-and-none-of-them-are-broken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User check all the link \u0026 Image URLs, with http connection api and get the response",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.i_click_on_the_link_one_by_one()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 737001800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to check/select all the Weblements like"
    },
    {
      "line": 6,
      "value": "#links, images , buttons , Drop downs, radio buttons and text fields available on home page and able to perform search"
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
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 15097532100,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 11134900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Home Page - Click all the links/images, navigate to relevant screen and Navigate back to Home screen",
  "description": "",
  "id": "home-page-screen-scenarios;home-page---click-all-the-links/images,-navigate-to-relevant-screen-and-navigate-back-to-home-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User expect to click all the Home page links/images one by one User navigate back to Home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.i_expect_to_click_all_the_Home_page_links_and_images_one_by_one()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 721113500,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to check/select all the Weblements like"
    },
    {
      "line": 6,
      "value": "#links, images , buttons , Drop downs, radio buttons and text fields available on home page and able to perform search"
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
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 14693432600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 11941700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Home Page - Search results by selecting only different Clinical and Non Clinical Room Types",
  "description": "",
  "id": "home-page-screen-scenarios;home-page---search-results-by-selecting-only-different-clinical-and-non-clinical-room-types",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user expect to see the first search field as a dropdown labelled as “Select room type”",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User Clicks on \u0027Select Room Types\u0027 field to ensure that it is displaying 2x4 grid of the rooms types",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User expect the order to be in Row1 \u0026 Row2 as per the acceptance Criteria",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User clicks on a single room type and click apply to ensure that pop up is closed and the name of the room selected in the dropdown field",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User clicks again on \u0027Select Room Types\u0027 field to ensure that it is displaying 2x4 grid of the rooms types",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "clicks on two or more room types and ensure that the number of rooms selected to show in the dropdown fields",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click Find a Room button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User navigates to result screen and verify the search results",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.user_expect_to_see_the_first_search_field_as_a_dropdown_labelled_as_Select_room_type()"
});
formatter.result({
  "duration": 42275100,
  "error_message": "java.lang.AssertionError: expected [Room Types] but found [Select room type]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.verifySearchPanel_RoomTypes_hp(HomePage.java:142)\r\n\tat kajima.newnhswebsite.stepDefinition.HomePage_SD.user_expect_to_see_the_first_search_field_as_a_dropdown_labelled_as_Select_room_type(HomePage_SD.java:63)\r\n\tat ✽.Then user expect to see the first search field as a dropdown labelled as “Select room type”(HomePage.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage_SD.user_Clicks_on_Select_Room_Types_field_to_ensure_that_it_is_displaying_x_grid_of_the_rooms_types()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_SD.user_expect_the_order_to_be_in_Row_Row_as_per_the_acceptance_Criteria()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_SD.user_clicks_on_a_single_room_type_and_ensure_that_pop_up_is_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_SD.user_clicks_again_on_Select_Room_Types_field_to_ensure_that_it_is_displaying_x_grid_of_the_rooms_types()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_SD.clicks_on_two_or_more_room_types()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_SD.click_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_SD.user_navigates_to_result_screen_and_verify_the_search_results()"
});
formatter.result({
  "status": "skipped"
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
      "value": "#User Story : As a user i want to be able to check/select all the Weblements like"
    },
    {
      "line": 6,
      "value": "#links, images , buttons , Drop downs, radio buttons and text fields available on home page and able to perform search"
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
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 14772709800,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 12106900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Home Page - Search results by selecting only Location criteria",
  "description": "",
  "id": "home-page-screen-scenarios;home-page---search-results-by-selecting-only-location-criteria",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User expect to see the Second search field as a free Text field labelled as \u0027Location\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User clicks on \u0027Location\u0027 field and able to enter Postcode, location or propertyname",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User expect a dropdown to appear displaying upto \u00275\u0027 matched results and allow user to select",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Select Find a Room button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User navigates to result screen and verify the search result",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.user_expect_to_see_the_Second_search_field_as_a_free_Text_field_labelled_as()"
});
formatter.result({
  "duration": 26753900,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.user_is_able_to_enter_Postcode_location_or_propertyname()"
});
formatter.result({
  "duration": 1193602500,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.user_expect_a_dropdown_to_appear_displaying_upto_matched_results_and_allow_user_to_select()"
});
formatter.result({
  "duration": 5248840800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(.,\u0027Orpington Health \u0026 Wellbeing Centre, Orpington\u0027)]\"}\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49830}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 03075ef16511f7f22d29d96219c9687c\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(.,\u0027Orpington Health \u0026 Wellbeing Centre, Orpington\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.selectDropDownOpn(HomePage.java:199)\r\n\tat kajima.newnhswebsite.stepDefinition.HomePage_SD.user_expect_a_dropdown_to_appear_displaying_upto_matched_results_and_allow_user_to_select(HomePage_SD.java:116)\r\n\tat ✽.And User expect a dropdown to appear displaying upto \u00275\u0027 matched results and allow user to select(HomePage.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage_SD.Select_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_SD.user_navigates_to_result_screen_and_verify_the_search_result()"
});
formatter.result({
  "status": "skipped"
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
      "value": "#User Story : As a user i want to be able to check/select all the Weblements like"
    },
    {
      "line": 6,
      "value": "#links, images , buttons , Drop downs, radio buttons and text fields available on home page and able to perform search"
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
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 17702212300,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 10385300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Home Page - Search results by not selecting any search criteria and click Find a Room button",
  "description": "",
  "id": "home-page-screen-scenarios;home-page---search-results-by-not-selecting-any-search-criteria-and-click-find-a-room-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Click Find a Room button without entering Room type or Location",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User navigates to search result screen and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.click_Find_a_Room_button_without_entereing_Room_type_or_Location()"
});
formatter.result({
  "duration": 1247886000,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.user_navigates_to_search_result_screen_and_verify_the_result()"
});
formatter.result({
  "duration": 6068122600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 894524400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to check/select all the Weblements like"
    },
    {
      "line": 6,
      "value": "#links, images , buttons , Drop downs, radio buttons and text fields available on home page and able to perform search"
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
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 17020601600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 10444100,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Home Page - Search results by selecting both Room types and Location and click Find a Room button",
  "description": "",
  "id": "home-page-screen-scenarios;home-page---search-results-by-selecting-both-room-types-and-location-and-click-find-a-room-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "User selects Room type and Location and click find a Room button",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User navigates to result screen and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.user_selects_Room_type_and_Location()"
});
formatter.result({
  "duration": 6770318600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(.,\u0027Orpington Health \u0026 Wellbeing Centre, Orpington\u0027)]\"}\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49907}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 5dfd31539061d7da5cf6cea00b82ffb8\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(.,\u0027Orpington Health \u0026 Wellbeing Centre, Orpington\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.selectDropDownOpn(HomePage.java:199)\r\n\tat kajima.newnhswebsite.stepDefinition.HomePage_SD.user_selects_Room_type_and_Location(HomePage_SD.java:150)\r\n\tat ✽.Then User selects Room type and Location and click find a Room button(HomePage.feature:58)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage_SD.User_navigates_to_result_screen_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("MyAccount.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author : Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: New NHS website  - Logged In - My Accounts regression"
    }
  ],
  "line": 3,
  "name": "My Accounts scenarios",
  "description": "",
  "id": "my-accounts-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a Logged in user i should be able to select all the options from the My Accounts dropdown and navigate to relevant screens"
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
  "name": "User navigate to the homepage and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select My Accounts drop down available on the HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 16215063800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "duration": 500174800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "duration": 5059738800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@class \u003d \u0027header__nav-item\u0027]//div[@class \u003d \u0027dropdown\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49945}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 2e4135e2543501d1361c97605d11d3ed\n*** Element info: {Using\u003dxpath, value\u003d//li[@class \u003d \u0027header__nav-item\u0027]//div[@class \u003d \u0027dropdown\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.verifyMyAccDropDown(HomePage.java:230)\r\n\tat kajima.newnhswebsite.stepDefinition.MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage(MyAccount_SD.java:52)\r\n\tat ✽.Then Select My Accounts drop down available on the HomePage(MyAccount.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Logged In User -  Select My accounts dropdown and validate the list of options available",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user----select-my-accounts-dropdown-and-validate-the-list-of-options-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "verify all the options available in the drop down list",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.verify_all_the_options_available_in_the_drop_down_list()"
});
formatter.result({
  "status": "skipped"
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
      "value": "#User Story : As a Logged in user i should be able to select all the options from the My Accounts dropdown and navigate to relevant screens"
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
  "name": "User navigate to the homepage and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select My Accounts drop down available on the HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 16957473700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "duration": 1179657900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "duration": 38450200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Logged In User -  Select All the list of options available in My accounts drop down",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user----select-all-the-list-of-options-available-in-my-accounts-drop-down",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Select all the options available in the drop down list one by one and validate the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.Select_all_the_options_available_in_the_drop_down_list_one_by_one_and_validate_the_screen()"
});
formatter.result({
  "duration": 52624222500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 894040800,
  "status": "passed"
});
formatter.uri("SearchResultPage.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: New NHS website  - Search Result Page Regression"
    }
  ],
  "line": 4,
  "name": "Verify all the search results and navigate through all the available options",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 14469810300,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 7538600,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 32909899500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 16,
      "value": "#@Test1"
    },
    {
      "line": 17,
      "value": "#Scenario: Search Result Page - To ensure links/images are responding successfully and none of them are broken"
    },
    {
      "line": 18,
      "value": "#Then User check all the link \u0026 Image URLs, with http connection api and get the response"
    },
    {
      "line": 19,
      "value": "#And user quit the browser"
    },
    {
      "line": 21,
      "value": "#@Test2"
    },
    {
      "line": 22,
      "value": "#Scenario: Search Result Page - Click all the links/images, navigate to relevant screen and then Navigate back to previous screen"
    },
    {
      "line": 23,
      "value": "#Then User expect to click all the Search Results page links/images one by one and click back"
    },
    {
      "line": 24,
      "value": "#And user quit the browser"
    }
  ],
  "line": 27,
  "name": "Non Logged in user  - Search Result Page - Click Register Now button on your booking widget",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user----search-result-page---click-register-now-button-on-your-booking-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User selects Register Now orange button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User navigates to New Register screens",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.user_selects_Register_Now_orange_button()"
});
formatter.result({
  "duration": 1144582300,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.user_navigates_to_New_Register_screens()"
});
formatter.result({
  "duration": 37144700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 877718800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 27805125100,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 10921100,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 32982893000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Non Logged in user - Search Result Page - Select/DeSelect Map view",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---select/deselect-map-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User verify that the Map view option is available",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Switch on the Map view",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User verify Map view screen",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Switch off the Map view and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.user_verify_that_the_Map_view_option_is_available()"
});
formatter.result({
  "duration": 166227200,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.user_Switch_on_the_Map_view()"
});
formatter.result({
  "duration": 400036900,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.user_verify_Map_view_screen()"
});
formatter.result({
  "duration": 32979800,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.user_Switch_off_the_Map_view_and_verify()"
});
formatter.result({
  "duration": 5849346000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 835358300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 29934066000,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 7529800,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 32858336900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Non Logged in user - Search Result Page - Click Add to Booking button and verify",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---click-add-to-booking-button-and-verify",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User verify that the Add to Booking button is present",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Clicks Add to booking button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User verify that Pop up appears with title YOUR BOOKING",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User verify that Pop up appears with REGISTER and LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User close the Pop Up to navigate back to search results screen",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.user_verify_that_the_Add_to_Booking_button_is_present()"
});
formatter.result({
  "duration": 3067441700,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.user_Clicks_Add_to_booking_button()"
});
formatter.result({
  "duration": 6554546700,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_verify_that_Pop_up_appears_with_title_YOUR_BOOKING()"
});
formatter.result({
  "duration": 84288500,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_verify_that_Pop_up_appears_with_REGISTER_and_LOGIN_button()"
});
formatter.result({
  "duration": 64248500,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_close_the_Pop_Up_to_navigate_back_to_search_results_screen()"
});
formatter.result({
  "duration": 404670500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 850609100,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 33426201400,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 7977000,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 32897192700,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Non Logged in user - Search Result Page - Click Add to Booking button and click REGISTER",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---click-add-to-booking-button-and-click-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User verify that the Add to Booking button is available",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Clicks on Add to booking button",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User Clicks on REGISTER button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.User_verify_that_the_Add_to_Booking_button_is_available()"
});
formatter.result({
  "duration": 3066872700,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.Clicks_on_Add_to_booking_button()"
});
formatter.result({
  "duration": 3592533700,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_Clicks_on_REGISTER_Button()"
});
formatter.result({
  "duration": 651493900,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca class\u003d\"button button--primary\" href\u003d\"/users/sign_up\"\u003e...\u003c/a\u003e is not clickable at point (1273, 44). Other element would receive the click: \u003cdiv class\u003d\"ReactModal__Overlay ReactModal__Overlay--after-open modal__overlay\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50306}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: e4a09b6ba87c9a5f7a01f1425efaceeb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.GeneratedMethodAccessor7.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.SearchResultPage.clickRegBtnOnPopUp(SearchResultPage.java:228)\r\n\tat kajima.newnhswebsite.stepDefinition.SearchResultPage_SD.User_Clicks_on_REGISTER_Button(SearchResultPage_SD.java:164)\r\n\tat ✽.And User Clicks on REGISTER button(SearchResultPage.feature:53)\r\n",
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
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 30782998400,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 16099000,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 32907186900,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Non Logged in user - Search Result Page - Click Add to Booking button and click LOGIN",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---click-add-to-booking-button-and-click-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "Verify that the Add to Booking button is available",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User Clicks on Add to booking button",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User Clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.Verify_that_Add_to_Booking_button_is_available()"
});
formatter.result({
  "duration": 3056861200,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_clicks_on_Add_to_booking_button()"
});
formatter.result({
  "duration": 6498989800,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_Clicks_on_LOGIN_Button()"
});
formatter.result({
  "duration": 83838100,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca class\u003d\"button header__button--login\" href\u003d\"/users/sign_in\"\u003e...\u003c/a\u003e is not clickable at point (1133, 44). Other element would receive the click: \u003cdiv class\u003d\"ReactModal__Overlay ReactModal__Overlay--after-open modal__overlay\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50371}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: a9d7a2e2497d4abeeb70deb99f31fed7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.GeneratedMethodAccessor7.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.SearchResultPage.clickLogBtnOnPopUp(SearchResultPage.java:232)\r\n\tat kajima.newnhswebsite.stepDefinition.SearchResultPage_SD.User_Clicks_on_LOGIN_Button(SearchResultPage_SD.java:185)\r\n\tat ✽.And User Clicks on LOGIN button(SearchResultPage.feature:60)\r\n",
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
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 17144316400,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 8674500,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 36698050500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50457}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 608d6e362154d0784b2b7988c6585555\n*** Element info: {Using\u003dxpath, value\u003d//button[@class \u003d \u0027button button--secondary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.submit(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.clkFindRoomBtn(HomePage.java:177)\r\n\tat kajima.newnhswebsite.stepDefinition.SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button(SearchResultPage_SD.java:53)\r\n\tat ✽.Then User enters the search criteria and clicks on Find a Room button(SearchResultPage.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 64,
  "name": "Non Logged in user - Search Result Page - verify Sorting filter",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---verify-sorting-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "verify that the default sorting selected is with distance when search by property name",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User ensure that Property name heading displayed with distance in miles",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User clicks on Homepage Image and navigate back to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "clicks on Find a Room button and navigate to search result screen",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "verify that the default sorting selected is by property name in ascending alphabatical order",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "User selects the Sorting drop down and selects the option by property name in ascending alphabatical order",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.verify_that_the_default_sorting_selected_is_with_distance_when_search_by_property_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.user_ensure_that_Property_name_heading_displayed_with_distance_in_miles()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.user_clicks_on_Homepage_Image_and_navigate_back_to_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.clicks_on_Find_a_Room_button_and_navigate_to_search_result_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.verify_that_the_default_sorting_selected_is_by_property_name_in_ascending_alphabatical_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.user_selects_the_Sorting_drop_down_and_selects_the_option_by_property_name_in_ascending_alphabatical_order()"
});
formatter.result({
  "status": "skipped"
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
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 13607268900,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 9606300,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 32938714700,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Non Logged in user - Search Result Page - verify Hide/show rooms links and click",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---verify-hide/show-rooms-links-and-click",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@Test9"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "User verifies the default Hide rooms options",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "User selects the Hide rooms link and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User verifies the show rooms option on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "User selects the show rooms link and verify the result",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.User_verifies_the_default_Hide_rooms_options()"
});
formatter.result({
  "duration": 5059097900,
  "error_message": "java.lang.AssertionError: ERROR : Default hiderooms option is not visible expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat kajima.newnhswebsite.pom_pages.SearchResultPage.verifyDefaultHideRoomsLinks(SearchResultPage.java:257)\r\n\tat kajima.newnhswebsite.stepDefinition.SearchResultPage_SD.User_verifies_the_default_Hide_rooms_options(SearchResultPage_SD.java:224)\r\n\tat ✽.Then User verifies the default Hide rooms options(SearchResultPage.feature:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_selects_the_Hide_rooms_link_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.User_verifies_the_show_rooms_option_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.User_selects_the_show_rooms_link_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
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
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 11899841100,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 7300100,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 32859228400,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Non Logged in user - Search Result Page - Click Property Name link",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---click-property-name-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 81,
      "name": "@Test10"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "User clicks the property name link on the search result page",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "User verifies the property details page",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User navigate back to search result page",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.User_clicks_the_property_name_link_on_the_search_result_page()"
});
formatter.result({
  "duration": 3226263400,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50576}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: a5432330169f905d10668aa2ace9f6ce\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat kajima.newnhswebsite.pom_pages.SearchResultPage.clickPropNameLinks(SearchResultPage.java:308)\r\n\tat kajima.newnhswebsite.stepDefinition.SearchResultPage_SD.User_clicks_the_property_name_link_on_the_search_result_page(SearchResultPage_SD.java:252)\r\n\tat ✽.Then User clicks the property name link on the search result page(SearchResultPage.feature:83)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_verifies_the_property_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.User_navigate_back_to_search_result_page()"
});
formatter.result({
  "status": "skipped"
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
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 12387676800,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 6406800,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 32943925100,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Non Logged in user - Search Result Page - Click Room Name link",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---click-room-name-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@Test11"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "User clicks the Room name link on the search result page",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User verifies the Room details page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User navigate back to result page",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.User_clicks_the_Room_name_link_on_the_search_result_page()"
});
formatter.result({
  "duration": 5133658100,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50638}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 348f2a172878959b534d9b00824ee830\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat kajima.newnhswebsite.pom_pages.SearchResultPage.clickRoomNameLinks(SearchResultPage.java:327)\r\n\tat kajima.newnhswebsite.stepDefinition.SearchResultPage_SD.User_clicks_the_Room_name_link_on_the_search_result_page(SearchResultPage_SD.java:269)\r\n\tat ✽.Then User clicks the Room name link on the search result page(SearchResultPage.feature:90)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_verifies_the_Room_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.User_navigate_back_to_result_page()"
});
formatter.result({
  "status": "skipped"
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
      "line": 6,
      "value": "#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc"
    },
    {
      "line": 7,
      "value": "#also i should be able to apply different filters to refine my search ."
    },
    {
      "line": 8,
      "value": "#i should be able to toggle my views"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the search criteria and clicks on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 12401834900,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 6846600,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 33021566700,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Non Logged in user - Search Result Page - Click Login to view pricing link",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---click-login-to-view-pricing-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@Test12"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "User clicks the Login to view pricing link on the search result page",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "User verifies the Login page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "User navigate back to search result page",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.User_clicks_the_Login_to_view_pricing_link_on_the_search_result_page()"
});
formatter.result({
  "duration": 6405082800,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50692}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: ec2b0fbda496342235deb614100f7d33\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat kajima.newnhswebsite.pom_pages.SearchResultPage.clickViewPriceLinks(SearchResultPage.java:345)\r\n\tat kajima.newnhswebsite.stepDefinition.SearchResultPage_SD.User_clicks_the_Login_to_view_pricing_link_on_the_search_result_page(SearchResultPage_SD.java:287)\r\n\tat ✽.Then User clicks the Login to view pricing link on the search result page(SearchResultPage.feature:97)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_verifies_the_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.User_navigate_back_to_search_result_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});