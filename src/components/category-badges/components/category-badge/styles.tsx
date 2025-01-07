import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/colors';

export const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:10,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:50,
        borderWidth:1,
        borderColor:COLORS.grey_v1,
    },
    icon:{
        width:22,
        height:22,
        resizeMode:'contain',
    },
    categoryName:{
        fontSize:14,
        color:COLORS.grey_v4,
    },
});
