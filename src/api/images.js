export const getAllImages = async () => {
  try {
    const response = await fetch('http://localhost:3004/images');
    const images = await response.json();
    return images;
  } catch (error) {
    throw new Error(error.message);
  }
};
