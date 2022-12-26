import type { CSSProperties, ElementType, HTMLAttributes } from "react";
// import theme from "../../../styles/theme";

export interface InputProps {
  /**
   * Input의 radius를 설정합니다.
   *
   * @default 0
   */
  borderRadius?: number;

  /**
   * Input의 border를 설정합니다.
   *
   * @default 1px solid black;
   */
  border?: CSSProperties["border"];

  /**
   * font의 두께를 설정합니다.
   *
   * @default 400
   */
  fontWeight?: CSSProperties["fontWeight"];

  /**
   * margin 상단을 설정합니다.
   *
   * @default 0
   */
  marginTop?: number;

  /**
   * margin 우측을 설정합니다.
   *
   * @default 0
   */
  marginRight?: number;

  /**
   * margin 하단을 설정합니다.
   *
   * @default 0
   */
  marginBottom?: number;

  /**
   * margin 좌측을 설정합니다.
   *
   * @default 0
   */
  marginLeft?: number;

  /**
   * padding 상단을 설정합니다.
   *
   * @default 0
   */
  paddingTop?: number;

  /**
   * padding 우측을 설정합니다.
   *
   * @default 0
   */
  paddingRight?: number;

  /**
   * padding 하단을 설정합니다.
   *
   * @default 0
   */
  paddingBottom?: number;

  /**
   * padding 좌측을 설정합니다.
   *
   * @default 0
   */
  paddingLeft?: number;

  /**
   * type을 설정합니다.
   *
   * @default 'text'
   */
  type?: React.HTMLInputTypeAttribute;

  /**
   * value를 설정합니다.
   *
   *
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface Props extends HTMLAttributes<HTMLInputElement>, InputProps {}
