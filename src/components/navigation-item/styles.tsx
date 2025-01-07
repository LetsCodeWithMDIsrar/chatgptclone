import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:17,
        paddingVertical:17,
        marginVertical:7,
        // marginLeft:10,
        paddingLeft:10,
        paddingRight:20,
        borderBottomWidth:1,
        borderColor:COLORS.grey_v1,
        overflow:'hidden',
    },
    containerWithoutBorder:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:17,
        paddingBottom:17,
        // marginLeft:10,
        // paddingRight:20,
        paddingLeft:10,
        paddingRight:20,
        overflow:'hidden',
    },
    icon:{
        width:22,
        height:22,
        resizeMode:'contain',
    },
    titleText:{
        fontSize:17,
    },

    /** animation */
    rippleStyle:{
        width:10,
        height:10,
        backgroundColor:COLORS.grey_v1,
        position:'absolute',
        top:0,
        left:0,
        borderRadius:500,
    },
});
