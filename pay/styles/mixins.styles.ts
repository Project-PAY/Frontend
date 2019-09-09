interface IFontStyleMixin {
  size?: number;
  family?: string;
  weight?: string;
  color?: string;
}

export const fontStyleMixin = (font: IFontStyleMixin = {}) => `
  color: ${font.color ? font.color : '#333'};
  ${font.size ? `font-size: ${font.size}px`: ``};
  ${font.weight ? `font-weight: ${font.weight}`: ``};
  ${font.family ? `font-family: '${font.family}'`: ``}; 
`;
