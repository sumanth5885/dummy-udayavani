export const dynamic = 'force-dynamic';

import Image from "next/image";
import dashboardStyles from "./dashboard.module.scss";
import initServerI18n from "../../../i18n";
import DemoPage from "../ClientComponents/DemoPage/DemoPage";
import { Metadata } from "next";
import { CommentsHandler } from "@/network/apiHandlers/commentsHandler";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Skeleton,
} from "@mui/material";


// Import the Client Component (no dynamic import here)
import CommentsTable from "../ClientComponents/CommentsTable/CommentsTable";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated Home Page",
};

const Page = async () => {
  let comments: any[] = [];


  try {
    const response = await CommentsHandler().comments_list({});
    if (response.status === 200) {
      comments = response.data?.data.docs || [];
    } else {
      throw new Error(response.data?.status?.message || "Unknown error from API");
    }
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch comments");
  }


  return (
    <div className={dashboardStyles.dashboard_container}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>Author</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((comment) => (
              <TableRow key={comment._id}>
                <TableCell>{comment._id}</TableCell>
                <TableCell>{comment.comment}</TableCell>
                <TableCell>{comment.author}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      {/* <CommentsTable comments={resData} /> */}

      <div style={{ marginTop: "2rem" }}>

      </div>


    </div>
  );
};

export default Page;
