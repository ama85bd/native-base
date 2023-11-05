import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface IProfileScreenProps {
  children: any;
  onPress: () => void;
  isButtonPressed: boolean;
}

const ProfileScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Profile Page</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

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
