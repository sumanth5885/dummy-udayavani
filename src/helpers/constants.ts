const roles: Record<number, string> = {
    99: "Super admin",
    95: "Admin",
    94: "Sub Admin",
    93: "Data Operator",
    92: "Manager",
    100: "Others",
};

const roleIds: Record<string, number> = {
    super_admin: 99,
    admin: 95,
    sub_admin: 94,
    data_operator: 93,
    manager: 92,
    others: 100,
};

const functionKeyUrlMaps: Record<string, string> = {
    F3: "/occupied-rooms",
    F4: "/special-devotees",
    F5: "/reservation-details",
    F6: "/vacant-rooms",
    F7: "/room-details",
    F8: "/vacated-devotee",
    F9: "/expected-devotee",
    F11: "/drawer-balance",
    F12: "/waiting-list",
};

const controlKeyUrlMaps: Record<string, string> = {
    D: "/damage-charges",
    A: "/allotment",
    V: "/vacate-room",
    S: "/shift-room",
    R: "/reserve-room",
    W: "/waiting-lists",
    P: "/party-contribution",
    B: "/bank-credit",
    O: "/online-bookings",
};

interface NavLinkConfig {
    path: string;
    labelKey?: string;
}
const navLinks: NavLinkConfig[] = [
    { path: "/room-booking-overview", labelKey: "dashboard" },
    { path: "/allotment", labelKey: "allotment" },
    { path: "/vacate-room", labelKey: "vacate" },
    { path: "/shift-room", labelKey: "shift" },
    { path: "/reserve-room", labelKey: "reservation" },
    { path: "/waiting-lists", labelKey: "wait_list" },
    { path: "/party-contribution", labelKey: "party_con" },
    { path: "/damage-charges", labelKey: "damage" },
    { path: "/bank-credit", labelKey: "bank_credit" },
    { path: "/online-bookings", labelKey: "online_bookings" },
];

const routerLinksPermissionMap: Record<string, string> = {
    "/sorting-table-summary": "SORTING TABLE SUMMARY",
    "/room-booking-overview": "DASHBOARD",
    "/allotment": "ALLOTMENT",
};

export {
    roles,
    roleIds,
    routerLinksPermissionMap,
    navLinks,
    controlKeyUrlMaps,
    functionKeyUrlMaps
};
