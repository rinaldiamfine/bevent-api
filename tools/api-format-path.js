'use strict'

exports.apiFormatPath = function(name) {
    return `/${process.env.API_VERSION}/${name}`;
}
