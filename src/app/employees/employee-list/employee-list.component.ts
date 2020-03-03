import { EmployeeService } from 'src/app/shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor( public service: EmployeeService, private toaster: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(user : Employee){
    this.service.formData = Object.assign({},user);
  }

  // delete 
  onDelete(id: number){
    if(confirm('Are you sure to delete this record?')){
    this.service.deleteEmplyee(id).subscribe(res=>{
      this.toaster.info('Delete Successfully!!','EMP. Register');
      this.service.refreshList();
    });
  }
  }
}
