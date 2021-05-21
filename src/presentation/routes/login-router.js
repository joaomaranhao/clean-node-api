class LoginRouter {
  route (httpRequest) {
    const httpResponse = {}
    if (!httpRequest || !httpRequest.body) {
      httpResponse.statusCode = 500
      return httpResponse
    }
    const { email, password } = httpRequest.body
    if (!email || !password) {
      httpResponse.statusCode = 400
    }
    return httpResponse
  }
}

module.exports = {
  LoginRouter
}
