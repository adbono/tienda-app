import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  createUsuario: FormGroup
  submitted = false
  loading = false
  id: string | null
  titulo = 'Agregar Usuario '

  constructor(private fb: FormBuilder,
              private _usuarioService: UsuariosService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute) {
    this.createUsuario = fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.cargarEmpleado()
  }

  onSubmit(){
    if (this.createUsuario.invalid) return
    var usuario: any = this.createUsuario.value
    usuario = {...usuario, fecha: new Date()}
    if(this.id === null){
      this.agregarEmpleado(usuario)
    }else{
      this.editarEmpleado(this.id)
    }
  }

  agregarEmpleado(usuario: any) {
    this.loading = true
    this._usuarioService.agregarUsuario(usuario)
    .then(() => {
      this.toastr.success('El usuario fue registrado con exito', '', {positionClass: 'toast-bottom-center'});
      this.loading = false
      this.router.navigate(['/list-usuarios'])})
    .catch(() => this.toastr.error('Hubo un error al crear el usuario', '', {positionClass: 'toast-bottom-center'}))
  }

  editarEmpleado(id: string){
    this.loading = true
    var usuario: any = this.createUsuario.value
    usuario = {...usuario, fecha: new Date()}
    this._usuarioService.actualizarUsuario(id, usuario)
    .then(() => {
      this.toastr.success('El usuario fue actualizado con exito', '', {positionClass: 'toast-bottom-center'});
      this.loading = false
      this.router.navigate(['/list-usuarios'])})
    .catch(() => this.toastr.error('Hubo un error al actualizar el usuario', '', {positionClass: 'toast-bottom-center'}))
  }

  cargarEmpleado() {
    if(this.id !== null){
      this.loading = true
      this.titulo = 'Editar Usuario'
      this._usuarioService.getUsuario(this.id).subscribe(data => {
        const {usuario, nombre, email} = data.payload.data()
        this.createUsuario.setValue({
          usuario,
          nombre,
          email
        })
        this.loading = false
      })
    }
  }
  
}
