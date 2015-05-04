var options = {
    consumer_key: 'V3hHvH7kGzLPsPAj9ItaA',
    consumer_secret: '9R885Klz7S2GSXc6z2HCFcbqxJfM1D7IeHENxzRDxao',
    access_token: '278853241-MREZw19ezPu02BhlZyRO65np3G8TGKi7tpLedbQl',
    access_token_secret: 'gYjFoIa28D6lYmG9jtgwF6BPOFpsY9m1NUdy40FM8SEhM'
}

var tweetMe = new TweetMe(options);
tweetMe.on("direct_message", function(message) {
    var directMessage = {
        user_id: directMsg.direct_message.sender.id,
        screen_name: directMsg.direct_message.sender.screen_name,
        text: 'Mensagem recebida'
    };

    tweetMe.sendDirectMessage(directMessage, function(err, reply) {

    });
});