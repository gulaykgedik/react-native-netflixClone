import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore, { doc } from "@react-native-firebase/firestore";
import notifications from "../../screens/notifications";

export const addNotificationDatabase = createAsyncThunk(
    "notifications/addNotificationDatabase",
    async (values:object, { rejectWithValue }) => {
    console.log("values", values);
    try {
     const data = await firestore()
     .collection('notifications')
     .add(values);
     console.log("Notification added with ID: ", data.id);
     return data;
    
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const getNotifications = createAsyncThunk(
    "notifications/getNotifications",
    async (_, { rejectWithValue }) => {
    try {
     const snapshot = await firestore()
     .collection('notifications')
     .get();
     
     const notificationList = snapshot.docs.map(notification => ({
        docId: notification.id,
        ...notification.data()
     }));
     
     console.log("Fetched notifications: ", notificationList);
     return notificationList;
    
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const updateNotificationDatabase = createAsyncThunk(
    "notifications/updateNotificationDatabase",
    async ({docId, values}:{docId:string, values:object}, { rejectWithValue }) => {
    console.log("Updating notification ID:", docId, "with values:", values);
    try {
     await firestore()
     .collection('notifications')
     .doc(docId)
     .update(values);
     
     console.log("Notification updated with ID: ", docId);
     return { docId, ...values };
    
    } catch (error) {
        return rejectWithValue(error);
    }
}
);