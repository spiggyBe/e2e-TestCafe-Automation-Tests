import { baseUrl } from "../../.testcaferc"
import ApiKeyGeneratorPO from "../page_objects/apiKeyGeneratorPO"

fixture("API Keys").page(baseUrl)

test("should generate API Key with sample IP allowed nr and sample description and finally confim api key has been generated and copied, and after all summary table confirmed and summar api deleted", async (t) => {
  await t
    .typeText(ApiKeyGeneratorPO.loginEmailInput, `${ApiKeyGeneratorPO.email}`, {
      paste: true,
    })
    .typeText(
      ApiKeyGeneratorPO.loginPasswordInput,
      `${ApiKeyGeneratorPO.password}`,
      {
        paste: true,
      }
    )
    .click(ApiKeyGeneratorPO.loginButton)
    .wait(5000)
    .navigateTo(`${ApiKeyGeneratorPO.routePath}`)
    .wait(2000)
    .typeText(
      ApiKeyGeneratorPO.allowedAPIaddressInput,
      `${ApiKeyGeneratorPO.sampleIP}`,
      { paste: true }
    )
    .pressKey("enter")
    .typeText(
      ApiKeyGeneratorPO.descriptionTextarea,
      `${ApiKeyGeneratorPO.sampleDescriptionOfIPsample}`,
      {
        paste: true,
      }
    )
    .click(ApiKeyGeneratorPO.generateButton)
    .expect(ApiKeyGeneratorPO.inputGeneratedApiKeyField.value)
    .contains(`${ApiKeyGeneratorPO.expectingValueInsideApiKeyInput}`)
    .click(ApiKeyGeneratorPO.copyApiKeyButton)
    .expect(ApiKeyGeneratorPO.copiedConfirmiationToast.exists)
    .ok()
    .expect(ApiKeyGeneratorPO.listOfGeneratedAPiKeysIP.exists)
    .ok()
    .expect(ApiKeyGeneratorPO.listOfGeneratedAPiKeysDescription.exists)
    .ok()
    .wait(3000)
    .click(ApiKeyGeneratorPO.deleteGeneratedAPIKeyButtn)
    .wait(2000)
    .expect(ApiKeyGeneratorPO.deletingConfirmationQuestion.exists)
    .ok()
    .click(ApiKeyGeneratorPO.deletingConfirmationButton)
})
