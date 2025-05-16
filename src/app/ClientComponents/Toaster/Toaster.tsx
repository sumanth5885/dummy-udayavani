"use client"; 

import { ToastContainer } from "react-toastify"


const Toaster: React.FC = () => {
   
    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
}


export default Toaster