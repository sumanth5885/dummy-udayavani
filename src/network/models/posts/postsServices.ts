import { AxiosResponse } from "axios";

export interface PostsServices {
    //   with param
    posts_add(credentials: any): Promise<AxiosResponse<any>>;
    posts_dropdown(): Promise<AxiosResponse<any>>;
    contentposts_list(credentials:any,page:number,limit:number,search:string,status:number,filters:any): Promise<AxiosResponse<any>>
    content_getby_id(id: string, search?: string): Promise<AxiosResponse<any>>
    content_delete(id: string): Promise<AxiosResponse<any>>
    content_update(id: string, data: any): Promise<AxiosResponse<any>>
    status_update(id: string, status: number): Promise<AxiosResponse<any>>
    update_image(id: string, imageData: any): Promise<AxiosResponse<any>>
    ingredients_list(credentials: any): Promise<AxiosResponse<any>>
  


}
