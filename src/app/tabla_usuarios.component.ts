import { Component  } from '@angular/core';
declare var jQuery: any;
async function tempo() {
    
    var datos;
    //alert('Welcome to custom js');
    var settings = {
        "url": "http://127.0.0.1:8000/api/user",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cookie": "XSRF-TOKEN=eyJpdiI6IkhrSEdxeHJRVS9SQUsrL09Ja3FVY2c9PSIsInZhbHVlIjoiS0JOR0F6a1lZRkw4V1NodmpNTnV6c3c4TFg2TkVQdm5XM0F3ZnZ1UzJkamdJaTJ0MEVjcWMzekVpZGdEVkxaUkJiRnFLZEJqQnlCbEYyZDJYOWhFdFBmNFNyb0RxYkxXMEl3S2ZoQ2JEMytkWlFXSjVBY3FzQ3AyTC94aDFPazYiLCJtYWMiOiIzNWIwOGIwZjA4ZTk4ZTY4ZTQ5MDJlYTA2YWE5NzA0YzE2MmRlYjYzOWRiYjAxMjhiZGUzMmVkYTJmOGU1MDhkIn0%3D; laravel_session=eyJpdiI6InFMZjkybVU3cjNuWnk3RFRJV2pNY0E9PSIsInZhbHVlIjoiek1oUFhtUi9VYThqRXZMdUN4R1VIdUJUT1RXRU95T0R5Z1NBT1RuY3BiWVRUZzJsdlJCVEozclpGeVpXekl6c0JKN0hiMStKWW5mZW1pRmVkcHZTaHlvUGlKVENsRjBGM054R243RTRqc3pJMjdNTUJrU2tmc0M2akhQQnhiK0QiLCJtYWMiOiIwYTUxZWQxOGYzOWYxZjc0NTU1ZmViZGUyNjkyNzUxMGVhYjExZTQ1ZTM4YWY5MDU2Mzg0MzliOTFhMzY5ZWU1In0%3D"
        },
        };
        
        var data = await jQuery.ajax(settings).done(function (response) {
        console.log(response[0]);
          datos = response;
        
        });
        var array = [];
        console.log(data);
        data.forEach(usuario => {
          array.push(new Usuarios(usuario.Nombre, usuario.Fecha,usuario.Edad,usuario.Direccion));
        });
        console.log(array);
        return array;
}
@Component({
  selector: 'TablaUsuarios-root',
  templateUrl: './tabla_usuarios.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class TablaUsuariosComponent {
  title = 'Usuarios';
  Usuarios = [];
  myusuario = this.Usuarios[0];
  
  async  ngOnInit() {
    this.Usuarios = await tempo();
    console.log(this.Usuarios); // Has NO value
  }
    

}





export class Usuarios {
    constructor(
      public name: string,
      public fecha: string,
      public Edad: string,
      public Direccion: string
      ) { }
  }

  
