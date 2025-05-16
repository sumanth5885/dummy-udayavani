"use client";

import { toast } from "react-toastify";

import { AppDispatch } from "../redux/store";
import { setLoading } from "../redux/slices/commonSlice";


// to start loading
export const startLoading = (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
};

// to stop loading
export const stopLoading = (dispatch: AppDispatch) => {
    dispatch(setLoading(false));
};

// common api success message handler
export const handleApiSuccess = (message: any) => {
    const successMessage = message || "Success";
    toast.success(successMessage);
};

// common api error message handler
export const handleApiError = (error: any) => {
    console.error("API Error:", error);

    const errorMessage = error.response?.data?.message ?? error.message ?? "An unknown error occurred";
    toast.error(errorMessage);
};

// export const handleApiError = (error: any) => {
//     console.log("handleApiError", error);
//     const errorMessage = error?.message ?? "An unknown error occurred";

//     if (error?.code != 0 && error?.code != 417) {
//         toast.error(errorMessage);
//     }
// };

export function changeDateFormat(dateStr: string) {
    const [day, month, year] = dateStr.split(/[-/]/);
    return `${day}-${month}-${year}`;
}


export function formatDateToDDMMYYYY(isoDate: any): string {
    if (isoDate) {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    } else {
        return `- - / - - / - - - -`;
    }
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);

    // Get date components
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    // Get time components
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
}

//formatting to 12 hourse
export function formatTo12Hour(dateTime: string) {
    if (!dateTime) return ""; // Handle empty or undefined values
    const [date, time] = dateTime.split(" ");
    const [hours, minutes] = time.split(":");
    let hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // Convert 0 or 24 to 12
    return `${date}  ${hour}:${minutes} ${ampm}`;
}

// to get current date in yyyy-mm-dd
export function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// function to set local storage  synchonously
export function saveToLocalStorage(key: string, value: string): Promise<void> {
    return new Promise((resolve) => {
        localStorage.setItem(key, value);
        resolve();
    });
}


// function to download files
export const downloadBinaryFile = (
    data: any,
    fileName: string,
    fileType: string
) => {
    try {
        const blob = new Blob([data], { type: fileType });
        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error("Error while downloading file:", error);
    }
};

export const indianDateFormat = (dateString: string) => {
    try {
        return dateString.toString().split("-").reverse().join("-");
    } catch (er) {
        console.log(er);
        return "";
    }
};

export const convertDateFormatFilter = (dateString: string): string => {
    if (!dateString) return "";

    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`; // Rearrange to YYYY-MM-DD format
};



// to validate documents
export const validateDocumentId = (value: string, docType: string) => {
    switch (docType) {
        case "AADHAAR CARD":
            if (!/^\d{12}$/.test(value)) {
                return "AADHAAR ID must be a 12-digit number";
            }
            break;

        case "PAN CARD":
            if (!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value)) {
                return "PAN ID must follow the pattern XXXXX9999X";
            }
            break;

        case "VOTER ID":
            if (!/^[A-Z]{3}\d{7}$/.test(value)) {
                return "Voter ID must follow the pattern XXX9999999";
            }
            break;

        case "PASSPORT":
            if (!/^[A-Z]{1}\d{7}$/.test(value)) {
                return "Passport ID must follow the pattern X9999999";
            }
            break;

        case "DRIVING LICENSE":
            if (!/^[A-Z]{2}\d{13}$/.test(value)) {
                return "Driving License ID is invalid";
            }
            break;

        default:
            return true;
    }
    return true;
};

//for converting 24 hour format to 12 hours format
export function formatTimeTo12Hour(time: string) {
    if (!time) return ""; // Handle undefined or empty input

    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}


//getting any day of the week
export const getdayofweek = (day: string) => {
    const dayOfWeek = new Date(day).getDay();
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayName = daysOfWeek[dayOfWeek];
    return dayName;
};

export const generatePdf = (htmlString: string) => {
    // Create a container for parsing the HTML
    const container = document.createElement("div");
    container.innerHTML = htmlString;

    // Create an iframe to simulate a print window and append the content
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";

    document.body.appendChild(iframe);

    // Add the content inside the iframe document
    iframe.contentWindow?.document.open();
    iframe.contentWindow?.document.write("<html><head><title>Document</title>");
    iframe.contentWindow?.document.write(
        "<style>body {font-family: Arial, sans-serif;}</style>"
    );
    iframe.contentWindow?.document.write("</head><body>");
    iframe.contentWindow?.document.write(container.innerHTML);
    iframe.contentWindow?.document.write("</body></html>");
    iframe.contentWindow?.document.close();

    // Call the print dialog
    iframe.contentWindow?.focus(); // Focus the iframe before printing
    iframe.contentWindow?.print(); // This triggers the print dialog
};

export function capitalizeWords(input: string) {
    if (!input) return "";
    return input
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function formatToIndianRupee(amount: number) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(amount);
}
export function getTwoDigitNumber(number: number) {
    return number.toString().padStart(2, "0")
}


