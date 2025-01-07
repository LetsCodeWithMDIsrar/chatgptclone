import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
        paddingLeft:10,
        paddingRight:20,
    },
    searchWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'82%',
        borderRadius:50,
        paddingVertical: Platform.OS === 'android' ? 4 : 12,
        paddingHorizontal:15,
        backgroundColor:COLORS.grey_v1,
        columnGap:10,
    },
    searchIcon:{
        width:30,
        height:30,
        resizeMode:'contain',
    },
    searchInput:{
        width:'85%',
        fontSize:17,
    },
    pencilIconWrapper:{
        width:30,
        height:30,
    },
    pencilIcon:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
});
