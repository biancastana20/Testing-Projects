Feature: Feature name

    @aquabot
    Scenario Outline: First Run
        Given I navigate to "AquaBot" website
        And I click on "Submit" button
        # And I chose "Mobile Phone" radio button
        And I chose all option that starts with t from dropdown

        Examples:
            | TestId | SearchItem |
            | Demo   | AquaBot    |

