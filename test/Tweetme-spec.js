var uuid = require('uuid');

describe("Tweetme - spec", function(){

  var Tweetme = null;

  before(function(){
    Tweetme = require("../Tweetme");
  });

  it("Should receive and send a direct message", function(done){
    this.timeout(60000);
    var tMe = new Tweetme({
      consumer_key: 'V3hHvH7kGzLPsPAj9ItaA',
      consumer_secret: '9R885Klz7S2GSXc6z2HCFcbqxJfM1D7IeHENxzRDxao',
      access_token: '278853241-MREZw19ezPu02BhlZyRO65np3G8TGKi7tpLedbQl',
      access_token_secret: 'gYjFoIa28D6lYmG9jtgwF6BPOFpsY9m1NUdy40FM8SEhM'
    });

    tMe.on('direct_message',function(message){
      console.log(message);
      done();
    });

    var message = {
      screen_name: 'ghbueno',
      text: 'Hello => ' + uuid.v4()
    }

    tMe.sendDirectMessage(message, function(err, reply) {

    });

  });
});