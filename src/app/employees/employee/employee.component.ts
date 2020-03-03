import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  resetForm(form?: NgForm) {
    if (form != null)
    form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      color: '',
    }
  }

  onSubmit(form : NgForm){
    alert('asdf');
  }

  ngOnInit() {
    this.resetForm();
  }

  

}
