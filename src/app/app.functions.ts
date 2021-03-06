import * as moment from 'moment-timezone';

export default class helpers {
    //Helper function to display timestamps in client's timezone
    static formatDate(date){
         if(date!=null){ 
             return moment.tz(date,'Europe/London').clone().tz(moment.tz.guess()).format('ddd, MMM Do YYYY, h:mm:ss a')}
             else{return "ongoing"

             }
         }

    //Helper function to display numbers to precision
    static  formatMovementReading(x){ return Number.parseFloat(x).toPrecision(1) }

}