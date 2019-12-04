import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { MascotaI } from '../models/mascota';
import { UserInterface} from '../models/user';
import { ConsejoI} from '../models/consejos';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { }
// Mascotas
  private mascotasCollection: AngularFirestoreCollection<MascotaI>;
  private mascotas: Observable<MascotaI[]>;
  private mascotaDoc: AngularFirestoreDocument<MascotaI>;
  private mascota: Observable<MascotaI>;
  public selectedMascota: MascotaI = {
    id: null
  };
  // User
  private usersCollection: AngularFirestoreCollection<UserInterface>;
  private users: Observable<UserInterface[]>;
  private userDoc: AngularFirestoreDocument<UserInterface>;
  private user: Observable<UserInterface>;
  public selectedUser: UserInterface = {
    id: null
  };
  // Consejo
  private consejosCollection: AngularFirestoreCollection<ConsejoI>;
  private consejos: Observable<ConsejoI[]>;
  private consejoDoc: AngularFirestoreDocument<ConsejoI>;
  private consejo: Observable<ConsejoI>;
  public selectedConsejo: ConsejoI = {
    id: null
  };

// Mascotas
  getAllMascotas() {
    this.mascotasCollection = this.afs.collection<MascotaI>('mascotas');
    return this.mascotas = this.mascotasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as MascotaI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneMascota(idMascota: string) {
    this.mascotaDoc = this.afs.doc<MascotaI>(`mascotas/${idMascota}`);
    return this.mascota = this.mascotaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as MascotaI;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addMascota(mascota: MascotaI): void {
    this.mascotasCollection.add(mascota);
  }

  updateMascota(mascota: MascotaI): void {
    let idMascota = mascota.id;
    this.mascotaDoc = this.afs.doc<MascotaI>(`mascotas/${idMascota}`);
    this.mascotaDoc.update(mascota);
  }

  deleteMascota(idMascota: string): void {
    this.mascotaDoc = this.afs.doc<MascotaI>(`mascotas/${idMascota}`);
    this.mascotaDoc.delete();
  }

  // User
  getAllUsers() {
    this.usersCollection = this.afs.collection<UserInterface>('users');
    return this.users = this.usersCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UserInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneUser(idUser: string) {
    this.userDoc = this.afs.doc<UserInterface>(`users/${idUser}`);
    return this.user = this.userDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as UserInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addUser(user: UserInterface): void {
    this.usersCollection.add(user);
  }

  updateUser(user: UserInterface): void {
    let idUser = user.id;
    this.userDoc = this.afs.doc<UserInterface>(`users/${idUser}`);
    this.userDoc.update(user);
  }

  deleteUser(idUser: string): void {
    this.userDoc = this.afs.doc<MascotaI>(`users/${idUser}`);
    this.userDoc.delete();
  }

  // Consejo
  getAllConsejos() {
    this.consejosCollection = this.afs.collection<ConsejoI>('consejos');
    return this.consejos = this.consejosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ConsejoI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneConsejo(idConsejo: string) {
    this.consejoDoc = this.afs.doc<ConsejoI>(`consejos/${idConsejo}`);
    return this.consejo = this.consejoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as MascotaI;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addConsejo(consejo: ConsejoI): void {
    this.consejosCollection.add(consejo);
  }

  updateConsejo(consejo: ConsejoI): void {
    let idConsejo = consejo.id;
    this.consejoDoc = this.afs.doc<ConsejoI>(`consejos/${idConsejo}`);
    this.consejoDoc.update(consejo);
  }

  deleteConsejo(idConsejo: string): void {
    this.consejoDoc = this.afs.doc<ConsejoI>(`consejos/${idConsejo}`);
    this.consejoDoc.delete();
  }
}
