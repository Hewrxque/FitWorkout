import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#181616',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
  },
  image: {
    width: 320,
    height: 70,
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 11,
  },
  input: {
    backgroundColor: '#1E1E1E',
    width: 380,
    height: 52,
    borderRadius: 8,
    borderColor: '#00FF19',
    borderWidth: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: 'KronaOne-Regular'
  },
  button: {
    width: 281,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular'
  },
  text2: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'KronaOne-Regular'
  },
  text3: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'KronaOne-Regular'
  }
});
export default styles;