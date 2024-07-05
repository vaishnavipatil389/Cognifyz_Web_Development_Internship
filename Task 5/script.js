document.addEventListener('DOMContentLoaded', function() {
    const endpointUrl = 'https://jsonplaceholder.typicode.com/posts';
    const postsContainer = document.getElementById('posts');

    fetch(endpointUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(posts => {
            posts.forEach(post => {
                const postElement = createPostElement(post);
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });

    function createPostElement(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        return postElement;
    }
});
