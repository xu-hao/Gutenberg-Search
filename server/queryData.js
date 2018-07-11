const elasticsearch = require('elasticsearch') ①
const client = new elasticsearch.Client({ host: { host : "localhost", port : 9200 } }) ②
async function queryBookData (term) { ③
  client.create({
    index: "library",
    type: "book",
    body: {
      author: author,
      title: title,
      text: paragraphs
    }
  }) ④
}
