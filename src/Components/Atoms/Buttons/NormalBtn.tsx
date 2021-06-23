import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Themes/normalMode";
import { white } from "../../../Themes/Palettes/colorPalette";

interface Props {
  onClick?: () => void;
  children: string;
  color?: string;
}

const NormalBtn: React.FC<Props> = ({ onClick, children, color }) => {
  return (
    <St.Button onClick={onClick} color={color}>
      {children}
    </St.Button>
  );
};

const St = {
  Button: styled.button`
    background-color: ${({ color, theme }: { color?: string; theme: Theme }) =>
      color || theme.btn_default_background_color};

    color: ${({ color, theme }: { color?: string; theme: Theme }) =>
      color ? white : theme.font_color};

    font-weight: 500;
    border: 0;
    outline: 0;
    width: 130px;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
  `,
};

export default NormalBtn;
