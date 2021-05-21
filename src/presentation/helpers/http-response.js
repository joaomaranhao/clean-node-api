const { MissingParamError } = require('../helpers/missing-param-error')
const { InternalServerError } = require('../helpers/internal-server-error')
const { UnauthorizedError } = require('../helpers/unauthorized-error')

class HttpResponse {
  static badRequest (param) {
    return {
      statusCode: 400,
      body: new MissingParamError(param)
    }
  }

  static severError (response) {
    return {
      statusCode: 500,
      body: new InternalServerError(response)
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }
}

module.exports = {
  HttpResponse
}
