// Sample blog post data
const blogPosts = [
    {
        date: 'March 20, 2024',
        title: 'First Post',
        content: 'This is the first blog post. Welcome to my blog!'
    },
    {
        date: 'March 22, 2024',
        title: 'Second Post',
        content: 'This is the second blog post. Thanks for reading!'
    }
];

// Function to display blog posts
function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Loop through each blog post and create HTML elements to display them
    blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.textContent = post.date;

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = post.title;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        contentDiv.textContent = post.content;

        postDiv.appendChild(dateDiv);
        postDiv.appendChild(titleDiv);
        postDiv.appendChild(contentDiv);

        blogPostsContainer.appendChild(postDiv);
    });
}

// Call the function to display blog posts when the page loads
window.onload = displayBlogPosts;