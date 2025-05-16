"use client";

import React, { useEffect, useState } from "react";
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
import Image from "next/image";
import DemoPage from "../DemoPage/DemoPage";


const CommentsTable = ({
  comments,

}: {
  comments: any[];

}) => {


  return (
    <div>

      <Image
        src="/assets/images/premium.svg"
        width={100}
        height={100}
        alt="Premium"
      />

      <div>
        <h2>Fetched Comments</h2>
        <p>title</p>
      </div>
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
      <DemoPage />
    </div>
  );
};

export default CommentsTable;
