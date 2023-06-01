import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  headerTitle = 'Nuevo Producto';
  form!: FormGroup;
  id!: string;
  tabla: string = 'producto';

  constructor(
    private formBuilder: FormBuilder,
    private aRoute: ActivatedRoute,
    private fs: FirestoreService) {}

  ngOnInit(): void {
    this.fs.table = 'producto'
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: [null, Validators.required],
      descripcion: '',
      barcode: '',
      activo: true
    });
  }

  onSubmit() {
    var data: any = {...this.form.value, fechaAlta: new Date()}
    if(this.id === null){
      this.fs.add(data)
        .then(e => console.log(e))
        .catch(e => console.dir(e))
    }else{
      this.fs.update(this.id, data)
        .then(e => console.log(e))
        .catch(e => console.dir(e))
    }
  }

  get precio() {return this.form.get('precio');}
  get nombre() {return this.form.get('nombre');}

}
