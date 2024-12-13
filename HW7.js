const nameDisplay = document.querySelector('.name-display');
const editBtn = document.querySelector('.edit-btn');
const addMusicBtn = document.querySelector('.add-music-btn');
const musicAddForm = document.querySelector('.music-add-form');
const musicLinkInput = document.querySelector('.music-link-input');
const musicTitleInput = document.querySelector('.music-title-input');
const submitBtn = document.querySelector('.submit-btn');
const musicGrid = document.querySelector('.music-grid');

editBtn.addEventListener('click', () => {
    if (editBtn.textContent === 'Edit') {
        const nameInput = document.createElement('input');
        nameInput.value = nameDisplay.textContent;
        nameInput.classList.add('name-input');
        nameDisplay.parentNode.insertBefore(nameInput, nameDisplay);
        nameDisplay.style.display = 'none';
        editBtn.textContent = 'Save';
    }
    else {
        const newName = document.querySelector('.name-input').value;
        nameDisplay.textContent = newName;
        document.querySelector('.name-input').remove();
        nameDisplay.style.display = 'block';
        editBtn.textContent = 'Edit';
    }
});

addMusicBtn.addEventListener('click', () => {
    musicAddForm.classList.toggle('hidden');
});

submitBtn.addEventListener('click', () => {
    const musicLink = musicLinkInput.value;
    const musicTitle = musicTitleInput.value;

    if (musicLink && musicTitle) {
        const newMusicItem = document.createElement('div');
        newMusicItem.innerHTML = `
            <a href="${musicLink}" target="_blank">
                <img src="spotify.png" alt="${musicTitle}">
            </a>
            <p><strong class="music-title">${musicTitle}</strong></p>
        `;
        musicGrid.appendChild(newMusicItem);

        musicLinkInput.value = '';
        musicTitleInput.value = '';
        musicAddForm.classList.add('hidden');
    }
    else {
        alert('Please fill in both the music link and title.');
    }
});