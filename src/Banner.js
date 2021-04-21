import React from "react";
import "./Banner.css";
function Banner() {
  function handleClick() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreButton");

    if (moreText.style.display !== "none") {
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
  }
  return (
    <div className="Banner">
      <div className="Banner__content">
        <h1>Logic</h1>
        <h3>
          Stretch your analytic muscles with knights, knaves, logic gates, and
          more!
        </h3>
        <p>
          The beginning of our introductory math journey is Logic. Through these
          challenging problem solving exercises, you'll construct the critical
          thinking skills that are the basis for mathematical reasoning.
        </p>

        <p>
          You'll use limited information to make predictions – eliminating the
          impossible to uncover the truth. This course builds up to some truly
          mind-bending challenges!
          <button id="moreButton" onClick={handleClick}>
            Read More
          </button>
        </p>
        <div id="more">
          <p>
            By the end of this course, you'll be able to spot logical fallacies,
            navigate some strategic game theory, understand machine logic, and
            use the symbolic languages of logic to understand fun riddles.
          </p>
          <h5>Topics Covered</h5>
          <div className="topics">
            <ul>
              <li>Binary</li>
              <li>Truth Tables</li>
              <li>Logic Gates</li>
              <li>Venn and Euler Diagrams</li>
              <li>Propositional Logic</li>
              <li>The Square of Opposition</li>
            </ul>
            <ul>
              <li>De Morgan's Laws</li>
              <li>Inclusive and Exclusive OR</li>
              <li>Combinatorics</li>
              <li>Knight and Knave Puzzles</li>
              <li>Combinatorial Game Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Banner__imageCard">
        <img
          src="https://image.shutterstock.com/image-photo/getting-knowledge-solving-problem-logical-260nw-1356778694.jpg"
          alt="Big Card"
        />
        <div className="Banner__cardStats">
          <div className="cardStats_quiz">
            <strong>37</strong>
            <span>Interactive Quizzes</span>
          </div>
          <div className="cardStats_concepts">
            <strong>265+</strong>
            <span>Concepts and exercises</span>
          </div>
        </div>
        <div className="cadStats_Button">
          <button>Start Course</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
