import styled from "@emotion/styled";

export const HomeStyle = styled.div`
  .col {
    ${"" /* color: ${(props) => (props.screen.md ? '0' : '20px')}; */}
    font-size: 24px;
    background-color: ${(props) => props.screens.xs && "blue"};
    background-color: ${(props) =>
      props.screens.sm && props.screens.xs && "yellow"};
    background-color: ${(props) => props.screens.md && "black"};
    background-color: ${(props) => props.screens.lg && "green"};
    background-color: ${(props) => props.screens.xl && "white"};
    ${
      "" /* background-color: ${(props) =>
      props.screens.xl ? "white !important" : "blue"}; */
    }
    ${
      "" /* background-color: ${(props) => props.screens.lg && "blue !important"};
    background-color: ${(props) => props.screens.md && "yellow"};
    background-color: ${(props) => props.screens.sm && "black"};
    background-color: ${(props) => props.screens.xs && "#ff0bc1"}; */
    }
  }
`;
