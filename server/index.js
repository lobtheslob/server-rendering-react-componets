import React from 'react';
import express from 'express';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server'

import { App } from '../client/App';


const data = {
    questions: [{
        questionId: "Q1",
        content: "Should we use jquery or Fetch for Ajax"
    },
    {
        questionId: "Q2",
        content: "What is the best feature of React"
    }],
    answers: [{
        answerId: "A1",
        questionId: "Q1",
        upvotes: 2,
        content: "JQuery"
    },
    {
        answerId: "A2",
        questionId: "Q1",
        upvotes: 2,
        content: "Fetch"
    },
    {
        answerId: "A3",
        questionId: "Q2",
        upvotes: 2,
        content: "Performance"
    },
    {
        answerId: "A4",
        questionId: "Q2",
        upvotes: 2,
        content: "Usability"
    }]
}

const app = new express();

app.use(express.static("dist"));

app.get('/', async (_req, res) => {
    const index = readFileSync(`public/index.html`, `utf8`);
    const rendered = renderToString(< App {... data}/>)
    res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);

console.info("npm is starting")