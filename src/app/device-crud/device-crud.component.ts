import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';



@Component({
  selector: 'app-device-crud',
  templateUrl: './device-crud.component.html',
  styleUrls: ['./device-crud.component.css']
})
export class DeviceCrudComponent implements OnInit {

  id: any;
  device: any;
  form: FormGroup;
  operation: string;
  itemRemoved: boolean = false;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute, private _formBuilder: FormBuilder) {
    this.route.params.subscribe(res => { 
      this.id = res.id;
      //For Debugging
      console.log(this.id);
    });
  }

  ngOnInit() {
    this.deviceService.getID(this.id).subscribe(
      data =>  {
        this.device = data;
        console.log(this.device);
      },
      err => console.log(err),
      () => {
        this.form = this._formBuilder.group({
          ipAddress: [this.device.ipAddress, [Validators.required, Validators.pattern('^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$')]],
          hostname: [this.device.hostname, Validators.required]
        });
      }
    );
  }

  setCRUD(op: string) {
    this.operation = op;
  }
 
  onSubmit() {
    console.log('Submiting data');
    switch(this.operation) {
      case "update": {
        console.log('Updating');
        const device = {hostname: this.form.controls['hostname'].value , ipAddress: this.form.controls['ipAddress'].value};
        this.deviceService.updateDevice(this.device.id, device).subscribe(res => {
          let id = res['_id'];
        }, (err) => {
          console.log(err);
        })
        break;
      }
      case "delete": {
        console.log('Deleting');
        this.deviceService.deleteDevice(this.device.id).subscribe(res => {
          let id = res['_id'];
        }, (err) => {
          console.log(err);
        })
        break;
      }
    }
  }

  showSubmitButton() {
    return this.itemRemoved || (this.form.controls['hostname'].valid && this.form.controls['hostname'].touched) || (this.form.controls['ipAddress'].valid && this.form.controls['ipAddress'].touched)
  }

}
