$(document).ready(function () {
    
    $('#left-panel nav li').removeClass();
	
    //var variable={};

    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var length = vars.length;
    var text = vars[1];
    if (length == 2) {
        // $('#NewOrderMsg').removeClass('hidden');

    }
    $('#accordion .collapse').toggleClass('show');
    // var ClientID = $('#hdnClientID').val();
    var ClientID = "0";
    var OrderID = $('#hdnOrderID').val();
    GetOrderDetails(ClientID, OrderID);
});

function GetOrderDetails(ClientID, OrderID) {
    //Data bind from Order Details Api        
    $.ajax({
        type: "POST",
        url: "/OrderDetails",
        contentType: 'application/json',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({ ClientID: ClientID, OrderID: OrderID }),
        success: function (result) {

            var apistatus = result.APIStatus

            if (apistatus == 'Success') {

                var OrderDetails = result;
                $('#lblActionType').html(OrderDetails.ActionType);
                $('#lblOrderID').html(OrderDetails.OrderID);
                $('#lblFloodCertNO').html(OrderDetails.FloodCertificationIdentifier);
                $('#lblStatus').html(OrderDetails.Status);
                $('#lblResStatus').html(OrderDetails.ResponseStatus);
                $('#lblResCode').html(OrderDetails.ResponseCode);
                $('#lblResDescription').html(OrderDetails.ResponseDescription);
                //Order Date
                var fromDate = new Date(OrderDetails.Request_Date);
                var Orderdate = new Date(fromDate).toDateString("");
                var d = new Date(Orderdate);
                var FinalDate = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
                
                $('#lblOrderDate').html(FinalDate);
                HasAttachment = OrderDetails.Attachment;
                ShowDocument(OrderID, HasAttachment)
            }
            else {
                alert('Error occured while trying to get Order Details.')
            }
        },
        error: function (error) {
            alert('Error occured while getting order details : ' + eval(error));
        }
    });
    //end Data bind from Order Details Api
};

function ShowDocument(OrderID, HasAttachment) {

    if (HasAttachment.toString() == 'true') {
        var fileData = ''

        $.ajax({
            url: "GetCertificate", //the page containing python script
            type: "POST", //request type,
            dataType: 'json',
            data: { 'OrderID': OrderID },
            success: function (result) {
                fileData = result.FileData
                var fileExists = result.FileExist

                if (fileExists == 'True') {
                    $('#collapseTwo').show()
                    $('#certPanel').show()
                    $('#attachment').attr('src', fileData)
                }
                else {

                    $('#collapseTwo').hide()
                    $('#certPanel').hide()
                    $('#attachment').attr('src', '')
                }
            },
            error: function (error) {
                alert('Error occured while retrieving the certificate : ' + eval(error));
            }
        });
    } else {
        // $('#attachment').attr('src') =''
        $('#collapseTwo').hide()
        $('#certPanel').hide()
    }
};