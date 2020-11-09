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
        content: "Should we use jquery or Fetch for Ajax"
    }],
    answers: [{
        answerId: "A1",
        quetionId: "Q1",
        upvotes: 2,
        conent: "JQuery"
    },
    {
        answerId: "A2",
        quetionId: "Q1",
        upvotes: 2,
        conent: "Fetch"
    },
    {
        answerId: "A3",
        quetionId: "Q2",
        upvotes: 2,
        conent: "Performance"
    },
    {
        answerId: "A4",
        quetionId: "Q2",
        upvotes: 2,
        conent: "Usability"
    }]
}

const app = new express();

app.use(express.static("dist"));

app.get('/', async (_req, res) => {
    const index = readFileSync(`public/index.html`, `utf8`);
    const rendered = renderToString(< App questions={data.questions} answer={data.answers}/>)
    res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);

console.info("npm is starting")