
export interface Room {
    roomId: string;           
    advance_amount: number;   
    room_price: number;       
    refund_amount: number;    
}

export interface AllotmentAddModel {
    phone: string;
    name: string;
    location: string;
    documentType: string;
    documentId: string;
    noOfMales: number;
    noOfFemales: number;
    noOfChildren: number;
    noOfGroups: number;
    refferedBy: string;
    refference: string;
    expectedVacateTime: string;
    address: string;
    remarks: string;
    specialOptions: string;
    specialTypes: string;
    rooms: Room[];           
    roomPricePaymentMode: string;
    roomPricePaymentId: string;
    refundPaymentMode: string;
    refundPaymentId: string;
    isFreeRoom: boolean;
    onlineBookingNo: string,
    bookingType: string,
    onlineCustomerId: string | null,
    onlineBookingId: string  | null,
    reservationId : string  | null,
    profile_image : Blob | null,
    id_image : Blob | null,
    allotedDateTime : any;
    onlineUniqueId : string
}

export interface filters {
    endDate: string;
    startDate: string
}
