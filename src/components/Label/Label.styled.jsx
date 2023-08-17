import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIndicator = styled.div`
  width: 4px;
  height: 23px;
  background: linear-gradient(127deg, #ffb629 0%, #ffda56 50.72%, #ffd7a6 100%);
`;

export const StyledTextArea = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 3px 9px;

  color: ${({ bg }) => {
    switch (bg) {
      case "dark":
        return "#fff;";
      case "light":
        return "#1C1F35;";
      default:
        return "#fff;";
    }
  }};

  background: ${({ bg }) => {
    switch (bg) {
      case "dark":
        return "rgba(4, 28, 55, 0.5);";
      case "light":
        return "rgba(232, 232, 232, 0.50);";
      default:
        return "rgba(4, 28, 55, 0.5);";
    }
  }};
`;
