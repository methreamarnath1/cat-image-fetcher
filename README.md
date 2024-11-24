# Cat Image Fetcher

A simple Node.js package to fetch random cat images using [The Cat API](https://thecatapi.com).

## Installation

Install the package:

```bash
npm install cat-image-fetcher
Usage
Fetch a Single Random Cat Image
javascript
Copy code
const { getRandomCatImage } = require('cat-image-fetcher');

getRandomCatImage().then(url => {
    console.log('Random Cat Image URL:', url);
}).catch(err => {
    console.error(err);
});
Fetch Multiple Random Cat Images
javascript
Copy code
const { getMultipleCatImages } = require('cat-image-fetcher');

getMultipleCatImages(3).then(urls => {
    console.log('Random Cat Image URLs:', urls);
}).catch(err => {
    console.error(err);
});
License
This project is licensed under the MIT License.
```
