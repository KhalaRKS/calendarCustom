import React from 'react';
import {Image, Text, View} from 'react-native';

type Props = {
  deg: number;
};

const Icon = (props: Props) => {
  return (
    <View>
      <Image
        style={{
          width: 30,
          height: 30,
          transform: [{rotate: `${props.deg}deg`}],
        }}
        source={require('./src/assets/next.png')}
      />
    </View>
  );
};

export default Icon;
