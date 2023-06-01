import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  usuarios: any[] = []

  constructor(private _usuarioService: UsuariosService, private toastr: ToastrService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.getEmpleados()
    this._auth.login("arieldelbono@gmail.com","123456")
    .then(() => console.log("si"))
    .catch(() => console.log("no"))
  }

  getEmpleados(){
    this._usuarioService.getUsuarios().subscribe(data =>{
      this.usuarios = []
      data.forEach((element: any) => {
        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  eliminarUsuario(id: string){
    this._usuarioService.eliminarUsuario(id)
    .then(() => this.toastr.error('El usuario fue eliminado', '', {positionClass: 'toast-bottom-center'}))
    .catch(() => this.toastr.error('Hubo un error al eliminar', '', {positionClass: 'toast-bottom-center'}))
  }

}
