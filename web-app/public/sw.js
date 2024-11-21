self.addEventListener('push', function (event){
    if(!event.data){
        return;
    }

    const payload = event.data.json();
    const {body, url, title} = payload;
    const notificationTitle = title ?? "Notification"
    const notificationOptions = {
        body, data: {url}
    }

    event.waitUntil(
        self.ServiceWorkerRegistration.showNotification(notificationTitle, notificationOptions).then(() => {
            console.log("Web push delivered!")
        })
    )
})