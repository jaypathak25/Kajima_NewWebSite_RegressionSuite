$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 3,
      "value": "#Comment: New NHS website  - Home Page Regression"
    },
    {
      "line": 4,
      "value": "#User Story : As a user i want to be able to check/select all the Weblements like"
    },
    {
      "line": 5,
      "value": "#links, images , buttons , Drop downs, radio buttons and text fields available on home page and able to perform search"
    }
  ],
  "line": 6,
  "name": "Search Rooms/Properties from the Home Page and check all available elements",
  "description": "",
  "id": "search-rooms/properties-from-the-home-page-and-check-all-available-elements",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User opens browser and enters New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_SD.user_opens_browser_and_enters_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 17706777100,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 11271800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "HomePage - To ensure links/images are responding successfully and none of them are broken",
  "description": "",
  "id": "search-rooms/properties-from-the-home-page-and-check-all-available-elements;homepage---to-ensure-links/images-are-responding-successfully-and-none-of-them-are-broken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User check all the link \u0026 Image URLs, with http connection api and get the response",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.i_click_on_the_link_one_by_one()"
});
formatter.result({
  "duration": 4680658600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.User_closes_browser()"
});
formatter.result({
  "duration": 2293682900,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User opens browser and enters New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_SD.user_opens_browser_and_enters_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 11993594100,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 5480400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Home Page - Click all the links/images, navigate to relevant screen and Navigate back to Home screen",
  "description": "",
  "id": "search-rooms/properties-from-the-home-page-and-check-all-available-elements;home-page---click-all-the-links/images,-navigate-to-relevant-screen-and-navigate-back-to-home-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User expect to click all the Home page links/images one by one User navigate back to Home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.i_expect_to_click_all_the_Home_page_links_and_images_one_by_one()"
});
formatter.result({
  "duration": 14831131300,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.User_closes_browser()"
});
formatter.result({
  "duration": 830936000,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User opens browser and enters New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_SD.user_opens_browser_and_enters_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 14897571300,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 17444600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Home Page - Search results by selecting only different Clinical and Non Clinical Room Types",
  "description": "",
  "id": "search-rooms/properties-from-the-home-page-and-check-all-available-elements;home-page---search-results-by-selecting-only-different-clinical-and-non-clinical-room-types",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@HomePage3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user expect to see the first search field as a dropdown labelled as “Select room type”",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User Clicks on \u0027Select Room Types\u0027 field to ensure that it is displaying 2x4 grid of the rooms types",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User expect the order to be in Row-1 \u0026 Row-2 as per the acceptance Criteria",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User clicks on a single room type and click apply to ensure that pop up is closed and the name of the room selected in the dropdown field",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User clicks again on \u0027Select Room Types\u0027 field to ensure that it is displaying 2x4 grid of the rooms types",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "clicks on two or more room types and ensure that the number of rooms selected to show in the dropdown fields",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click Find a Room button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User navigates to result screen and verify the search results",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.user_expect_to_see_the_first_search_field_as_a_dropdown_labelled_as_Select_room_type()"
});
formatter.result({
  "duration": 67208400,
  "error_message": "java.lang.AssertionError: expected [Select room types] but found []\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.verifySearchPanel_RoomTypes_hp(HomePage.java:109)\r\n\tat kajima.newnhswebsite.stepDefinition.HomePage_SD.user_expect_to_see_the_first_search_field_as_a_dropdown_labelled_as_Select_room_type(HomePage_SD.java:59)\r\n\tat ✽.Then user expect to see the first search field as a dropdown labelled as “Select room type”(HomePage.feature:27)\r\n",
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
  "location": "HomePage_SD.User_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User opens browser and enters New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_SD.user_opens_browser_and_enters_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 16214349700,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 19310000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Home Page - Search results by selecting only Location criteria",
  "description": "",
  "id": "search-rooms/properties-from-the-home-page-and-check-all-available-elements;home-page---search-results-by-selecting-only-location-criteria",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@HomePage4"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User expect to see the Second search field as a free Text field labelled as \u0027Location\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User clicks on \u0027Location\u0027 field and able to enter Postcode, location or propertyname",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User expect a dropdown to appear displaying upto \u00275\u0027 matched results and allow user to select",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Select Find a Room button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User navigates to result screen and verify the search result",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.user_expect_to_see_the_Second_search_field_as_a_free_Text_field_labelled_as()"
});
formatter.result({
  "duration": 59192500,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.user_is_able_to_enter_Postcode_location_or_propertyname()"
});
formatter.result({
  "duration": 5168308100,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62567}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 9c2bf07feb20dc243e021ed9f75998c6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.clickSecondSearchField(HomePage.java:152)\r\n\tat kajima.newnhswebsite.stepDefinition.HomePage_SD.user_is_able_to_enter_Postcode_location_or_propertyname(HomePage_SD.java:107)\r\n\tat ✽.And User clicks on \u0027Location\u0027 field and able to enter Postcode, location or propertyname(HomePage.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage_SD.user_expect_a_dropdown_to_appear_displaying_upto_matched_results_and_allow_user_to_select()"
});
formatter.result({
  "status": "skipped"
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
  "location": "HomePage_SD.User_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User opens browser and enters New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_SD.user_opens_browser_and_enters_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 17473274000,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 12533400,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Home Page - Search results by not selecting any search criteria and click Find a Room button",
  "description": "",
  "id": "search-rooms/properties-from-the-home-page-and-check-all-available-elements;home-page---search-results-by-not-selecting-any-search-criteria-and-click-find-a-room-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@HomePage5"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Click Find a Room button without entering Room type or Location",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "User navigates to search result screen and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.click_Find_a_Room_button_without_entereing_Room_type_or_Location()"
});
formatter.result({
  "duration": 697549700,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.user_navigates_to_search_result_screen_and_verify_the_result()"
});
formatter.result({
  "duration": 1079697200,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.User_closes_browser()"
});
formatter.result({
  "duration": 749647200,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User opens browser and enters New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage on a desktop device",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_SD.user_opens_browser_and_enters_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "duration": 17644403600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_SD.i_have_gone_to_the_homepage_on_a_desktop_device()"
});
formatter.result({
  "duration": 20757100,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Home Page - Search results by selecting both Room types and Location and click Find a Room button",
  "description": "",
  "id": "search-rooms/properties-from-the-home-page-and-check-all-available-elements;home-page---search-results-by-selecting-both-room-types-and-location-and-click-find-a-room-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@HomePage6"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "User selects Room type and Location and click find a Room button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User navigates to result screen and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_SD.user_selects_Room_type_and_Location()"
});
formatter.result({
  "duration": 5231467100,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62642}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: ad157c434ca2e7d8cafa182029962ed0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.HomePage.clickFirstSearchField(HomePage.java:113)\r\n\tat kajima.newnhswebsite.stepDefinition.HomePage_SD.user_selects_Room_type_and_Location(HomePage_SD.java:143)\r\n\tat ✽.Then User selects Room type and Location and click find a Room button(HomePage.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage_SD.User_navigates_to_result_screen_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_SD.User_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("SearchResultsPage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Feature: List of scenarios."
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
  "name": "User opens browser and enters New NHS PreProd URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on \u0027Find a Room\u0027 button",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPage_SD.user_opens_browser_and_enters_New_NHS_PreProd_URL()"
});
formatter.result({
  "duration": 13004934600,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 31205500,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "duration": 778498000,
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
      "line": 20,
      "value": "# Then User check all the link \u0026 Image URLs, with http connection api and get the response"
    },
    {
      "line": 21,
      "value": "#Then User closes the browser"
    },
    {
      "line": 23,
      "value": "#@Test2"
    },
    {
      "line": 24,
      "value": "#Scenario: Search Result Page - Click all the links/images, navigate to relevant screen and then Navigate back to previous screen"
    },
    {
      "line": 27,
      "value": "# Then User expect to click all the Search Results page links/images one by one and click back"
    },
    {
      "line": 28,
      "value": "#Then User closes the browser"
    },
    {
      "line": 30,
      "value": "#@Test3"
    },
    {
      "line": 31,
      "value": "#Scenario: Non Logged in user  - Search Result Page - Click Register Now button on your booking widget"
    },
    {
      "line": 34,
      "value": "# Then User selects Register Now orange button"
    },
    {
      "line": 35,
      "value": "# And User navigates to New Register screens"
    },
    {
      "line": 36,
      "value": "# Then User closes the browser"
    },
    {
      "line": 38,
      "value": "#@Test4"
    },
    {
      "line": 39,
      "value": "#Scenario: Non Logged in user - Search Result Page - Select/DeSelect Map view"
    },
    {
      "line": 42,
      "value": "#   And User verify that the Map view option is available"
    },
    {
      "line": 43,
      "value": "#  Then User Switch on the Map view"
    },
    {
      "line": 44,
      "value": "# And User verify Map view screen"
    },
    {
      "line": 45,
      "value": "#Then User Switch off the Map view and verify"
    },
    {
      "line": 47,
      "value": "#@Test5"
    },
    {
      "line": 48,
      "value": "#Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and verify"
    },
    {
      "line": 51,
      "value": "#   And User verify that the Add to Booking button is present"
    },
    {
      "line": 52,
      "value": "#  Then User Clicks Add to booking button"
    },
    {
      "line": 53,
      "value": "# And User verify that Pop up appears with title YOUR BOOKING"
    },
    {
      "line": 54,
      "value": "# And User verify that Pop up appears with REGISTER and LOGIN button"
    },
    {
      "line": 55,
      "value": "# And User close the Pop Up to navigate back to search results screen"
    },
    {
      "line": 57,
      "value": "#@Test6"
    },
    {
      "line": 58,
      "value": "#Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and click REGISTER"
    },
    {
      "line": 61,
      "value": "#    And User verify that the Add to Booking button is available"
    },
    {
      "line": 62,
      "value": "#   Then Clicks on Add to booking button"
    },
    {
      "line": 63,
      "value": "#  And User Clicks on REGISTER Button"
    }
  ],
  "line": 67,
  "name": "Non Logged in user - Search Result Page - Click Add to Booking button and click LOGIN",
  "description": "",
  "id": "verify-all-the-search-results-and-navigate-through-all-the-available-options;non-logged-in-user---search-result-page---click-add-to-booking-button-and-click-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "Verify that the Add to Booking button is available",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on Add to booking button",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "User Clicks on LOGIN Button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_SD.Verify_that_Add_to_Booking_button_is_available()"
});
formatter.result({
  "duration": 8047202000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@data-testid \u003d \u0027addToBookingButton\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u002710.20.151.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62686}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: 564208cec37655282cdfb3e9cb5153c2\n*** Element info: {Using\u003dxpath, value\u003d//button[@data-testid \u003d \u0027addToBookingButton\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat kajima.newnhswebsite.pom_pages.SearchResultPage.verifyAddBookbtn(SearchResultPage.java:160)\r\n\tat kajima.newnhswebsite.stepDefinition.SearchResultPage_SD.Verify_that_Add_to_Booking_button_is_available(SearchResultPage_SD.java:159)\r\n\tat ✽.And Verify that the Add to Booking button is available(SearchResultsPage.feature:69)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchResultPage_SD.User_clicks_on_Add_to_booking_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_SD.User_Clicks_on_LOGIN_Button()"
});
formatter.result({
  "status": "skipped"
});
});