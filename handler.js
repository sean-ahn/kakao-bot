'use strict';

module.exports.keyboard = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            type: "buttons",
            buttons: ["선택 1", "선택 2", "선택 3"],
        }),
    };

    callback(null, response);
};

module.exports.message = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: {
                text: `${event.body}`,
            },
        }),
    };

    callback(null, response);
};

module.exports.friend = (event, context, callback) => {
    // invalid methods are filtered by configuration.
    if (event.httpMethod === "DELETE")
        console.log(event.pathParameters.user_key);
    else
        console.log(JSON.parse(event.body).user_key);

    callback(null, {statusCode: 200});
};

module.exports.chatRoom = (event, context, callback) => {
    // invalid methods are filtered by configuration.
    console.log(event.pathParameters.user_key);
    callback(null, {statusCode: 200});
};
