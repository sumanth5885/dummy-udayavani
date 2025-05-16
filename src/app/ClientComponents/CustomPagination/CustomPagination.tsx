"use client"

import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import styles from './CustomPagination.module.scss';


import { useState } from "react";

interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
    totalDocs: number;
    pagingCounter: number;
    onPageChange: (value: number) => void;
    onLimitChange: (value: number) => void;
    limit: number
}

export default function CustomPagination({
    currentPage,
    totalPages,
    totalDocs,
    pagingCounter,
    onPageChange,
    onLimitChange,
    limit
}: PaginationComponentProps) {



    const onPageSelect = (e: SelectChangeEvent<number>) => {
        onPageChange(+e.target.value)
    }

    const nextPage = () => {
        onPageChange(currentPage + 1)
    }

    const prevPage = () => {
        onPageChange(currentPage - 1)
    }

    const limitSelect = (e: SelectChangeEvent<number>) => {
        onLimitChange(+e.target.value)
        console.log(e.target.value, 'limit');
    }
    console.log(totalPages, 'totalPages');
    return (
        <div className={styles.custom_pagination_container}>
        <div className={styles.first_container}>
          <span>Items per page:</span>
          <Select
            displayEmpty
            variant="standard"
            className={styles.borderless_select}
            value={limit}
            onChange={limitSelect}
          >
            {[10, 20, 30, 50].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </div>
      
        <div className={styles.second_container}>
          {pagingCounter} - {currentPage * limit > totalDocs ? totalDocs : currentPage * limit} of {totalDocs} items
        </div>
      
        <div className={styles.third_container}>
          <div className={styles.page_selection_comtainer}>
            <Select
              displayEmpty
              variant="standard"
              className={styles.borderless_select}
              value={currentPage}
              onChange={onPageSelect}
            >
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <span>of {totalPages} pages</span>
          </div>
        </div>
      
        <button className={`${styles.arrow_container} ${styles.left}`} onClick={prevPage} disabled={currentPage <= 1}>
          ‹
        </button>
      
        <button className={`${styles.arrow_container} ${styles.right}`} onClick={nextPage} disabled={currentPage >= totalPages}>
          ›
        </button>
      </div>
      
    )
} 