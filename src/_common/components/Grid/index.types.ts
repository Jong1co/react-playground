import type { CSSProperties, ElementType, HTMLAttributes } from "react";
// import theme from "../../../styles/theme";

export interface GridProps {
  /**
   * 엘리먼트의 타입을 설정합니다.
   *
   * @default div
   */
  as?: ElementType;

  /**
   * grid의 display 속성을 설정합니다.
   *
   * @default 'grid'
   */
  display?: "grid";

  /**
   * flexbox의 flex-direction 속성을 설정합니다.
   *
   * @default 'row'
   */
  direction?: CSSProperties["flexDirection"];

  /**
   * flexbox의 flex-wrap 속성을 설정합니다.
   *
   * @default 'nowrap'
   */
  wrap?: CSSProperties["flexWrap"];

  /**
   * flexbox의 justify-content 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  justifyContent?: CSSProperties["justifyContent"];

  /**
   * flexbox의 align-items 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  alignItems?: CSSProperties["alignItems"];

  /**
   * flexbox의 align-content 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  alignContent?: CSSProperties["alignContent"];

  /**
   * Flex의 배경 색상을 설정합니다.
   *
   * @default 'inherit'
   */
  // backgroundColor?: keyof typeof theme.colors;

  /**
   * Flex의 gap을 설정합니다.
   *
   * @default 0
   */
  gap?: number;
}

export interface Props extends HTMLAttributes<HTMLElement>, GridProps {}
