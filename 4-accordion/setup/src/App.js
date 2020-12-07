import React, { useState } from "react";
import questions from "./data";
import Question from "./Question";

function App() {
  const [allQuestions, setAllQuestions] = useState(questions);
  return (
    <main>
      <section className="container">
        <header className="grid-area">
          <h3>Questions And Answers About Login</h3>
          <div>
            {allQuestions.map((question) => (
              <Question key={question.id} {...question} />
            ))}
          </div>
        </header>
      </section>
    </main>
  );
}

export default App;
