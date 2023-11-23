export async function GET(request) {
    const data = [
        {
            "id_propertie": 1,
            "email_proprietor": "user1@example.com",
            "town": "Town1",
            "street": "Street1",
            "code": "ABC123",
            "beds_number": 3,
            "rooms_number": 4,
            "distance": "5.25",
            "price": "1000.00"
        },
        {
            "id_propertie": 2,
            "email_proprietor": "user2@example.com",
            "town": "Town2",
            "street": "Street2",
            "code": "DEF456",
            "beds_number": 2,
            "rooms_number": 3,
            "distance": "3.50",
            "price": "800.00"
        },
        {
            "id_propertie": 3,
            "email_proprietor": "user3@example.com",
            "town": "Town3",
            "street": "Street3",
            "code": "GHI789",
            "beds_number": 5,
            "rooms_number": 6,
            "distance": "7.75",
            "price": "1500.00"
        },
        {
            "id_propertie": 4,
            "email_proprietor": "user4@example.com",
            "town": "Town4",
            "street": "Street4",
            "code": "JKL012",
            "beds_number": 4,
            "rooms_number": 5,
            "distance": "4.85",
            "price": "1200.00"
        },
        {
            "id_propertie": 5,
            "email_proprietor": "user5@example.com",
            "town": "Town5",
            "street": "Street5",
            "code": "MNO345",
            "beds_number": 3,
            "rooms_number": 4,
            "distance": "6.10",
            "price": "1100.00"
        },
        {
            "id_propertie": 6,
            "email_proprietor": "user6@example.com",
            "town": "Town6",
            "street": "Street6",
            "code": "PQR678",
            "beds_number": 2,
            "rooms_number": 3,
            "distance": "2.75",
            "price": "950.00"
        },
        {
            "id_propertie": 7,
            "email_proprietor": "user7@example.com",
            "town": "Town7",
            "street": "Street7",
            "code": "STU901",
            "beds_number": 4,
            "rooms_number": 5,
            "distance": "8.20",
            "price": "1700.00"
        },
        {
            "id_propertie": 8,
            "email_proprietor": "user8@example.com",
            "town": "Town8",
            "street": "Street8",
            "code": "VWX234",
            "beds_number": 3,
            "rooms_number": 4,
            "distance": "5.50",
            "price": "1050.00"
        },
        {
            "id_propertie": 9,
            "email_proprietor": "user9@example.com",
            "town": "Town9",
            "street": "Street9",
            "code": "YZA567",
            "beds_number": 2,
            "rooms_number": 3,
            "distance": "3.75",
            "price": "900.00"
        },
        {
            "id_propertie": 10,
            "email_proprietor": "user10@example.com",
            "town": "Town10",
            "street": "Street10",
            "code": "BCD890",
            "beds_number": 5,
            "rooms_number": 6,
            "distance": "6.90",
            "price": "1400.00"
        },
        {
            "id_propertie": 11,
            "email_proprietor": "user11@example.com",
            "town": "Town11",
            "street": "Street11",
            "code": "EFG123",
            "beds_number": 4,
            "rooms_number": 5,
            "distance": "4.25",
            "price": "1150.00"
        },
        {
            "id_propertie": 12,
            "email_proprietor": "user12@example.com",
            "town": "Town12",
            "street": "Street12",
            "code": "HIJ456",
            "beds_number": 3,
            "rooms_number": 4,
            "distance": "6.50",
            "price": "1350.00"
        },
        {
            "id_propertie": 13,
            "email_proprietor": "user13@example.com",
            "town": "Town13",
            "street": "Street13",
            "code": "KLM789",
            "beds_number": 2,
            "rooms_number": 3,
            "distance": "3.25",
            "price": "950.00"
        },
        {
            "id_propertie": 14,
            "email_proprietor": "user14@example.com",
            "town": "Town14",
            "street": "Street14",
            "code": "NOP012",
            "beds_number": 4,
            "rooms_number": 5,
            "distance": "5.75",
            "price": "1250.00"
        },
        {
            "id_propertie": 15,
            "email_proprietor": "user15@example.com",
            "town": "Town15",
            "street": "Street15",
            "code": "QRS345",
            "beds_number": 3,
            "rooms_number": 4,
            "distance": "8.00",
            "price": "1650.00"
        },
        {
            "id_propertie": 16,
            "email_proprietor": "user16@example.com",
            "town": "Town16",
            "street": "Street16",
            "code": "TUV678",
            "beds_number": 2,
            "rooms_number": 3,
            "distance": "5.25",
            "price": "1100.00"
        },
        {
            "id_propertie": 17,
            "email_proprietor": "user17@example.com",
            "town": "Town17",
            "street": "Street17",
            "code": "WXY901",
            "beds_number": 5,
            "rooms_number": 6,
            "distance": "9.50",
            "price": "1800.00"
        },
        {
            "id_propertie": 18,
            "email_proprietor": "user18@example.com",
            "town": "Town18",
            "street": "Street18",
            "code": "ZAB234",
            "beds_number": 4,
            "rooms_number": 5,
            "distance": "6.75",
            "price": "1300.00"
        },
        {
            "id_propertie": 19,
            "email_proprietor": "user19@example.com",
            "town": "Town19",
            "street": "Street19",
            "code": "CDE567",
            "beds_number": 3,
            "rooms_number": 4,
            "distance": "4.35",
            "price": "1000.00"
        },
        {
            "id_propertie": 20,
            "email_proprietor": "user20@example.com",
            "town": "Town20",
            "street": "Street20",
            "code": "FGH890",
            "beds_number": 2,
            "rooms_number": 3,
            "distance": "7.00",
            "price": "1550.00"
        }
    ]
    return new Response(JSON.stringify(data))
  }
  