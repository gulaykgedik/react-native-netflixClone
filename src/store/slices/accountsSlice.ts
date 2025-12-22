import { createSlice } from "@reduxjs/toolkit";
import { AccountsState } from "../../models/data/accountsState";


const initialState: AccountsState = {
    accounts: [ 
     {
    id: 1,
    name: 'User 1',
    image: require('../../assets/images/user1.png'),
  },
  {
    id: 2,
    name: 'User 2',
    image: require('../../assets/images/user2.png'),
  },
  {
    id: 3,
    name: 'User 3',
    image: require('../../assets/images/user3.png'),
  },
  {
    id: 4,
    name: 'User 4',
    image: require('../../assets/images/user4.png'),
  },
  {
    id: 5,
    name: 'User 5',
    image: require('../../assets/images/user5.png'),
  }
    ]
};

const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {},
});

export default accountsSlice.reducer;