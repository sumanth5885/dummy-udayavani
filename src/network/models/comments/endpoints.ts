import { Endpoints } from "../common";

export const commentsEndpoints: Endpoints = {

    COMMENTS_LIST: { url: "/comments/list", method: "get" },

    COMMENTS_DELETE: { url: "/comments/delete", method: "delete" },
    REPLY_COMMENTS: { url: "/comments/reply", method: "post" }

};
