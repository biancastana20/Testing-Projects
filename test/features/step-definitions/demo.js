import { Given } from "@wdio/cucumber-framework";

Given(/^Aquabottesting is opened$/, function () {
  browser.url("https://aquabottesting.com/#");
  browser.pause(70000);
});
