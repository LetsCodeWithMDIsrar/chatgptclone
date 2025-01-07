import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        backgroundColor:COLORS.grey_v2,
        borderRadius:10,
        zIndex:9,
    },
    box:{
        backgroundColor:COLORS.grey_v2,
        borderRadius:10,
        paddingVertical:15,
        paddingHorizontal:15,
        zIndex:99,
        elevation:2,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height:1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    itemWrapper:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:15,
    },
    itemIcon:{
        width:25,
        height:25,
    },
    itemName:{
        fontSize:16,
        paddingVertical:10,
    },
});
