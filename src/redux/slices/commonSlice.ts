import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
    isVisible: boolean;
    isLoading: boolean;
    loggedLodgeInfo: {
        loggedLodgeId: string;
        looggedLodgeName: string;
    };
    lodgeList : {_id : string , lodge_name : string}[];
    sideBarOverlayVisible : boolean;
    selectedLodgeIdRedux: string;
    appliedFiltersRedux: {
        startDate: string;
        endDate: string;
    }
}

const initialState: CommonState = {
    isVisible: false,
    isLoading: false,
    loggedLodgeInfo: {
        loggedLodgeId: "",
        looggedLodgeName: "",
    },
    lodgeList : [],
    sideBarOverlayVisible : false,
    selectedLodgeIdRedux: "",
    appliedFiltersRedux: {
        startDate: "",
        endDate: "",
    }
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isVisible = !state.isVisible;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setUserInfo: (state, action: PayloadAction<{ loggedLodgeId: string; looggedLodgeName: string }>) => {
            state.loggedLodgeInfo = action.payload;
        },
        setLodgeList: (state, action: PayloadAction<{_id : string , lodge_name : string}[]>) => {
            console.log(action.payload)
            state.lodgeList = action.payload;
        },
        toggleSidebarOverlay: (state) => {
            state.sideBarOverlayVisible = !state.sideBarOverlayVisible;
        },
        setSelectedLodgeIdRedux: (state, action: PayloadAction<string>) => {
            state.selectedLodgeIdRedux = action.payload;
        },
        setAppliedFilterRedux: (state, action: PayloadAction<{startDate: string, endDate: string}>) => {
            state.appliedFiltersRedux = action.payload;
        }
    },
});

export const {toggleSidebarOverlay ,  toggleSidebar, setLoading, setUserInfo , setLodgeList, setSelectedLodgeIdRedux, setAppliedFilterRedux } = commonSlice.actions;

export default commonSlice.reducer;
