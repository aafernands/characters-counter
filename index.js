var tweet = prompt('Write a message:');

tweetCount = tweet.length;
tweetLength = 148;
YourMessage = tweet;

alert('You have written ' + tweet.length + ' characters, you have ' + (148 - tweet.length) + ' characters remaining.');

document.getElementById('YourMessage').innerHTML = YourMessage;

document.getElementById('tweetCount').innerHTML = tweetCount;

document.getElementById('remainingCharacters').innerHTML = tweetCount - 148;

document.getElementById('tweetLength').innerHTML = tweetLength;
