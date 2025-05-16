"use client";

import React, { useEffect, useState } from "react";
import loginstyles from "./login.module.scss";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
    handleApiError,
    saveToLocalStorage,
    startLoading,
    stopLoading,
} from "../../helpers/common";
import { LoginHandler } from "@/network/apiHandlers/loginHandlers";
import { useRouter } from "next/navigation";


const LoginPage: React.FC = () => {

    const dispatch = useDispatch();
    const router = useRouter();


    //useForm hook
    const {
        register,
        handleSubmit,

        formState: { errors },
        reset,
    } = useForm();


    // const getPermissions = (permissions: UserOfflinePermission[]): string[] => {
    //     return permissions
    //         .filter((item) => item.permission === 1)
    //         .map((item) => item.module_name);
    // };


    const onSubmit = async (data: any) => {
        try {
            startLoading(dispatch);

            const response = await LoginHandler().login(data);

            if (response.status === 200 && response.data?.data?.access_token) {
                const token = response.data.data.access_token;
                const user = response.data.data.user;


                await fetch("/api/loginRoute", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });

                toast.success("Login successful");

                setTimeout(() => {
                    router.push("/dashboard");
                }, 1000);


            }
        } catch (err) {
            handleApiError(err);
        } finally {
            stopLoading(dispatch);
            reset();
        }
    };



    useEffect(() => {

    }, [])

    return (
        <>

            <Grid container className={loginstyles.login_container}>
                <Grid size={{ md: 8, sm: 12, xs: 12 }} className={loginstyles.leftContainer}>

                    <div className={loginstyles.login_detailsWrapper}>

                        {/* <img src={littleShineLogin} alt="" className="littleShineLogo" /> */}
                        <div className={loginstyles.login_details}>
                            <div className={loginstyles.login_header}>
                                {/* <img src={loginLogo} alt="" /> */}
                                <p className={loginstyles.login_header_text}>Login</p>
                            </div>
                            <p className={loginstyles.enter_credentails}>Enter Credentials Below</p>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className={loginstyles.login_input_wrapper}>

                                    <input type="text" placeholder="Username" className="common_input"
                                        {...register("username", {
                                            required: "Username is required",
                                        })}

                                    />
                                    {errors.username && (
                                        <p className="error_txt">{errors.username.message?.toString()}</p>
                                    )}
                                    <input type="text" placeholder="Password" className="common_input"
                                        {...register("password", { required: "Password is required" })} />
                                    {errors.password && (
                                        <p className="error_txt">{errors.password.message?.toString()}</p>
                                    )}
                                    <button type="submit" className={loginstyles.login_button} >Login</button>

                                </div>

                            </form>





                        </div>

                    </div>


                </Grid>
                <Grid size={{ md: 4, sm: 12, xs: 12 }} className="rightContainer">

                    {/* <img src={rightLogo} alt="" className="rightLogo" /> */}




                </Grid>



            </Grid>


        </>
    );
};

export default LoginPage;
