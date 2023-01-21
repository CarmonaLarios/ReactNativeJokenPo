/* eslint-disable prettier/prettier */
import React,{Component, ReactNode} from 'react';
import {Image, View} from 'react-native';

interface Props {
  selectedItem?: string;
}

class ChoiceIcon extends Component<Props> {
  selectImage = () => {
    switch (this.props.selectedItem){
      case 'Rock':
        return <Image source={require('../images/pedra.png')} />;
      case 'Paper':
        return <Image source={require('../images/papel.png')} />;
      case 'Scissors':
        return <Image source={require('../images/tesoura.png')} />;
    }
  };

  render(): ReactNode {
    return (
      <View>
        {this.selectImage()}
      </View>
    );
  }
}

export default ChoiceIcon;
