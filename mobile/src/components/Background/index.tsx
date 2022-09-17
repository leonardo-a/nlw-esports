import { ImageBackground } from 'react-native';
import { styles } from './styles';

import backgorundImg from '../../assets/background-galaxy.png'

interface Props {
    children: React.ReactNode
}

export function Background({children}: Props) {
  return (
    <ImageBackground 
        source={backgorundImg} 
        defaultSource={backgorundImg} 
        style={styles.container}
    >
        {children}
    </ImageBackground>
  );
} 