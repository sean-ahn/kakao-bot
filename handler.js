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
            type: "message",
            buttons: ["선택 1", "선택 2", "선택 3"],
        }),
    };

    callback(null, response);
};

module.exports.friend = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            type: "friend",
            buttons: ["선택 1", "선택 2", "선택 3"],
        }),
    };

    callback(null, response);
};

module.exports.chatRoom = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            type: "chatRoom",
            buttons: ["선택 1", "선택 2", "선택 3"],
        }),
    };

    callback(null, response);
};
