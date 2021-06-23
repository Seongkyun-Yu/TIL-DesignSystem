import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Themes/normalMode";

interface Props {
  children: string;
}

const H2: React.FC<Props> = ({ children }) => {
  return <St.H2>{children}</St.H2>;
};

const St = {
  H2: styled.h2`
    color: ${({ theme }: { theme: Theme }) => theme.font_color};
    font-weight: 500;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
  `,
};

export default H2;
