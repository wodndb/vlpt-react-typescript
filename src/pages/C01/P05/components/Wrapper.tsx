import React from "react";
import styled from "styled-components";

type WrapperProps = {
  children: JSX.Element;
}

const WrapperStyle = styled.div`
  border: 2px solid black;
  padding: 16px;
`

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  return (
    <WrapperStyle>
      {children}
    </WrapperStyle>
  )
}

export default Wrapper;