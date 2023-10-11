export const toPlainJSObject = (documentObject) => {
  if (!documentObject) {
    return;
  }
  return {
    given_name:
      documentObject.fields.given_name &&
      documentObject.fields.given_name.stringValue,
    family_name:
      documentObject.fields.family_name &&
      documentObject.fields.family_name.stringValue,
    email:
      documentObject.fields.email && documentObject.fields.email.stringValue,
    phone_number:
      documentObject.fields.phone_number &&
      documentObject.fields.phone_number.stringValue,
    billing_address: documentObject.fields.billing_address && {
      city:
        documentObject.fields.billing_address.mapValue.fields.city &&
        documentObject.fields.billing_address.mapValue.fields.city.stringValue,
      country:
        documentObject.fields.billing_address.mapValue.fields.country &&
        documentObject.fields.billing_address.mapValue.fields.country
          .stringValue,
      line_1:
        documentObject.fields.billing_address.mapValue.fields.line_1 &&
        documentObject.fields.billing_address.mapValue.fields.line_1
          .stringValue,
      line_2:
        documentObject.fields.billing_address.mapValue.fields.line_2 &&
        documentObject.fields.billing_address.mapValue.fields.line_2
          .stringValue,
      state:
        documentObject.fields.billing_address.mapValue.fields.state &&
        documentObject.fields.billing_address.mapValue.fields.state.stringValue,
      postal_code:
        documentObject.fields.billing_address.mapValue.fields.postal_code &&
        parseInt(
          documentObject.fields.billing_address.mapValue.fields.postal_code
            .integerValue
        ),
    },

    delivery_address: documentObject.fields.delivery_address && {
      city:
        documentObject.fields.delivery_address.mapValue.fields.city &&
        documentObject.fields.delivery_address.mapValue.fields.city.stringValue,
      country:
        documentObject.fields.delivery_address.mapValue.fields.country &&
        documentObject.fields.delivery_address.mapValue.fields.country
          .stringValue,
      line_1:
        documentObject.fields.delivery_address.mapValue.fields.line_1 &&
        documentObject.fields.delivery_address.mapValue.fields.country &&
        documentObject.fields.delivery_address.mapValue.fields.line_1
          .stringValue,
      line_2:
        documentObject.fields.delivery_address.mapValue.fields.line_2 &&
        documentObject.fields.delivery_address.mapValue.fields.line_2
          .stringValue,
      state:
        documentObject.fields.delivery_address.mapValue.fields.state &&
        documentObject.fields.delivery_address.mapValue.fields.state
          .stringValue,
      postal_code:
        documentObject.fields.delivery_address.mapValue.fields.postal_code &&
        parseInt(
          documentObject.fields.delivery_address.mapValue.fields.postal_code
            .integerValue
        ),
    },
  };
};
