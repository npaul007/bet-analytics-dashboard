export const replaceCarriageReturns = function (str) {
  return str.replace(/\r\n|\r|\n/g, "%0D%0A");
};

export const gtagReportConversion = function (url, eventName) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  window.gtag("event", "conversion", {
    send_to: `AW-879877019/${eventName}`,
    event_callback: callback,
  });
  return false;
};
