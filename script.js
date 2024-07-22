let speech = new SpeechSynthesisUtterance()
document.querySelector("#btn").addEventListener("click",function(){
    speech.text = document.querySelector("#input").value
    window.speechSynthesis.speak(speech)
    speech.voice = window.speechSynthesis.getVoices()
}
)