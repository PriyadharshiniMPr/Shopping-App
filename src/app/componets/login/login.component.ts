import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  currentUser = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    //console.log("check",this.authenticationService.currentUserValue, this.authenticationService);

    if (this.authenticationService.currentUserValue) {
      console.log("checkif", this.authenticationService.currentUserValue);
      this.router.navigate(['/']);
    }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    //console.log("loginn")
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //console.log("curentuser", this.currentUser)
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.currentUser = false;
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
          this.currentUser = true;
        });

       // if(this.authenticationService.login(this.us, this.f.password.value)){

        //}
  }

}
