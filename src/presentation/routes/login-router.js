class LoginRouter {
  route (httpRequest) {
    const httpResponse = {}
    if (!httpRequest.body.email || !httpRequest.body.password) {
      httpResponse.statusCode = 400
    }
    return httpResponse
  }
}

module.exports = {
  LoginRouter
}
