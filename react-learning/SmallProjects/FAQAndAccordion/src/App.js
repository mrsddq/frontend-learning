import Question from "./Question";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Project 2: FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "What does this accordion project practice?",
    info:
      "It practices component composition, reusable question data, and local open-close state for each FAQ item."
  },
  {
    id: 2,
    title: "How should this be extended?",
    info:
      "Add keyboard focus styles, allow only one item to stay open at a time, and move the FAQ content into a separate data file."
  },
  {
    id: 3,
    title: "Why keep this in an archive?",
    info:
      "It shows early React practice without pretending to be a standalone production application."
  }
];
