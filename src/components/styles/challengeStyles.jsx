import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: { paddingTop: 100 },
  flatList: {
    height: 640,
  },
  flatlistRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    height: 70,
  },
  left: {
    backgroundColor: 'rgb(22, 24, 144)',
    justifyContent: 'center',
    flex: 1,
  },
  right: {
    backgroundColor: 'rgb(208, 29, 29)',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: '#ffffff',
    paddingHorizontal: 20,
  },
});

export default styles;
