const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const queries = require("./queries")
const cors = require("cors")
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res, next) => {
  queries
    .list("ideas")
    .then(ideas => {
      res.send( ideas )
    })
    .catch(next)
})

app.get("/:id", (req, res, next) => {
  queries
    .read("ideas", req.params.id)
    .then(ideas => {
      res.send( ideas )
    })
    .catch(next)
})

app.put("/:id", (req, res, next) => {
  queries
    .update("ideas", req.params.id, req.body)
    .then(ideas => {
      res.send( ideas )
    })
    .catch(next)
})

app.post("/", (req, res, next) => {
  queries
    .create("ideas", req.body)
    .then(ideas => {
      res.send( ideas )
    })
    .catch(next)
})

app.delete("/:id", (req, res, next) => {
  queries
    .delete("ideas", req.params.id)
    .then(ideas => {
      res.send( ideas )
    })
    .catch(next)
})

app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  })
})

module.exports = app
