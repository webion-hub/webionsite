export function openEmail(email) {
  document.location = "mailto:"+email
}

export function openTelephone(telephone) {
  window.open(`tel:${telephone}`);
}