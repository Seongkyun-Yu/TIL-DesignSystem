import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Themes/normalMode";

interface Props {
  children: string;
}

const H4: React.FC<Props> = ({ children }) => {
  return <St.H4>{children}</St.H4>;
};

const St = {
  H4: styled.h4`
    color: ${({ theme }: { theme: Theme }) => theme.font_color};
    font-size: 1em;
    font-weight: 500;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
  `,
};

export default H4;
