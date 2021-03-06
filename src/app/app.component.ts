import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm;
  defaultQuestion ="pet";

  genders = ['male','female'];

  user = {
    username:'',
    email: '',
    gender: '',
  };

  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
/*     this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret:'pet',
      gender:'male',
    }); */
    this.signupForm.form.patchValue({
      userData:{
       username: suggestedName
      }
    });
  }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();

  }

/*   onSubmit(form: NgForm){
     console.log(form)`
  } */
}
