import React from 'react';

export const App = ({questions, answers, handleAnswerModifyVotes}) => (
     <div>
        <h1>
            Q&A Tool
        </h1>                   
    
     {questions.map(({questionId, content}) => (
         <div key={questionId}> 
            <h3>
                {content}
            </h3>
            <div>
               {answers.filter(answer => answer.questionId === questionId).map(
                   ({content, upvotes, answerId})=>(
                       <div key={answerId}>

                           <span>
                               {content} - {upvotes}
                           </span>
                        <button onClick={() => handleAnswerModifyVotes(answerId, 1)}> + </button>
                        <button onClick={() => handleAnswerModifyVotes(answerId, -1)}> - </button>
                       </div>
                   )
               )}
            </div>
        </div>
     ))}
    </div>
)