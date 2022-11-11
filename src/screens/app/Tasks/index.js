import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import styles from './styles';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <ScrollView>
        <Title type="thin">To Do Tasks</Title>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
