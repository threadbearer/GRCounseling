// Get all data in form and return object
function getFormData(form) {
  const elements = form.elements;
  let honeypot;

  const fields = Object.keys(elements)
    .filter((k) => {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    })
    .map((k) => {
      if (elements[k].name !== undefined) {
        return elements[k].name;
      } else {
        return elements[k].item(0).name;
      }
    })
    .filter((item, pos, self) => self.indexOf(item) === pos && item);

  const formData = {};
  fields.forEach((name) => {
    const element = elements[name];

    // Singular form elements just have one value
    formData[name] = element.value;

    // When our element has multiple items, get their values
    if (element.length && element.type !== "select-one") {
      const data = [];
      for (let i = 0; i < element.length; i++) {
        const item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(", ");
    }
  });

  // Add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  return { data: formData, honeypot: honeypot };
}

function HandleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = getFormData(form);
  const data = formData.data;

  // If a honeypot field is filled, assume it was done so by a spam bot.
  if (formData.honeypot) {
    return false;
  }

  disableAllButtons(form);
  const url = form.action;

  // URL encode form data for sending as post data
  const encoded = Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encoded,
    mode: "no-cors" // Google Apps Script actions are typically no-cors or redirect-based
  })
    .then(() => {
      form.reset();
      const formElements = form.querySelector(".form-elements");
      if (formElements) {
        formElements.style.display = "none"; // hide form
      }
      const thankYouMessage = form.querySelector(".thankyou_message");
      if (thankYouMessage) {
        thankYouMessage.style.display = "block"; // show thank you
      }
    })
    .catch((error) => {
      console.error("Form submission error:", error);
      // Re-enable buttons if submission failed so user can try again
      const buttons = form.querySelectorAll("button");
      buttons.forEach((btn) => {
        btn.disabled = false;
      });
    });
}

function disableAllButtons(form) {
  const buttons = form.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

export default HandleFormSubmit;
