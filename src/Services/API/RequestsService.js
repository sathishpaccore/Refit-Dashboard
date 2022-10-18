import http from "../../Helpers/AuthHelpers/http-common";

class RequestDataService {
  addRequest(
    ClientID,
    ActionType,
    FloodCertificationIdentifier,
    Name,
    FaxNumber,
    Email1,
    AlternateEmail,
    Phone,
    AlternatePhone,
    Address1,
    Address2,
    City,
    State,
    ZipCode,
    LoanID,
    LoanAmount,

    ServiceType,
    CostCenter1,
    CostCenter2,
    CostCenter3,
    Borrower1_FirstName,
    Borrower1_LastName,
    Borrower1_Middle_Name,
    Borrower2_FirstName,
    Borrower2_LastName,
    Borrower2_Middle_Name,
    EntityName,
    Property_StreetAddress,
    Property_City,
    Property_State,
    Property_ZipCode,
    Additional_Legal,

    File_Upload,

    Request_Xml,
    Status,
    Response_Xml,
    Request_DateInp,
    Remarks,
    ItemType,
    Description,
    SupportDocDesc,
    CertificateType,

    // # ProductType = request.json['ProductType']

    LoginUser,
    IsActive
  ) {
    let data = {};
    data["ClientID"] = ClientID;
    data["ActionType"] = ActionType;
    data["FloodCertificationIdentifier"] = FloodCertificationIdentifier;
    data["Name"] = Name;
    data["FaxNumber"] = FaxNumber;
    data["Email1"] = Email1;
    data["AlternateEmail"] = AlternateEmail;
    data["Phone"] = Phone;
    data["AlternatePhone"] = AlternatePhone;
    data["Address1"] = Address1;
    data["Address2"] = Address2;
    data["City"] = City;
    data["State"] = State;
    data["ZipCode"] = ZipCode;
    data["LoanID"] = LoanID;
    data["LoanAmount"] = LoanAmount;

    data["ServiceType"] = ServiceType;
    data["CostCenter1"] = CostCenter1;
    data["CostCenter2"] = CostCenter2;
    data["CostCenter3"] = CostCenter3;
    data["Borrower1_FirstName"] = Borrower1_FirstName;
    data["Borrower1_LastName"] = Borrower1_LastName;
    data["Borrower1_Middle_Name"] = Borrower1_Middle_Name;
    data["Borrower2_FirstName"] = Borrower2_FirstName;
    data["Borrower2_LastName"] = Borrower2_LastName;
    data["Borrower2_Middle_Name"] = Borrower2_Middle_Name;
    data["EntityName"] = EntityName;
    data["Property_StreetAddress"] = Property_StreetAddress;
    data["Property_City"] = Property_City;
    data["Property_State"] = Property_State;
    data["Property_ZipCode"] = Property_ZipCode;
    data["Additional_Legal"] = Additional_Legal;

    data["File_Upload"] = File_Upload;

    data["Request_Xml"] = Request_Xml;
    data["Status"] = Status;
    data["Response_Xml"] = Response_Xml;
    data["Request_DateInp"] = Request_DateInp;
    data["Remarks"] = Remarks;
    data["ItemType"] = ItemType;
    data["Description"] = Description;
    data["SupportDocDesc"] = SupportDocDesc;
    data["CertificateType"] = CertificateType;


    return http.post("/orders/AddRequest", data);
  }

  getClientDetails(ClientID) {
    let data = {};
    data["ClientID"] = ClientID;

    return http.post("/clients/clientdetails", data);
  }

}

export default new RequestDataService();
