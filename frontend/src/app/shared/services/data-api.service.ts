import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { MascotaI } from '../models/mascota';
import { UserInterface} from '../models/user';
import { ConsejoI} from '../models/consejos';
import { VacunaI} from '../models/vacunas';
import { ReservaI} from '../models/reservas';


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
  // Vacuna
  private vacunasCollection: AngularFirestoreCollection<VacunaI>;
  private vacunas: Observable<VacunaI[]>;
  private vacunaDoc: AngularFirestoreDocument<VacunaI>;
  private vacuna: Observable<VacunaI>;
  public selectedVacuna: VacunaI = {
    id: null
  };
  // Reserva
  private reservasCollection: AngularFirestoreCollection<ReservaI>;
  private reservas: Observable<ReservaI[]>;
  private reservaDoc: AngularFirestoreDocument<ReservaI>;
  private reserva: Observable<ReservaI>;
  public selectedReserva: ReservaI = {
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
  // Vacuna
  getAllVacunas() {
    this.vacunasCollection = this.afs.collection<VacunaI>('vacunas');
    return this.vacunas = this.vacunasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as VacunaI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneVacuna(idVacuna: string) {
    this.vacunaDoc = this.afs.doc<VacunaI>(`vacunas/${idVacuna}`);
    return this.vacuna = this.vacunaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as VacunaI;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addVacuna(vacuna: VacunaI): void {
    this.vacunasCollection.add(vacuna);
  }

  updateVacuna(vacuna: VacunaI): void {
    let idVacuna = vacuna.id;
    this.vacunaDoc = this.afs.doc<VacunaI>(`vacunas/${idVacuna}`);
    this.vacunaDoc.update(vacuna);
  }

  deleteVacuna(idVacuna: string): void {
    this.vacunaDoc = this.afs.doc<VacunaI>(`vacunas/${idVacuna}`);
    this.vacunaDoc.delete();
  }
   // Reserva
   getAllReservas() {
    this.reservasCollection = this.afs.collection<ReservaI>('reservas');
    return this.reservas = this.reservasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ReservaI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneReservas(idReserva: string) {
    this.reservaDoc = this.afs.doc<ReservaI>(`reservas/${idReserva}`);
    return this.reserva = this.reservaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ReservaI;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addReserva(reserva: ReservaI): void {
    this.reservasCollection.add(reserva);
  }

  updateReserva(reserva: ReservaI): void {
    let idReserva = reserva.id;
    this.reservaDoc = this.afs.doc<ReservaI>(`reservas/${idReserva}`);
    this.reservaDoc.update(reserva);
  }

  deleteReserva(idReserva: string): void {
    this.reservaDoc = this.afs.doc<ReservaI>(`reservas/${idReserva}`);
    this.reservaDoc.delete();
  }
}
