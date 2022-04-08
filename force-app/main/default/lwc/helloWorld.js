import { LightningElement,track} from 'lwc';

export default class HelloWorld extends LightningElement {
 
    userList=["A","B","C"] 
    fullname=" ZERO TO HERO "
    title="lwc"
    changeHandler(event) 
    {
        this.title=event.target.value
    }
     
}