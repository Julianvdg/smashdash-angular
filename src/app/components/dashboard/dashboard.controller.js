export class DashboardController {
    constructor($http) {

        $http({
            method: 'GET',
            url: 'http://api.smashmail.nl/event/V1/getAllEventProcessors'
        }).then((response) => {
            this.processors = response.data.data;
        }, function errorCallback(response) {
            console.log(response);
        });

    }

}
