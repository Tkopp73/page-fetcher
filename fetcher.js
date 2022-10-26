const request = require('request');
const fs = require('fs');
let website = process.argv[2];
let file = process.argv[3];

const makeTheRequest = (website, file) => {
  request(website, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    
    writingTheFile(body, file);
  });
};

const writingTheFile = (content, file) => {
  fs.writeFile(file, content, error => {
    if (error) {
      console.log(error);
    }
    console.log(`Downloaded and saved ${content.length} bytes to ${file}`)
  
  });
}

makeTheRequest(website, file);
