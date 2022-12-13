import { Selector } from "testcafe"
import { XPathSelector } from "../../utils"

class ApiKeyGeneratorPO {
  constructor() {
    this.loginButton = Selector("#button--sign-in")
    this.loginEmailInput = Selector("input").withAttribute("name", "email")
    this.loginPasswordInput = Selector("input").withAttribute(
      "name",
      "password"
    )
    this.email = "hello@silesiasites.pl"
    this.password = "password"
    this.routePath = "/api-keys"
    this.allowedAPIaddressInput = XPathSelector(
      '//input[@placeholder="Several IP addresses can be entered by pressing the Enter key after each one."]'
    )
    this.sampleIP = "89.151.44.159"
    this.descriptionTextarea = XPathSelector(
      '//textarea[@placeholder="Add a comment to the generated key"]'
    )
    this.sampleDescriptionOfIPsample = "Description of added sample IP"
    this.expectingValueInsideApiKeyInput = "Authorization: Basic"
    this.generateButton = XPathSelector(
      '//button[@class="generate button-copy d-none d-sm-inline-block"]'
    )
    this.inputGeneratedApiKeyField = XPathSelector(
      '//input[@name="generated-api-key"]'
    )
    this.copyApiKeyButton = XPathSelector('//button[@id="copy"]')
    this.copiedConfirmiationToast = XPathSelector(
      '//div[@class="toaster-body" and contains(text(),"The API Key has been successfully copied to the clipboard!")]'
    )
    this.listOfGeneratedAPiKeysIP = XPathSelector(
      `//span[contains(text(),"${this.sampleIP}")]`
    )
    this.listOfGeneratedAPiKeysDescription = XPathSelector(
      `//td[contains(text(),"${this.sampleDescriptionOfIPsample}")]`
    )
    this.deleteGeneratedAPIKeyButtn = XPathSelector(
      '//i[@data-bs-title="Delete"]'
    )
    this.deletingConfirmationQuestion = XPathSelector(
      '//span[contains(text(),"Are you sure you want to delete this API Key?")]'
    )
    this.deletingConfirmationButton = XPathSelector(
      '//button[contains(text(),"Delete")]'
    )
  }
}

export default new ApiKeyGeneratorPO()
