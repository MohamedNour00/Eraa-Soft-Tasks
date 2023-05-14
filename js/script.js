const fbChat = document.querySelector(".fb-chat");
const fbChatHeader = document.querySelector(".fb-chat-header");
const fbChatBody = document.querySelector(".fb-chat-body");

// Show the Facebook chat pop-up when the page loads
window.addEventListener("load", () => {
	fbChat.style.display = "block";
});

// Collapse or expand the Facebook chat pop-up when the header is clicked
fbChatHeader.addEventListener("click", () => {
	if (fbChatBody.style.display === "none") {
		fbChatBody.style.display = "block";
	} else {
		fbChatBody.style.display = "none";
	}
});