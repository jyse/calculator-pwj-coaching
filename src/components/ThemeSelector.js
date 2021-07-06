import React, { useState } from "react";
import styled from "styled-components";
import { getFromLS } from "../utils/storage";
import { useTheme } from "../theme/useTheme";
import _ from "lodash";

export const ThemeSelector = (props) => {
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
    props.setter(selectedTheme);
  };

  const ThemeCard = (props) => {
    return (
      <Wrapper>
        <Buttons>
          <ThemeButton
            onClick={(theme) => themeSwitcher(props.theme)}
            style={{
              backgroundColor: `${data["light"].colors.body}`,
            }}
          ></ThemeButton>
          <ThemeButtonDark> Dark </ThemeButtonDark>
          <ThemeButtonCustom> Custom </ThemeButtonCustom>
        </Buttons>
      </Wrapper>
    );
  };

  return (
    <div>
      <ThemeCard theme={data["light"]} key={data["light"].id} />
    </div>
  );
};

export default ThemeSelector;

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
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

const ThemeButton = styled.div``;

const ThemeButtonDark = styled(ThemeButton)`
  background-color: black;
  color: white;
`;

const ThemeButtonCustom = styled(ThemeButton)`
  background-color: purple;
  color: pink;
`;
