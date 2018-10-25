import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-group',
  templateUrl: './device-group.component.html',
  styleUrls: ['./device-group.component.css']
})
export class DeviceGroupComponent implements OnInit {

  groups: any;
  form2: FormGroup;
  devices: any[];
  constructor(private groupService: GroupService, private _formBuilder: FormBuilder) {
    
    
   }

  async ngOnInit() {
    await this.groupService.getAll().subscribe((data) =>{
      this.groups = data;
      //For debugging
      console.log(this.groups);
      this.form2 = this._formBuilder.group({
        group_name: [null, Validators.required],
        group_desc: [null, Validators.required],
        ipAddress: [null, [Validators.required, Validators.pattern('^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$')]],
        hostname: [null, Validators.required],
        group: [null, Validators.required]
        
      });
    },
    err => console.log(err),
    () => {
     
    });
  }

  addGroup() {
    const group = {
      group_name: this.form2.controls['group_name'].value,
      gorup_desc: this.form2.controls['group_desc'].value,
      deviceList: this.devices,
      deviceGroup: this.groups
    }
    this.groupService.postDeviceGroup(group).subscribe(res => {
      let id = res['_id'];
    }, (err) => {
      console.log(err);
    })
  }

  groupsString(groups: any[]) {
    return groups.join(", ")
  }

  addDevice() {
    const device = {hostname: this.form2.controls['hostname'].value , ipAddress: this.form2.controls['ipAddress'].value, group: this.form2.controls['group'].value.split(',')};
    console.log(device);
    this.devices.push(device);
    this.addGroup()
  }

}
