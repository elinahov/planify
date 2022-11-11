import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default React.memo(Title);
