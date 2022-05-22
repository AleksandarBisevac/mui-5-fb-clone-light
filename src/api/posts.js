export const getAllPosts = async () => {
  try {
    const response = await fetch(
      'http://localhost:3004/posts?_sort=date&__order=desc'
    );
    const posts = await response.json();
    return posts.reverse();
  } catch (error) {
    throw new Error(error.message);
  }
};
