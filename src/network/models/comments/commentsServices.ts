import { AxiosResponse } from "axios";


export interface CommentsServices {
    //   with param

    comments_list(credentials:any): Promise<AxiosResponse<any>>
   
    comments_delete( id:string): Promise<AxiosResponse<any>>
   
    reply_comment(payload: any): Promise<AxiosResponse<any>>
    
}