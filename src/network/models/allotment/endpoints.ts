import { Endpoints } from "../common";

export const allotmentEndpoints: Endpoints = {
    GET_PRICE: { url: "/allotment/get-price", method: "post" },
    LIST_REFERENCE_NAMES: { url: "/allotment/list-ReferenceNames", method: "get" },
    ADD_ALLOTMENT: {url: "/allotment/add", method: "post"},
    LIST_OCCUPIED_ROOMS: {url: "/allotment/list-occupied-rooms", method: "post"},
    OCCUPIED_ROOMS_BY_ID: {url: "/allotment/list-occupied-roomsById", method: "get"},
    AVAILABLE_ROOMS: {url: "/allotment/available-rooms", method: "get"},
    QUICK_OVERVIEW: {url: "/allotment/list-occupied-rooms-overview", method: "get"},
    ONLINE_BOOKING_VIEW: {url: "/room-booking/view", method: "get"},
    DOWNLOAD_RECEIPT : {url: "/allotment/genrate-Receipt", method: "get"},
    GET_IMAGE : {url: "/get-image", method: "get"},
    QR_DATA : {url : "/allotment/roomBooking-QR" , method: "get"}
    
};
