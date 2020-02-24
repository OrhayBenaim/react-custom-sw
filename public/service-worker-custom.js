//{"title":"test", "body": "ido", "tag": "demo", "actions": [{"title": "ido test", "type": "yes"}]}
self.addEventListener('push', async(event) => {

    const data = await event.data.json();
  
      var title = data.title;
      var body = {
        'body': data.body,
        'tag': data.tag,
        //Custom actions buttons
        'actions': 
            data.actions ? data.actions.map(action => (
                {'action': action.type, 'title': action.title}
              )) : []
      };
  
      if (!title || !data.body)
        return;
    
      event.waitUntil(self.registration.showNotification(title, body));
    });
    
  