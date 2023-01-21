import { StyleSheet, View, FlatList } from 'react-native';
import { GRAY } from '../color';
import ListItem from './Listitem';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} />}
      windowSize={5} // prev : 2 , curr : 1, next: 2
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      //   ListHeaderComponent={View}
      //   ListHeaderComponentStyle={{ height: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default List;
