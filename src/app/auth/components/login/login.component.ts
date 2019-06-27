import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private router: Router) {
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.router.navigate(['dashboard']).then();
    }
  }

  ngOnInit() {
  }

}
