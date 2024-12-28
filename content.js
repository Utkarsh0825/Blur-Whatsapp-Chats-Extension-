// Function to add blur class to elements
function blurElements() {
    // Selectors for WhatsApp elements (inspect WhatsApp Web to get these)
    // Examples (these might need adjustments based on WhatsApp updates):
    const chatListItems = document.querySelectorAll('div[aria-label]'); // Example: Chat list items
    const profilePictures = document.querySelectorAll('img[alt]'); // Example: Profile pictures
    const messageMedia = document.querySelectorAll('video, img[data-testid]'); // Example: Images and videos in messages

    chatListItems.forEach(item => item.classList.add('blurred'));
    profilePictures.forEach(pic => pic.classList.add('blurred'));
    messageMedia.forEach(media => media.classList.add('blurred'));

    // Select chat names. This selector is very likely to break with WhatsApp updates
    // You'll need to inspect the element to find the right selector.
    const chatNames = document.querySelectorAll('span[dir="auto"]');
    chatNames.forEach(name => name.classList.add('blurred'));

    //For messages
    const messages = document.querySelectorAll('.message-in .copyable-text');
    messages.forEach(message => message.classList.add('blurred'));
}

// Observe changes in the DOM to re-apply the blur after new messages load
const observer = new MutationObserver(blurElements);
const config = { childList: true, subtree: true }; // Observe changes to children and descendants
observer.observe(document.body, config);

// Initial blur when the script loads
blurElements();