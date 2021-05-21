class LoginRouter {
  route (httpRequest) {
    if (!httpRequest) {
      return HttpResponse.severError('http request')
    }
    if (!httpRequest.body) {
      return HttpResponse.severError('body')
    }
    const { email, password } = httpRequest.body
    if (!email) {
      return HttpResponse.badRequest('email')
    }
    if (!password) {
      return HttpResponse.badRequest('password')
    }
  }
}

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

class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing param ${paramName}`)
  }
}

class InternalServerError extends Error {
  constructor (response) {
    super(`Missing ${response}`)
  }
}

module.exports = {
  LoginRouter,
  MissingParamError,
  InternalServerError
}
