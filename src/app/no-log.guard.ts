import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserControlService } from './user-control.service';

export const noLogGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserControlService);
  console.log("no log: " + userService.user)
  if (userService.user)
    return false;
  else
    return true;
};
