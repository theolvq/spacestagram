const {default: axios} = require("axios");

exports.handler = async function (event, context) {
  await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return {
    statusCode: 200,
    event,
    context,
    body: {message: "hello, world"},
  };
};
