let likeCount = 0;

document.getElementById('likeButton').addEventListener('click', function() {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount + ' Likes';
});

let dislikeCount = 0;

document.getElementById('dislikeButton').addEventListener('click', function() {
    dislikeCount++;
    document.getElementById('dislikeCount').innerText = dislikeCount + ' Dislikes';
});

