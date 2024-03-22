Feature: Feature name

    @saucedemo
    Scenario Outline: First Run
        Given I navigate to "SauceDemo" website and log in with "User1"

        Examples:
            | TestId | SearchItem |
            | Demo   | AquaBot    |