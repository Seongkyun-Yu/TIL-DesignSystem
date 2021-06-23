import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Themes/normalMode";

interface Props {
  children: string;
}

const H1: React.FC<Props> = ({ children }) => {
  return <St.H1>{children}</St.H1>;
};

const St = {
  H1: styled.h1`
    color: ${({ theme }: { theme: Theme }) => theme.font_color};
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
  `,
};

export default H1;
