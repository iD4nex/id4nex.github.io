document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");

    if (postsContainer) {
        const posts = [
            "posts/post1.md",
            "posts/post2.md"
        ];

        posts.forEach(post => {
            fetch(post)
                .then(response => response.text())
                .then(text => {
                    const article = document.createElement("article");
                    article.innerHTML = marked.parse(text);
                    postsContainer.appendChild(article);
                })
                .catch(err => console.error("Error cargando el post:", err));
        });
    }
});
