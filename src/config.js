// require('dotenv').config();

const config = {
  awsAccessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  sesAccessKeyId: process.env.REACT_APP_SES_ACCESS_KEY_ID,
  sesSecretAccessKey: process.env.REACT_APP_SES_SECRET_ACCESS_KEY,
};
console.log(process.env.REACT_APP_SES_ACCESS_KEY_ID);

export default config;
