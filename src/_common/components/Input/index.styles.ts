import styled from "@emotion/styled";
import { InputProps } from "./index.types";

export const Input = styled.input<Required<InputProps>>`
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border: ${({ border }) => border};
  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};
  margin: ${({ marginTop, marginBottom, marginLeft, marginRight }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
