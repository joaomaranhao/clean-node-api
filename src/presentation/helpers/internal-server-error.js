class InternalServerError extends Error {
  constructor (response) {
    super(`Missing ${response}`)
  }
}

module.exports = { InternalServerError }
