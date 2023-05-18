import BaseClass from './base-class';

export default class CommonApi extends BaseClass {
    constructor(dataAccess) {
        super('common', dataAccess);
    }

    getJobStatus(parameters) {
        const url = this.getApiUrl('jobStatus', 'na', parameters, {
            jobId: parameters.jobId,
        });
        return this.getApiResponse({
            credentials: 'same-origin',
            method: 'GET',
            url,
            headers: {
                'content-type': 'application/json',
            },
        });
    }
}
