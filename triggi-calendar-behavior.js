/**
 * Created by bs on 19-05-16.
 */

TriggiCalendarBehavior = {

    //calendar table
    createCalendarMatrix: function (month, year) {

        var date = new Date(year, month, 1);
        var firstDate = date.getDate();
        var day = date.getDay();

        if (day === 0) {
            day = 7;
        }
        if (day >= 1) {
            day -= 1;
        }

        var dateArray = [];
        var myDay = firstDate - day;

        for (var row = 0; row < 6; row++) {
            dateArray.push([]);
            for (var column = 0; column < 7; column++) {
                myDay++;
                var dateRow = new Date(year, month, myDay);
                dateRow.setUTCHours(12);
                dateArray[row].push(dateRow);
            }
        }
        return dateArray;
    },

    monthNameFor: function (month) {        
        var year = this.displayedMonth.getFullYear();
        var monthName = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
        return monthName[month] + year;
    },

    rangeClass: function (thisDate, selectedDate, otherDate) {            
        var result = '';
        if (this._equalDates(new Date(), thisDate)) {
            result += ' tdStyle-currentDay';
        }
        
        if (this._equalDates(thisDate, selectedDate)) {
            result += ' tdStyle-selected';
        }

        if (thisDate && otherDate && this._equalDates(thisDate, otherDate)) {
            result += ' tdStyle-other';
        }

        if (thisDate.getMonth() === this.displayedMonth.getMonth()) {
            result += ' tdStyle';
        }
        return result;
    },
    
    _equalDates: function(date1, date2) {
        return (date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear());
    }
};