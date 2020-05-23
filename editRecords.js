import { LightningElement,api } from 'lwc';

export default class EditRecords extends LightningElement {
    @api recordId;
   @api objectApiName;

   handleSuccess(event) {
    //    event.preventDefault();
    
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: this.recordId,
    //             actionName: 'view'
    //         }
    //     });
    }
   }
