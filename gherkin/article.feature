Feature: publishArticle
  I can publish an article
  Scenario: publish article
    Given article title is set
    And description is set
    And body is set
    When press on "Publish Article" button
    Then the article is published