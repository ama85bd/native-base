import { View, Text, StyleSheet, ScrollView } from 'react-native';
interface IHomeScreenProps {
  props?: any;
}

const HomeScreen: React.FunctionComponent<IHomeScreenProps> = ({ props }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Home Page</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
