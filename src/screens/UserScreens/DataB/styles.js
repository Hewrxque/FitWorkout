import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    height: height,
    width: width,
  },
  content:{
    flex: 0.2,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content1:{
    flex: 0.8,
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 30,
    width: '90%',
    fontFamily: 'KronaOne-Regular',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 15,
    marginRight: '78%',
    fontFamily: 'KronaOne-Regular',
    marginVertical: 20,
  },
  text2: {
    right: 50,
    color: '#ffffff',
    fontSize: 15,
    textAlign: "justify"
  },
  text3: {
    color: '#ffffff',
    fontSize: 15,
    textAlign: "justify"
  },
});
export default styles;
