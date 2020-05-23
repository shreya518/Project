import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Certification extends NavigationMixin(LightningElement) {
    @api
    recordId;
    @api
    objectApiName;
    navigateToRecordEditPage() {
        // Opens the certification record modal
        // to view a particular record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                actionName: 'edit'
            }
        });
    }
}

