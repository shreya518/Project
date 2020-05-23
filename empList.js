import { LightningElement } from 'lwc';
import getAllEmployees from '@salesforce/apex/empListController.getAllEmployees';

export default class EmpList extends LightningElement {
    employees;
    error;
    //appResources = {
    //	bearSilhouette: ursusResources +'/img/standing-bear-silhouette.png',};
    connectedCallback() {
        this.loadEmployees();
    }
    loadEmployees() {
        getAllEmployees()
            .then(result => {
                this.employees = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}


