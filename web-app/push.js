const SERVICE_WORKER_FILE_PATH = "./sw.js";

export function notificationUnsupported() {
    let unsupported = false;

    if(
        !("serviceWorker" in navigator) ||
        !("PushManager" in window) ||
        !("showNotification" in ServiceWorkerRegistration.prototype)
    ) {
        unsupported = true;
    }

    return unsupported;
}

export function checkPermissionState(onSubscribe) {
    const state = Notification.permission;
    switch (state) {
        case "denied":
            break;
        case "granted":
            registerSubscription(onSubscribe);
            break;
        case "default":
            break;
        
    }
}

//register subscription
export async function registerSubscription(onSubscribe) {
    try {
        await navigator.serviceWorker.register(SERVICE_WORKER_FILE_PATH);
        await subscribe(onSubscribe);
    } catch (error) {
        console.error("Failed to register service worker: ", error);
    }
}

// submit subscription
async function subscribe(onSubscribe) {
    navigator.serviceWorker.ready
        .then((registration) => {
            return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
            })
        .then((subscription) => {
            console.info("Created subscription object: ", subscription.toJSON());
            submitSubscription(subscription).then((_) => {
                onSubscribe(subscription)
            })
        .catch((error) => console.log("Failed to subscribe: ", error));
        })
        })
    
}

// subscribe
async function submitSubscription(subscription) {
    const endpoint = "/push/web-push/subscription";

    const result = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({subscription})
    });

    const data = await result.json();
    console.log(data);
}

// sendwebpush