import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Themes/normalMode";
import { white } from "../../../Themes/Palettes/colorPalette";
import { OkBtn, NoBtn } from "../../Atoms/Buttons";

interface Props {
  children: string;
}

const OkCancelBtns: React.FC = () => {
  return (
    <St.OkCancelBtns>
      <OkBtn>OK</OkBtn>
      <NoBtn>NO</NoBtn>
    </St.OkCancelBtns>
  );
};

const St = {
  OkCancelBtns: styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #e4e4e4;
    margin: 10px;
  `,
};

export default OkCancelBtns;
