import { LightningElement } from 'lwc';
import getAllCertificates from '@salesforce/apex/certiListController.getAllCertificates';


export default class CertiList extends LightningElement {
    certificates;
    error;
    
    connectedCallback() {
        this.loadCertificates();
    }
    loadCertificates() {
        getAllCertificates()
            .then(result => {
                this.certificates = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}



