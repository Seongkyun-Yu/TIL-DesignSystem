import { Theme } from "./normalMode";
import {
  black,
  gray100,
  gray500,
  green100,
  green200,
  green300,
  green400,
  green500,
  navy500,
  purple300,
  purple500,
  red100,
  red200,
  red300,
  red500,
  white,
} from "./Palettes/colorPalette";

const main_color = purple300;
const sub_color = purple500;

const font_color = gray100;
const background_color = navy500;

const success_color = green500;
const fail_color = red500;

const btn_default_background_color = gray500;
const btn_success_background_color = green200;
const btn_fail_background_color = red200;

export const darkTheme: Theme = {
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
