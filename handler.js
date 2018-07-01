'use strict';

module.exports.hello = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.keyboard = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            type: "buttons",
            buttons: ["선택 1", "선택 2", "선택 3"],
        }),
    };

    callback(null, response)
};