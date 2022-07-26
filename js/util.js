const alertContainer = document.querySelector('#alert').content.querySelector('.alert');

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertElement = alertContainer.cloneNode(true);

  alertElement.textContent = message;

  document.body.append(alertElement);

  setTimeout(() => {
    alertElement.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlert};
