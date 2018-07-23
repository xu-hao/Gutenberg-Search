const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({ host: { host : "localhost", port : 9200 } })

async function queryBookData (term) {
  return client.search({ 
    index : "library", type : "_doc", 
    body: {
      query: { 
        match: { text: { query: term } } 
      }
    } 
  })
}

const term = "glass"
queryBookData(term).then(hits => {
  console.log(hits)
})


