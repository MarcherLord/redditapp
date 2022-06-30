import { configureStore } from '@reduxjs/toolkit';
import searchBarSlice from '../components/searchBar/searchBarSliice';

export default configureStore({
    reducers: {
        search: searchBarSlice,
    }
})