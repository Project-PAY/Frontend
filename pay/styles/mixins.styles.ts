interface IFontStyleMixin {
  size?: number;
  family?: string;
  weight?: string;
  color?: string;
}

interface IBackgroundImgMixin {
  img: string;
  size?: string;
  position?: string;
  color?: string;
}

export const fontStyleMixin = (font: IFontStyleMixin = {}) => `
  color: ${font.color ? font.color : '#333'};
  ${font.size ? `font-size: ${font.size}px`: ``};
  ${font.weight ? `font-weight: ${font.weight}`: ``};
  ${font.family ? `font-family: '${font.family}'`: ``};
`;

export const opacityMixin = (opc: number) => `
  opacity: ${opc};
  filter: alpha(opacity=${opc} * 100);
`;

export const backgroundImgMixin = (background: IBackgroundImgMixin = {} as IBackgroundImgMixin) => `
  background-image: url(${background.img});
  background-size: ${background.size || 'cover'};
  background-position: ${background.position || 'center'};
  ${background.color && `background-color: ${background.color}`};
  background-repeat: no-repeat;
`;

export const verticalAlignMixin = () => `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const horizontalAlignMixin = () => `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
