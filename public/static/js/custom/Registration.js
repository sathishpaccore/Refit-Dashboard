var ClientID;
$(document).ready(function () {
  $('#left-panel nav li').removeClass();
  $("#liRegistration").addClass('active');

  ClientID = $('#hdnClientID').val();
  if (ClientID == 0 || ClientID == undefined || ClientID == '' || ClientID == null) {
    $("#Id_BtnSubmit").show();
    $("#Id_BtnUpdate").hide();
    ClientID = -1;
  }
  else {
    $("#Id_BtnSubmit").hide();
    $("#Id_BtnUpdate").show();
    $("#UserID").attr("disabled", "disabled");
  }

  LoadClientInfo(ClientID);

});

function LoadClientInfo(ClientID) {
  $.ajax({
    type: "POST",
    url: "/ClientDetails",
    contentType: 'application/json',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ 'ClientID': ClientID }),
    dataType: "json",
    success: function (result) {
      var apistatus = result.APIStatus

      if (apistatus == 'Success') {

        var inputRequest = JSON.parse(result.ClientInfo)

        var RequestType = JSON.parse(result.RequestInfo)
        //End ActionTypes Based On clientID=0
        //ActionTypes Based On clientID

        var ActionType = '';
        if (ClientID == "-1") {

          //Action Type in Form
          ActionType = RequestType;
          //end Action Type in Form

        }
        else {
          //AutomatedAddress=true;
          //client Details form Details

          $('#Cont_Name').val(inputRequest.Name);
          $('#UserID').val(inputRequest.UserID);
          $('#Cont_Email1').val(inputRequest.Email);
          $('#Cont_Alternateemail').val(inputRequest.AlternateEmail);
          $('#Cont_Phonenumber').val(inputRequest.Phone);
          $('#Cont_Fax').val(inputRequest.FaxNumber);
          $('#state').val(inputRequest.State);
          $('#Cont_City').val(inputRequest.City);
          $('#Cont_Zipcode').val(inputRequest.ZipCode);
          $('#Cont_Address1').val(inputRequest.Address1);
          $('#Cont_Password').val(inputRequest.Password);
          $('#Cont_Address2').val(inputRequest.Address2);
          $('#Cont_Landline').val(inputRequest.AlternatePhone);
          $('#Cont_LenderID').val(inputRequest.LenderID);
          $('#Cont_LoginAccountIdentifier').val(inputRequest.LoginAccountIdentifier);
          $('#Cont_LoginAccountPassword').val(inputRequest.LoginAccountPassword);
          $('#Cont_InternalAccountIdentifier').val(inputRequest.InternalAccountIdentifier);
          $('#Manual_Certification').val(inputRequest.ManualCertCost);
          $('#Automated_Certification').val(inputRequest.AutomatedCertCost);
          $('#LOL_Certification').val(inputRequest.LOLCertCost);
          if (AutomatedAddress == true) {
            $('#AutomatedAddress').prop('checked', true);
          };
          if (FloodCertification == true) {
            $('#FloodCertification').prop('checked', true);
          };
          if (LOLCertification == true) {
            $('#LOLCertification').prop('checked', true);
          };
          //end client Details form Details
          ActionType = RequestType;

        }
        //End ActionTypes Based On clientID

        var dataconcate = '';
        var testdiv = '';
        ActionType.forEach(function (obj) {
          if (obj.Enabled == true) {
            $('#dynamic_div').append('<div class="col-sm-3" style="float:left">' + '<input name="accesories" type="checkbox" value="' + obj.RequestType + '" Checked/> ' + obj.RequestType + '</div>');

          }
          else {
            $('#dynamic_div').append('<div class="col-sm-3" style="float:left">' + '<input name="accesories" type="checkbox" value="' + obj.RequestType + '" /> ' + obj.RequestType + '</div>');
            // dataconcate += '<div class="col-md-3" style="float:left">' + '<input name="accesories" type="checkbox" value="' + obj.RequestType + '" /> ' + obj.RequestType + '</div>' + '<br/>';

          }

        });
      }
      else {
        alert('Error occured while trying to get Client Details.')
      }

    },

    error: function (result) {

      alert("Error occured while getting client information.")


    }
  });
}




$(function Validation() {

  $("form[name='registration']").validate({

    rules: {
      Cont_Name: "required",
      Cont_LenderID: "required",
      UserID: "required",
      Cont_Password: "required",
      Cont_LoginAccountIdentifier: "required",
      Cont_InternalAccountIdentifier: "required",
      Cont_LoginAccountPassword: "required",
      Cont_Email1: "required",
     Cont_Address1: "required",
      Cont_Phonenumber: "required",
      Cont_City: "required",
      Cont_Zipcode: "required",
      Manual_Certification: "required",
      Automated_Certification: "required",
      LOL_Certification: "required"

    },
    // Specify validation error messages
    messages: {
      Cont_Name: "Name is required field",
      Cont_LenderID: "LenderID is required field",
      UserID: "Userid is required field",
      Cont_Password: "Password is Mandatory",
      Cont_LoginAccountIdentifier: "Login Account Identifier is required field",
      Cont_InternalAccountIdentifier: "Internal Account Identifier is required field",
      Cont_LoginAccountPassword: "Login Account Password is required field",
      Cont_Email1: "Email is required field",
      Cont_Address1: "Address is required field",
      Cont_Phonenumber: "phone number is required field",
      Cont_City: "City is required field",
      Cont_Zipcode: "Zipcode is required field",
      Manual_Certification: "Manual Certification is required field",
      Automated_Certification: "Automated Certification is required field",
      LOL_Certification: "   LOL Certification is required field"
    },

    submitHandler: function (form) {
      form.submit();
    }
  });
});


































function CheckUserIDExists(ClientID, UserID) {
  var UserIdExists = false;
  $.ajax({
    type: "POST",
    url: "/CheckUserIDExists",
    dataType: "json",
    contentType: 'application/json',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ 'ClientID': ClientID, 'UserID': UserID }),

    success: function (result) {

      var apistatus = result.APIStatus

      if (apistatus == 'Success') {

        if (UserIdExists == false)
          return false;

        alert("This UserId is already Exists.")
      }
      else {




      }
    },

    //  if(UserIdExists==true){


    //    return false;
    //             }


    error: function (result) {

      alert("Error occurred at Check UserID Exists")

    }


  });

}




$("#Id_BtnSubmit").click(function (e) {

  Validation();


  var UserID = $('#UserID').val();
  CheckUserIDExists(ClientID, UserID);


  var favorite = [];

  $.each($("input[name='accesories']:checked"), function () {
    favorite.push($(this).val());
  });
  var SelectedRequestTypes = favorite.join(", ");
  var convertedSelectedRequestTypes = SelectedRequestTypes.toString();
  var SelectedRequestTypesHidden = document.getElementById("hiddenRequesttype").value = convertedSelectedRequestTypes;
  var selectedActionTypes = SelectedRequestTypesHidden;
  var Name = $('#Cont_Name').val();
  var Email1 = $('#Cont_Email1').val();
  var AlternateEmail = $('#Cont_Alternateemail').val();
  var Phonenumber = $('#Cont_Phonenumber').val();
  var Fax = $('#Cont_Fax').val();
  var State = $('#state').val();
  var City = $('#Cont_City').val();
  var ZipCode = $('#Cont_Zipcode').val();
  var Address1 = $('#Cont_Address1').val();
  var Password = $('#Cont_Password').val();
  var Address2 = $('#Cont_Address2').val();
  var Landline = $('#Cont_Landline').val();
  var LenderID = $('#Cont_LenderID').val();
  var LoginAccountIdentifier = $('#Cont_LoginAccountIdentifier').val();
  var LoginAccountPassword = $('#Cont_LoginAccountPassword').val();
  var InternalAccountIdentifier = $('#Cont_InternalAccountIdentifier').val();
  if ($("#AutomatedAddress").prop('checked') == true) {
    var AutomatedAddress = true;
  }
  else {
    var AutomatedAddress = false;
  };
  if ($("#FloodCertification").prop('checked') == true) {
    var FloodCertification = true;
  }
  else {
    var FloodCertification = false;
  };
  if ($("#LOLCertification").prop('checked') == true) {
    var LOLCertification = true;
  }
  else {
    var LOLCertification = false;
  };

  var ManualCertCost = $('#Manual_Certification').val();
  var AutomatedCertCost = $('#Automated_Certification').val();
  var LOLCertCost = $('#LOL_Certification').val();
  var UserID = $('#UserID').val();

  $.ajax({

    type: "POST",
    dataType: "Json",
    url: "/AddClient",
    contentType: 'application/json',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(
      {
        Name: Name,
        Email: Email1,
        AlternateEmail: AlternateEmail,
        Phone: Phonenumber,
        AlternatePhone: Landline,
        FaxNumber: Fax,
        Address1: Address1,
        Address2: Address2,
        City: City,
        State: State,
        ZipCode: ZipCode,
        LoginUser: Email1,
        Password: Password,
        IsActive: null,
        LenderID: LenderID,
        LoginAccountIdentifier: LoginAccountIdentifier,
        LoginAccountPassword: LoginAccountPassword,
        InternalAccountIdentifier: InternalAccountIdentifier,
        AutomatedAddress: AutomatedAddress,
        ActionTypes: selectedActionTypes,
        FloodCertification: FloodCertification,
        LOLCertification: LOLCertification,
        ManualCertCost: ManualCertCost,
        AutomatedCertCost: AutomatedCertCost,
        LOLCertCost: LOLCertCost,
        UserID: UserID


      }),
    success: function (result) {
      var apistatus = result.APIStatus

      if (apistatus == 'Success') {

        alert('Client details saved');
        window.location.href = "adminsummary"
      }
      else {
        alert('Error occurred while trying to save client details.')
      }
    },

    error: function (result) {
      alert("Error occured while saving Client information.")

    }
  });


});




$("#Id_BtnUpdate").click(function () {
  if ($("#basic-form").valid()) {
    var favorite = [];
    $.each($("input[name='accesories']:checked"), function () {
      favorite.push($(this).val());
    });
    var SelectedRequestTypes = favorite.join(", ");
    var convertedSelectedRequestTypes = SelectedRequestTypes.toString();
    var SelectedRequestTypesHidden = document.getElementById("hiddenRequesttype").value = convertedSelectedRequestTypes;
    var selectedActionTypes = SelectedRequestTypesHidden;
    var Name = $('#Cont_Name').val();
    var Email1 = $('#Cont_Email1').val();
    var AlternateEmail = $('#Cont_Alternateemail').val();
    var Phonenumber = $('#Cont_Phonenumber').val();
    var Fax = $('#Cont_Fax').val();
    var State = $('#state').val();
    var City = $('#Cont_City').val();
    var ZipCode = $('#Cont_Zipcode').val();
    var Address1 = $('#Cont_Address1').val();
    var Password = $('#Cont_Password').val();
    var Address2 = $('#Cont_Address2').val();
    var Landline = $('#Cont_Landline').val();
    var LenderID = $('#Cont_LenderID').val();
    var LoginAccountIdentifier = $('#Cont_LoginAccountIdentifier').val();
    var LoginAccountPassword = $('#Cont_LoginAccountPassword').val();
    var InternalAccountIdentifier = $('#Cont_InternalAccountIdentifier').val();


    if ($("#AutomatedAddress").prop('checked') == true) {
      var AutomatedAddress = true;
    }
    else {
      var AutomatedAddress = false;
    };
    if ($("#FloodCertification").prop('checked') == true) {
      var FloodCertification = true;
    }
    else {
      var FloodCertification = false;
    };
    if ($("#LOLCertification").prop('checked') == true) {
      var LOLCertification = true;
    }
    else {
      var LOLCertification = false;
    };

    var ManualCertCost = $('#Manual_Certification').val();
    var AutomatedCertCost = $('#Automated_Certification').val();
    var LOLCertCost = $('#LOL_Certification').val();
    var UserID = $('#UserID').val();

    $.ajax({
      type: "POST",
      url: "/UpdateClient",
      contentType: 'application/json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      dataType: "JSON",

      data: JSON.stringify(

        {

          ClientID: ClientID,
          Name: Name,
          Email: Email1,
          AlternateEmail: AlternateEmail,
          Phone: Phonenumber,
          AlternatePhone: Landline,
          FaxNumber: Fax,
          Address1: Address1,
          Address2: Address2,
          City: City,
          State: State,
          ZipCode: ZipCode,
          LoginUser: Email1,
          Password: Password,
          IsActive: null,
          LenderID: LenderID,
          LoginAccountIdentifier: LoginAccountIdentifier,
          LoginAccountPassword: LoginAccountPassword,
          InternalAccountIdentifier: InternalAccountIdentifier,
          AutomatedAddress: AutomatedAddress,
          ActionTypes: selectedActionTypes,
          FloodCertification: FloodCertification,
          LOLCertification: LOLCertification,
          ManualCertCost: ManualCertCost,
          AutomatedCertCost: AutomatedCertCost,
          LOLCertCost: LOLCertCost,
          UserID: UserID



        }),

      success: function (result) {

        var apistatus = result.APIStatus

        if (apistatus == 'Success') {

          alert('Client details saved');
          window.location.href = "adminsummary"
        }
        else {
          alert('Error occurred while trying to save client details.')
        }
      },


      error: function (result) {

        alert("Error occured while updating Client information.")

      }



    });
  }
});


