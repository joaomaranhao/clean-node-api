class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized access.')
  }
}

module.exports = { UnauthorizedError }
