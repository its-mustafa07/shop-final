import React, {useRef, useState} from 'react';
import {ImageBackground, Image, TouchableOpacity} from 'react-native';
import {
  AlignItems,
  ImageContainer,
  MainListWrapper,
  Text1,
  TextContainer,
  Text2,
  ImageText,
  DotSvgImage,
} from './listItem.styles';
// import ListDropdown from '../list-dropdown/listDropdown';

export default function ListItem({
  // cover,
  // heading,
  // paragraph,
  item,
  drag,
  // date,
  svgIcon,
  // handleIconPress,
  // id,
  // showDropdown,
}) {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const itemRef = useRef(null);

  const showPopover = () => {
    setPopoverVisible(true);
  };

  const hidePopover = () => {
    setPopoverVisible(false);
  };

  return (
    <MainListWrapper onLongPress={drag}>
      <AlignItems>
        <ImageText>
          <ImageContainer>
            <ImageBackground
              source={require('../../assets/QRCode.webp')}
              style={{flex: 1}}
              resizeMode="cover"
            />
          </ImageContainer>
          <TextContainer>
            <Text1>Scanned Item</Text1>
            <Text2>{item}</Text2>
            <Text2>25/10/2022</Text2>
          </TextContainer>
        </ImageText>
        {/* <TouchableOpacity onLongPress={drag}>
          <Image source={require('../../assets/drag-icon.png')} />
        </TouchableOpacity> */}
        {/* <ListDropdown
          isVisible={popoverVisible}
          onRequestClose={hidePopover}
          anchorView={itemRef.current}
        /> */}
      </AlignItems>
    </MainListWrapper>
  );
}
