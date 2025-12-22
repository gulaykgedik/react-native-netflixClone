
interface Account {
    id: number;
    name: string;
    image: any;
}

interface AccountsState {
    accounts: Account[]
}

export type { AccountsState,Account};