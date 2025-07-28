import styled, { css } from 'styled-components';

type Space = number | string;

type ResponsiveProp<T> = T | T[] | { [key: string]: T };
type DisplayProps = ResponsiveProp<React.CSSProperties['display']>;
type FlexDirectionProps = ResponsiveProp<React.CSSProperties['flexDirection']>;
type AlignItemsProps = ResponsiveProp<React.CSSProperties['alignItems']>;

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  background?: string;

  // Spacing
  padding?: Space;
  paddingTop?: Space;
  paddingRight?: Space;
  paddingBottom?: Space;
  paddingLeft?: Space;
  paddingX?: Space;
  paddingY?: Space;

  margin?: Space;
  marginTop?: Space;
  marginRight?: Space;
  marginBottom?: Space;
  marginLeft?: Space;
  marginX?: Space;
  marginY?: Space;

  // Size
  width?: Space;
  height?: Space;
  minWidth?: Space;
  minHeight?: Space;
  maxWidth?: Space;
  maxHeight?: Space;

  // Display
  display?: DisplayProps;
  gap?: Space;

  // Flexbox
  flexDirection?: FlexDirectionProps;
  flexWrap?: React.CSSProperties['flexWrap'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: AlignItemsProps;
  alignContent?: React.CSSProperties['alignContent'];
  flex?: React.CSSProperties['flex'];
  flexGrow?: React.CSSProperties['flexGrow'];
  flexShrink?: React.CSSProperties['flexShrink'];
  flexBasis?: React.CSSProperties['flexBasis'];
  alignSelf?: React.CSSProperties['alignSelf'];
  order?: React.CSSProperties['order'];

  cursor?: React.CSSProperties['cursor'];

  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string | number;
  borderStyle?: React.CSSProperties['borderStyle'];
  borderWidth?: string | number;
  boxShadow?: string;
  transition?: string;
  hover?: { [key: string]: string | number };
  textAlign?: React.CSSProperties['textAlign'];
}

const getSpacing = (val?: Space) =>
  typeof val === 'number' ? `${val * 4}px` : val;

import { DefaultTheme } from 'styled-components';

type ResponsiveValue = string | undefined;
type ResponsiveObject = { [key: string]: ResponsiveValue };

export const getResponsiveCss = (
  propName: string,
  value: ResponsiveValue | ResponsiveObject | DisplayProps | FlexDirectionProps | AlignItemsProps,
  theme: DefaultTheme
): string => {
  if (!value) return '';

  // Se for string direto, aplica como padrão
  if (typeof value === 'string') {
    return `${propName}: ${value};`;
  }

  // Se for objeto com breakpoints (incluindo "_")
  if (typeof value === 'object') {
    const entries = Object.entries(value) as [keyof typeof theme.breakpoints | '_', string][];

    // Primeiro aplica o valor base ("_") sem media query
    const baseCss = entries
      .filter(([key]) => key === '_')
      .map(([_, val]) => `${propName}: ${val};`)
      .join('\n');

    // Depois aplica os valores com media query
    const responsiveCss = entries
      .filter(([key]) => key !== '_')
      .map(([breakpoint, val]) => {
        const media = theme.breakpoints?.[breakpoint as keyof typeof theme.breakpoints];

        if (!media) return '';

        return `@media (min-width: ${media}) { ${propName}: ${val}; }`;
      })
      .join('\n');

    return [baseCss, responsiveCss].filter(Boolean).join('\n');
  }

  return '';
};

export const Box = styled.div<BoxProps>`
${({ ...props }) => css`
  box-sizing: border-box;

  ${props.padding && `padding: ${getSpacing(props.padding)};`}
  ${props.paddingTop && `padding-top: ${getSpacing(props.paddingTop)};`}
  ${props.paddingRight && `padding-right: ${getSpacing(props.paddingRight)};`}
  ${props.paddingBottom && `padding-bottom: ${getSpacing(props.paddingBottom)};`}
  ${props.paddingLeft && `padding-left: ${getSpacing(props.paddingLeft)};`}
  ${props.paddingX &&
    `padding-left: ${getSpacing(props.paddingX)}; padding-right: ${getSpacing(props.paddingX)};`}
  ${props.paddingY &&
    `padding-top: ${getSpacing(props.paddingY)}; padding-bottom: ${getSpacing(props.paddingY)};`}

  ${props.margin && `margin: ${getSpacing(props.margin)};`}
  ${props.marginTop && `margin-top: ${getSpacing(props.marginTop)};`}
  ${props.marginRight && `margin-right: ${getSpacing(props.marginRight)};`}
  ${props.marginBottom && `margin-bottom: ${getSpacing(props.marginBottom)};`}
  ${props.marginLeft && `margin-left: ${getSpacing(props.marginLeft)};`}
  ${props.marginX &&
    `margin-left: ${getSpacing(props.marginX)}; margin-right: ${getSpacing(props.marginX)};`}
  ${props.marginY &&
    `margin-top: ${getSpacing(props.marginY)}; margin-bottom: ${getSpacing(props.marginY)};`}

  ${props.width && `width: ${typeof props.width === 'number' ? `${props.width}px` : props.width};`}
  ${props.height && `height: ${typeof props.height === 'number' ? `${props.height}px` : props.height};`}
  ${props.minWidth && `min-width: ${typeof props.minWidth === 'number' ? `${props.minWidth}px` : props.minWidth};`}
  ${props.minHeight && `min-height: ${typeof props.minHeight === 'number' ? `${props.minHeight}px` : props.minHeight};`}
  ${props.maxWidth && `max-width: ${typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth};`}
  ${props.maxHeight && `max-height: ${typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight};`}

  ${!!props.display && getResponsiveCss('display', props.display, props.theme)}
  ${props.gap && `gap: ${getSpacing(props.gap)};`}
  ${!!props.flexDirection && getResponsiveCss('flex-direction', props.flexDirection, props.theme)}

  ${props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${!!props.alignItems && getResponsiveCss('align-items', props.alignItems, props.theme)}

  ${props.alignContent && `align-content: ${props.alignContent};`}
  ${props.flex && `flex: ${props.flex};`}
  ${props.flexGrow !== undefined && `flex-grow: ${props.flexGrow};`}
  ${props.flexShrink !== undefined && `flex-shrink: ${props.flexShrink};`}
  ${props.flexBasis && `flex-basis: ${props.flexBasis};`}
  ${props.alignSelf && `align-self: ${props.alignSelf};`}
  ${props.order !== undefined && `order: ${props.order};`}

  ${props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${props.color && `color: ${props.color};`}
  ${props.border && `border: ${props.border};`}
  ${props.borderRadius && `border-radius: ${typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius};`}
  ${props.textAlign && `text-align: ${props.textAlign};`}
  ${props.borderStyle && `border-style: ${props.borderStyle};`}
  ${props.background && `background: ${props.background};`}
  ${props.boxShadow && `box-shadow: ${props.boxShadow};`}
  ${props.transition && `transition: ${props.transition};`}
  ${props.hover && `&:hover { ${props.hover} }`}
  ${props.cursor && `cursor: ${props.cursor};`}
`}
`;
