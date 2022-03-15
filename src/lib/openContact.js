export const openEmail = (email) => (e) => {
  e.preventDefault()
  document.location = "mailto:"+email
}

export const openTelephone = (telephone) => (e) => {
  e.preventDefault()
  window.open(`tel:${telephone}`);
}