const _ = require('lodash')

function isValidOrder(order) {
  if (!_.isObject(order)) return false
  const {
    makerAddress,
    makerAmount,
    makerToken,
    takerAddress,
    takerAmount,
    takerToken,
    expiration,
    nonce,
    r,
    s,
    v,
  } = order
  return (
    makerAddress &&
    makerAmount &&
    makerToken &&
    takerAddress &&
    takerAmount &&
    takerToken &&
    expiration &&
    nonce &&
    r &&
    s &&
    v
  )
}

function getOrderId(order) {
  if (!_.isObject(order)) return false
  const {
    makerAddress,
    makerAmount,
    makerToken,
    takerAddress,
    takerAmount,
    takerToken,
    expiration,
    nonce,
    r,
    s,
    v,
  } = order
  return `${makerAddress}${makerAmount}${makerToken}${takerAddress}${takerAmount}${takerToken}${expiration}${nonce}${r}${s}${v}`
}

function getUnsignedOrderId(order) {
  if (!_.isObject(order)) return false
  const { makerAddress, makerAmount, makerToken, takerAddress, takerAmount, takerToken, expiration, nonce } = order
  return `${makerAddress}${makerAmount}${makerToken}${takerAddress}${takerAmount}${takerToken}${expiration}${nonce}`
}

module.exports = { isValidOrder, getOrderId, getUnsignedOrderId }
