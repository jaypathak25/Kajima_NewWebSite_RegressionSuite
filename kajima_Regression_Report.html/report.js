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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Basket_SD.User_navigate_to_homepage_and_Login$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Basket_SD.select_Basket_link_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
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
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Basket_SD.User_navigate_to_homepage_and_Login$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Basket_SD.select_Basket_link_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Booking widget - verify message on the timeslot when no service and date selected",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---verify-message-on-the-timeslot-when-no-service-and-date-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User verifies the message on the timeslot when no service and date selected",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.User_verifies_the_message_on_the_timeslot_when_no_service_and_date_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 22,
  "name": "Booking widget - Clear all the added booking",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---clear-all-the-added-booking",
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
  "name": "User click the Clear all link and verify that Booking widget cleared off successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_click_the_Clear_all_link_and_verify_that_Booking_widget_cleared_off_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 27,
  "name": "Booking widget - Click remove next to added rooms in the booking widget",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---click-remove-next-to-added-rooms-in-the-booking-widget",
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
  "name": "User click the remove button displays next to Room name",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user verifies that room has been removed successfully",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_click_the_remove_button_displays_next_to_Room_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_verifies_that_room_has_been_removed_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 33,
  "name": "Booking widget - Click Add new host and verify Select host drop down",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---click-add-new-host-and-verify-select-host-drop-down",
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
  "name": "User click the Add new host link",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User closes the pop up by clicking X on the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user again click add new host link and enters all the mandatory fields and click Add host to booking button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User navigates back to Booking widget and verify the select host drop down",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_click_the_Add_new_host_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_closes_the_pop_up_by_clicking_X_on_the_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_enters_all_the_mandatory_fields_and_click_Add_host_to_booking_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigates_back_to_Booking_widget_and_verify_the_select_host_drop_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 42,
  "name": "Booking widget - Add non clinical room to the booking widget and verify the field",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---add-non-clinical-room-to-the-booking-widget-and-verify-the-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User added non clinical rooms to the booking widget and verify the fields",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User select the manatory fields like services, times, host and validate the availability",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_added_non_clinical_rooms_to_the_booking_widget_and_verify_the_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_select_the_manatory_fields_like_services_times_host_and_validate_the_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 49,
  "name": "Booking widget - Add clinical room to the booking widget and verify the field",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---add-clinical-room-to-the-booking-widget-and-verify-the-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User added clinical rooms to the booking widget and verify the fields",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "User select the manatory fields like services, timeslots, host and validate the availability",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_added_clinical_rooms_to_the_booking_widget_and_verify_the_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_select_the_manatory_fields_like_services_timeslots_host_and_validate_the_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 55,
  "name": "Booking widget - Add non clinical room to the booking widget and verify Services in the dropdown",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---add-non-clinical-room-to-the-booking-widget-and-verify-services-in-the-dropdown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "User added non clinical rooms,selects clinical service and verify the availability",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User added non clinical rooms,selects non clinical service and verify the availability",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_added_non_clinical_rooms_selects_clinical_service_and_verify_the_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_added_non_clinical_rooms_selects_non_clinical_service_and_verify_the_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 61,
  "name": "Booking widget - Add clinical room to the booking widget and verify Services in the dropdown",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---add-clinical-room-to-the-booking-widget-and-verify-services-in-the-dropdown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "User added clinical rooms,selects clinical service and verify the availability",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "User added clinical rooms and verify that non clinical services are disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_added_clinical_rooms_selects_clinical_service_and_verify_the_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_added_clinical_rooms_and_verify_that_non_clinical_services_are_disabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 67,
  "name": "Booking widget - Add Non clinical room, select non clinical service and verify adding clinical rooms message",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---add-non-clinical-room,-select-non-clinical-service-and-verify-adding-clinical-rooms-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@Test9"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User added non clinical rooms,selects non clinical service",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "User click add to booking button for clinical room and verify the message pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_added_non_clinical_rooms_selects_non_clinical_service()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_click_add_to_booking_button_for_clinical_room_and_verify_the_message_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.User_navigate_to_homepage_and_Login_as_primary_user()"
});
formatter.result({
  "status": "skipped"
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
  "line": 73,
  "name": "Booking widget - add mixture of clinical and non clinical rooms, verify limit and the finally verify availability",
  "description": "",
  "id": "booking-widget-scenarios;booking-widget---add-mixture-of-clinical-and-non-clinical-rooms,-verify-limit-and-the-finally-verify-availability",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@Test10"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "User added mixture of tota five clinical and non clinical rooms and verify the message when tried to add the sixth room",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "User added maximum upto five rooms, select ther mandatory fields, check availability and verify add to basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingWidget_SD.user_added_mixture_of_tota_five_clinical_and_non_clinical_rooms_and_verify_the_message_when_tried_to_add_the_sixth_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingWidget_SD.user_added_maximum_upto_five_rooms_select_ther_mandatory_fields_check_availability_and_verify_add_to_basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HelpAndContactUs_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HelpAndContactUs_SD.user_clicks_on_Help_link_displays_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HelpAndContactUs_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HelpAndContactUs_SD.user_clicks_on_Help_link_displays_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "HelpAndContactUs_SD.click_on_FAQ_Help_Centre_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Logged In User -  Select My accounts dropdown and validate the list of options available",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user----select-my-accounts-dropdown-and-validate-the-list-of-options-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "verify all the options available in the drop down list",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
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
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Logged In User -  Select All the list of options available in My accounts drop down",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user----select-all-the-list-of-options-available-in-my-accounts-drop-down",
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
  "line": 21,
  "name": "Select all the options available in the drop down list one by one and validate the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.Select_all_the_options_available_in_the_drop_down_list_one_by_one_and_validate_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Logged In User - Select \u0027Account\u0027 from My accounts drop down and click the ADD NEW button",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user---select-\u0027account\u0027-from-my-accounts-drop-down-and-click-the-add-new-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Select Account options available in the drop down list and verifies the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Select ADD NEW button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User verifies Add new payments screen",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.Select_Account_options_available_in_the_drop_down_list_and_verifies_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.Select_ADD_NEW_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_verifies_Add_new_payments_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Logged In User - Navigate to Account, click Add New button and click close",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user---navigate-to-account,-click-add-new-button-and-click-close",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Select Account in the drop down list and verifies the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Select ADD NEW button on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User close the New payments popup",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.Select_Account_in_the_drop_down_list_and_verifies_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.Select_ADD_NEW_button_on_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_close_the_New_payments_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "Logged In User - Add New payment method Pop up -  Verify Go back Link",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user---add-new-payment-method-pop-up----verify-go-back-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "Select Account in the drop down list",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Select ADD NEW button option",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User selects Register a payment card radio button and click Continue",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User selects Go back button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User selects Setup a direct debit radio button and click Continue",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User selects Go back button again",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.Select_Account_in_the_drop_down_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.Select_ADD_NEW_button_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_selects_Register_a_payment_card_radio_button_and_click_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_selects_Go_back_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_selects_Setup_a_direct_debit_radio_button_and_click_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_selects_Go_back_button_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 49,
  "name": "Logged In User - Add new payment popup and verify Register a payment card journey",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user---add-new-payment-popup-and-verify-register-a-payment-card-journey",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Select Account in the drop down list and select ADD NEW button option",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "User selects Register a payment card radio button and press continue button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.Select_Account_in_the_drop_down_list_and_select_ADD_NEW_button_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_selects_Register_a_payment_card_radio_button_and_press_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 55,
  "name": "Logged In User - Add new payment popup and verify setup a direct debit journey -  Organisation DD",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user---add-new-payment-popup-and-verify-setup-a-direct-debit-journey----organisation-dd",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "Select Account in the drop down list and select ADD NEW button",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User selects setup a direct debit radio button and press continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User enters the mandate name and select Organisation direct debit option",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "selects Terms and Condition Link",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.Select_Account_in_the_drop_down_list_and_select_ADD_NEW_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_selects_setup_a_direct_debit_radio_button_and_press_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_enters_the_mandate_name_and_select_Organisation_direct_debit_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.selects_Terms_and_Condition_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.Click_Continue_button()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_navigate_to_the_homepage_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_My_Accounts_drop_down_available_on_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 61,
      "value": "# And user quit the browser"
    }
  ],
  "line": 63,
  "name": "Logged In User - Add new payment popup and verify setup a direct debit journey -  Selected services DD",
  "description": "",
  "id": "my-accounts-scenarios;logged-in-user---add-new-payment-popup-and-verify-setup-a-direct-debit-journey----selected-services-dd",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "Navigate to accounts page and click Add new option",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User selects setup direct debit radio option and press continue",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User enters the mandate name and select required services from the list",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "select Terms and Condition Link displayed on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "select Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccount_SD.Navigate_to_accounts_page_and_click_Add_new_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_selects_setup_direct_debit_radio_button_and_press_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.User_enters_the_mandate_name_and_select_required_services_from_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.selects_Terms_and_Condition_Link_displayed_on_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccount_SD.select_Continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("RegisterNewUserForm.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author : Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: New NHS website  - Registration regression"
    }
  ],
  "line": 3,
  "name": "Registration scenarios",
  "description": "",
  "id": "registration-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to register new user for the new clients and for the xisting clients using the registration link"
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
  "name": "User have gone to the homepage on desktop",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the Register link",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.User_have_gone_to_the_homepage_on_desktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_clicks_on_the_Register_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Register - New user for the new client by adding large volume of services",
  "description": "",
  "id": "registration-scenarios;register---new-user-for-the-new-client-by-adding-large-volume-of-services",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#   Then User enters the user details and continue"
    },
    {
      "line": 18,
      "value": "#   Then User enters the company details and continue"
    },
    {
      "line": 19,
      "value": "#  Then User added the large volume of services on service details and click submit for approval button"
    }
  ],
  "line": 20,
  "name": "User validate the confirmation screen",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_validate_the_confirmation_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to register new user for the new clients and for the xisting clients using the registration link"
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
  "name": "User have gone to the homepage on desktop",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the Register link",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.User_have_gone_to_the_homepage_on_desktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_clicks_on_the_Register_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Register - New user for the new client",
  "description": "",
  "id": "registration-scenarios;register---new-user-for-the-new-client",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User fills the user details form by entering all the mandatory fields and continue",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User fills the company details form by entering new company details and continue",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User added the different services on service details and click submit for approval button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User validate the confirmation screen for newly created user",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_fills_the_user_details_form_by_entering_all_the_mandatory_fields_and_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_fills_the_company_details_form_by_entering_new_company_details_and_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_added_the_different_services_on_service_details_and_click_submit_for_approval_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_validate_the_confirmation_screen_for_newly_created_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to register new user for the new clients and for the xisting clients using the registration link"
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
  "name": "User have gone to the homepage on desktop",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the Register link",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.User_have_gone_to_the_homepage_on_desktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_clicks_on_the_Register_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Register - New user for the existing client",
  "description": "",
  "id": "registration-scenarios;register---new-user-for-the-existing-client",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Test2"
    }
  ]
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i want to be able to register new user for the new clients and for the xisting clients using the registration link"
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
  "name": "User have gone to the homepage on desktop",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the Register link",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.User_have_gone_to_the_homepage_on_desktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterNewUserForm_SD.user_clicks_on_the_Register_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "#   Then User completes the user details form by entering all the mandatory fields and continue"
    },
    {
      "line": 34,
      "value": "#  Then User selects the existing company and continue"
    },
    {
      "line": 35,
      "value": "#  Then User selects the different services on service details and click submit for approval button"
    },
    {
      "line": 36,
      "value": "#  Then User validate the confirmation screen for newly created user for the existing client"
    },
    {
      "line": 37,
      "value": "#  Then user quit the browser"
    }
  ],
  "line": 40,
  "name": "Register - New user for the existing client without selecting the services",
  "description": "",
  "id": "registration-scenarios;register---new-user-for-the-existing-client-without-selecting-the-services",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@Test3"
    }
  ]
});
formatter.uri("RoomDetails.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: New NHS website  - Room details Page Regression"
    }
  ],
  "line": 3,
  "name": "Room Details screen scenarios",
  "description": "",
  "id": "room-details-screen-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i should be able to navigate to Room details page and perform different actions like view gallery, click property link etc"
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
  "name": "User navigate to the homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RoomDetails_SD.User_navigate_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "From Search Result Page navigate to Room details page and verify screen",
  "description": "",
  "id": "room-details-screen-scenarios;from-search-result-page-navigate-to-room-details-page-and-verify-screen",
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
  "name": "User navigate to search result page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks Room name link",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user verifies Room details page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RoomDetails_SD.user_navigate_to_search_result_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RoomDetails_SD.user_clicks_Room_name_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RoomDetails_SD.user_verifies_Room_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i should be able to navigate to Room details page and perform different actions like view gallery, click property link etc"
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
  "name": "User navigate to the homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RoomDetails_SD.User_navigate_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "From Search Result Page navigate to Room details page and click property name link available on the screen",
  "description": "",
  "id": "room-details-screen-scenarios;from-search-result-page-navigate-to-room-details-page-and-click-property-name-link-available-on-the-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigate to search result page and clicks Room name link",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks property name link and verify the property page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RoomDetails_SD.User_navigate_to_search_result_page_and_clicks_Room_name_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RoomDetails_SD.user_clicks_property_name_link_and_verify_the_property_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#User Story : As a user i should be able to navigate to Room details page and perform different actions like view gallery, click property link etc"
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
  "name": "User navigate to the homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RoomDetails_SD.User_navigate_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "From Search Result Page navigate to Room details page and click view Image forward/Previous arrows",
  "description": "",
  "id": "room-details-screen-scenarios;from-search-result-page-navigate-to-room-details-page-and-click-view-image-forward/previous-arrows",
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
  "name": "User navigate to Room details page from search result screen",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks Forward/Previous view image arrows on gallery widget",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RoomDetails_SD.User_navigate_to_Room_details_page_from_search_result_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RoomDetails_SD.user_clicks_ForwardPrevious_view_image_arrows_on_gallery_widget()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("SearchFromHomePage.feature");
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
  "name": "Search Result page scenarios",
  "description": "",
  "id": "search-result-page-scenarios",
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#  Then User enters the search criteria and clicks on Find a Room button"
    },
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
      "value": "#    Then User check all the link \u0026 Image URLs, with http connection api and get the response"
    },
    {
      "line": 19,
      "value": "#   And user quit the browser"
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
      "value": "#   Then User expect to click all the Search Results page links/images one by one and click back"
    },
    {
      "line": 24,
      "value": "#  And user quit the browser"
    }
  ],
  "line": 27,
  "name": "Home Page - Search results by not selecting any search criteria and click Find a Room button",
  "description": "",
  "id": "search-result-page-scenarios;home-page---search-results-by-not-selecting-any-search-criteria-and-click-find-a-room-button",
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
  "name": "Click Find a Room button without entering Room type or Location",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User navigates to search result screen and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.click_Find_a_Room_button_without_entereing_Room_type_or_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_navigates_to_search_result_screen_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "Home Page - verify Search parameter room type and check different Clinical and Non Clinical Room Types",
  "description": "",
  "id": "search-result-page-scenarios;home-page---verify-search-parameter-room-type-and-check-different-clinical-and-non-clinical-room-types",
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
  "name": "user expect to see the first search field as a dropdown labelled as “Select room type”",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Clicks on \u0027Select Room Types\u0027 field to ensure that it is displaying 2x4 grid of the rooms types",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User expect the order to be in Row1 \u0026 Row2 as per the acceptance Criteria",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on a single room type and click apply to ensure that pop up is closed and the name of the room selected in the dropdown field",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User clicks again on \u0027Select Room Types\u0027 field to ensure that it is displaying 2x4 grid of the rooms types",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "clicks on two or more room types and ensure that the number of rooms selected to show in the dropdown fields",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click Find a Room button to navigates to result screen and verify the search results",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_expect_to_see_the_first_search_field_as_a_dropdown_labelled_as_Select_room_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_Clicks_on_Select_Room_Types_field_to_ensure_that_it_is_displaying_x_grid_of_the_rooms_types()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_expect_the_order_to_be_in_Row_Row_as_per_the_acceptance_Criteria()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_clicks_on_a_single_room_type_and_ensure_that_pop_up_is_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_clicks_again_on_Select_Room_Types_field_to_ensure_that_it_is_displaying_x_grid_of_the_rooms_types()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.clicks_on_two_or_more_room_types()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.click_Find_a_Room_button_to_navigates_to_result_screen_and_verify_the_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 44,
  "name": "Home Page - Search results by selecting Room Types - Non clinical",
  "description": "",
  "id": "search-result-page-scenarios;home-page---search-results-by-selecting-room-types---non-clinical",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "clicks on One or more Non clinical room types and ensure that the number of rooms selected to show in the dropdown fields",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click Find a Room button and navigates to result screen to verify the search results",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.clicks_on_One_or_more_Non_clinical_room_types_and_ensure_that_the_number_of_rooms_selected_to_show_in_the_dropdown_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.click_Find_a_Room_button_and_navigates_to_result_screen_to_verify_the_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 50,
  "name": "Home Page - Search results by selecting Room Types - clinical",
  "description": "",
  "id": "search-result-page-scenarios;home-page---search-results-by-selecting-room-types---clinical",
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
  "name": "clicks on One or more clinical room types and ensure that the number of rooms selected to show in the dropdown fields",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Click Find a Room button and verify the search results",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.clicks_on_One_or_more_clinical_room_types_and_ensure_that_the_number_of_rooms_selected_to_show_in_the_dropdown_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.Click_Find_a_Room_button_and_verify_the_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 56,
  "name": "Home Page - Search results by selecting only Location criteria",
  "description": "",
  "id": "search-result-page-scenarios;home-page---search-results-by-selecting-only-location-criteria",
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
  "line": 57,
  "name": "User expect to see the Second search field as a free Text field labelled as \u0027Location\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User clicks on \u0027Location\u0027 field and enter the location name",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "press Find a Room button and User navigates to result screen and verify the search result",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_expect_to_see_the_Second_search_field_as_a_free_Text_field_labelled_as1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.User_clicks_on_Location_field_and_enter_the_location_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.press_Find_a_Room_button_and_User_navigates_to_result_screen_and_verify_the_search_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 63,
  "name": "Home Page - Search results by entering only property name",
  "description": "",
  "id": "search-result-page-scenarios;home-page---search-results-by-entering-only-property-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "User clicks on \u0027Location\u0027 field and enter the property name",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User expect a dropdown to appear displaying upto \u00275\u0027 matched results and allow user to select2",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Select Find a Room button and User navigates to result screen and verify the result",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.User_clicks_on_Location_field_and_enter_the_property_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_expect_a_dropdown_to_appear_displaying_upto_matched_results_and_allow_user_to_select2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchFromHomePage_SD.Select_Find_a_Room_button_and_user_navigates_to_result_screen_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 70,
  "name": "Home Page - Search results by selecting both Room types and Location and click Find a Room button",
  "description": "",
  "id": "search-result-page-scenarios;home-page---search-results-by-selecting-both-room-types-and-location-and-click-find-a-room-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@Test9"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "User selects Room type and Location and click find a Room button and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_selects_Room_type_and_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 75,
  "name": "Home Page - Search results by selecting Room types which do not have any property in the DB",
  "description": "",
  "id": "search-result-page-scenarios;home-page---search-results-by-selecting-room-types-which-do-not-have-any-property-in-the-db",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@Test10"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "User selects Room type which has no result and click find a Room button and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.user_selects_Room_type_which_has_no_result_and_click_find_a_room_buttonm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 80,
  "name": "Home Page - Search results by entering random location or property name which do not have any property in the DB",
  "description": "",
  "id": "search-result-page-scenarios;home-page---search-results-by-entering-random-location-or-property-name-which-do-not-have-any-property-in-the-db",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@Test11"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "User enters random location or property name which has no result and click find a Room button and User navigates to result screen and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFromHomePage_SD.User_enters_random_location_or_property_name_which_has_no_result_and_click_find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("SearchResultPage_LoggedIn_User.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: New NHS website  - Logged in user search result screen"
    }
  ],
  "line": 3,
  "name": "Logged in users - Search Result page scenarios",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios",
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Logged in user - Search Result Page - Select/DeSelect Map view",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;logged-in-user---search-result-page---select/deselect-map-view",
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
  "name": "User verify that as a logged in user the Map view option is available",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Switch on the Map and verify Map view screen",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User turn off the Map view and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.user_verify_that_as_a_logged_in_user_the_Map_view_option_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.user_Switch_on_the_Map_and_verify_map_view_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.user_verify_Map_view_screen_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Logged in user - Search Result Page - verify Hide/show rooms links and click",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;logged-in-user---search-result-page---verify-hide/show-rooms-links-and-click",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User verifies the default Hide rooms options and selects the Hide rooms link and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User verifies the show rooms option on the page and selects the show rooms link and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_verifies_the_default_Hide_rooms_options_and_selects_the_Hide_rooms_link_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_verifies_the_show_rooms_option_on_the_page_and_selects_the_show_rooms_link_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Logged in user - Search Result Page - Click Property Name link",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;logged-in-user---search-result-page---click-property-name-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User clicks the property name link on the search result screen,verify the property details screen and navigate back to search screen",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_clicks_the_property_name_link_on_the_search_result_page_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Logged in user - Search Result Page - Click Room Name link",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;logged-in-user---search-result-page---click-room-name-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User clicks the Room name link on the search result screen,verify the Room details page and navigate back to result page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_clicks_the_Room_name_link_on_the_search_result_screen_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "Logged in user - Search Result Page - Click Load more link",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;logged-in-user---search-result-page---click-load-more-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User clicks the Load more Link on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_clicks_the_Load_more_Link_on_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 44,
  "name": "Booking widget - Click the Heart and save properties/Rooms to the favourite widgets and verify the widget",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;booking-widget---click-the-heart-and-save-properties/rooms-to-the-favourite-widgets-and-verify-the-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "verify Your saved properties/rooms section on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User select the heart toggle available on the search result screen",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User verifies that Properties/Rooms have been saved successfully",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.verify_Your_saved_propertiesrooms_section_on_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_select_the_heart_toggle_available_on_the_search_result_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_verifies_that_PropertiesRooms_have_been_saved_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 51,
  "name": "Booking widget - Click the Heart and Remove save properties/Rooms to the favourite widgets and verify the widget",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;booking-widget---click-the-heart-and-remove-save-properties/rooms-to-the-favourite-widgets-and-verify-the-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "verify Your saved properties/rooms widget on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User Deselect the heart toggle available on the search result screen",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User verifies that Properties/Rooms have been removed successfully",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.verify_Your_saved_propertiesrooms_widget_on_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_Deselect_the_heart_toggle_available_on_the_search_result_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_verifies_that_PropertiesRooms_have_been_removed_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 58,
  "name": "Booking widget - Click Bin Icon to Remove all saved properties/Rooms from the favourite widgets",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;booking-widget---click-bin-icon-to-remove-all-saved-properties/rooms-from-the-favourite-widgets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "User verify the Favourite widget and remove the saved properties/rooms by clicking the Bin Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User verifies the favourite widgets again",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_verify_the_Favourite_widget_and_remove_the_saved_propertiesrooms_by_clicking_the_BinIocn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_verifies_the_favourite_widgets_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 64,
  "name": "Logged in user - Search Result Page – Select property pin on the Map and verify property rooms section and click add to basket button",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;logged-in-user---search-result-page-–-select-property-pin-on-the-map-and-verify-property-rooms-section-and-click-add-to-basket-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@Test9"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "User Switch on Map view clicks the property pin on map",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user verify the rooms section underneath the map and User clicks add to basket button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_Switch_on_Map_view_clicks_the_property_pin_on_the_map()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.user_verify_the_rooms_section_underneath_the_map_and_User_clicks_add_to_basket_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 70,
  "name": "Logged in user - Search Result Page – Select property pin on the Map and Click property link on the property details call out box",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;logged-in-user---search-result-page-–-select-property-pin-on-the-map-and-click-property-link-on-the-property-details-call-out-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@Test10"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "User Switch to the Map view and click the property pin on the map",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "user verify the property details callout box, click the property link and verify the property details page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_Switch_to_the_Map_view_and_click_the_property_pin_on_the_map()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.user_verify_the_property_details_call_out_box_click_the_property_link_and_verify_the_property_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "line": 10,
  "name": "User opens browser and enters the New NHS Pre Prod URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User have gone to the homepage and login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User searched the property by clicking on Find a Room button",
  "keyword": "Then "
});
formatter.match({
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_have_gone_to_the_homepage_and_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_searched_the_property_by_clicking_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 76,
  "name": "Logged in user - Search Result Page – Select property pin on the Map and click rooms link displaying on room list underneath the map view",
  "description": "",
  "id": "logged-in-users---search-result-page-scenarios;logged-in-user---search-result-page-–-select-property-pin-on-the-map-and-click-rooms-link-displaying-on-room-list-underneath-the-map-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@Test11"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "User Switch to Map view and clicks the property pin dispaying on the map",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "user verify the rooms section underneath the map and clicks the room link and verify details",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.User_Switch_on_Map_view_and_clicks_the_property_pin_displaying_on_the_map()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_LoggedIn_User_SD.user_verify_the_rooms_section_underneath_the_map_and_clicks_the_room_link_and_verify_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("SearchResultPage_NonLoggedIn_User.feature");
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
  "name": "Non logged in users - Search Result page scenarios",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios",
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#@Test1"
    },
    {
      "line": 18,
      "value": "#Scenario: Search Result Page - To ensure links/images are responding successfully and none of them are broken"
    },
    {
      "line": 19,
      "value": "#Then User check all the link \u0026 Image URLs, with http connection api and get the response"
    },
    {
      "line": 20,
      "value": "#And user quit the browser"
    },
    {
      "line": 22,
      "value": "#@Test2"
    },
    {
      "line": 23,
      "value": "#Scenario: Search Result Page - Click all the links/images, navigate to relevant screen and then Navigate back to previous screen"
    },
    {
      "line": 24,
      "value": "#Then User expect to click all the Search Results page links/images one by one and click back"
    },
    {
      "line": 25,
      "value": "#And user quit the browser"
    }
  ],
  "line": 28,
  "name": "Non Logged in user  - Search Result Page - Click Register Now button on your booking widget",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user----search-result-page---click-register-now-button-on-your-booking-widget",
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
  "name": "User selects Register Now orange button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User navigates to New Register screens",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_selects_Register_Now_orange_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_navigates_to_New_Register_screens()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Non Logged in user - Search Result Page - Select/DeSelect Map view",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---select/deselect-map-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User verify that the Map view option is available",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Switch on the Map view",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User verify Map view screen",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Switch off the Map view and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_verify_that_the_Map_view_option_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_Switch_on_the_Map_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_verify_Map_view_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_Switch_off_the_Map_view_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 42,
  "name": "Non Logged in user - Search Result Page - Click Add to Booking button and verify",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---click-add-to-booking-button-and-verify",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User verify that the Add to Booking button is present",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Clicks Add to booking button",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User verify that Pop up appears with title YOUR BOOKING",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User verify that Pop up appears with REGISTER and LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User close the Pop Up to navigate back to search results screen",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_verify_that_the_Add_to_Booking_button_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_Clicks_Add_to_booking_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_verify_that_Pop_up_appears_with_title_YOUR_BOOKING()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_verify_that_Pop_up_appears_with_REGISTER_and_LOGIN_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_close_the_Pop_Up_to_navigate_back_to_search_results_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 51,
  "name": "Non Logged in user - Search Result Page - Click Add to Booking button and click REGISTER",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---click-add-to-booking-button-and-click-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "User verify that the Add to Booking button is available",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Clicks on Add to booking button",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User Clicks on REGISTER button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_verify_that_the_Add_to_Booking_button_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.Clicks_on_Add_to_booking_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_Clicks_on_REGISTER_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 58,
  "name": "Non Logged in user - Search Result Page - Click Add to Booking button and click LOGIN",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---click-add-to-booking-button-and-click-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "Verify that the Add to Booking button is available",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User Clicks on Add to booking button",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User Clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.Verify_that_Add_to_Booking_button_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_clicks_on_Add_to_booking_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_Clicks_on_LOGIN_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 65,
  "name": "Non Logged in user - Search Result Page - verify Sorting filter",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---verify-sorting-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "verify that the default sorting selected is with distance when search by property name",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "User ensure that Property name heading displayed with distance in miles",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User clicks on Homepage Image and navigate back to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "clicks on Find a Room button and navigate to search result screen",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "verify that the default sorting selected is by property name in ascending alphabatical order",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "User selects the Sorting drop down and selects the option by property name in ascending alphabatical order",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.verify_that_the_default_sorting_selected_is_with_distance_when_search_by_property_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_ensure_that_Property_name_heading_displayed_with_distance_in_miles()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_clicks_on_Homepage_Image_and_navigate_back_to_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.clicks_on_Find_a_Room_button_and_navigate_to_search_result_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.verify_that_the_default_sorting_selected_is_by_property_name_in_ascending_alphabatical_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_selects_the_Sorting_drop_down_and_selects_the_option_by_property_name_in_ascending_alphabatical_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 75,
  "name": "Non Logged in user - Search Result Page - verify Hide/show rooms links and click",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---verify-hide/show-rooms-links-and-click",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@Test9"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "User verifies the default Hide rooms options",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User selects the Hide rooms link and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "User verifies the show rooms option on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User selects the show rooms link and verify the result",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_verifies_the_default_Hide_rooms_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_selects_the_Hide_rooms_link_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_verifies_the_show_rooms_option_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_selects_the_show_rooms_link_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 83,
  "name": "Non Logged in user - Search Result Page - Click Property Name link",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---click-property-name-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@Test10"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "User clicks the property name link on the search result page, verifies the property details screen and navigate back to search screen",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_clicks_the_property_name_link_on_the_search_result_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 88,
  "name": "Non Logged in user - Search Result Page - Click Room Name link",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---click-room-name-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@Test11"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "User clicks the Room name link on the search result page,verifies the Room details page and navigate back to result page",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_clicks_the_Room_name_link_on_the_search_result_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 94,
  "name": "Non Logged in user - Search Result Page - Click Load more link",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---click-load-more-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 93,
      "name": "@Test12"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "User clicks the Load more button on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_clicks_the_Load_more_button_on_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 99,
  "name": "Non Logged in user - Search Result Page – Select property pin on the Map and verify property rooms section and click add to booking widget",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page-–-select-property-pin-on-the-map-and-verify-property-rooms-section-and-click-add-to-booking-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 98,
      "name": "@Test13"
    }
  ]
});
formatter.step({
  "line": 100,
  "name": "User Switch on Map view",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "User clicks the property pin on the map",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "user verify the rooms section underneath the map",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User clicks add to basket button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_Switch_on_Map_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_clicks_the_property_pin_on_the_map()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_verify_the_rooms_section_underneath_the_map()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_clicks_add_to_basket_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 107,
  "name": "Non Logged in user - Search Result Page – Select property pin on the Map and Click property link on the property details call out box",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page-–-select-property-pin-on-the-map-and-click-property-link-on-the-property-details-call-out-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 106,
      "name": "@Test14"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "User Switch to the Map view",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "User click the property pin on the map",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "user verify the property details call out box, clicks the property link and verify the property details screen",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_Switch_to_the_Map_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_click_the_property_pin_on_the_map()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_verify_the_property_details_call_out_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 114,
  "name": "Non Logged in user - Search Result Page – Select property pin on the Map and click rooms link displaying on room list underneath the map view",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page-–-select-property-pin-on-the-map-and-click-rooms-link-displaying-on-room-list-underneath-the-map-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 113,
      "name": "@Test15"
    }
  ]
});
formatter.step({
  "line": 115,
  "name": "User Switch on Map view and clicks the property pin on the map",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "user verify the rooms section underneath the map and clicks the room link and verify",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_Switch_on_Map_view_and_clicks_the_property_pin_on_the_map()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_verify_the_rooms_section_underneath_the_map_and_clicks_the_room_link_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
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
  "location": "Commonsteps_SD.user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 119,
      "value": "#Need to run manually"
    }
  ],
  "line": 120,
  "name": "Non Logged in user - Search Result Page - verify Sorting filter",
  "description": "",
  "id": "non-logged-in-users---search-result-page-scenarios;non-logged-in-user---search-result-page---verify-sorting-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 121,
  "name": "verify that the default sorting selected is with distance when search by property name",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User ensure that Property name heading displayed with distance in miles",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks on Homepage Image and navigate back to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "clicks on Find a Room button and navigate to search result screen",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "verify that the default sorting selected is by property name in ascending alphabatical order",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "User selects the Sorting drop down and selects the option by property name in ascending alphabatical order",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.verify_that_the_default_sorting_selected_is_with_distance_when_search_by_property_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_ensure_that_Property_name_heading_displayed_with_distance_in_miles()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_clicks_on_Homepage_Image_and_navigate_back_to_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.clicks_on_Find_a_Room_button_and_navigate_to_search_result_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.verify_that_the_default_sorting_selected_is_by_property_name_in_ascending_alphabatical_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultPage_NonLoggedIn_User_SD.user_selects_the_Sorting_drop_down_and_selects_the_option_by_property_name_in_ascending_alphabatical_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Commonsteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});