'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.d4a390f3-07b8-4ad6-a863-39d8b1db8225";

var SKILL_NAME = "Later Gator";
var GET_FACT_MESSAGE = "";
var HELP_MESSAGE = "Just say later gator.";
var HELP_REPROMPT = "Need help?";
var STOP_MESSAGE = "";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "peace out, scout",
    "later, skater",
    "Sure of that, pussycat",
    "Fo' sho', buffalo",
    "Time to shoo, kangaroo",
    "Down the line<break time='.4s'/>porcupine",
    "later, po-tater",
    "Sure of that, pussycat",
    "Gotta spin, terrapin",
    "<emphasis level='strong'>Peace</emphasis> be with you",
    "See you soon you big baboon",
    "in an hour, sunflower",
    "toodle, poodle",
    "Take care, polar bear",
    "after a while, crocodile"
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
