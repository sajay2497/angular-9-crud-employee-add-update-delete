import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, private toster: ToastrService) { }

  resetForm(form?: NgForm) {
    if (form != null)
    form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      color: '',
    }
  }

  
  onSubmit(form: NgForm) {
    if (form.value.id == null){
      this.insertRecord(form);

    }
    else{
      this.updateRecord(form);
      
    }
  }

  insertRecord(form: NgForm){
      this.service.postEmployee(form.value).subscribe(res =>{
        this.toster.success('Inserted Successfully!!','EMP. Register');
        this.resetForm(form);
        this.service.refreshList();
        // console.log(res);
      });
  }

  updateRecord(form: NgForm){
      this.service.putEmployee(form.value).subscribe(res =>{
        this.toster.warning('Update Successfully!!','EMP. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
  }

  ngOnInit() {
    this.resetForm();
  }

  

}
