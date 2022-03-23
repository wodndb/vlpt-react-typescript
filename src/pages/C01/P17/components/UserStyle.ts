import styled from "styled-components";

const UserStyle = styled.b<{active:boolean}>`
    cursor: pointer;
    color: ${(props) => (props.active ? 'green' : 'black')};
`

export default UserStyle;