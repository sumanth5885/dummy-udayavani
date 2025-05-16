import { Endpoints } from "../common";

export const postsEndpoints: Endpoints = {
    POSTS_ADD: { url: "/content/add", method: "post" },
    POSTS_DROPDOWN:{url:"/category/dropdown",method:"get"},
    CONTENTSPOST_LIST: { url: "/content/list", method: "get" },
    CONTENT_GETBY_ID: { url: "/content/getById", method: "get" },
    CONTENT_DELETE: { url: "/content/delete", method: "delete" },
    CONTENT_UPDATE: { url: "/content/update", method: "put" },
    UPDATE_IMAGE: { url: "/content/image-insert", method: "post" },
    INGREDIENTS_LIST: { url: "/ingredients/list", method: "get" },
    // CATEGORY_UPDATE: { url: "/category/update", method: "put" },
    // CATEGORY_DELETE: { url: "/category/delete", method: "delete" },
    // CATEGORY_LIST_BY_ID: { url: "/category/getById", method: "get" },
};
