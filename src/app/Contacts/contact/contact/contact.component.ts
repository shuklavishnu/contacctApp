import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  users =[
    {name:'Test 1', value:1,
    user:[
      {name:'Vishnu Shukla',phoneNumber:11111111111,email:'example@gmail.com'},
      {name:'Anurag Dubey', phoneNumber:11111111111,email:'example@gmail.com'},
      {name:'Devesh Dubey', phoneNumber:11111111111,email:'example@gmail.com'},
    ]
  },
    {name:'Test 2', value:2,user:[{name:'Rajeev Shukla', phoneNumber:2222222222,email:'example@gmail.com'}]},
    {name:'Test 3', value:3,user:[{name:'Akhil Shukla',  phoneNumber:33333333333,email:'example@gmail.com'}]},
    {name:'Test 4', value:4,user:[{name:'Vikrant Shukla',phoneNumber:44444444444,email:'example@gmail.com'}]},
    {name:'Test 5', value:5,user:[{name:'Aayu Shukla',   phoneNumber:555555555555,email:'example@gmail.com'}]},
    {name:'Test 6', value:6,user:[{name:'Abhinav Shukla',phoneNumber:6666666666,email:'example@gmail.com'}]},
  ];
  contacts = [];
  selectedUser:any;
  modalRef?: BsModalRef;
  addOrEditForm = this.fb.group({
    name:['',Validators.required],
    email : ['', Validators.required],
    phoneNumber:['', Validators.required],
    file:['', Validators.required],
  })

  constructor(private modalService: BsModalService,private fb:FormBuilder) {}
  ngOnInit(){
    this.selectedUser = this.users[0];
  }
  showEditTemplate(template:TemplateRef<any>,data:any){
    console.log(data)
    if(data){
      this.addOrEditForm.patchValue(data)
    }
    this.modalRef = this.modalService.show(template);
  }
}
