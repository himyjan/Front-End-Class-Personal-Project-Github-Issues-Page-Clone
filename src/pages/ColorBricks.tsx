/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import styled from 'styled-components';
import { MilestoneIcon, IssueReopenedIcon } from '@primer/octicons-react';
import { useComponentVisible } from '../hooks/useComponentVisible';

type ColorBrickProp = {
  colors: string;
};
const ColorBrick = styled.div<ColorBrickProp>`
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

const DefaultColorText = styled.div`
  color: #57606a;
  font-size: 8px;
  margin: 8px auto 4px 8px;
  @media screen and (min-width: 768px) {
  }
`;

const InputWrapper = styled.section`
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
`;

const ColorSelector = styled.section`
  width: 240px;
  height: 87px;
  background: white;
  position: absolute;
  top: 110%;
  left: 6px;
  border: 0.5px solid #cad1d9;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  display: none;
  @media screen and (min-width: 768px) {
  }
`;

const BigWrapper = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-right: 6px;
  }
`;

const ButtonWrapper = styled.section`
  display: flex;
  @media screen and (min-width: 768px) {
  }
`;

const CancelText = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
  }
`;

const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #d1d2d5;
  width: 79.42px;
  height: 32px;
  border-radius: 5px;
  margin-left: 8px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
`;

const CreateLabelText = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
  }
`;

type Changer = {
  createLabelChange: boolean;
};

const CreateLabelButton = styled.div<Changer>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.createLabelChange ? '#2da454' : '#8acd9a')};
  border: 1px solid #79b288;
  width: 113.36px;
  height: 32px;
  border-radius: 5px;
  margin-left: 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    order: 2;
  }
`;

const LowerWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
  }
`;

const ColorText = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: black;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
  }
`;

const LabelInput = styled.input`
  background: #f5f7f9;
  padding: 5px 12px;
  border: 0.5px solid #cad1d9;
  margin-top: 6px;
  width: 90%;
  min-width: 85%;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
  }
`;

const ColorInput = styled.input`
  background: #f5f7f9;
  padding: 5px 12px;
  border: 0.5px solid #cad1d9;
  margin-left: 6px;
  width: 89%;
  border-radius: 5px;
  margin-top: 9px;
`;

const RollerIcon = styled(IssueReopenedIcon)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
`;

const ColorRoller = styled.div<ColorBrickProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 31px;
  background: ${(props) => props.colors};
  border-radius: 5px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
  }
`;

const ColorInputSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 16px;
  width: 95%;
  @media screen and (min-width: 768px) {
  }
`;

const LabelInputSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 16px;
  width: 95%;
  @media screen and (min-width: 768px) {
  }
`;

const LabelName = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: black;
  @media screen and (min-width: 768px) {
  }
`;

const LabelPreview = styled.div<ColorBrickProp>`
  width: fit-content;
  margin: 16px 16px 0 16px;
  padding-left: 6px;
  padding-right: 6px;
  white-space: no-wrap;
  font-size: 10px;
  height: 24px;
  margin-left: 10px;
  background: ${(props) => props.colors};
  color: black;
  font-weight: 600;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    flex-basis: 100;
  }
`;

type NewLabelProp = {
  labelOpen: boolean;
};
// 傳props一定要設定type，在styled component

const NewLabelSection = styled.section<NewLabelProp>`
  display: ${(props) => (props.labelOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 95%;
  height: 328px;
  background: #f5f7f9;
  margin: 20px auto;
  border: 0.5px solid #cad1d9;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    height: 149px;
  }
`;

const BigSearchBar = styled.input`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 320px;
    height: 32px;
    padding-left: 32px;
    margin-left: 5px;
    background: #f5f7f9;
    border: 0.5px solid #cad1d9;
    border-radius: 5px;
  }
`;

const SearchBar = styled.input`
  width: 320px;
  height: 32px;
  padding-left: 32px;
  margin-top: 5px;
  background: #f5f7f9;
  border: 0.5px solid #cad1d9;
  border-radius: 5px;
  margin-left: 16px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const UpperWrapper = styled.div`
  /* width:40%; */
  display: flex;
  justify-content: space-between;
  /* margin-right: 16px; */
  width: 95%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
  }
`;

const SubWrapOne = styled.div`
  /* width:40%; */
  display: flex;
  @media screen and (min-width: 768px) {
  }
`;

const NewLabelText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-align: center;
  @media screen and (min-width: 768px) {
  }
`;

const NewLabel = styled.div`
  background: #29994a;
  width: 98.69px;
  height: 32px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #288c46;
  }
  @media screen and (min-width: 768px) {
  }
`;

const MileText = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
  }
`;

const MileSection = styled.section`
  display: flex;
  align-items: center;
  width: 125.38px;
  height: 32px;
  background: white;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 0.5px solid #dbe0e5;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
`;

const MileStoneSubSection = styled.div`
  display: flex;
  align-items: center;
  width: 125.38px;
  height: 32px;
  justify-content: center;
  &:hover {
    background: #f5f7f9;
  }
  @media screen and (min-width: 768px) {
  }
`;

const MileStoneIMG = styled(MilestoneIcon)`
  @media screen and (min-width: 768px) {
  }
`;

const LabelText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: white;
  @media screen and (min-width: 768px) {
  }
`;

const LabelIcon = styled.img`
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
  }
`;

const LabelSubSection = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
  }
`;

function ColorBricks(props: any) {
  const { ref, isComponentVisible, setIsComponentVisible, useOnClickOutside } =
    useComponentVisible(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleClickOutside = () => {
    setEditOpen(false);
    setIsComponentVisible(false);
    console.log('clicked outside');
  };
  useOnClickOutside(ref, handleClickOutside);

  const solidColorList: any = [
    {
      name: '#b6070c',
    },
    {
      name: '#d94017',
    },
    {
      name: '#fbca31',
    },
    {
      name: '#0e8a25',
    },
    {
      name: '#006b75',
    },
    {
      name: '#1b76d8',
    },
    {
      name: '#0052c8',
    },
    {
      name: '#521be2',
    },
  ];

  const lightColorList: any = [
    {
      name: '#e99796',
    },
    {
      name: '#f9d0c5',
    },
    {
      name: '#fef2c3',
    },
    {
      name: '#c2e0c7',
    },
    {
      name: '#bfdadc',
    },
    {
      name: '#c5def4',
    },
    {
      name: '#bfd4f1',
    },
    {
      name: '#d4c5f7',
    },
  ];

  return (
    <>
      <ColorInput
        maxLength={7}
        value={`${props.defaultColor}`}
        onChange={(e) => {
          props.setDefaultColor(e.target.value);
          props.setNewLabelInfo({
            ...props.newLabelInfo,
            color: e.target.value,
          });
        }}
        onClick={() => {
          setIsComponentVisible(true);
          setEditOpen(true);
        }}
      />
      {isComponentVisible && (
        <ColorSelector style={{ display: 'flex' }} ref={ref}>
          <DefaultColorText>Choose from default colors:</DefaultColorText>
          <DefaultColor>
            {solidColorList.map(({ name }: any, index: number) => {
              return (
                <ColorBrick
                  colors={name}
                  onClick={() => {
                    props.setDefaultColor(name);
                    props.setNewLabelInfo({
                      ...props.newLabelInfo,
                      color: name,
                    });
                  }}
                />
              );
            })}
          </DefaultColor>
          <DefaultColor>
            {lightColorList.map(({ name }: any) => {
              return (
                <ColorBrick
                  colors={name}
                  onClick={() => {
                    props.setDefaultColor(name);
                    props.setNewLabelInfo({
                      ...props.newLabelInfo,
                      color: name,
                    });
                  }}
                />
              );
            })}
          </DefaultColor>
        </ColorSelector>
      )}
      <ColorSelector style={{ display: 'none' }}>
        <DefaultColorText>Choose from default colors:</DefaultColorText>
        <DefaultColor>
          {solidColorList.map(({ name }: any, index: number) => {
            return (
              <ColorBrick
                colors={name}
                onClick={() => {
                  props.setDefaultColor(name);
                  props.setNewLabelInfo({
                    ...props.newLabelInfo,
                    color: name,
                  });
                }}
              />
            );
          })}
        </DefaultColor>
        <DefaultColor>
          {lightColorList.map(({ name }: any) => {
            return (
              <ColorBrick
                colors={name}
                onClick={() => {
                  props.setDefaultColor(name);
                  props.setNewLabelInfo({
                    ...props.newLabelInfo,
                    color: name,
                  });
                }}
              />
            );
          })}
        </DefaultColor>
      </ColorSelector>
    </>
  );
}

export default ColorBricks;
