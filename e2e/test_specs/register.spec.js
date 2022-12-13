import { baseUrl } from "../../.testcaferc"
import RegisterPO from "../page_objects/registerPO"

fixture("Registration process").page(baseUrl)

test("should fill out registration form of correct data", async (t) => {
  await t
    .click(RegisterPO.registerBtn)
    .expect(RegisterPO.welcomeTitle.innerText)
    .eql("You'll be testing in minutes!")
    .typeText(RegisterPO.emailInput, `${RegisterPO.email}`)
    .typeText(RegisterPO.passwordInput, `${RegisterPO.password}`)
    .typeText(RegisterPO.confirmPasswordInput, `${RegisterPO.confirmPassword}`)
    .typeText(RegisterPO.firstNameInput, `${RegisterPO.firstName}`)
    .typeText(RegisterPO.lastNameInput, `${RegisterPO.lastName}`)
    .typeText(
      RegisterPO.countrySelectionInput,
      `${RegisterPO.countryToChoose}`,
      { replace: true }
    )
    .click(RegisterPO.countrySelected)
    .typeText(RegisterPO.mobileNumberInput, `${RegisterPO.mobileNumberGermany}`)
    .expect(RegisterPO.mobileNumberInput.value)
    .eql(`${RegisterPO.countryPrefixCode}${RegisterPO.mobileNumberGermany}`)
    .typeText(RegisterPO.businessNameInput, "myBusiness")
    .click(RegisterPO.policyCheckInput)
    .click(RegisterPO.confirmRegisterBtn)
    .wait(5000)
    .expect(RegisterPO.registrationConfirmedModal.exists)
    .ok()
})
