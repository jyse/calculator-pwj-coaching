import React, { useState } from "react";
import styled from "styled-components";
import { getFromLS } from "../utils/storage";
import { useTheme } from "../theme/useTheme";
import _ from "lodash";

export const ThemeSelector = (props) => {
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState(_.keys(data));
  const { setMode } = useTheme();

  const Buttons = (props) => {
    console.log(props, "what is in props at Button");
    console.log(props.theme, "what is theme?");
    return (
      <Button
        style={{
          backgroundColor: `${props.theme.colors.button.background}`,
          color: `${props.theme.colors.button.text}`,
          fontFamily: `${props.theme.font}`,
        }}
      >
        {props.theme.name}
      </Button>
    );
  };

  return (
    <Wrapper>
      {themes.length > 0 &&
        themes.map((theme) => (
          <Buttons theme={data[theme]} key={data[theme]} />
        ))}
    </Wrapper>
  );
};

export default ThemeSelector;

const Wrapper = styled.div`
  width: 100%;
  height: 105px;
  background-color: rgb(0, 0, 0, 0.45);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Buttons = styled.div`
  width: 350px;
  height: 40px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: black;
  margin: 10px;
  padding: 20px;
`;
