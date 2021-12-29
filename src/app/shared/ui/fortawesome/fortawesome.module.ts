// Core
import { NgModule } from '@angular/core';

// FontAwesome
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCheckCircle,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faLockOpen,
  faPowerOff,
  faUserCircle,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IwdfFortawesomeModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faBars,
      faCheckCircle,
      faExclamationCircle,
      faEye,
      faEyeSlash,
      faInfoCircle,
      faLockOpen,
      faPowerOff,
      faUserCircle,
      faUserPlus
    );
  }
}