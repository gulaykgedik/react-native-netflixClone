interface Notification {
    id: number;
    title: string;
    body: string;
    sendTime: string;
    isRead: boolean;
    data:object;
    docId?: string;
}

interface NotificationState {
    notifications: Notification[];
}

export type { NotificationState, Notification };