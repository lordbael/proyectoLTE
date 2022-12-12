import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public  registerForm = this.fb.group ({
    email: [ '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [false]
  });
  constructor(private authSvc: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  async onRegister(){

    try {

     await this.authSvc.register(this.registerForm.value.email, this.registerForm.value.password).then((user) => {

        Swal.fire({
          icon:'success',
          title:'Gracias por registrarse',
          text:`Se le envio un email de verificación a ${user.user.email}`,
          confirmButtonText:'Aceptar'
        }).then((result) => {
          if (result.value) {

            localStorage.removeItem('email');
            localStorage.removeItem('remember');
            this.router.navigateByUrl('/login');
          }
        })

      })
      
    } catch (e:any) {

      Swal.fire('ERROR', 'Complete bien los campos, recuerde que la contraseña debe tener al menos 6 caracteres', 'error' );

      this.registerForm.reset();
       
     }


    
  }

  

}
