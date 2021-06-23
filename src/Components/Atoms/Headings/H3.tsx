import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Themes/normalMode";

interface Props {
  children: string;
}

const H3: React.FC<Props> = ({ children }) => {
  return <St.H3>{children}</St.H3>;
};

const St = {
  H3: styled.h3`
    color: ${({ theme }: { theme: Theme }) => theme.font_color};
    font-size: 1.17em;
    font-weight: 800;
    margin-top: 1em;
    margin-bottom: 1em;
  `,
};

export default H3;
