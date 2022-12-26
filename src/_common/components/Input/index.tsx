import React, { forwardRef } from "react";
import * as Styled from "./index.styles";
import { Props } from "./index.types";

const Input = forwardRef(
  (
    {
      borderRadius = 0,
      border = "1px solid black",
      fontWeight = 400,
      marginTop = 0,
      marginRight = 0,
      marginBottom = 0,
      marginLeft = 0,
      paddingTop = 0,
      paddingRight = 0,
      paddingBottom = 0,
      paddingLeft = 0,
      children,
      type = "text",
      value = "",
      ...rest
    }: React.PropsWithChildren<Props>,
    forwardRef: React.Ref<HTMLInputElement>
  ) => {
    return (
      <Styled.Input
        borderRadius={borderRadius}
        border={border}
        fontWeight={fontWeight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        ref={forwardRef}
        type={type}
        value={value}
        {...rest} // rest는 항상 마지막이여야 함
      >
        {children}
      </Styled.Input>
    );
  }
);

export default Input;
