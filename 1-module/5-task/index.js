/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  str = str.length > maxlength 
    ? str.slice(0, 19) + '…' : str
  return str
}
