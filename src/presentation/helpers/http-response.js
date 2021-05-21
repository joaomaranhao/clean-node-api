const { MissingParamError } = require('../helpers/missing-param-error')
const { InternalServerError } = require('../helpers/internal-server-error')

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
}

module.exports = {
  HttpResponse
}
