export const speakText = (text: string, lang: string = "en-US") => {
  if (!text) {
    alert("No text to speak.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;

  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  speechSynthesis.speak(utterance);
};
