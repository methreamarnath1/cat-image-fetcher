const fetch = require("node-fetch");

/**
 * Fetches a random cat image URL from the "The Cat API".
 * @returns {Promise<string>} A promise that resolves to a cat image URL.
 */
async function getRandomCatImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  if (!response.ok) {
    throw new Error("Failed to fetch a cat image.");
  }
  const data = await response.json();
  return data[0]?.url || "No image available";
}

/**
 * Fetches a specified number of random cat image URLs.
 * @param {number} count Number of cat images to fetch.
 * @returns {Promise<string[]>} A promise that resolves to an array of cat image URLs.
 */
async function getMultipleCatImages(count = 1) {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${count}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch cat images.");
  }
  const data = await response.json();
  return data.map((cat) => cat.url);
}

module.exports = { getRandomCatImage, getMultipleCatImages };
