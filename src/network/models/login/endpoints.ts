import { Endpoints } from "../common";

export const loginEndPoints: Endpoints = {
    LOGIN: { url: "/login", method: "post" },
    LIST_GUESTHOUSE: { url: "/list-guestHouse", method: "get" },
    ASSIGNED_GUESTHOUSE_LIST: { url: "/list-guestHouse-assigned", method: "get" },
};