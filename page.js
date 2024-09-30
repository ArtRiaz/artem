"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from 'react';

export default function Home() {
  let userId = 0;

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      console.log("Telegram WebApp SDK is ready!");
      userId = window.Telegram.WebApp?.initDataUnsa?.user?.id
    }
  }, []);

  const createInvoice = async () => {

    if (!userId) alert('Telegram user id not set')

    const response = await fetch('/api/create-invoice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId, // ID пользователя
        productPrice: 1, // Сумма в stars
      }),
    });

    const result = await response.json();
    if (result.result === 'success') {
      openInvoice(result.invoice_link) // https://t.me/$nUtA5CPVoEttDQAAeFmTnNKIP9c
      console.log('Инвойс успешно отправлен');
    } else {
      console.log('Ошибка при отправке инвойса', result.error);
    }
  };

  const openInvoice = (invoice_link) => {
    if (window.Telegram && window.Telegram.WebApp && typeof window.Telegram.WebApp.showInvoice === 'function') {
      window.Telegram.WebApp.openInvoice(
        invoice_link,
          (result) => {
          console.log(result);
          if (result.status === 'paid') {
            console.log('Payment Success');
          } else {
            console.log('Payment Failed');
          }
        })
      }
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>

      <h2>Оплата через Telegram Stars</h2>
      <br/>

      <button onClick={createInvoice}>Создать и открыть инвойс</button>

    </div>
  );
}

