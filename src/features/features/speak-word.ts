export const speakWord = (text: string, lang: string = "en") => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;

  utterance.rate =  0.7

  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) => v.lang === lang);
  if (voice) utterance.voice = voice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
