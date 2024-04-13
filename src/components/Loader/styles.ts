import styled from "styled-components";

export const Spinner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: max-content;
  min-height: 62px;

  > img {
    animation: rotate 1s linear infinite;
    width: 62px;

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
