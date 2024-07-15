import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MailService {
  private apiUrl = 'http://172.213.195.162/mail';

  constructor(private http: HttpClient) { }

  sendEmail(subject: string, content: string) {
    return this.http.post(this.apiUrl , { subject, content });
  }

}

