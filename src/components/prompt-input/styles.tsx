import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    mainInputContentWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        width:'100%',
        columnGap:5,
        paddingVertical:20,
        paddingHorizontal:10,
    },
    leftInputContentWrapper:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        columnGap:14,
    },
    mainInputWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:Platform.OS === 'android' ? 4 : 12,
        paddingHorizontal:15,
        borderRadius:50,
        backgroundColor:COLORS.grey_v1,
        width:'50%',
    },
    mainInput:{
        fontSize:17,
        width:'80%',
    },
    rightInputContentWrapper:{
        width:'13%',
        alignItems:'flex-end',
    },
});
