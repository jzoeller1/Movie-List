// import express from 'express';
const express = require('express')
const app = express();
const port = 8082;

const knex = require('knex')(require('./knexfile.js')["development"])

app.get('/movies', (req, res) => {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
        'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(port, () => console.log(`Movie app running at http://localhost:${port}`))

