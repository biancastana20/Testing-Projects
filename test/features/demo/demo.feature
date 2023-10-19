Feature: Feature name

    @demo
    Scenario Outline: First Run
        Given Aquabottesting is opened
        # When Search <SearchItem>
        # Then Click on the first button
        # Then URL should match <ExpectedURL>

        Examples:
            | TestId | SearchItem | ExpectedURL                  |
            | Demo   | AquaBot    | https://aquabottesting.com/# |