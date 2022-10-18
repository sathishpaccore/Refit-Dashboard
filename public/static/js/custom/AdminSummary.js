$(document).ready(function () {
	
	$('#left-panel nav li').removeClass();
	$("#liAdminSummary").addClass('active');

	$.ajax({
		type: "Get",
		url: "/Clients",
		dataType: "json",
		contentType: 'application/json',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({}),
		success: function (result) {
			var apistatus = result.APIStatus
			if (apistatus == 'Success') {
				$.each(result.Response, function (index, item) {
					var eachrow = "<tr>"
						+ "<td>" + item.LenderID + "</td>"						
						+ "<td>" + item.UserID + "</td>"
						+ "<td>" + item.Name + "</td>"
						+ "<td>" + item.InternalAccountIdentifier + "</td>"
						+ "<td>" + item.LoginAccountIdentifier + "</td>"
						+ "<td>" + item.LoginAccountPassword + "</td>"
						+ "<td>" + item.Email + "</td>"
						+ "<td> <a href='/registration?ClientID=" + item.ClientID + "'>" + "<i class='fa fa-eye'></i> </a></td>"
						+ "</tr>";
					$('#tbody').append(eachrow);
				});
			}
			else {
				alert('Error occurred while trying to get Client Info')
			}
		},
		error: function (error) {
			alert('Error occurred while getting Client Details : ' + eval(error));
		}
	});
});