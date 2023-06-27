export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

{/*------------------------ hotelColumns --------------------------*/}

export const hotelColumns = [
  { 
    field: "_id", 
    headerName: "ID", 
    width: 250 
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

{/*------------------------ inventoryColumns --------------------------*/}

export const inventoryColumns = [
  { 
    field: "_id", 
    headerName: "ID", 
    width: 270 
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photos || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
    
    
  },
  {
    field: "description",
    headerName: "Description",
    width: 220,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  // {
  //   field: "prices",
  //   headerName: "Price",
  //   width: 450,
  // },
  // // {
  //   field: "quantity",
  //   headerName: "Quantity",
  //   width: 100,
  // },
];

{/*------------------------ MenuListColumns --------------------------*/}


export const MenuListColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "categoryTitle",
    headerName: "Category Title",
    width: 250,
  },
  {
    field: "offerTag",
    headerName: "Offer Percentage",
    width: 120,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  }
]

{/*------------------------ PaymentColumns --------------------------*/}

// const card = card.exp_year
export const PaymentColumns = [
  
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "email",
    headerName: "email",
    width: 150,
  },
  {
    // field: "cardNo",
    // headerName: "Card Number",
    // width: 250,
  },
  // {
  //   field: "cardholderName",
  //   headerName: "Card Holder Name",
  //   width: 200,
  // },
  {
    field: "expMonth",
    headerName: "Expired Month",
    width: 150,
  },
  // {
  //   field: "expYear",
  //   headerName: "Expired Year",
  //   width: 100,
  // },
  {
    field: 'card',
    headerName: "CVV",
    width: 200,
  }
]

{/*------------------------ PayrollColumns --------------------------*/}

export const PayrollColumns = [
  {
    field: "employeeId",
    headerName: "Employee Id",
    width: 70,
  },
  {
    field: "basicSalary",
    headerName: "Basic Salary",
    width: 250,
  },
  {
    field: "mealAllowance",
    headerName: "Meal Allowance",
    width: 200,
  },
  {
    field: "transportationAllowance",
    headerName: "Transportation Allowance",
    width: 100,
  },
  {
    field: "medicalAllowance",
    headerName: "Medical Allowance",
    width: 100,
  },
  {
    field: "retirementInsurance",
    headerName: "Retirement Insurance",
    width: 100,
  },
  {
    field: "tax",
    headerName: "TAX",
    width: 100,
  },
  {
    field: "EPF",
    headerName: "EPF",
    width: 100,
  },
  {
    field: "ETF",
    headerName: "ETF",
    width: 100,
  }
]

{/*------------------------ BlogColumns --------------------------*/}


export const BlogColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "TextH",
    headerName: "Blog Header",
    width: 250,
  },
  {
    field: "TextP",
    headerName: "Blog Paragraph",
    width: 200,
  },
  {
    field: "img",
    headerName: "Image",
    width: 100,
  },
  {
    field: "Btn",
    headerName: "Button",
    width: 100,
  },
  {
    field: "textFull",
    headerName: "description",
    width: 100,
  },
]


{/*------------------------ EventColumns --------------------------*/}


export const EventColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "title",
    headerName: "Event Title",
    width: 250,
  },
  {
    field: "offer",
    headerName: "Offer",
    width: 80,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },
  {
    field: "photos",
    headerName: "Photos",
    width: 100,
  },
  {
    field: "prices",
    headerName: "Prices",
    width: 100,
  },
]

{/*------------------------ delievryColumns --------------------------*/}
export const delievryColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
  },
  {
    field: "phoneNo",
    headerName: "Phone No",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
]


{/*------------------------ FeedbackColumns --------------------------*/}
export const FeedbackColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "feedbackType",
    headerName: "Feedback Type",
    width: 300,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
  },
]

{/*------------------------ AttendanceColumns --------------------------*/}
export const AttendanceColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "name",
    headerName: "name",
    width: 300,
  },
  {
    field: "position",
    headerName: "position",
    width: 150,
  },
  {
    field: "employeeID",
    headerName: "employeeID",
    width: 150,
  },
]


{/*------------------------ leaveColumns --------------------------*/}

export const leaveColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "position",
    headerName: "Position",
    width: 150,
  },
  {
    field: "employeeID",
    headerName: "Employee ID",
    width: 150,
  },
  {
    field: "stratingDate",
    headerName: "Strating Date",
    width: 150,
  },
  {
    field: "endingDate",
    headerName: "Ending Date",
    width: 150,
  },
  {
    field: "leave",
    headerName: "Leave",
    width: 150,
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 150,
  },
]


{/*------------------------ cusColumns --------------------------*/}

export const cusColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "username",
    headerName: "Username",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "firstName",
    headerName: "FirstName",
    width: 100,
  },
  {
    field: "lastName",
    headerName: "lastName",
    width: 100,
  },
  {
    field: "contactNo",
    headerName: "ContactNo",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "dateOfBirth",
    headerName: "DateOfBirth",
    width: 100,
  },
]

{/*------------------------ contactUSColumns --------------------------*/}
export const contactColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "message",
    headerName: "Message",
    width: 150,
  },
]


{/*------------------------ EventColumns --------------------------*/}


export const addEmpoColumns = [
  // {
  //   field: "_id",
  //   headerName: "ID",
  //   width: 70,
  // },
  {
    field: "eId",
    headerName: "Employee ID",
    width: 140,
  },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "nationality",
    headerName: "Nationality",
    width: 80,
  },
  {
    field: "NIC",
    headerName: "NIC",
    width: 100,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "dob",
    headerName: "DOB",
    width: 100,
  },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
  },
]