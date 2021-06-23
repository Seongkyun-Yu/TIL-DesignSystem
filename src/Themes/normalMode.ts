import {
  black,
  brown100,
  gray100,
  gray200,
  green100,
  green300,
  purple300,
  purple500,
  red100,
  red300,
  white,
} from "./Palettes/colorPalette";

export interface Theme {
  main_color: string;
  sub_color: string;
  font_color: string;
  background_color: string;
  success_color: string;
  fail_color: string;
  btn_default_background_color: string;
  btn_success_background_color: string;
  btn_fail_background_color: string;
}

const main_color = purple300;
const sub_color = purple500;

const font_color = black;
const background_color = brown100;

const success_color = green300;
const fail_color = red300;

const btn_default_background_color = gray100;
const btn_success_background_color = green100;
const btn_fail_background_color = red100;

export const normalTheme: Theme = {
  main_color,
  sub_color,
  font_color,
  background_color,
  success_color,
  fail_color,
  btn_default_background_color,
  btn_success_background_color,
  btn_fail_background_color,
};
