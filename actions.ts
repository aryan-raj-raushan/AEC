// actions.ts
import { createAction } from '@reduxjs/toolkit';

interface User {
	id: string;
	name: string;
}

export const signInRequest = createAction<{ phone: string, otp: string }>('SIGN_IN_REQUEST');
export const signInSuccess = createAction<User>('SIGN_IN_SUCCESS');
export const signInFailure = createAction<string>('SIGN_IN_FAILURE');
