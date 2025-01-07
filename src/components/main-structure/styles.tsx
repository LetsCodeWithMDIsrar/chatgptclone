import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        width:(2 * Dimensions.get('screen').width),
        left:-Dimensions.get('screen').width,
        backgroundColor:'white',
        borderWidth:1,
    },
    navigationWrapper:{
        // flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        width:Dimensions.get('screen').width,
        height:'100%',
    },
    navigationContentWrapper:{
        // flex:1,
        marginLeft:70,
        paddingTop:50,
        paddingBottom:20,
        width:Dimensions.get('screen').width - 70,
    },
    mainWrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        width:Dimensions.get('screen').width,
        height:'100%',
    },
    closeButton:{
        backgroundColor:'red',
        paddingVertical:10,
        paddingHorizontal:20,
    },
    openBtn:{
        backgroundColor:'green',
        paddingVertical:10,
        paddingHorizontal:20,
    },
    btnText:{
        color:'white',
    },
    mainWrapperOverlay:{
        position:'absolute',
        backgroundColor:'black',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:9,
        opacity:0.5,
    },
    categoryBadgesWrapper:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    categoryBadgesTitle:{
        fontSize:23,
        marginBottom:10,
        lineHeight:35,
    },
});
