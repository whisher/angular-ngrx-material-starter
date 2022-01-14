// Core
import { NgModule } from '@angular/core';

// FontAwesome
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faChartBar,
  faCheckCircle,
  faEdit,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faLockOpen,
  faPalette,
  faPlus,
  faPowerOff,
  faTrash,
  faUserCircle,
  faUserPlus,
  faUsers
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
      faChartBar,
      faCheckCircle,
      faEdit,
      faExclamationCircle,
      faEye,
      faEyeSlash,
      faInfoCircle,
      faLockOpen,
      faPalette,
      faPlus,
      faPowerOff,
      faTrash,
      faUserCircle,
      faUserPlus,
      faUsers,
      faGithub,
      faTwitter
    );
  }
}
