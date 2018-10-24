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
  form: FormGroup;
  devices: any[];
  constructor(private groupService: GroupService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.groupService.getAll().subscribe((data) =>{
      this.groups = data;
      //For debugging
      //console.log(this.groups);
    },
    err => console.log(err),
    () => {
      this.form = this._formBuilder.group({
        name: [null, Validators.required],
        description: [null],
        ip: [null, [Validators.required, Validators.pattern('^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$')]],
        hostname: [null, Validators.required]
        
      });
    });
  }

  addGroup() {
    const group = {
      name: this.form.controls['name'].value,
      description: this.form.controls['description'].value,
      devices: this.devices,
      devicegroup: this.groups
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
    const device = {hostname: this.form.controls['hostname'].value , ip: this.form.controls['ip'].value, group: this.form.controls['group'].value.split(',')};
    console.log(device);
    this.devices.push(device);
    this.addGroup()
  }

}
