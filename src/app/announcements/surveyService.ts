import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SurveyService {

  private readonly TOKEN = 'ELECTEC_INTERNAL_FORM_2026_SECURE';

  constructor(private afs: AngularFirestore) {}

  saveSurvey(data: any) {
    return this.afs.collection('inspection_surveys').add({
      ...data,
      token: this.TOKEN, // 🔐 مهم
      createdAt: new Date(),
    });
  }

getSurveys() {
    return this.afs
      .collection('inspection_surveys', ref =>
        ref
          .orderBy('createdAt', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }  
}
