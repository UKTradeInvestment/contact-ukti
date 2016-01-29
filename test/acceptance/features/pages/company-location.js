'use strict';

/*
 * Page object
 * Detaches UI interactions from step definitions
 *
 */
var name = 'Company Location';
var Page = function Page(client) {

  /**
   * Private
   */

  var url = '/contact-ukti/company-location';
  var fields = {
    insideUk: {
      selector: '[name="inside-uk"]',
      value: 'yes'
    },
    country: {
      selector: '#country',
      value: 'United Arab Emirates'
    }
  };
  var $errors = '.validation-error';
  var $form = 'form';

  /**
   * Public
   */

  this.get = function get() {
    return client.utils
      .completeSteps(name)
      .then(function completedSteps() {
        return client.url(url);
      });
  };

  this.getUrl = function getUrl() {
    return url;
  };

  this.complete = function completeForm() {
    return client
      .click(fields.insideUk.selector + '[value="' + fields.insideUk.value + '"]')
      .submitForm($form);
  };

  this.submit = function submitForm() {
    return client
      .submitForm($form);
  };

  this.hasErrors = function hasErrors() {
    return client
      .elements($errors)
      .then(function elementsResult(res) {
        return res.value.length === 1;
      });
  };

};

module.exports = {
  class: Page,
  name: name
};