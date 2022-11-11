import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, Text} from 'react-native';
import Categories from '../../../components/Categories';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import {categories} from '../../../constants/categories';
import styles from './styles';

const AddTask = ({navigation}) => {
  const [category, setCategory] = useState();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/back.png')}
        />
      </Pressable>

      <Title type="thin">Add New Task</Title>

      <Text style={styles.label}>Describe the task</Text>
      <Input outlined placeholder="Type here..." />

      <Text style={styles.label}>Type</Text>
      <Categories
        categories={categories}
        selectedCategory={category}
        onCategoryPress={setCategory}
      />

      <Text style={styles.label}>Type</Text>
    </SafeAreaView>
  );
};

export default React.memo(AddTask);
