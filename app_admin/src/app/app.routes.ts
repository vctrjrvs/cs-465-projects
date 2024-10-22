import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';

export const routes: Routes = [
    { path: "add-trip", component: AddTripComponent },
    { path: "edit-trip", component: EditTripComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'list-trips', component: TripListingComponent }
];
