function goToScene2() {
    // Hide forest image, show capybara image
    document.getElementById('img1').classList.add('hidden');
    document.getElementById('img2').classList.remove('hidden');
    
    // Hide scene 1, show scene 2
    document.getElementById('scene1').classList.add('hidden');
    document.getElementById('scene2').classList.remove('hidden');
}

function goToScene3() {
    // Hide scene 2, show scene 3
    document.getElementById('scene2').classList.add('hidden');
    document.getElementById('scene3').classList.remove('hidden');
}
