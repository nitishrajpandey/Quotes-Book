
export const handleOnClickTwitter = (tweetText) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
    )}`;
    window.open(twitterUrl, "_blank")
}


// text to audio converter
export const handelOnClickMic = (text) => {
    if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        console.log(utterance);
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Text-to-speech is not supported in this browser.");
    }
};


// handel copy text

export const handelOnClickCopyText = (item) => {
    navigator.clipboard.writeText(item);
};

