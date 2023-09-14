import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Asignatura } from './asignatura';
import { Asistencia } from './asistencia';
import { Usuario } from './usuario';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  listaAsignatura = new BehaviorSubject([]);
  listaAsistencia = new BehaviorSubject([]);
  listadetalleAsis = new BehaviorSubject([]);
  listaUsuario = new BehaviorSubject([]);

//Creacion de tablas
  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nombreRol VARCHAR(30) NOT NULL);";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, rut VARCHAR(12), nombre VARCHAR(30) NOT NULL, apellidos VARCHAR(30), correo VARCHAR(30), clave VARCHAR(20), id_rol integer, FOREIGN KEY(id_rol) REFERENCES rol(id_rol))";
  detalleAsistencia: string ="CREATE TABLE IF NOT EXISTS detalleAsistencia(id_detalle INTEGER PRIMARY KEY autoincrement, status VARCHAR(15), fk_id_usuario integer,fk_id_asistencia integer,FOREIGN KEY(fk_id_usuario) REFERENCES usuario(id_usuario), FOREIGN KEY(fk_id_asistencia) REFERENCES asistencia(id_asistencia))";
  asistencia: string ="CREATE TABLE IF NOT EXISTS asistencia(id_asistencia INTEGER PRIMARY KEY autoincrement, fecha VARCHAR(12),fk_id_asign_sec integer, FOREIGN KEY(fk_id_asign_sec) REFERENCES asigSeccion(id_asig_seccion))";
  asigSeccion: string="CREATE TABLE IF NOT EXISTS asigSeccion(id_asig_seccion INTEGER PRIMARY KEY autoincrement, fk_id_usuario integer, fk_id_seccion integer, fk_id_asignatura integer, FOREIGN KEY(fk_id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY(fk_id_seccion) REFERENCES seccion(id_seccion),FOREIGN KEY(fk_id_asignatura) REFERENCES asignatura(id_asignatura))";
  asignatura: string="CREATE TABLE IF NOT EXISTS asignatura(id_asignatura INTEGER PRIMARY KEY autoincrement, sigla VARCHAR(4), nombre VARCHAR(20))";
  seccion: string="CREATE TABLE IF NOT EXISTS seccion(id_seccion INTEGER PRIMARY KEY autoincrement, acronimo VARCHAR(4))";
//INSERT de tablas
  registroRol: string = "INSERT or IGNORE INTO rol(id_rol,nombreRol) VALUES (1,'Estudiante');";
  registroRol1: string = "INSERT or IGNORE INTO rol(id_rol,nombreRol) VALUES (2,'Profesor');";
  // registroUsuario1: string = "INSERT or IGNORE INTO usuario(id_usuario,rut,nombre,apellidos,correo,clave) VALUES (1,'Antonio Alberto','Rodriguez Mandurrini','Profesor@estudio.cl','Admin123');";
  // registroUsuario2: string = "INSERT or IGNORE INTO usuario(id_usuario,rut,nombre,apellidos,correo,clave) VALUES (2,'Teresa Maria,'Aguilar Gonzalez','Alumno@estudio.cl','Admin123');";
  registroDetalleAsistencia1: string = "INSERT or IGNORE INTO detalleAsistencia(id_detalle,status) VALUES (1,'Presente');";
  registroDetalleAsistencia2: string = "INSERT or IGNORE INTO detalleAsistencia(id_detalle,status) VALUES (2,'Ausente');";
  // registroAsistencia1: string = "INSERT or IGNORE INTO asistencia(id_asistencia,fecha,horaInicio,horaFin) VALUES (1,'25/05/2022');"; //no se hacer esta parte xd
  detalleAsignatura1: string = "INSERT or IGNORE INTO asignatura(id_asignatura,sigla,nombre) VALUES (1,'PGY4121-','Programacion de aplicaciones móviles');"; 
  detalleAsignatura2: string = "INSERT or IGNORE INTO asignatura(id_asignatura,sigla,nombre) VALUES (2,'ASY4131-','Arquitectura');"; 
  detalleAsignatura3: string = "INSERT or IGNORE INTO asignatura(id_asignatura,sigla,nombre) VALUES (3,'CSY4111-','Calidad de software');";
  detalleSeccion1: string = "INSERT or IGNORE INTO seccion(id_seccion,acronimo) VALUES (1,'001D');"; 
  detalleSeccion2: string = "INSERT or IGNORE INTO seccion(id_seccion,acronimo) VALUES (2,'002D');"; 
  detalleSeccion3: string = "INSERT or IGNORE INTO seccion(id_seccion,acronimo) VALUES (3,'003D');"; 
//
  public database: SQLiteObject;

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);



  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController, public storage: Storage, private router: Router) { 
  this.crearBD();
  }
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  crearBD() {
    //verificamos que la plataforma este lista
    this.storage.create()
    this.platform.ready().then(() => {
      //creamos la BD
      this.sqlite.create({
        name: 'bdnoticias2.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //llamar a la funcion para crear las tablas
        this.crearTablas();
      }).catch(e => {
        this.presentAlert("Error creación BD: " + e);
      })


    })
  }
  async crearTablas() {
    try {
      //ejecuto creacion de tablas
      await this.database.executeSql(this.tablaRol, []);

      await this.database.executeSql(this.tablaUsuario, []);

      await this.database.executeSql(this.detalleAsistencia, []);

      await this.database.executeSql(this.asistencia, []);

      await this.database.executeSql(this.asigSeccion, []);

      await this.database.executeSql(this.asignatura, []);
 
      await this.database.executeSql(this.seccion, []);

      //ejecuto los insert
      await this.database.executeSql(this.registroRol, []);

      await this.database.executeSql(this.registroRol1, []);

      // await this.database.executeSql(this.registroUsuario1, []);
      // await this.database.executeSql(this.registroUsuario2, []);
      await this.database.executeSql(this.registroDetalleAsistencia1, []);

      await this.database.executeSql(this.registroDetalleAsistencia2, []);

      // await this.database.executeSql(this.registroAsistencia1, []);

      await this.database.executeSql(this.detalleAsignatura1, []);

      await this.database.executeSql(this.detalleAsignatura2, []);

      await this.database.executeSql(this.detalleAsignatura3, []);

      await this.database.executeSql(this.detalleSeccion1, []);

      await this.database.executeSql(this.detalleSeccion2, []);

      await this.database.executeSql(this.detalleSeccion3, []);

      //modificar el observable de el status de la BD
      this.isDBReady.next(true);

    } catch (e) {
      this.presentAlert("Error creación Tabla: " + e);
    }
  }
    dbState() {
      return this.isDBReady.asObservable();
    } 
        
    buscarAsignaturas() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM asignatura', []).then(res => {
        //creo el arreglo para los registros
        let items: Asignatura[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_asignatura: res.rows.item(i).id_asignatura,
              sigla: res.rows.item(i).sigla,
              nombre: res.rows.item(i).nombre
            })
          }
        }
        //actualizo el observable
        this.listaAsignatura.next(items);
  
      })
    }
    
    buscarAsistencia() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM asistencia', []).then(res => {
        //creo el arreglo para los registros
        let items: Asistencia[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_asistencia: res.rows.item(i).id_asistencia,
              fecha: res.rows.item(i).fecha
            })
          }
        }
        //actualizo el observable
        this.listaAsistencia.next(items);
  
      })
    }
    fetchUsuarios(): Observable<Usuario[]> {
      return this.listaUsuario.asObservable();
    }  
    buscarUsuario() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
        //creo el arreglo para los registros
        let items: Usuario[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_usuario: res.rows.item(i).id_usuario,
              nombre: res.rows.item(i).nombre,
              apellidos: res.rows.item(i).apellidos,
              correo: res.rows.item(i).correo,
              clave: res.rows.item(i).clave,
              rut: res.rows.item(i).rut,
              id_rol: res.rows.item(i).id_rol

            })
          }
        }
        //actualizo el observable
        this.listaUsuario.next(items);
  
      })
    }

    registrarAsistencia(fecha) {
      let data = [fecha];
      return this.database.executeSql('INSERT INTO asistencia(fecha) VALUES (?)', data).then(data2 => {
        this.buscarAsistencia();
        // this.presentAlert("Registro Realizado");
      })
    }




    modificarPerfil(nombre, correo) {
      let data = [nombre, correo];
      return this.database.executeSql('UPDATE usuario SET nombre = ?, correo = ? WHERE id_usuario = ?', data).then(data2 => {
        this.buscarUsuario();
        this.presentAlert("Perfil modificado con éxito");
      })
  
    }

    modificarClave(clave) {
      let data = [clave];
      return this.database.executeSql('UPDATE usuario SET clave = ? WHERE id_usuario = ?', data).then(data2 => {
        this.buscarUsuario();
        this.presentAlert("Contraseña Modificada");
      })
  
    }
    registrarUsuario(id_usuario,nombre,clave,id_rol) {
      let data = [id_usuario,nombre,clave,id_rol];
      return this.database.executeSql('INSERT or IGNORE INTO usuario(id_usuario,nombre,clave,id_rol) VALUES (?,?,?,?)', data).then(data2 => {
        this.buscarUsuario();
        // this.presentAlert("Registro Realizado");
      })
    }
    login(nombre, clave) {
      let log = [nombre, clave]
      return this.database.executeSql("Select * from usuario Where nombre=? and clave=?", log)
        .then(res => {
          let items: Usuario[] = [];
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              items.push({
                id_usuario: res.rows.item(i).id_usuario,
                nombre: res.rows.item(i).nombre,
                apellidos: res.rows.item(i).apellidos,
                correo: res.rows.item(i).correo,
                clave: res.rows.item(i).clave,
                rut: res.rows.item(i).rut,
                id_rol: res.rows.item(i).id_rol
              });
            }
            this.storage.set('logeado', nombre)
            this.storage.get('logeado')
  
            if(items[0].id_rol == 1){
              this.router.navigate(['/menudocente']);
            }
            else{
              this.router.navigate(['/menu']);
            }
            
          }
  
  
          else {
            this.presentAlert("Usuario y/o contraseña incorrecta");
          }
        })
    }
}
