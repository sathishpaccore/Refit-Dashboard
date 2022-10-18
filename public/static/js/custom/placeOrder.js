var FileUpload = '';
var sample = '';
var ClientDetails = '';
var previousActionType = '';

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(event) {
        FileUpload = reader.result;
        sample = event.target.result;
    };

    reader.onerror = function(error) {
        console.log('Error occured while trying to load File Data  : ', error);
    };
}

function bar_progress(progress_line_object, direction) {
    var number_of_steps = progress_line_object.data('number-of-steps');
    var now_value = progress_line_object.data('now-value');
    var new_value = 0;
    if (direction == 'right') {
        new_value = now_value + (100 / number_of_steps);
    } else if (direction == 'left') {
        new_value = now_value - (100 / number_of_steps);
    }
    progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

$(document).ready(function() {

    $('#left-panel nav li').removeClass();
    $("#liPlaceOrder").addClass('active');

    /*
        Form
    */
    $('.form-wizard fieldset:first').fadeIn('slow');

    $('.form-wizard .required').on('focus', function() {
        $(this).removeClass('input-error');
    });

    var Clientid = "0";
    $.ajax({
        type: "POST",
        url: "/ClientDetails",
        contentType: 'application/json',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({ ClientID: Clientid }),
        success: function(result) {

            var apistatus = result.APIStatus

            if (apistatus == 'Success') {

                var RequestInfo = JSON.parse(result.RequestInfo)
                ClientDetails = JSON.parse(result.ClientInfo)

                var ele = document.getElementById('SEL_Req_Type');
                // var ele = $('#SEL_Req_Type')
                var setDrpOption = false
                var requestCount = RequestInfo.length;

                if (requestCount > 0) {

                    for (var i = 0; i < requestCount; i++) {
                        // POPULATE SELECT ELEMENT WITH JSON.
                        if (RequestInfo[i]['Enabled'] == true) {

                            if (RequestInfo[i].RequestType == 'Original') {
                                ele.innerHTML = ele.innerHTML + '<option value="' + RequestInfo[i]['RequestType'] + '" selected>' + RequestInfo[i]['RequestType'] + '</option>';
                                setDrpOption = true
                            } else {
                                ele.innerHTML = ele.innerHTML + '<option value="' + RequestInfo[i]['RequestType'] + '">' + RequestInfo[i]['RequestType'] + '</option>';
                            }
                        }

                        if (setDrpOption == false) {
                            // add code to set default selected option
                            $("#SEL_Req_Type").val($("#SEL_Req_Type option:first").val());
                        }
                    }


                    var myarray = [];
                    if (ClientDetails.FloodCertification == true) {
                        myarray.push('Flood Certificate');

                    }
                    if (ClientDetails.LOLCertification == true) {
                        myarray.push('LoL Certificate');

                    }
                    var ele = document.getElementById('ConfigurationCheck');
                    if (myarray.length > 0) {

                        for (var i = 0; i < myarray.length; i++) {
                            // POPULATE SELECT ELEMENT WITH JSON.
                            ele.innerHTML = ele.innerHTML +
                                '<option value="' + myarray[i] + '">' + myarray[i] + '</option>';
                        }
                    };


                    var RequestType = $('#SEL_Req_Type').val();
                    previousActionType = RequestType;

                    if (RequestType == 'Original') {

                        $("#SectionOriginalFormID").show();
                        $("#SectionOtherFormID").hide();
                        $('#Id_Cert_Config').removeClass('hidden');

                    } else {
                        $("#SectionOriginalFormID").hide();
                        $("#SectionOtherFormID").show();
                        $('#Id_Cert_Config').addClass('hidden');
                    }

                    $('#Con_Name').val(ClientDetails.Name);
                    $('#Con_Faxnumber').val(ClientDetails.FaxNumber);
                    $('#Cont_Email1').val(ClientDetails.Email);
                    $('#Con_Email2').val(ClientDetails.AlternateEmail);
                    $('#Cont_Phone').val(ClientDetails.Phone);
                    $('#Cont_Phone2').val(ClientDetails.AlternatePhone);
                    $('#Cont_Address1').val(ClientDetails.Address1);
                    $('#Cont_Address2').val(ClientDetails.Address2);
                    $('#Cont_City').val(ClientDetails.City);
                    $('#Cont_State').val(ClientDetails.State);
                    $('#Cont_inputZip').val(ClientDetails.ZipCode);

                    //Other form Contact Information			
                    $('#Other_name').val(ClientDetails.Name);
                    $('#Other_Faxnumber').val(ClientDetails.FaxNumber);
                    $('#Other_Email1').val(ClientDetails.Email);
                    $('#Other_Email2').val(ClientDetails.AlternateEmail);
                    $('#Other_Phone').val(ClientDetails.Phone);
                    $('#Other_Phone2').val(ClientDetails.AlternatePhone);
                    $('#Other_Address1').val(ClientDetails.Address1);
                    $('#Other_Address2').val(ClientDetails.Address2);
                    $('#Other_City').val(ClientDetails.City);
                    $('#Other_State').val(ClientDetails.State);
                    $('#Other_inputZip').val(ClientDetails.ZipCode);
                    //End show configiring Certification  dropdown

                    //end Other form contact Information

                } else {
                    alert('No action type is configured for you. Please contact administrator.')
                }
            } else {

                alert('Error occured while trying to get client details')

            }
        },
        error: function(error) {
            alert('Error occured while trying to get Client configuration : ' + eval(error));
        }


    });
    //end Data bind from Requestypes Client table Api


    // next step
    $('.form-wizard .btn-next').on('click', function() {

        var errorList = $("#errorMessages");
        errorList.empty();
        errorList.hide();

        var messageError = ''


        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
        var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
        // fields validation
        parent_fieldset.find('.required').each(function() {

            if (!($(this)[0].checkValidity())) {
                next_step = false;
                $(this).addClass('input-error');

                messageError = $(this).attr('placeholder') + " : " + this.validationMessage

                errorList.show().append("<li><span>" + messageError + "</span></li>");

                //$(this).removeClass('hidden');

            } else {

                $(this).removeClass('input-error');
            }
            // if ($(this).val() == "") {
            //     $(this).addClass('input-error');
            //     //$(this).removeClass('hidden');
            //     next_step = false;
            // } else {
            //     $(this).removeClass('input-error');
            // }
        });
        // fields validation
        if (next_step) {
            errorList.hide()
            errorList.empty()
            parent_fieldset.fadeOut(400, function() {
                // change icons
                current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                // progress bar
                bar_progress(progress_line, 'right');
                // show next step
                $(this).next().fadeIn();
                // scroll window to beginning of the form

            });
        }
    });

    // previous step
    $('.form-wizard .btn-previous').on('click', function() {
        // navigation steps / progress steps

        var errorList = $("#errorMessages");
        errorList.empty();
        errorList.hide();

        var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
        var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');

        $(this).parents('fieldset').fadeOut(400, function() {
            // change icons
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            // progress bar
            bar_progress(progress_line, 'left');
            // show previous step
            $(this).prev().fadeIn();
            // scroll window to beginning of the form

        });
    });

    $('.form-wizard .btn-submit').on('click', function() {

        var errorList = $("#errorMessages");
        errorList.empty();
        errorList.hide();

        var messageError = ''
        var invalid = 0;
        var next_step = true;
        var parent_fieldset = $(this).parents('fieldset');

        var invalid = 0;
        parent_fieldset.find('.required').each(function() {

            if (!($(this)[0].checkValidity())) {
                invalid++;
                $(this).addClass('input-error');
                $(this).addClass('input:invalid');
                messageError = $(this).attr('placeholder') + " : " + this.validationMessage

                errorList.show().append("<li><span>" + messageError + "</span></li>");

                //$(this).removeClass('hidden');

            }

            // if ($(this).val() == '') {
            //     $(this).addClass('input-error');
            //     $(this).addClass('input:invalid');
            //     invalid++;
            // }
        });


        if (invalid > 0) {

            return false;
        } else {
            //return true;
            errorList.empty();
            errorList.hide();
            var files = document.getElementById('file').files;
            if (files.length > 0) {

                getBase64(files[0]);
            }
            var loginUser = $('#hdnLoginUser').val()
                //start Json Object
            var ClientID = "0";
            var FloodCertificationIdentifier = $('#Flood_Certification_Identifier').val();
            var Name = $('#Con_Name').val();
            var FaxNumber = $('#Con_Faxnumber').val();
            var Email1 = $('#Cont_Email1').val();
            var AlternateEmail = $('#Con_Email2').val();
            var Phone = $('#Cont_Phone').val();
            var AlternatePhone = $('#Cont_Phone2').val();
            var Address1 = $('#Cont_Address1').val();
            var Address2 = $('#Cont_Address2').val();
            var City = $('#Cont_City').val();
            var State = $('#Cont_State').val();
            var ZipCode = $('#Cont_inputZip').val();
            var LoanID = $('#Loan_LoanID').val();
            var LoanAmount = $('#Loan_LoanAmount').val();
            var ServiceType = ''; //$('#Loan_SerType').val();
            var CostCenter1 = ''; //$('#Loan_SerType1').val();
            var CostCenter2 = ''; //$('#Loan_SerType2').val();
            var CostCenter3 = ''; // $('#Loan_SerType3').val();
            var Borrower1_FirstName = $('#Loan_Br1_FirstName').val();
            var Borrower1_LastName = $('#Loan_Br_LasttName').val();
            var Borrower1_Middle_Name = $('#Loan_Br1_MI').val();
            var Borrower2_FirstName = $('#Loan_Br2_firstName1').val();
            var Borrower2_LastName = $('#Loan_Br2_LastName1').val();
            var Borrower2_Middle_Name = $('#Loan_Br2_MI').val();
            var EntityName = $('#Loan_EntityNmae').val();
            var Property_StreetAddress = $('#Property_Address').val();
            var Property_City = $('#Loan_City').val();
            var Property_State = $('#Loan_State').val();
            var Property_ZipCode = $('#Property_Zipcode').val();
            var Additional_Legal = $('#Property_addi_Address').val();
            var File_Upload = FileUpload;
            var Request_Xml = '<xml></xml>'; //$('#file_property_xml').val();			
            var Status = 'submitted'; //$('#Con_Name').val();
            var Response_Xml = '<xml></xml>'; //$('#Con_Name').val();
            var Request_Date = ''; //new Date();
            var Remarks = $('#file_property_Remarks').val();
            var LoginUser = '';
            var ItemType = $('#Item_Type').val();
            var Description = $('#Description_ID').val();
            var SupportDocDesc = $('#Supporting_Doc_Description').val();
            var CreatedBy = loginUser;
            var UpdatedBy = loginUser;
            var CreatedOn = ''; //new Date();
            var UpdatedOn = ''; //new Date();	
            var IsActive = 1;
            var CertificateType = $('#ConfigurationCheck').val();
            //var IsArchive =0';				
            var ActionType = 'Original'; //$('#SEL_Req_Type').val(); //'Original';//$('#SEL_Req_Type').val();//				
            $.ajax({
                type: "POST",
                url: "/AddRequest",
                contentType: 'application/json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    ClientID: ClientID,
                    FloodCertificationIdentifier: FloodCertificationIdentifier,
                    Name: Name,
                    FaxNumber: FaxNumber,
                    Email1: Email1,
                    AlternateEmail: AlternateEmail,
                    Phone: Phone,
                    AlternatePhone: AlternatePhone,
                    Address1: Address1,
                    Address2: Address2,
                    City: City,
                    State: State,
                    ZipCode: ZipCode,
                    LoanID: LoanID,
                    LoanAmount: LoanAmount,
                    ServiceType: ServiceType,
                    CostCenter1: CostCenter1,
                    CostCenter2: CostCenter2,
                    CostCenter3: CostCenter3,
                    Borrower1_FirstName: Borrower1_FirstName,
                    Borrower1_LastName: Borrower1_LastName,
                    Borrower1_Middle_Name: Borrower1_Middle_Name,
                    Borrower2_FirstName: Borrower2_FirstName,
                    Borrower2_LastName: Borrower2_LastName,
                    Borrower2_Middle_Name: Borrower2_Middle_Name,
                    EntityName: EntityName,
                    Property_StreetAddress: Property_StreetAddress,
                    Property_City: Property_City,
                    Property_State: Property_State,
                    Property_ZipCode: Property_ZipCode,
                    Additional_Legal: Additional_Legal,
                    File_Upload: File_Upload,
                    Request_Xml: Request_Xml,
                    Status: Status,
                    Response_Xml: Response_Xml,
                    Request_Date: Request_Date,
                    Remarks: Remarks,
                    ItemType: ItemType,
                    Description: Description,
                    SupportDocDesc: SupportDocDesc,
                    LoginUser: LoginUser,
                    IsActive: IsActive,
                    ActionType: ActionType,
                    CertificateType: CertificateType
                }),
                success: function(result) {

                    var OrderInfo = JSON.parse(result)

                    var apistatus = OrderInfo.APIStatus

                    if (apistatus == 'Success') {

                        if (OrderInfo.Status == "Success") {

                            var OrderID = OrderInfo.OrderID;
                            var Description = OrderInfo.Description;
                            var Message = "Order Placed Successfully with OrderID : " + OrderID + ".   Click On OK to View Order Details";
                            bootbox.alert({
                                size: "large",
                                message: Message,
                                callback: function(callresult) {
                                    /* result is a boolean; true = OK, false = Cancel*/
                                    // window.location.href = "/OrderSummary?OrderID=" + OrderID + "&Page=" + page ;
                                    window.location.href = "/OrderSummary?OrderID=" + OrderID;
                                }
                            });
                        } else if (OrderInfo.Status == "Error") {

                            bootbox.alert({
                                size: "large",
                                message: 'Error While Trying to Place Order',
                                callback: function(callresult) {


                                }
                            });
                        }

                    } else {

                        alert('Error occured while trying to place order')

                    }

                },
                error: function(error) {
                    alert('Error occured while trying to place order : ' + eval(error));
                }
            });

        }



    });

    // update form Based On Change Action Type
    $('#SEL_Req_Type').on('change', function() {


        var id = $('#SEL_Req_Type').val();
        var selectedType = $(this).children("option:selected").val();

        bootbox.confirm({
            size: "small",
            message: "Current changes will be discarded !",
            callback: function(result) {
                /* result is a boolean; true = OK, false = Cancel*/
                if (result == true) {

                    clear();
                    $("#errorMessages").empty().hide();
                    $("#errorMessagesOther").empty().hide();
                    previousActionType = selectedType;

                    if (selectedType == 'Original') {
                        // var id = $('#SEL_Req_Type').val();
                        $("#SectionOriginalFormID").show();
                        $("#SectionOtherFormID").hide();
                        $('#Id_Cert_Config').removeClass('hidden');

                        //remove validations
                        $('#Item_Type').removeClass('required');
                        $('#Description_ID').removeClass('required');
                        $('#Supporting_Doc_Description').removeClass('required');
                        $('#Lender_Case_Identifier').removeClass('required');
                        //end remove validations for unnecessary
                    } else if (selectedType == 'StatusQuery' || selectedType == 'Upgrade' || selectedType == 'Cancellation' || selectedType == 'Reissue') {
                        var iselectedTyped = $('#SEL_Req_Type').val();
                        $("#SectionOriginalFormID").hide();
                        $("#LenderCaseChangeId").addClass('hidden');
                        $("#DisputeID").addClass('hidden');
                        $("#SectionOtherFormID").show();
                        $('#Id_Cert_Config').addClass('hidden');
                        //remove validations
                        $('#Item_Type').removeClass('required');
                        $('#Description_ID').removeClass('required');
                        $('#Supporting_Doc_Description').removeClass('required');
                        $('#Lender_Case_Identifier').removeClass('required');
                        //end remove validations for unnecessary
                    } else if (selectedType == 'Change') {
                        $("#SectionOriginalFormID").hide();
                        $("#LenderCaseChangeId").removeClass('hidden');
                        $("#DisputeID").addClass('hidden');
                        $("#SectionOtherFormID").show();
                        $('#Id_Cert_Config').addClass('hidden');
                        //remove validations
                        $('#Item_Type').removeClass('required');
                        $('#Description_ID').removeClass('required');
                        $('#Supporting_Doc_Description').removeClass('required');
                        //$('Lender_Case_Identifier').removeClass('required');
                        //end remove validations for unnecessary
                        $('#Lender_Case_Identifier').addClass('required');
                    } else if (selectedType == 'Dispute') {

                        var id = $('#SEL_Req_Type').val();
                        $("#DisputeID").removeClass('hidden');
                        $("#SectionOriginalFormID").hide();
                        $("#LenderCaseChangeId").addClass('hidden');
                        $("#SectionOtherFormID").show();
                        $('#Id_Cert_Config').addClass('hidden');
                        $('#Item_Type').addClass('required');
                        $('#Description_ID').addClass('required');
                        $('#Supporting_Doc_Description').addClass('required');
                        //remove validations
                        //$('#Item_Type').removeClass('required');
                        //$('#Description_ID').removeClass('required');
                        //$('#Supporting_Doc_Description').removeClass('required');
                        $('#Lender_Case_Identifier').removeClass('required');
                        //end remove validations for unnecessary
                    }
                } else {
                    $('#SEL_Req_Type').val(previousActionType)
                        // alert('Please select valid action type.')
                        // $("#SectionOriginalFormID").hide();
                        // $("#SectionOtherFormID").hide();
                }
            }
        })

    });

    //End  update form Based On Change Action Type

    //Button CLick Other Than Original
    $("#btn_OtherForm").click(function() {
        var errorList = $("#errorMessagesOther");
        errorList.empty();
        errorList.hide();

        var messageError = ''

        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var index = parent_fieldset.find('.required').length;

        var invalid = 0;
        var next_step = true;
        var parent_fieldset = $(this).parents('fieldset');

        var invalid = 0;
        parent_fieldset.find('.required').each(function() {
            if (!($(this)[0].checkValidity())) {
                invalid++;
                // next_step = false;
                $(this).addClass('input-error');
                $(this).addClass('inputcurerror');
                messageError = $(this).attr('placeholder') + " : " + this.validationMessage

                errorList.show().append("<li><span>" + messageError + "</span></li>");

                //$(this).removeClass('hidden');

            } else {
                $(this).removeClass('inputcurerror');
                // $(this).addClass('input-error');
            }
            // if ($(this).val() === '') {
            //     $(this).addClass('input-error');
            //     $(this).addClass('inputcurerror');
            //     invalid++;
            // } else {
            //     $(this).removeClass('inputcurerror');
            // }
        });
        if (invalid > 0) {

            return false;
        } else {
            errorList.empty();
            errorList.hide();
            var ActionType = $('#SEL_Req_Type').val();
            bootbox.confirm({
                message: "Please confirm to place the order.",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function(result) {

                    bootbox.hideAll()
                    if (result == true) {

                        // var ClientID = $('#hdnClientID').val();
                        var loginUser = $('#hdnLoginUser').val();
                        //start Json Object
                        var ClientID = "0";
                        var FloodCertificationIdentifier = $('#Flood_Certification_Identifier').val();
                        var Name = $('#Other_name').val();
                        var FaxNumber = $('#Other_Faxnumber').val();
                        var Email1 = $('#Other_Email1').val();
                        var AlternateEmail = $('#Other_Email2').val();
                        var Phone = $('#Other_Phone').val();
                        var AlternatePhone = $('#Other_Phone2').val();
                        var Address1 = $('#Other_Address1').val();
                        var Address2 = $('#Other_Address2').val();
                        var City = $('#Other_City').val();
                        var State = $('#Other_State').val();
                        var ZipCode = $('#Other_inputZip').val();
                        var LoanID = $('#Loan_LoanID').val();
                        var LoanAmount = $('#Loan_LoanAmount').val();
                        var ServiceType = ''; //$('#Loan_SerType').val();
                        var CostCenter1 = ''; //$('#Loan_SerType1').val();
                        var CostCenter2 = ''; //$('#Loan_SerType2').val();
                        var CostCenter3 = ''; //$('#Loan_SerType3').val();
                        var Borrower1_FirstName = $('#Loan_Br1_FirstName').val();
                        var Borrower1_LastName = $('#Loan_Br_LasttName').val();
                        var Borrower1_Middle_Name = $('#Loan_Br1_MI').val();
                        var Borrower2_FirstName = $('#Loan_Br2_firstName1').val();
                        var Borrower2_LastName = $('#Loan_Br2_LastName1').val();
                        var Borrower2_Middle_Name = $('#Loan_Br2_MI').val();
                        var EntityName = $('#Loan_EntityNmae').val();
                        var Property_StreetAddress = $('#Property_Address').val();
                        var Property_City = $('#Loan_City').val();
                        var Property_State = $('#Loan_State').val();
                        var Property_ZipCode = $('#Property_Zipcode').val();
                        var Additional_Legal = $('#Property_addi_Address').val();
                        var File_Upload = '';
                        var Request_Xml = '<xml></xml>'; //$('#file_property_xml').val();			
                        var Status = 'submitted'; //$('#Con_Name').val();
                        var Response_Xml = '<xml></xml>'; //$('#Con_Name').val();
                        var Request_Date = ''; //new Date();
                        var Remarks = $('#file_property_Remarks').val();
                        var ItemType = $('#Item_Type').val();
                        var Description = $('#Description_ID').val();
                        var LoginUser = "";
                        var SupportDocDesc = $('#Supporting_Doc_Description').val();
                        var CreatedBy = loginUser;
                        var UpdatedBy = loginUser;
                        var CreatedOn = ''; //new Date();
                        var UpdatedOn = ''; //new Date();	
                        var IsActive = 1;
                        var CertificateType = ''
                            //var IsArchive =0';				
                        var ActionType = $('#SEL_Req_Type').val(); //'Original';//$('#SEL_Req_Type').val();
                        $.ajax({
                            type: "POST",
                            url: "/AddRequest",
                            contentType: 'application/json',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            //data: {                      },
                            //data: {},	
                            data: JSON.stringify({
                                ClientID: ClientID,
                                FloodCertificationIdentifier: FloodCertificationIdentifier,
                                Name: Name,
                                FaxNumber: FaxNumber,
                                Email1: Email1,
                                AlternateEmail: AlternateEmail,
                                Phone: Phone,
                                AlternatePhone: AlternatePhone,
                                Address1: Address1,
                                Address2: Address2,
                                City: City,
                                State: State,
                                ZipCode: ZipCode,
                                LoanID: LoanID,
                                LoanAmount: LoanAmount,
                                ServiceType: ServiceType,
                                CostCenter1: CostCenter1,
                                CostCenter2: CostCenter2,
                                CostCenter3: CostCenter3,
                                Borrower1_FirstName: Borrower1_FirstName,
                                Borrower1_LastName: Borrower1_LastName,
                                Borrower1_Middle_Name: Borrower1_Middle_Name,
                                Borrower2_FirstName: Borrower2_FirstName,
                                Borrower2_LastName: Borrower2_LastName,
                                Borrower2_Middle_Name: Borrower2_Middle_Name,
                                EntityName: EntityName,
                                Property_StreetAddress: Property_StreetAddress,
                                Property_City: Property_City,
                                Property_State: Property_State,
                                Property_ZipCode: Property_ZipCode,
                                Additional_Legal: Additional_Legal,
                                File_Upload: File_Upload,
                                Request_Xml: Request_Xml,
                                Status: Status,
                                Response_Xml: Response_Xml,
                                Request_Date: Request_Date,
                                Remarks: Remarks,
                                ItemType: ItemType,
                                Description: Description,
                                SupportDocDesc: SupportDocDesc,
                                LoginUser: LoginUser,
                                IsActive: IsActive,
                                ActionType: ActionType,
                                CertificateType: CertificateType
                            }),
                            success: function(result) {


                                var OrderInfo = JSON.parse(result)

                                var apistatus = OrderInfo.APIStatus
                                if (apistatus == 'Success') {


                                    if (OrderInfo.Status == "Success") {

                                        var page = 1;
                                        var OrderID = OrderInfo.OrderID;
                                        var Description = OrderInfo.Description;
                                        var Message = "Order Placed Successfully with OrderID : " + OrderID + ".   Click On OK to View Order Details";
                                        bootbox.alert({
                                            size: "large",
                                            message: Message,
                                            callback: function(callresult) {
                                                /* result is a boolean; true = OK, false = Cancel*/
                                                // window.location.href = "/OrderSummary?OrderID=" + OrderID + "&Page=" + page ;
                                                window.location.href = "/OrderSummary?OrderID=" + OrderID;
                                            }
                                        });
                                    } else if (OrderInfo.Status == "Error") {

                                        bootbox.alert({
                                            size: "large",
                                            message: 'Error While Trying to Place Order',
                                            callback: function(callresult) {


                                            }
                                        });
                                    }

                                } else {
                                    alert('Error occured while trying to place order')
                                }

                            },
                            error: function(error) {
                                alert('error occurred while adding Order ; ' + eval(error));
                            }


                        });
                    } else {

                    }


                }
            });
        }
    });
    //End Button CLick Other Than Original



});
// image uploader scripts 

var $dropzone = $('.image_picker'),
    $droptarget = $('.drop_target'),
    $dropinput = $('#inputFile'),
    $dropimg = $('.image_preview'),
    $remover = $('[data-action="remove_current_image"]');

$dropzone.on('dragover', function() {
    $droptarget.addClass('dropping');
    return false;
});

$dropzone.on('dragend dragleave', function() {
    $droptarget.removeClass('dropping');
    return false;
});

$dropzone.on('drop', function(e) {
    $droptarget.removeClass('dropping');
    $droptarget.addClass('dropped');
    $remover.removeClass('disabled');
    e.preventDefault();

    var file = e.originalEvent.dataTransfer.files[0],
        reader = new FileReader();

    reader.onload = function(event) {
        $dropimg.css('background-image', 'url(' + event.target.result + ')');
    };

   
    reader.readAsDataURL(file);

    return false;
});

$dropinput.change(function(e) {
    $droptarget.addClass('dropped');
    $remover.removeClass('disabled');
    $('.image_title input').val('');

    var file = $dropinput.get(0).files[0],
        reader = new FileReader();

    reader.onload = function(event) {
        $dropimg.css('background-image', 'url(' + event.target.result + ')');
    }

    reader.readAsDataURL(file);
});

$remover.on('click', function() {
    $dropimg.css('background-image', '');
    $droptarget.removeClass('dropped');
    $remover.addClass('disabled');
    $('.image_title input').val('');
});

$('.image_title input').blur(function() {
    if ($(this).val() != '') {
        $droptarget.removeClass('dropped');
    }
});
// image uploader scripts





//Clear the Form Data
function clear() {
    $('#Flood_Certification_Identifier').val("");
    // $('#Con_Name').val("");
    // $('#Con_Faxnumber').val("");
    // $('#Cont_Email1').val("");
    // $('#Con_Email2').val("");
    // $('#Cont_Phone').val("");
    // $('#Cont_Phone2').val("");
    // $('#Cont_Address1').val("");
    // $('#Cont_Address2').val("");
    // $('#Cont_City').val("");
    // $('#Cont_State').val("");
    // $('#Cont_inputZip').val("");
    $('#Loan_LoanID').val("");
    $('#Loan_LoanAmount').val("");
    $('#Loan_SerType').val("");
    $('#Loan_SerType1').val("");
    $('#Loan_SerType2').val("");
    $('#Loan_SerType3').val("");
    $('#Loan_Br1_FirstName').val("");
    $('#Loan_Br_LasttName').val("");
    $('#Loan_Br1_MI').val("");
    $('#Loan_Br2_firstName1').val("");
    $('#Loan_Br2_LastName1').val("");
    $('#Loan_Br2_MI').val("");
    $('#Loan_EntityNmae').val("");
    $('#Property_Address').val("");
    $('#Loan_City').val("");
    $('#Loan_State').val("");
    $('#Property_Zipcode').val("");
    $('#Property_addi_Address').val("");
    $('#file_property_Remarks').val("");
    $('#Item_Type').val("");
    $('#Description_ID').val("");
    $('#Supporting_Doc_Description').val("");
}
//end Clear the Form Data


//Other Form Validations 


//end Other Form Validation