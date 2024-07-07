import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginLeft:20,
    marginRight:20,
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
    flex: 1,
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
  button: {
    backgroundColor: '#5cb075',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'flex-end',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: '#5cb075',
    borderWidth: 1,
    borderRadius: 35,
    paddingLeft: 20,
    marginBottom: 16,
    backgroundColor:'#f0f0f0',
    color:'#a0a0a0',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  clientsContainer:{
    marginTop:10
  },
  topClientsHeader:{
    fontSize:25,
    color:'#5cb075',
    fontWeight:400,
    marginBottom:10
  },
  clientCard: {
    marginRight: 16,
    // alignItems: 'center',
  },
  clientImage: {
    width: 150,
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 8,
  },
  clientName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clientLocation: {
    fontSize: 14,
    color: 'gray',
  },
  clientPrice: {
    marginTop:10,
    marginBottom:20,
    fontSize: 14,
    fontWeight: '500',
  },
  topClientsContainer:{
    marginBottom:25,
  },
  // listContainer: {
  //   borderBottomColor: '#5cb075',
  //   borderBottomWidth: 2,
  //   marginBottom: 15,
  // },
  customScrollBar: {
    overflow: 'hidden',
  },
  customScrollBarContent: {
    paddingRight: 10,
  },
});

export default styles;
