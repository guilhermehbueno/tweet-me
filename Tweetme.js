var util         = require("util");
var EventEmitter = require("events").EventEmitter;
var Twit         = require('twit');

var Tweetme = function(options){
  var tweet = this;
  var T = new Twit(options);
  var stream = T.stream('user');

  stream.on('direct_message', function (directMsg) {
    tweet.emit('direct_message', directMsg);
  });

  this.sendDirectMessage = function(directMsg, callback){
    T.post('direct_messages/new', directMsg, function(err, reply) {
      if(err) console.log(err);
    });
  }

  EventEmitter.call(this);
}

util.inherits(Tweetme, EventEmitter);
module.exports=Tweetme;