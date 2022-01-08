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
  faPalette,
  faPowerOff,
  faUserCircle,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
      faPalette,
      faPowerOff,
      faUserCircle,
      faUserPlus,
      faGithub,
      faTwitter
    );
  }
}
