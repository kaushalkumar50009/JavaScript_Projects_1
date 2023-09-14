const content = document.querySelector(".container");

let postCount = 1; // Initialize post count
let pageCout = 1; // Initialize page count
let limit = 10; // Set the number of posts to fetch per request

let accessData = async () => {
  try {
    loader.style.display = "block"; // Show the loader

    // Fetch posts data from the JSONPlaceholder API with pagination
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageCout}`
    );
    const data = await response.json();

    showData(data); // Display the fetched data
  } catch (e) {
    throw e;
  } finally {
    loader.style.display = "none"; // Hide the loader when done
  }
};

function showData(data) {
  // Generate HTML for each post in the data
  const printData = data.map((items) => {
    return `
      <div class="posts">
        <div class="post_count">${postCount++}</div>
        <div class="post_title">
          ${items.title}
        </div>
        <div class="post_body">
          ${items.body}
        </div>
      </div>`;
  });

  let sendData = printData.join("");

  // Insert the generated HTML into the content container
  content.insertAdjacentHTML("beforeend", sendData);
}

const showMoreData = () => {
  setTimeout(() => {
    pageCout++; // Increment the page count for the next request
    accessData(); // Fetch and display more data
  }, 100);
};

// Listen for scroll events to trigger loading more data
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    showMoreData(); // Load more data when scrolling to the bottom
  }
});

// Fetch and display initial data when the page loads
window.addEventListener("load", () => {
  accessData();
});

// use this link https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight to understand about scrollHeight, scrollTop, clientHeight
