import styled from "styled-components";
import { useState } from "react";

const Calculator = (props) => {
  const [value, setValue] = useState("");
  const [firstValue, setFirstValue] = useState();
  const [action, setAction] = useState("");

  const getValue = (input) => {
    let tempValue = value;
    tempValue += input;
    setValue(tempValue);
    console.log(tempValue);
  }

  const getAction = (inputAction) => {
    setAction(inputAction);
    setFirstValue(value);
    setValue("")
    console.log(inputAction);

  }

  const getResult = () => {
    console.log(firstValue, action, value);
    calculateMe();
    setValue("");
  }

  const calculateMe = () => {
    switch (action) {
      case 'plus':
        let temp = parseFloat(firstValue) + parseFloat(value)
        setValue(temp);
        break;
      case 'minus':
        setValue(parseFloat(firstValue) - parseFloat(value));
        break;
      case 'multiply':
        setValue(parseFloat(firstValue) * parseFloat(value));
        break;
      case 'divide':
        setValue(parseFloat(firstValue) / parseFloat(value));
        break;
      default:
        setValue("Should not happen");
    }
  }

  return (
    <Wrapper>
      <Settings>
        <h2>calc</h2>
      </Settings>
      <Input
        type="string"
        placeholder="0"
        value={value ? value : firstValue}
        style={{
          backgroundColor: `${props.theme.colors.input.background}`,
        }}
      />
      <Buttons>
        <Button onClick={(e) => getValue(e.target.innerText)}> 7 </Button>
        <Button onClick={(e) => getValue(e.target.innerText)}> 8 </Button>
        <Button onClick={(e) => getValue(e.target.innerText)}> 9 </Button>
        <DeleteButton> Del </DeleteButton>
        <Button onClick={(e) => getValue(e.target.innerText)}> 4 </Button>
        <Button onClick={(e) => getValue(e.target.innerText)}> 5 </Button>
        <Button onClick={(e) => getValue(e.target.innerText)}> 6 </Button>
        <Button onClick={() => getAction("plus")}> + </Button>

        <Button onClick={(e) => getValue(e.target.innerText)}> 1 </Button>
        <Button onClick={(e) => getValue(e.target.innerText)}> 2 </Button>
        <Button onClick={(e) => getValue(e.target.innerText)}> 3 </Button>
        <Button onClick={() => getAction("minus")}> - </Button>

        <Button onClick={(e) => getValue(e.target.innerText)}> . </Button>
        <Button onClick={(e) => getValue(e.target.innerText)}> 0 </Button>

        <Button onClick={() => getAction("divide")}> / </Button>
        <Button onClick={() => getAction("multiply")}> x </Button>

        <ResetButton onClick={() => setValue("")}>
          <p> Reset</p>
        </ResetButton>
        <EqualsButton onClick={() => getResult()}>
          <p> = </p>
        </EqualsButton>
      </Buttons>
    </Wrapper>
  );
};

export default Calculator;

const Wrapper = styled.div`
  width: 540px;
  height: 708px;
  margin-top: 75px;
  border-radius
`;

const Settings = styled.div`
  height: 44px;
  color: white;
  display: flex;

  h2 {
    font-family: Spartan;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    color: black;
    line-height: 36px;
    letter-spacing: -0.53px;
    text-align: center;
  }
`;

const Input = styled.input`
  background-color: #181f33;
  width: 100%;
  height: 128px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 15px;
  border: none;
  padding: 25px;

  text-align: right;
  color: white;
  font-size: 50px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  background-color: #242d44;
  padding: 25px;
  width: 100%;

  border-radius: 8px;

  display: grid;
  justify-items: center;
  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  grid-gap: 15px;

  p {
    font-family: Spartan;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.3333333432674408px;
    text-align: center;
  }
`;

const Button = styled.div`
  background-color: #eae3dc;
  font-size: 25px;
  border-radius: 6px;
  width: 100%;
  height: 64px;
  color: #434a59;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: aquamarine;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #647198;
  color: white;
`;

const ResetButton = styled(Button)`
  background-color: #647198;
  grid-column: span 2;
  width: 100%;
  color: white;
`;

const EqualsButton = styled(Button)`
  background-color: #d03f2f;
  grid-column: span 2;
  width: 100%;
  color: white;
`;