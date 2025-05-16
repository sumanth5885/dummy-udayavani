import { AxiosResponse } from "axios";
import { AllotmentAddModel, filters } from "./allotmentModel";

export interface AllotmentServices {
    get_price(credentials: any): Promise<AxiosResponse<any>>;
    list_reference_names(): Promise<AxiosResponse<any>>;
    add_allotment(credentials: AllotmentAddModel): Promise<AxiosResponse<any>>;
    list_occupied_rooms(filterLodgeId: string , filters : filters, page: number, search: string, block: string, floor: string): Promise<AxiosResponse<any>>;
    occupied_rooms_by_id(id: string, roomId: string): Promise<AxiosResponse<any>>;
    available_rooms(filterLodgeId : string): Promise<AxiosResponse<any>>;
    occupied_rooms_overview(filterLodgeId: string, filters : filters, block: string, floor: string): Promise<AxiosResponse<any>>;
    get_online_booking_details(bookingId : string): Promise<AxiosResponse<any>>;
    download_receipt(allotmentId : string): Promise<string>;
    get_image(image : string): Promise<AxiosResponse<Blob>>;
    get_qr_data(bookingId : string , lodgeId: string): Promise<AxiosResponse<any>>;
}   
