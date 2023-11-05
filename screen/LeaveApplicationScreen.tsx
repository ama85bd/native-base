import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface ILeaveApplicationScreenProps {
  children: any;
  onPress: () => void;
  isButtonPressed: boolean;
}

const LeaveApplicationScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Leave Page</Text>
      </View>
    </ScrollView>
  );
};

export default LeaveApplicationScreen;

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
