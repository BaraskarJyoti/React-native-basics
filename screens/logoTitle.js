import React, {Component} from 'react';
import {Image} from 'react-native';

export default class LogoTitle extends Component {
    render() {
      return (
        <Image
          source={require('../asset/images/react-native.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }
  