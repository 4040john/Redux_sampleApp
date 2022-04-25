import React from 'react';
import {View, Image} from 'react-native';
import LogoImage from '../../assets/images/winthiary_login_logo.png';

const LogoComponent = () => {
  return (
    <View style={{alignItems: 'center', marginBottom: 24}}>
      <Image
        source={LogoImage}
        resizeMode={'contain'}
        style={{width: 300, height: 88}}
      />
    </View>
  );
};

export default LogoComponent;
