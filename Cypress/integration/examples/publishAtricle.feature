Feature: publishArticle

  Scenario: the user filled all fields
  	Given the user pressed on new article button
    When article title is set with tag
    And description is set with tag
    And body is set with tag
    And tag is set with tag
    And press on Publish Article button
    Then article page should be opened

  Scenario: the user did not fill tag
  	Given the user pressed on new article button
    When article title is set without tag
    And description is set without tag
    And body is set without tag
    And press on Publish Article button
    Then article page should be opened without tag

  Scenario: the user did not fill title
  	Given the user pressed on new article button
    When description is set without title
    And body is set without title
    And press on Publish Article button
    Then "title can't be blank" should be shown    
   
  Scenario: the user did not fill description
  	Given the user pressed on new article button
    When title is set without description
    And body is set without description
    And press on Publish Article button
    Then "description can't be blank" should be shown 

 Scenario: the user did not fill body
  	Given the user pressed on new article button
    When title is set without body
    And description is set without body
    And press on Publish Article button
    Then "body can't be blank" should be shown 
