import React, { useState } from "react";
import $ from "jquery";
const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState(0);

  // clearing
  const handelclear = () => {
    setFormula("");
    setResult(0);
  };

  const handelcalculate = (event) => {
    const value = event.target.value;
    if (value === "=") {
      try {
        const evaluatedResult = eval(formula.replace("x", "*"));
        setResult(evaluatedResult);
        setFormula("");
      } catch (error) {
        setResult("Error");
      }
    } else {
      // Append value to the formula
      setFormula((prev) => prev + value);
    }
  };

  return (
    <div className="main_container">
      <div className="calculator_and_author_container">
        <div className="claculator_place">
          {/* out put show place */}
          <div className="flex_the_input">
            <div className="formulaScreen">{formula}</div>
            <div className="outputScreen" id="display">
              {result}
            </div>
          </div>

          {/* btn-container  */}
          <div className="btn_container">
            <button id="clear" value="AC" onClick={handelclear}>
              AC
            </button>

            <button id="devide" value="/" onClick={handelcalculate}>
              /
            </button>

            <button id="multiply" value="x" onClick={handelcalculate}>
              x
            </button>

            <button id="seven" value="7" onClick={handelcalculate}>
              7
            </button>
            <button id="eight" value="8" onClick={handelcalculate}>
              8
            </button>

            <button id="nine" value="9" onClick={handelcalculate}>
              9
            </button>

            <button id="subtract" value="-" onClick={handelcalculate}>
              -
            </button>

            <button id="four" value="4" onClick={handelcalculate}>
              4
            </button>
            <button id="five" value="5" onClick={handelcalculate}>
              5
            </button>
            <button id="six" value="6" onClick={handelcalculate}>
              6
            </button>

            <button id="add" value="+" onClick={handelcalculate}>
              +
            </button>
            <button id="one" value="1" onClick={handelcalculate}>
              1
            </button>

            <button id="tow" value="2" onClick={handelcalculate}>
              2
            </button>
            <button id="three" value="3" onClick={handelcalculate}>
              3
            </button>

            <button id="zero" value="0" onClick={handelcalculate}>
              0
            </button>
            <button id="decimal" value="." onClick={handelcalculate}>
              .
            </button>
            <button id="equals" value="=" onClick={handelcalculate}>
              =
            </button>
          </div>
        </div>

        {/* outside of the calculator app will be the author */}
        <div className="author">
          Designed and Coded By <br />
          Teklu
        </div>
      </div>
    </div>
  );
};

export default Calculator;
