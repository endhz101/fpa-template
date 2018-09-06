import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';
import { GeneralSystemCharacteristicDetailsServices } from '../data-services/generalSystemCharacteristicDetails.services';
import { GeneralSystemCharacteristicDetails } from '../model/generalSystemCharacteristicDetails.model';



@Injectable()
export class GeneralSystemCharacteristicDetailsStorage { 
  constructor(private httpClient: HttpClient, private generalSystemCharacteristicDetailsServices: GeneralSystemCharacteristicDetailsServices) { }

  getGeneralSystemCharacteristicDetails(index:number) {

    this.httpClient.get('http://172.168.4.98:8090/api/GeneralSystemCharacteristicDetails/GetByGeneralCharacteristicId/'+index)
      .map(
        (response) => {
          return response;
        }).subscribe(
      (result: GeneralSystemCharacteristicDetails[]) => {
            this.generalSystemCharacteristicDetailsServices.setGeneralSystemCharacteristicDetails(result);
          });
  }



}