import styled from "styled-components";

export const SpinLoader = styled.div`
  margin: 0 auto;
  width: 3rem;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  svg {
    width: 100%;
    height: auto;
    fill: url(#spin-gradient);
    animation: loader-spin infinite 2s linear;
  }

  @keyframes loader-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
