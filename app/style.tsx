import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  HeadStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 25,
  },
  HeadStyleText: {
    color: 'black',
    fontSize: 34,
    fontWeight: 'bold',
  },
  inputContainer: {
    // flex: 1,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: 16,
    color: '#a0a0a0',
  },
  nextText:{
    fontSize:18,
    color:'#5cb075',
    fontWeight:500
  },
});

export default styles;
