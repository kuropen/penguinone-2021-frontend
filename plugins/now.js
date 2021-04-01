/**
 * Zero padding
 * @param {Number} number
 * @return {String}
 */
const pad = (number) => {
  if (number < 10) {
    return '0' + number
  }
  return number
}

export default (dummy, inject) => {
  inject('now', () => {
    const date = new Date()
    return date.getUTCFullYear() +
      '-' + pad(date.getUTCMonth() + 1) +
      '-' + pad(date.getUTCDate())
  })
}
