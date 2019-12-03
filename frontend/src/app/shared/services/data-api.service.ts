import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { MascotaI } from '../models/mascota';

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

  deleteBook(idMascota: string): void {
    this.mascotaDoc = this.afs.doc<MascotaI>(`mascotas/${idMascota}`);
    this.mascotaDoc.delete();
  }
}
