const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({ host: { host : "localhost", port : 9200 } })

// insert your code here

const term = "glass"
queryBookData(term).then(hits => {
  console.log(hits)
}


