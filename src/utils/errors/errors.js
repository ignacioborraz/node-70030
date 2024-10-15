const errors = {
    error: { message: "Client Error", statusCode: 400 },
    auth: { message: "Invalid Credentials", statusCode: 401 },
    forbidden: { message: "Forbidden Action", statusCode: 403 },
    notFound: { message: "Not Found", statusCode: 404 },
    fatal: { message: "Server Error", statusCode: 500 }
}

export default errors