import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//servicios
import { HomeServiceService } from './services/home-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
