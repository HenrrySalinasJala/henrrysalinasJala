import { Selector } from 'testcafe'

/**
 * @class SelfRegistrationModal
 */
export default class SelfRegistrationModal {
  /**
   * initializes a new instance of {@link SelfRegistrationModal}
   */
  constructor() {
    this.modal = Selector('.economy-title')
    this.nextButton = Selector('form button.enrollment')
    this.registrationCompleteLabel = Selector('.selfenrollment-container .economy-subtitle')
  }

  /**
   * Gets an element from the enrollment form.
   * @param {string} label The form label.
   * @returns {Selector} the testcafe selector.
   */
  getInputFieldFromFormByLabel(label) {
    return Selector('span').withText(label).parent('.inputbox').find('input')
  }

  /**
   * Gets first name.
   * @returns {Selector} the testcafe selector.
   */
  getFirstName() {
    return this.getInputFieldFromFormByLabel('First name')
  }

  /**
   * Gets the last name.
   * @returns {Selector} the testcafe selector.
   */
  getLastName() {
    return this.getInputFieldFromFormByLabel('Last name')
  }

  /**
   * Gets the company name field.
   * @returns {Selector} the testcafe selector.
   */
  getCompanyName() {
    return this.getInputFieldFromFormByLabel('Company name')
  }

  /**
   * Gets the company email field.
   * @returns {Selector} the testcafe selector.
   */
  getCompanyEmail() {
    return this.getInputFieldFromFormByLabel('Company email')
  }

  /**
   * Gets the profile element.
   * @returns {Selector} the testcafe selector.
   */
  getWhoAreYouDroDown() {
    return Selector('span').withText('Who are you').parent('.inputbox').find('select')
  }

  /**
   * Gets the country code element.
   * @returns {Selector} the testcafe selector.
   */
  getCountryCode() {
    return this.getInputFieldFromFormByLabel('Country code')
  }

  /**
   * Gets the contact phone element.
   * @returns {Selector} the testcafe selector.
   */
  getContactPhone() {
    return this.getInputFieldFromFormByLabel('Contact phone')
  }

  /**
   * Gets the business address element.
   * @returns {Selector} the testcafe selector.
   */
  getBusinessAddress() {
    return this.getInputFieldFromFormByLabel('Business address')
  }

  /**
   * Gets the address element.
   * @returns {Selector} the testcafe selector.
   */
  getAddress2() {
    return this.getInputFieldFromFormByLabel('Address2')
  }

  /**
   * Gets the country element.
   * @returns {Selector} the testcafe selector.
   */
  getCountry() {
    return Selector('span').withText('Country').parent('.inputbox').find('select')
  }

  /**
   * Gets the state element.
   * @returns {Selector} the testcafe selector.
   */
  getState() {
    return this.getInputFieldFromFormByLabel('State')
  }

  /**
   * Gets the city element.
   * @returns {Selector} the testcafe selector.
   */
  getCity() {
    return this.getInputFieldFromFormByLabel('City')
  }

  /**
   * Gets the ZIP element.
   * @returns {Selector} the testcafe selector.
   */
  getZip() {
    return this.getInputFieldFromFormByLabel('Zip')
  }

  /**
   * Gets an option element from a given select element.
   * @param {Selector} selectElement The select element.
   * @param {Selector} optionName The option name.
   * @returns {Selector} the testcafe selector.
   */
  getDropDownOption(selectElement, optionName) {
    return selectElement.find('option').withText(optionName)
  }
}
