const getStyles = (options) =>
  `
  .treeDiagram{
    font-size:${options.treeSectionFontSize};
    font-family:${options.treeSectionFontFamily};
  }
  .treeStrokes{
    stroke: ${options.treeStroke};
    stroke-opacity: ${options.treeStrokeOpacity};
    stroke-width : ${options.treeStrokeWidth};
  }
`;

export default getStyles;
