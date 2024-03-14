function log(request, response, next) {
    console.log('IP client:', request.ip);
    // Procedi con le elaborazioni successive
    next();
}

module.exports = log;