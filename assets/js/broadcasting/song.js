function addsong() {
    const titleInput = document.getElementById('title-input');
    const artistInput = document.getElementById('artist-input');
    const urlInput = document.getElementById('url-input');
    const songList = document.getElementById('songList');

    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();
    const url = urlInput.value.trim();

    if (title === '' || artist === '' || url === '') {
        alert('곡 정보를 입력해주세요.');
        return;
    }

    if (title.length >= MAX_NAMES) {
        alert('신청곡이 가득 찼습니다.');
        return;
    }

    const maindiv = document.createElement('div');
    const songdiv = document.createElement('div');
    const urla = document.createElement('a');

    const songtxt = document.createTextNode('&{artist} - ${title}');
    const urltxt = document.createTextNode('${url}');

    songdiv.appendChild(songtxt);
    urla.appendChild(urltxt);

    maindiv.appendChild(songdiv);
    maindiv.appendChild(urla);

    const songlistDiv = document.getElementById('song-list');
    songlistdivDiv.appendChild(maindiv);
} 