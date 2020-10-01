export default ascendingOrder

function ascendingOrder(num) {
  return Number(String(num).split('').sort().join(''))
}
