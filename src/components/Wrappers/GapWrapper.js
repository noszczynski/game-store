import styled from "styled-components";

// render container with padding among items

// columns [Number] or columns [Array[Strings]]
// rows [String] or rows [Array[Strings]]
// gap [String]
// width [String]

// <GapWrapper columns={["200px", "10px", "1fr"]} rows={'100px'} gap={"3rem"} width={'100%'}>

const GapWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => {
    if (!columns) return "auto auto";
    else {
      switch (typeof columns) {
        case "object":
          return columns.join(" ");
        case "number":
          return `${"auto ".repeat(columns)}`;
        case "string":
          return `${"auto ".repeat(Number(columns))}`;
        default:
          return "auto auto";
      }
    }
  }};
  gap: ${({ gap, theme }) => (gap ? gap : theme.sizes.padding.lite)};
  ${({ width }) => (width ? `width: ${width}` : "")};
  ${({ rows }) =>
    rows
      ? `grid-auto-rows: ${typeof rows === "object" ? rows.join(" ") : rows}`
      : ""};
`;

export default GapWrapper;
