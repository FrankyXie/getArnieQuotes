const { httpGet } = require('./mock-http-interface');
const resultTypeEnum = Object.freeze({ SUCCESS: 'Arnie Quote', FAIL: 'FAILURE' });

function addressQuotes(url) {
  return httpGet(url).then(result => {
    return {[result.status == 200 ?resultTypeEnum.SUCCESS: resultTypeEnum.FAIL] : JSON.parse(result.body).message}
  });
}

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  return Promise.all(urls.map(url => addressQuotes(url)));
  // return results;
};
module.exports = {
  getArnieQuotes,
};
