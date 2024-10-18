import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useGetUsers} from '../hooks/useGetUsers';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';

type UserDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserDetail'
>;

type Props = {
  navigation: UserDetailScreenNavigationProp;
};

export const UserListScreen = ({navigation}: Props) => {
  const {users,loading,error} = useGetUsers();

  if (loading) {
    return (
      <View >
        <ActivityIndicator/>
      </View>
    );
  }

  if (error) {
    return (
      <View >
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('UserDetail', {userId: item.id})
            }>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
