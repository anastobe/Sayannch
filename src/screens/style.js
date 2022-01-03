import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  
  // SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },


  SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },

  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFF',
    // paddingTop: Platform.OS == "ios" ? 0 :
  },

  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: 
  { 
    fontSize: 18, 
    color: '#808080', 
    fontWeight: 'bold' 
  },
  divider: {
    width: "100%",
    backgroundColor: "lightgray",
    height: 1,
    alignSelf: "center",
    marginTop: 10
  }
})
