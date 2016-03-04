# tweet-me

npm install tweet-me

```javascript
var options = {
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
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
```
