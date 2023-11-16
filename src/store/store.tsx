import { atom } from 'jotai';
import type { IAddress } from './types';
export const baseURL = 'https://front-end-task.bmbzr.ir';

export const allTokens = atom<IAddress[]>([]);
export const userNationalId = atom<string>('');
export const userPhoneNumber = atom<string>('');
export const userAddress = atom<IAddress | null>(null);

// export const [getAllTokens] = atomsWithQuery(() => ({
//   queryKey: ['userAddresses'],
//   queryFn: async () => {
//     const res = await fetch(
//       `https://raw.githubusercontent.com/PiperFinance/CD/main/tokens/outVerified/all_tokens.json`
//     );

//     return res.json();
//   },
// }));
