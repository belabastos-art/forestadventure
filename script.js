
function goToScene2() {

    document.getElementById('img1').classList.add('hidden');
    document.getElementById('img2').classList.remove('hidden');
    
    document.getElementById('scene1').classList.add('hidden');
    document.getElementById('scene2').classList.remove('hidden');
}

function goToScene3() {
    
    document.getElementById('scene2').classList.add('hidden');
    document.getElementById('scene3').classList.remove('hidden');
}
