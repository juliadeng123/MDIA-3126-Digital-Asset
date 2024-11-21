import webpush from "web-push";

webpush.setVapidDetails(
    "mailto: jdeng43@my.bcit.ca",
    NEXT_PUBLIC_VAPID_PUBLIC_KEY=BKjb1rJv9s5jGXLYFwSrveZGmHohcNhz-B8uVPeJEtTvALtNYThBXG57dWBwJMZvpBg88EBlk7MtBj-BF871BfQ,
    NEXT_PUBLIC_VAPID_PRIVATE_KEY=gr-RBy1wY3cs4oT6EaLh4q4_sPt3Qq9kiUyCJjKmczg
);

let subscription;

export async function POST(request) {
    const { pathname } = new URL(request.url);

    switch (pathname) {
        case "/push/web-push/subscription":
            return setSubscription(request);
        case "/push/web-push/send":
            return sendPush(request);
        default:
            return errorPage();

    }
}

async function setSubscription(request) {
    const body = await request.json();
    subscription = body.subscription;

    return new Response(JSON.stringify({ message: "Subscription enabled"}), {})
}

async function sendPush(request) {
    const body = await request.json();
    subscription = body.subscription;

    await webpush.sendNotification(subscription, pushData);
    return new Response(JSON.stringify({ message: "Push sent!"}), {})
}

async function errorPage() {
    return new Response(JSON.stringify({ message: "application/json"}), {
        headers: { "Content-Type": "application/json"},
        status: 404,
    })
}