// import { TextField } from '@material-ui/core';
// import React from 'react';

// export const InputEmail = () => {
//   return (
//     <TextField
//       value={emailValue}
//       onChange={(e) => {
//         setEmailValue(e.target.value);
//       }}
//       id="standard-basic"
//       type="email"
//       // required
//       error={isEmailDirty && !isEmailValid(emailValue)}
//       helperText={
//         isEmailDirty && emailValue === ''
//           ? 'введите email'
//           : isEmailDirty && !isEmailValid(emailValue)
//           ? 'Введите корректный email'
//           : ''
//       }
//       variant="outlined"
//       autoComplete="false"
//       label="Почта"
//       onBlur={(e) => {
//         if (!isEmailDirty) setIsEmailDirty(true);
//         // if (!isPasswordDirty) setIsPasswordDirty(true);
//       }}
//     />
//   );
// };
