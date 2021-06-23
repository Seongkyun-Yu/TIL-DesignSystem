import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Themes/normalMode";

interface Props {
  onClick?: () => void;
  children: string;
}

const NoBtn: React.FC<Props> = ({ onClick, children }) => {
  return <St.Button onClick={onClick}>{children}</St.Button>;
};

const St = {
  Button: styled.button`
    background-color: ${({ theme }: { theme: Theme }) =>
      theme.btn_fail_background_color};

    color: ${({ theme }: { theme: Theme }) => theme.fail_color};

    font-weight: 500;
    border: 0;
    outline: 0;
    min-width: 130;
    width: 50%;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
  `,
};

export default NoBtn;
