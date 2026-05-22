module.exports = function codeHandler(request, response) {
  response.type('text/plain');
  createReadStream(__filename).pipe(response);
};
