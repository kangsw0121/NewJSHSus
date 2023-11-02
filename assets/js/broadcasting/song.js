function addsong() {
    const songurl = document.getElementById('song-url').value.split("?")[0];

    if(songurl.trim() === '') {
        alert('url을 입력해주세요.');
        return;
    }else if(songurl.indexOf('https://open.spotify.com/track') === -1) {
        alert('잘못된 url 경로입니다.');
        return;
    }

    const songcode = songurl.replace('/track', '/embed/track');

    const iframes = document.querySelectorAll("iframe");
    for (const iframe of iframes) {
        if (iframe.src === songcode + "?utm_source=generator") {
            alert('이미 신청된 곡입니다.');
            return;
        }
    }

    const iframe = document.createElement("iframe");
    iframe.src = songcode + "?utm_source=generator";
    iframe.frameBorder = 0;
    iframe.allowfullscrean = "";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";

    document.getElementById("list").appendChild(iframe);

    alert('곡 신청이 완료되었습니다.');
} 