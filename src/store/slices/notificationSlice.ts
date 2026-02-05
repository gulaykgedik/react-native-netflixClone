import { createSlice } from "@reduxjs/toolkit";
import { NotificationState } from "../../models/data/notificationState";
import { getNotifications } from "../actions/notificationActions";

const initialState: NotificationState = {
    notifications: [],
};


const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        addNewNotification: (state, action) => {
            state.notifications.push(action.payload);
        },
        showNotifications: (state, action) => {
            const item = state.notifications.find(n => n.id === action.payload.id);
            if (item) {
                item.isRead = true;
            }
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(getNotifications.pending, (state, action) => {
            state.notifications = [];
        })
        .addCase(getNotifications.fulfilled, (state, action) => {   
            state.notifications = action.payload || [];
        })
        .addCase(getNotifications.rejected, (state, action) => {   
            state.notifications = [];

        })
    }
});
export const { addNewNotification, showNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;