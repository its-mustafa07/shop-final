import {Dimensions} from 'react-native';
import {styled} from 'styled-components';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const MainListWrapper = styled(TouchableOpacity)`
  background-color: #e4e4e6;
  width: ${screenWidth * 0.8}px;
  height: 70px;
  justify-content: center;
  border-radius: 8px;
  position: relative;
`;

export const AlignItems = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const ImageContainer = styled(View)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid #06919a;
  overflow: hidden;
`;

export const TextContainer = styled(View)``;
export const Text1 = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  color: #06919a;
`;
export const Text2 = styled(Text)`
  font-size: 14px;
  color: #06919a;
`;
export const ImageText = styled(View)`
  flex-direction: row;
  gap: 20px;
`;

export const DotSvgImage = styled(View)``;
