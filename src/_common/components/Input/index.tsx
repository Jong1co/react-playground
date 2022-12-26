import React, { forwardRef } from "react";
import * as Styled from "./index.styles";
import { Props } from "./index.types";

const index = forwardRef(
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
        ref={forwardRef}>
        {children}
      </Styled.Input>
    );
  }
);

export default index;
