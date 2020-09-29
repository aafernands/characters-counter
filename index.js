charactersCount = message.length;
messageLength = 148;
yourMessage = message;

function myFunction() {
	var message = prompt('Write a message:');
	alert(`You have written ${message.length} characters, you have ${148 - message.length} characters remaining.`);

	return (document.getElementById('yourMessage').innerHTML = yourMessage);

	return (document.getElementById('charactersCount').innerHTML = charactersCount);

	return (document.getElementById('messageLength').innerHTML = messageLength);

	return (document.getElementById('remainingCharacters').innerHTML = charactersCount - 148);
}
