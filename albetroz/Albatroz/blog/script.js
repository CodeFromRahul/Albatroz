// NFT Blog Platform JavaScript

// Sample data for blog posts (replace with your own logic to fetch or store data)
let blogPosts = [];

// Function to display the blog posts
function displayBlogPosts() {
  const blogPostsContainer = document.getElementById('blogPosts');
  blogPostsContainer.innerHTML = '';

  blogPosts.forEach((post) => {
    const blogPostElement = document.createElement('div');
    blogPostElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <img src="${post.nftImage}" alt="NFT Image">
    `;

    blogPostsContainer.appendChild(blogPostElement);
  });
}

// Function to handle blog post submission
function handleBlogPostSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const nftImage = document.getElementById('nftImage').value;

  // Here you can implement the logic to create and store the blog post with the NFT image
  const newPost = {
    title: title,
    content: content,
    nftImage: nftImage,
  };

  blogPosts.push(newPost);

  // Clear the form fields
  event.target.reset();

  // Update the displayed blog posts
  displayBlogPosts();
}

// Add event listener to the blog form
const blogForm = document.getElementById('blogForm');
blogForm.addEventListener('submit', handleBlogPostSubmit);

// Initial display of blog posts
displayBlogPosts();