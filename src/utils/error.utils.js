exports.validationError = (errorMsg) => {
    return {
        statusCode: 403,
        message: errorMsg
    }
}

exports.dbError = (errorMsg) => {
    return {
        statusCode: 500,
        message: errorMsg
    }
}