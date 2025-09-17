function playSound() {
    const audio = new (window.AudioContext || window.webkitAudioContext)();
    const beep = audio.createOscillator();
    beep.frequency.value = 800;
    beep.connect(audio.destination);
    beep.start();
    beep.stop(audio.currentTime + 0.2);
}
    
function goToScene2() {
    playSound();
    document.getElementById('img1').classList.add('hidden');
    document.getElementById('img2').classList.remove('hidden');
    document.getElementById('scene1').classList.add('hidden');
    document.getElementById('scene2').classList.remove('hidden');
}

function goToScene3() {
    playSound();
    document.getElementById('scene2').classList.add('hidden');
    document.getElementById('scene3').classList.remove('hidden');
}
