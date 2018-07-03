'use strict';

module.exports.handler = (event, context, callback) => {
    const path = event.path;

    switch (path) {
        case "/keyboard":
            callback(null, responseKeyboard);
            break;
        case "/message":
            callback(null, respondToMessage(JSON.parse(event.body)));
            break;
        /* path: /friend/{userKey} */
        case (path.match(/\/friend\/.*/)|| {}).input:
            removeFriend(event.pathParameters.user_key);
            callback(null, {statusCode: 200});
            break;
        case "/friend":
            getFriend(JSON.parse(event.body).user_key);
            callback(null, {statusCode: 200});
            break;
        /* path: /chat_room/{userKey} */
        case (path.match(/\/chat_room\/.*/)|| {}).input:
            leaveChatRoom(event.pathParameters.user_key);
            callback(null, {statusCode: 200});
            break;
        default:
            console.log("Should not be here.\n", event);
            callback(null, null);
            break;
    }
};

const responseKeyboard = {
    statusCode: 200,
    body: JSON.stringify({
        type: "buttons",
        buttons: ["선택 1", "선택 2", "선택 3"],
    }),
};

const respondToMessage = (body) => {
    console.log(body);

    const userKey = body.user_key;
    const type = body.type;
    const content = body.content;

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: {
                text: `${userKey}, ${type}, ${content}`,
                photo: {
                    url: "https://hello.photo.src",
                    width: 640,
                    height: 480,
                },
                message_button: {
                    label: "반갑습니다.",
                    url: "http://hello.world.com/example",
                },
            },
        }),
    };
};

const getFriend = (user_key) => {
    console.log(user_key);
};

const removeFriend = (user_key) => {
    console.log(user_key);
};

const leaveChatRoom = (user_key) => {
    console.log(user_key);
};
