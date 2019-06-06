

$(document).ready(function(){

    var result = {  data :
        [
    {
        'time': 1559804343072,
       'campaign-icon': '<img src ="whatapp.jpg"/>',
        'campaign-text': 'Test Whatsapp',
        'campaign-sub-text': 'US',
        'view-logo': '<img src ="dollar.jpg"/>',
        'view-text': 'View Price',
        'action-csv-logo': 'csv',
        'action-report-logo': 'report',
        'action-calander-logo': 'calendar'

    },
    {
        'time': 1559804343072,
       'campaign-icon': '<img src ="whatapp.jpg"/>',
        'campaign-text': 'Test JP',
        'campaign-sub-text': 'JP',
       'view-logo': '<img src ="dollar.jpg"/>',
        'view-text': 'View Price',
        'action-csv-logo': 'csv',
        'action-report-logo': 'report',
        'action-calander-logo': 'calendar'

    },
    {
        'time': 1559804343072,
       'campaign-icon': '<img src ="whatapp.jpg"/>',
        'campaign-text': 'Super Jewels Quest',
        'campaign-sub-text': 'CA,FR',
       'view-logo': '<img src ="dollar.jpg"/>',
        'view-text': 'View Price',
        'action-csv-logo': 'csv',
        'action-report-logo': 'report',
        'action-calander-logo': 'calendar'

    },
    {
        'time': 1559804343072,
        'campaign-icon': '<img src ="whatapp.jpg"/>',
        'campaign-text': 'Mole slayer',
        'campaign-sub-text': 'FR',
        'view-logo': '<img src ="dollar.jpg"/>',
        'view-text': 'View Price',
        'action-csv-logo': 'csv',
        'action-report-logo': 'report',
        'action-calander-logo': 'calendar'

    },
    {
        'time': 1559804343072,
        'campaign-icon': '<img src ="whatapp.jpg"/>',
        'campaign-text': 'Mancala Mix',
        'campaign-sub-text': 'CA,FR,JP',
         'view-logo': '<img src ="dollar.jpg"/>',
        'view-text': 'View Price',
        'action-csv-logo': 'csv',
        'action-report-logo': 'report',
        'action-calander-logo': 'calendar'

    }
    ]
    };
     var tr = '<tr>' +
             '<td class="date">' +
                '<div class="display-date"></div>'+
                '<div class="display-days"></div>'+
            '</td>' +
             '<td class="campaign">' +
                 '<div class ="campaign-icon">'+
                 '</div>' +
                 '<div class="campaign-text">' +
                    '<div class = "main-text"></div>'+
                    '<div class = "sub-text"></div>'+
                 '</div>'+
             '</td>' +
             '<td class="view">' +
                 '<div class = "view-logo"></div>'+
                 '<div class = "view-text">VIEW PRICING</div>'+
             '</td>' +
             '<td class="actions">' +
                '<div class="csv">' +
                    '<div class="action-logo"><i class="far fa-file-excel"></i></div>'+
                    '<div class="action-text">CSV</div>'+
                '</div>'+
                '<div class="reports">' +
                     '<div class="action-logo"><i class="fas fa-signal"></i></div>'+
                     '<div class="action-text">REPORT</div>'+
                '</div>'+
                '<div class="calendar">' +
                     '<div class="action-logo"><i class="fa fa-calendar" aria-hidden="true"></i></div>'+
                     '<div class="action-text">SCHEDULE AGAIN</div>'+
                '</div>'+
            '</td>' +
         '</tr>';

    var calendarWrapper = $('<div class="calendar-wrapper" style="display:none"><input type="date" class="get-date" name="event-calendar"></div>');

    var dict = result.data;
    console.log(result.data);
    var i,temp,date,month,fullDate;
    for(i=0;i<dict.length;i++)
    {
            temp = $(tr);
            date = new Date(dict[i].time);
            month = date.getMonth()+1;
            fullDate = date.getFullYear()+'-'+month+'-'+date.getDate();
            temp.find(".date .display-date").append(fullDate);

            temp.find('.campaign .campaign-icon').append(dict[i]['campaign-icon']);
            temp.find(".main-text").append(dict[i]["campaign-text"]);
            temp.find(".sub-text").append(dict[i]["campaign-sub-text"]);

            temp.find(".view-logo").append(dict[i]["view-logo"]);

            //temp.find(".actions .csv .action-logo").append(dict[i]["action-csv-logo"]);
            //temp.find(".actions .reports .action-logo").append(dict[i]["action-report-logo"]);
            //temp.find(".actions .calendar .action-logo").append(dict[i]["action-calander-logo"]);
            $('.table-wrapper').find('tbody').append(temp);
    }


    $('.calendar .action-logo i').on('click',function(e){
        $('.calendar-wrapper').remove();
        $(e.target).closest(".actions").append(calendarWrapper);
        var pos = $(e.target).offset();
        var left = pos.left - 40;
        var top =pos.top+30
        $('.calendar-wrapper').css({'left':left,'top':top,'display':'block'});
        e.stopPropagation();
    });

    $(document.body).on('click',function(e){
        if($('.calendar-wrapper').is(':visible') && $('.get-date').length && !$(e.target).closest('.get-date').length) {
            var actions = $('.calendar-wrapper').closest('.actions');
            var eventDate = new Date($('.get-date').val());
            var eventTime = eventDate.getTime();
            var currDate = new Date();
            var currTime = currDate.getTime();
            var rema = currTime - eventTime;

            var noOfSeconds = rema/1000;
            var noOfMinutes = noOfSeconds/60
            var noOfHours = noOfMinutes/60
            var noOfDays = Math.ceil(noOfHours/24);
            if (noOfDays < 0) {
                noOfDays = noOfDays * -1;
                noOfDays = noOfDays + ' days remaining';

            } else {
                noOfDays = noOfDays + ' days ago';
            }

            var yy = eventDate.getFullYear();
            var mm = eventDate.getMonth()+1;
            var dd = eventDate.getDay();

            var str = yy+'-'+mm+'-'+dd;

            actions.closest('tr').find('.date .display-days').html(noOfDays);
            actions.closest('tr').find('.date .display-date').html(str);
            $('.calendar-wrapper').hide();
        }
    })

    //$('.calendar .action-logo i').on('click',function(e){
    //    $('.calendar-wrapper').show();
    //    var pos = $(e.target).offset();
    //    var left = pos.left - 40;
    //    var top =pos.top+30
    //    $('.calendar-wrapper').css({'left':left,'top':top,'display':'block'});
    //});



});