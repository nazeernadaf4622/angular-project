import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  hide = true;
  hideRequiredMarker = true;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
}
