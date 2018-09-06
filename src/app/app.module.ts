import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { ProjectSummaryComponent } from './projectsummary/projectsummary.component';
import { CostmodelComponent } from './costmodel/costmodel.component';
import { FpaComponent } from './fpa/fpa.component';
import { AppRoutingModule } from './app.routing.module';
import { Select2Module } from 'ng2-select2';
import { EstimationComponent} from './estimation/estimation.component';
import { HotTableModule} from '@handsontable/angular';
import { ImplementationComponent} from './implementation/implementation.component'
import { MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

//Storage
import { GeneralSystemCharacteristicsStorageServices } from './data-storage-services/generalSystemCharacteristics.storage.services';
import { TechnologyItemStorageServices } from './data-storage-services/technologyItem.storage.services';
import { GeneralSystemCharacteristicDetailsStorage } from './data-storage-services/generalSystemCharacteristicDetails.storage.services';
//Services
import { GeneralSystemCharacteristicsServices } from './data-services/generalSystemCharacteristics.services';
import { TechnologyItemServices } from './data-services/technologyItem.services';
import { GeneralSystemCharacteristicDetailsServices } from './data-services/generalSystemCharacteristicDetails.services';




@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    ProjectSummaryComponent,
    CostmodelComponent,
    FpaComponent,
    EstimationComponent,
    ImplementationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Select2Module,
    HotTableModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [GeneralSystemCharacteristicsStorageServices,
    GeneralSystemCharacteristicsServices, TechnologyItemServices,
    TechnologyItemStorageServices, GeneralSystemCharacteristicDetailsServices,
    GeneralSystemCharacteristicDetailsStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
