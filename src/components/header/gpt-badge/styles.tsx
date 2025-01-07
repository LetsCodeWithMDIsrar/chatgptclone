import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

export const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:COLORS.grey_v1,
        paddingHorizontal:20,
        paddingVertical:7,
        borderRadius:10,
        columnGap:10,
    },
    badgeText:{
        fontSize:14,
    },
    icon:{
        width:15,
        height:15,
        resizeMode:'contain',
    },
});
