import { LightningElement } from 'lwc';
import   getAllRequests from '@salesforce/apex/certReqListController.getAllRequests';

export default class CertReqList extends LightningElement {
    requests;
    error;
    //appResources = {
    //	bearSilhouette: ursusResources +'/img/standing-bear-silhouette.png',};
    connectedCallback() {
        this.loadRequests();
    }
    loadRequests() {
        getAllRequests()
            .then(result => {
                this.requests = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

}