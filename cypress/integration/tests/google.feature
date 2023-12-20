Feature: Google Search
  
        @google
        Scenario: Doing Google Search
            Given I open Google
             Then I see "Google" in the title
              And I Search "https://github.com/nathan-rivera"
              