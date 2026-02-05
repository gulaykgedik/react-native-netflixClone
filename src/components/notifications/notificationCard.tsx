import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NotificationProps } from '../../models/ui/notificationProps'
import Colors from '../../theme/colors'
import { Notification } from 'iconsax-react-nativejs'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { MOVİE_DETAIL } from '../../utils/routes'
import { showNotifications } from '../../store/slices/notificationSlice'
import { updateNotificationDatabase } from '../../store/actions/notificationActions'


const NotificationCard: React.FC<NotificationProps> = ({ notification }) => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch<AppDispatch>();
    return (
        <Pressable
        onPress={() => {
            if (notification.docId) {
                dispatch(updateNotificationDatabase({ docId: notification.docId, values: { isRead: true } }));
            }
            dispatch(showNotifications({ id: notification.id }));
            navigation.navigate(MOVİE_DETAIL, { movieId: (notification?.data as any)?.movieId })
        }}
        style={[  styles.container, { backgroundColor: notification.isRead ? "rgba(255, 255, 255, 0.1)" : Colors.BLACK }]}>
            <View style={styles.iconContainer}>
                {
                    notification.isRead && (
                        <View style={styles.iconDart}></View>
                    )
                }
                <Notification size={35} color={Colors.WHITE} variant='Bold' />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>{notification?.title}</Text>
                <Text style={styles.description} numberOfLines={3}>{notification?.body}</Text>
                <Text style={styles.date} numberOfLines={1}>{notification?.sendTime}</Text>
            </View>
        </Pressable>
    )
}

export default NotificationCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
        gap: 15,
        width: '100%',
        cursor: 'pointer',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        flexShrink: 1,
    },
    iconDart: {
        width: 10,
        height: 10,
        borderRadius: 25,
        backgroundColor: Colors.DARK_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    title: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        color: Colors.LIGHT_GRAY,
        fontSize: 16,
        marginBottom: 10,
    },
    date: {
        color: Colors.GRAY,
        fontSize: 14,
    },
})