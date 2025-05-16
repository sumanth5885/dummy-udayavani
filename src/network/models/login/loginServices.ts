import { AxiosResponse } from "axios";
import { LoginModel } from "./loginModel";

export interface LoginServices {
    //   with param
    login(credentials: LoginModel): Promise<AxiosResponse<any>>;

    //without param
    list_guestHouse(): Promise<AxiosResponse<any>>;
    list_assigned_guesthouse(): Promise<AxiosResponse<any>>;
}
