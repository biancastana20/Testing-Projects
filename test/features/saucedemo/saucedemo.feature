Feature: Feature name

    @demo
    Scenario Outline: First Run
        Given LogIn to saucedemo web app
        # When Search <SearchItem>
        # Then Click on the first button
        # Then URL should match <ExpectedURL>

        Examples:
            | TestId | SearchItem |
            | Demo   | AquaBot    |