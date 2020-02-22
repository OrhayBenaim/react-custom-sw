export const urlB64ToUint8Array = base64String => base64String.replace(/"/g, '').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

export const GetPushPermission = async() =>{
    if(!('PushManager' in window)) return;
    if(Notification.permission === 'denied') return;
  
  
    if(Notification.permission !== 'granted'){
      Notification.requestPermission((status) => {
        if(status === 'granted')
          return;
        else
          throw new Error('no permission');
      })
    }
    else
      return;
}

  