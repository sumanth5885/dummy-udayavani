import {
    getCurrentDate,
} from "./common";

interface allotmentPdfRes {
    _id: string;
    lodgeName: string;
    customerName: string;
    customerAddress: string;
    customerLocation: string;
    securityDeposit: number;
    refundAmt: number;
    roomDet: {
        roomNumber: number;
    }[];
    allotedByName: string;
    allotedDateTime: string;
    allotmentRecNo: number;
    bookingType: string;
    date: string;
    chDate: string;
    chTime: string;
    rupeeInWOrds: string;
}


export const downloadAllotmentPdf = (response: allotmentPdfRes) => {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
        margin: 0;
        box-sizing: border-box;
    }
    .body {
        width: 100%;
        height: 100%;
    }
    .jeevan_guest {
        font-size: 22px;
        font-weight: 800;
        margin-bottom: 8px;
    }
    .bill_container {
        width: 350px;
        padding-left: 0px;
        padding-right: 20px;
    }
    .header {
        text-align: center;
        line-height: 13px;
        border-top: 1px solid lightgray;
        padding: 20px 0px 5px 0px;
        font-size: 17px;
        margin-bottom: 5px;
    }
    .security_voucher {
        border-bottom: 1px solid black;
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 700;
    }
    .date_time_content {
        text-align: center;
        line-height: 20px;
        font-size: 14px;
    }
    .borders {
        border-bottom: 1px dashed black;
        // margin-top: 80px;
    }
    .last_border {
        border-bottom: 1px dashed black;
    }
    .name_details {
        gap: 5px;
        margin: 5px 0;
        font-weight: 700;
        font-size: 15px;
    }
    .name_details span {
        text-transform: uppercase;
        font-size: 17px;
    }
    .security_deposit {
        text-align: center;
        margin-top: 2px;
    }
    .deposit_container {
        margin-bottom: 2px;
    }

    .deposit_container span {
        font-weight: 700;
        font-size: 18px;
    }
    .occupants_signature {
        border-top: 2px solid lightgray;
        margin-right: 30px;
    }
    .dharmastala {
        margin-top: 3px;
        margin-bottom: 3px;
    }

    .website_container {
        text-align: center;
        border-top: 1px dashed lightgray;
        padding: 2px 0px 2px 0px;
        font-size: 14px;
        gap: 5px;
        margin-top: 4px;
    }

    .website_container .website_link {
        font-size: 13px;
        font-weight: 700;
    }

    .website_container .website_link:nth-child(2) {
        font-size: 12px;
    }

    .room_validity {
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .user {
        font-size: 15px;
        margin-bottom: 8px;
        font-weight: 800;
        margin-top: 100px;
        text-align: center;
    }

    .rupees_500 {
        font-size: 15px;
        font-weight: 700;
    }

    .main_signature_container {
        margin-top: 20px;

    }


    .image_signature {
        width: 70px;
        margin-left: 40px;
    }



    .dates {
        font-size: 15px;
        margin-bottom: 5px;
        font-weight: 700;
    }


    .divborder1 {
        margin-top: 50px;
        width: 120px;
        height: 2px;
        border-top: 2px solid black;
        float: left;
        margin-left: 10px;
    }

    .divborder2 {
        margin-top: 50px;
        width: 120px;
        height: 2px;
        border-top: 2px solid black;
        float: right;
        margin-right: 10px;
    }

    .occupant_signature {
        margin-top: 20px;
    }

    .signature {
        margin-left: 101px;
    }

    .secretary_signature1 {
        padding-right: 20px;
        font-weight: 700;
        float: left;
        padding-left: 40px;
    }

    .secretary_signature2 {
        padding-right: 20px;
        font-weight: 700;
        float: right;
        padding-right: 40px;
    }

    .persons_signaure {
        margin-top: 5px;
    }

    .header_border {
        width: 100%;
        height: 2px;
        border-top: 1px dashed black;
    }

    .date_container {
        
        margin: 5px 0;
    }

    .date_container span {
        font-weight: 700;
    }

    .rec_no {
        font-size: 15px;
        font-weight: 700;
    }

    .div-container {
    width: 100%;
    margin-bottom: 0px;
}

.rec_no_date, .rec_no_rec {
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    margin: 5px 0;
}

.rec_no_date {
    width: 49%;
}

.rec_no_rec {
    width: 49%;
    text-align: right;
}

    .web_link {
        font-size: 13px;
        font-weight: 700;
        text-align: center;
    }

    .web_link:nth-child(2) {
        font-size: 12px;
    }
</style>

<body>
    <div class="bill_container">
        <div class="header">
            <!-- <p class="jeevan_guest">SAHYADHRI GUEST HOUSE</p> -->
            <p class="jeevan_guest">${response.lodgeName.toUpperCase()} GUEST HOUSE</p>
            <p class="dharmastala">Dharmastala - 574216</p>
            <span class="security_voucher">Security Deposit Voucher</span>
        </div>
        <div class="header_border">

        </div>

       <div class="div-container">
    <p class="rec_no_date"><span>Date:</span> ${getCurrentDate()}</p>
    <p class="rec_no_rec"><span>Rec No:</span> ${response.allotmentRecNo}</p>
</div>

<div class="div-container">
    <p class="rec_no_date"><span>Ch Date:</span> ${response?.chDate}</p>
    <p class="rec_no_rec"><span>Ch Time:</span>${response?.chTime}</p>
</div>

<p class="rec_no_date"><span>Room No:</span> ${response?.roomDet
        ?.map((el: any) => el.roomNumber)
        ?.join(", ")}</p>


        <p class="borders"></p>
        <div class="name_details">
            <!-- <p>Name: <span>Ragu</span></p>
            <p>Address: <span>TAMILNAD</span></p> -->
            <p>Name: <span>${response.customerName}</span></p>
            <p>Address: <span>${response.customerLocation}</span></p>
        </div>

        <div class="security_deposit">
            <div class="deposit_container">
                <!-- <p><span>Security Deposit Rs.: 1500</span></p>
                <p class="rupees_500">(Rupees one thousand five hundred only)</p> -->
                <p><span>Security Deposit Rs.:${
                    response.bookingType == "OFFLINE"
                        ? response.securityDeposit
                        : response.refundAmt
                }</span></p>
                <p class="rupees_500">(${response?.rupeeInWOrds})</p>
            </div>

            <div class="signatures1">
                <p></p>
                <p class="signature"></p>
            </div>
            <div class="border_signature">
                <div class="divborder1">

                </div>
                <div class="divborder2">

                </div>
            </div>

            <p class="secretary_signature1">Occupant <br> Signature</p>
            <p class="secretary_signature2">Secretary</p>



        </div>

        <!-- <p class="user">u: prashanth</p> -->
        <p class="user">u:${response.allotedByName}</p>
        <p class="room_validity">Note: Room validity 24 Hrs Only.</p>

        <div class="last_border"></div>

        <p class="web_link">Website: https://www.shridharmasthala.org</p>
        <p class="web_link">https://www.fb.com/Sri.Kshetra.Dharmasthala.Manjunatha</p>
    </div>


    </div>

</body>

</html>`;
    console.log(html);

    return html;
};

