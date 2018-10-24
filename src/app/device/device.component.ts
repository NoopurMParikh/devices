import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  devices: any;
  form: FormGroup;

  constructor(private deviceService: DeviceService, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.deviceService.getAll().subscribe((data) =>{
      this.devices = data;
      //For debugging
      //console.log(this.devices);
    },
    err => console.log(err),
    () => {
      this.form = this._formBuilder.group({
        ip: [null, [Validators.required, Validators.pattern('^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$')]],
        hostname: [null, Validators.required]
      });
    });
  }

  groupsString(groups: any[]) {
    return groups.join(", ")
  }
  addDevice() {
    const device = {hostname: this.form.controls['hostname'].value , ip: this.form.controls['ip'].value};
    console.log(device);
    this.deviceService.postDevice(device).subscribe(res => {
      let id = res['_id'];
    }, (err) => {
      console.log(err);
    })

  }
}
