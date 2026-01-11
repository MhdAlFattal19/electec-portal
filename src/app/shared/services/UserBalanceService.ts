import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClientHelperService } from './http-client-helper.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserBalanceService {

    constructor(private httpClientHelperService: HttpClientHelperService) {

    }

    private balanceSubject = new BehaviorSubject<number>(0);
    private currencySubject = new BehaviorSubject<string>('');

    balance$ = this.balanceSubject.asObservable();
    currency$ = this.currencySubject.asObservable();

    updateBalance(newBalance: number, currency:string) {
        this.balanceSubject.next(newBalance);
        this.currencySubject.next(currency);
    }
}