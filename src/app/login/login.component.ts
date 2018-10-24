import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  showIncorrect: boolean = false
  showUnauthorized: any;
  constructor(protected userService: UserService, private _formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(res => { 
      this.showUnauthorized = res.parent;
      //For Debugging
      console.log(this.showUnauthorized);
    });
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form.value)
    if(this.userService.logUserIn(this.form.value)) {
      this.router.navigate(['']);
    }
    this.showIncorrect = true;
  }

  showIncorrectCredentials() {
    return this.showIncorrect;
  }

  showUnathorizedMessage() {
    return this.showUnauthorized == 'true';
  }
}
