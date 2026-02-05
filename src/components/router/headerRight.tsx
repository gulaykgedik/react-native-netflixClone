import { StyleSheet, Text, TouchableOpacity,  View } from 'react-native'
import React from 'react'
import { Notification } from 'iconsax-react-nativejs'
import Colors from '../../theme/colors'
import { screenHeight, screenWidth } from '../../utils/constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { NOTIFICATIONS } from '../../utils/routes'
import { useNavigation } from '@react-navigation/native'

const HeaderRight: React.FC = () => {
    const {notifications} = useSelector((state:RootState) => state.notifications);
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(NOTIFICATIONS)}>
            {notifications.filter(item => !item.isRead).length > 0 && (
                <View style={styles.notificationBadge}>
                    <Text style={styles.notificationText}>{notifications.filter(item => !item.isRead).length}</Text>
                </View>
            )}
           

            <Notification size={32} color={Colors.WHITE}  />
        </TouchableOpacity>
    )
}

export default HeaderRight

const styles = StyleSheet.create({
    container:{ 
      marginRight:-5
    },
    notificationBadge:{
        position:'absolute',
        top:-4,
        right:-4,
        backgroundColor:Colors.RED,
        borderRadius:8,
        width:screenWidth * 0.04,
        height:screenHeight * 0.02,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1,
    },
    notificationText:{
        color:Colors.WHITE,
        fontSize:12,
        fontWeight:'600',
    }
})