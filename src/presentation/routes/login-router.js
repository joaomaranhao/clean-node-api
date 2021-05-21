class LoginRouter {
  route (httpRequest) {
    const { email, password } = httpRequest.body
    const httpResponse = {}
    if (!email || !password) {
      httpResponse.statusCode = 400
    }
    return httpResponse
  }
}

module.exports = {
  LoginRouter
}
