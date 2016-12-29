export class DashboardService {
    constructor($http) {
        this.$http = $http;
    }
    getEventProcessors() {
        console.log(this.$http.get('http://api.smashmail.nl/event/V1/getAllEventProcessors').then(response => response.data));
    }
}
