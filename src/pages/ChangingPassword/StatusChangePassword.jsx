import React from 'react';

export default function statusChangePassword({ status }) {
  return (
    <div className={'typewriter'}>
      {status === 200 ? (
        <h1 style={{ color: '#239546' }}> Вы успешно сменили пароль</h1>
      ) : (
        <h1 style={{ color: 'rgb(232 35 35)' }}>
          Неверный код <br />
        </h1>
      )}
    </div>
  );
}
