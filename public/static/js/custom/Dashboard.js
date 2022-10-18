$(document).ready(function () {

    $('#left-panel nav li').removeClass();
    $("#liDashboard").addClass('active');
    $('#lblto').hide();
    $('#lblfrom').hide();
    $('#to_date').hide();
    $('#from_date').hide();
    $('#overlayApp').fadeIn();

    var monthconcate;

    // var ClientID = $('#hdnClientID').val();
    var ClientID = "0";
    var loginUser = $('#hdnLoginUser').val();
    var OrderID = '';
    var ActionType = $('#ID_Request_Type').val();
    var Status = $('#Sel_Status').val();
    var DateType = $('#ddlDatetype').val();

    var FromDate = $('#Year').val();
    var ToDate = $('#Month').val();

    $.when(getPieChart(), getBarChart(), getGridDetails()).done(function (a1, a2, a3) {

        $('#overlayApp').delay(1000).fadeOut();

        // the code here will be executed when all four ajax requests resolve.
        // a1, a2, a3 and a4 are lists of length 3 containing the response text,
        // status, and jqXHR object for each of the four ajax calls respectively.
    });

    //dashboard search 
    $(function () {
        $('.Year').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'yy',
            beforeShow: function (input) {
                $(this).datepicker('widget').addClass('hide-calendar');
                $(this).datepicker('widget').addClass('hide-month');
                $(this).datepicker('widget').removeClass('hide-year');
            },
            onClose: function (input, inst) {
                $(this).datepicker('widget').removeClass('hide-calendar');
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            }
        }).datepicker("setDate", new Date());

        $('.Month').datepicker({

            changeMonth: true,
            changeYear: true,
            dateFormat: 'MM',
            beforeShow: function (input) {
                $(this).datepicker('widget').addClass('hide-calendar');
                $(this).datepicker('widget').removeClass('hide-month');
                $(this).datepicker('widget').addClass('hide-year');

            },
            onClose: function (input, inst) {


                var monthNum = inst.selectedMonth + 1;
                if (monthNum == 1 || monthNum == 2 || monthNum == 3 || monthNum == 4 || monthNum == 5 || monthNum == 6 || monthNum == 7 || monthNum == 8 || monthNum == 9) {
                    monthconcate = 0 + "" + monthNum;
                    document.getElementById("Month").innerHTML = monthconcate;
                } else if (monthNum == 11 || monthNum == 12) {
                    monthconcate = monthNum;
                    document.getElementById("Month").innerHTML = monthconcate;
                }

                $(this).datepicker('widget').removeClass('hide-calendar');
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));

            }
        }).datepicker("setDate", new Date());;


        $(function () {
            var from = $("#from_date")
                .datepicker({
                    changeYear: true,
                    dateFormat: "yy-mm-dd",
                    yearRange: '2000:+0',
                    maxDate: new Date(),
                    changeMonth: true,
                    showButtonPanel: true,
                    beforeShow: function (input) {
                        $(this).datepicker('widget').removeClass('hide-month');
                        $(this).datepicker('widget').removeClass('hide-year');
                    }
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
                to = $("#to_date").datepicker({
                    dateFormat: "yy-mm-dd",
                    changeMonth: true,
                    changeYear: true,
                    yearRange: '2000:+0',
                    maxDate: new Date(),
                    showButtonPanel: true,
                    beforeShow: function (input) {
                        $(this).datepicker('widget').removeClass('hide-month');
                        $(this).datepicker('widget').removeClass('hide-year');
                    }
                })
                    .on("change", function () {
                        from.datepicker("option", "maxDate", getDate(this));
                    });

            function getDate(element) {
                var date;
                var dateFormat = "yy-mm-dd";
                try {
                    date = $.datepicker.parseDate(dateFormat, element.value);
                } catch (error) {
                    date = null;
                }

                return date;
            }
        });
    });



    $('#ddlDatetype').on('change', function () {
        $("#from_date").val('');
        $("#Month").val('');
        $("#to_date").val('');
        $("#Year").val('');
        $('#lblto').hide();

        if (this.value == '2') {
            $("#divtodate").addClass('hidden');
            $("#lblYear").show();
            $("#lblfrom").hide();
            $("#lblmonth").hide();
            $("#from_date").hide();
            $("#Month").hide();
            $("#to_date").hide();
            $("#Year").show();
        } else if (this.value == '1') {
            $("#divtodate").removeClass('hidden');
            $("#lblfrom").hide();
            $("#lblYear").show();
            $("#lblmonth").show();
            $("#lblto").hide();
            $("#from_date").hide();
            $("#Month").show();
            $("#to_date").hide();
            $("#Year").show();

        } else if (this.value == '3') {
            $("#divtodate").removeClass('hidden');
            $("#from_date").show();
            $("#lblfrom").show();
            $("#lblto").show();
            $("#lblmonth").hide();
            $("#Month").hide();
            $("#to_date").show();
            $("#lblYear").hide();
            $("#Year").hide();
        }
    });
    //dashboard search end


    //button Search

    $("#btnsearch").click(function (e) {

        $('#overlayApp').fadeIn();

        // var ClientID = $('#hdnClientID').val();;
        var ClientID = "0"
        var ActionType = $('#ID_Request_Type').val();
        var DateType = $('#ddlDatetype').val();
        var Year = $('#Year').val();
        var month = $('#Month').val();
        var Status = $('#Sel_Status').val();
        var OrderID = $('#OrderID').val();
        var FromDate = '';
        var ToDate = '';
        if (Year == '' || "") {
            FromDate = $('#from_date').val();
        } else {
            FromDate = Year;
        }
        if (month == '' || "") {
            ToDate = $('#to_date').val();
        } else {
            ToDate = month;
        }
        // getPieChart();
        // getBarChart();
        // getGridDetails();

        $.when(getPieChart(), getBarChart(), getGridDetails()).done(function (a1, a2, a3) {

            $('#overlayApp').delay(1000).fadeOut();

            // getPieChart();
            // getBarChart();
            // getGridDetails();

            // the code here will be executed when all four ajax requests resolve.
            // a1, a2, a3 and a4 are lists of length 3 containing the response text,
            // status, and jqXHR object for each of the four ajax calls respectively.
        });

    });

    //end Button Search




});


//DashBoard results Starts

function getPieChart() {
    // pie chart


    var ClientID = "0"
    var ActionType = $('#ID_Request_Type').val();
    var DateType = $('#ddlDatetype').val();
    var Year = $('#Year').val();
    var month = $('#Month').val();
    var Status = $('#Sel_Status').val();
    var OrderID = $('#OrderID').val();
    var FromDate = '';
    var ToDate = '';
    if (Year == '' || "") {
        FromDate = $('#from_date').val();
    } else {
        FromDate = Year;
    }
    if (month == '' || "") {
        ToDate = $('#to_date').val();
    } else {
        ToDate = month;
    }

    return $.ajax({
        type: "POST",
        url: "/RequestSummary",
        contentType: 'application/json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({

            ClientID: ClientID,
            OrderID: OrderID,
            ActionType: ActionType,
            Status: Status,
            DateType: DateType,
            FromDate: FromDate,
            ToDate: ToDate
        }),
        dataType: "json",
        success: function (result) {
            var ctx = document.getElementById("pieChart");
            $('#pieChart').html('');
            var apistatus = result.APIStatus
            if (apistatus == 'Success') {
                var textLabel = JSON.parse(result.ActionType)
                var counts = JSON.parse(result.Data)
                var colors = result.Colors
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        datasets: [{
                            data: counts,
                            backgroundColor: colors
                        }],
                        labels: textLabel
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Order Summary by Type'
                        },
                        responsive: true,
                        plugins: {
                            datalabels: {
                                font: function (context) {
                                    var width = context.chart.width;
                                    var size = Math.round(width / 32);

                                    return {
                                        weight: 'bold',
                                        size: size
                                    };
                                }

                            }
                        },
                    }
                });
            } else {
                alert('Error occured while trying to get Order Summary.')
            }

        },

        error: function (result) {

            alert('No data available to dispaly in graph ');
        }
    });
    //pie chart end
};


function getBarChart() {
    //bar charts


    var ClientID = "0"
    var ActionType = $('#ID_Request_Type').val();
    var DateType = $('#ddlDatetype').val();
    var Year = $('#Year').val();
    var month = $('#Month').val();
    var Status = $('#Sel_Status').val();
    var OrderID = $('#OrderID').val();
    var FromDate = '';
    var ToDate = '';
    if (Year == '' || "") {
        FromDate = $('#from_date').val();
    } else {
        FromDate = Year;
    }
    if (month == '' || "") {
        ToDate = $('#to_date').val();
    } else {
        ToDate = month;
    }

    return $.ajax({
        type: "POST",
        url: "/RequestStatusSummary",
        contentType: 'application/json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            ClientID: ClientID,
            OrderID: OrderID,
            ActionType: ActionType,
            Status: Status,
            DateType: DateType,
            FromDate: FromDate,
            ToDate: ToDate
        }),
        dataType: "JSON",
        success: function (result) {

            $('#barChart').html('');
            var apistatus = result.APIStatus
            if (apistatus == 'Success') {
                var ActionTypeLabel = JSON.parse(result.ActionType);
                var StatusCount = JSON.parse(result.StatusCount);
                var Total = JSON.parse(result.Total);
                var StatusTotal = "Total Requests";
                var StatusCompleted = "Completed";

                //Bar Graph

                var ctx = document.getElementById("barChart");
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ActionTypeLabel,
                        datasets: [{
                            label: StatusTotal,
                            data: Total, //[65, 59, 80, 91, 56, 55, 45],
                            borderColor: "rgba(4, 103, 187, 0.9)",
                            borderWidth: "0",
                            backgroundColor: "rgba(4, 103, 187, 0.5)"
                        },
                        {
                            label: StatusCompleted,
                            data: StatusCount, //[28, 48, 40, 19, 86, 27, 76],
                            borderColor: "rgba(0,0,0,0.09)",
                            borderWidth: "0",
                            backgroundColor: "rgba(0,0,0,0.07)"
                        }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        title: {
                            display: true,
                            text: 'Order Summary by Status'
                        },
                        responsive: true

                    }
                });
            } else {
                alert('Error occured while trying to get Order Summary.')
            }


        },

        error: function (result) {

            alert('No data available to dispaly in bar chart ');
        }
    });
    //end Bar Graph 
};

function getGridDetails() {

    var ClientID = "0"
    var ActionType = $('#ID_Request_Type').val();
    var DateType = $('#ddlDatetype').val();
    var Year = $('#Year').val();
    var month = $('#Month').val();
    var Status = $('#Sel_Status').val();
    var OrderID = $('#OrderID').val();
    var FromDate = '';
    var ToDate = '';
    if (Year == '' || "") {
        FromDate = $('#from_date').val();
    } else {
        FromDate = Year;
    }
    if (month == '' || "") {
        ToDate = $('#to_date').val();
    } else {
        ToDate = month;
    }


    return $.ajax({
        type: "POST",

        url: "/AllRequests",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        datatype: "json",
        contentType: 'application/json',
        data: JSON.stringify({

            ClientID: ClientID,
            OrderID: OrderID,
            ActionType: ActionType,
            Status: Status,
            DateType: DateType,
            FromDate: FromDate,
            ToDate: ToDate

        }),
        success: function (result) {
            debugger
            $('#tbody').html('');
            $('#mobidiv').html('');
            result = JSON.parse(result)
            var apistatus = result.APIStatus
            if (apistatus == 'Success') {
                var FinalDate = '';
                $.each(result.Response, function (index, item) {

                    var Orderdate = new Date(item.Request_Date).toDateString("");
                    var d = new Date(Orderdate);
                    FinalDate = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

                    var eachrow = "<tr>" +
                        "<td>" + item.FloodCertificationIdentifier + "</td>" +
                        "<td>" + item.ActionType + "</td>" +
                        "<td>" + item.ResponseStatus + "</td>" +
                        "<td> <a href='/OrderSummary?OrderID=" + item.OrderID + "'>" + item.OrderID + "</a></td>" +
                        "<td>" + FinalDate + "</td>"

                        + "</tr>"
                    $('#tbody').append(eachrow);
                });
                //mobile
                $.each(result.Response, function (index, item) {
                    
                    var eachrow2 = "<div class='border_radius_10px card mt-3 pt-3 pb-3 col-lg-12 d-lg-none d-block d-md-none'>" +

                        //Order ID
                        "<div class='mt-3 row'>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>Order ID</h6>" +
                        "</div>" +
                        "<div class='col-7'>" +
                        "<h6 class='text_color_blue'><a href='/OrderSummary?OrderID=" + item.OrderID + "'>" + item.OrderID + "</a></h6>" +
                        "</div>" +
                        "</div>" +
                        //Action type

                        "<div class='mt-3 row'>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>Action Type</h6>" +
                        "</div>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>" + item.ActionType + "</h6>" +
                        "</div>" +
                        "</div>" +
                        //Status
                        "<div class='mt-3 row'>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>Status</h6>" +
                        "</div>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>" + item.ResponseStatus + "</h6>" +
                        "</div>" +
                        "</div>" +

                        //Certificate
                        "<div class='mt-3 row'>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>Certificate</h6>" +
                        "</div>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>" + item.FloodCertificationIdentifier + "</h6>" +
                        "</div>" +
                        "</div>" +

                        //final date
                        "<div class='mt-3 row'>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>Request Date</h6>" +
                        "</div>" +
                        "<div class='col-5'>" +
                        "<h6 class='text_color_blue'>" + FinalDate + "</h6>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    $('#mobidiv').append(eachrow2);
                });

                //end mobile
            } else {
                alert('Error occured while trying to get Order Details.')
            }
        },
        error: function (error) {

            alert('Error occured while trying to get Order details : ' + eval(error));
        }


    });
};


//End DashBoard results Starts