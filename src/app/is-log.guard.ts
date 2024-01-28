import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserControlService } from './user-control.service';

export const isLogGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserControlService);
  console.log("islog: " + userService.user)
  if (userService.user)
    return true;
  else
    return false;
};
