import lighthouse from '@lighthouse-web3/sdk'
import config from './config';

const test_file_path="/Users/peachey.chen/Downloads/download.png"

const uploadResponse = await lighthouse.upload(
  test_file_path, 
  config.API_KEY
);

console.log(uploadResponse);
