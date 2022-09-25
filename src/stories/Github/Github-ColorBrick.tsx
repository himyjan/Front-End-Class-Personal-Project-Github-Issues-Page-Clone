/* eslint-disable react/no-unused-prop-types */
import styled from 'styled-components';

const ColorSelector = styled.section`
  width: 240px;
  height: 87px;
  background: white;
  border: 0.5px solid #cad1d9;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }
`;

const DefaultColorText = styled.div`
  color: #57606a;
  font-size: 8px;
  margin: 8px auto 4px 8px;
  @media screen and (min-width: 768px) {
  }
`;

type ColorBoxProp = {
  colors: string;
};

const ColorBox = styled.div<ColorBoxProp>`
  background: ${(props) => props.colors};
  width: 12px;
  height: 12px;
  border-radius: 3px;
  width: 21px;
  height: 21px;
  margin-right: 8px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
`;
const DefaultColor = styled.div`
  display: flex;
  margin: 5px auto 0 8px;

  @media screen and (min-width: 768px) {
  }
`;

type Color = {
  colorCode: string;
};

const solidColorList: Color[] = [
  {
    colorCode: '#b6070c',
  },
  {
    colorCode: '#d94017',
  },
  {
    colorCode: '#fbca31',
  },
  {
    colorCode: '#0e8a25',
  },
  {
    colorCode: '#006b75',
  },
  {
    colorCode: '#1b76d8',
  },
  {
    colorCode: '#0052c8',
  },
  {
    colorCode: '#521be2',
  },
];

const lightColorList: Color[] = [
  {
    colorCode: '#e99796',
  },
  {
    colorCode: '#f9d0c5',
  },
  {
    colorCode: '#fef2c3',
  },
  {
    colorCode: '#c2e0c7',
  },
  {
    colorCode: '#bfdadc',
  },
  {
    colorCode: '#c5def4',
  },
  {
    colorCode: '#bfd4f1',
  },
  {
    colorCode: '#d4c5f7',
  },
];

type BoxHeaderProps = {
  SOLIDCOLORLIST: Color[];
  LIGHTCOLORLIST: Color[];
};

export const ColorBrick = ({
  SOLIDCOLORLIST = solidColorList,
  LIGHTCOLORLIST = lightColorList,
  ...props
}: BoxHeaderProps) => {
  return (
    <ColorSelector>
      <DefaultColorText>Choose from default colors:</DefaultColorText>
      <DefaultColor>
        {SOLIDCOLORLIST.map(({ colorCode }: Color, index: number) => {
          return <ColorBox key={colorCode} colors={colorCode} />;
        })}
      </DefaultColor>
      <DefaultColor>
        {LIGHTCOLORLIST.map(({ colorCode }: Color) => {
          return <ColorBox key={colorCode} colors={colorCode} />;
        })}
      </DefaultColor>
    </ColorSelector>
  );
};
