import { Selector } from "testcafe"
import { XPathSelector } from "../../utils"

class RegisterPO {
  constructor() {
    this.email = "email@testingsite.com"
    this.password = "password"
    this.confirmPassword = "password"
    this.firstName = "firstName"
    this.lastName = "lastName"
    this.countryToChoose = "Germany"
    this.mobileNumberGermany = "15050123456"
    this.countryPrefixCode = "+49"

    this.registerBtn = XPathSelector(
      '//a[@href-hammerhead-stored-value="/register"][contains(text(),"Register")]'
    )
    this.welcomeTitle = XPathSelector(
      '//h3[contains(text(),"be testing in minutes!")]'
    )
    this.emailInput = Selector('.input-field .text-secondary[name="email"]')
    this.passwordInput = Selector(
      '.input-field .text-secondary[name="password"]'
    )
    this.confirmPasswordInput = Selector('[name="password-confirmation"]')
    this.firstNameInput = Selector(
      '.input-field .text-secondary[name="first-name"]'
    )
    this.lastNameInput = Selector(
      '.input-field .text-secondary[name="last-name"]'
    )
    this.countrySelectionInput = XPathSelector('//*[@name="country"]')
    this.countrySelected = XPathSelector('//span[contains(text(),"Germany")]')
    this.mobileNumberInput = XPathSelector('//input[@name="phone-number"]')
    this.businessNameInput = XPathSelector(
      '//input[@type="text" and @name="account-name"]'
    )
    this.policyCheckInput = XPathSelector('//span[@class="fa fa-check"]')
    this.confirmRegisterBtn = XPathSelector(
      '//button[contains(text(),"Register")]'
    )
    this.registrationConfirmedModal = XPathSelector(
      '//h2[@id="swal2-title"][contains(text(),"ve sent you")]'
    )
  }
}

export default new RegisterPO()
