"use client";

import { useState, useEffect, use } from "react";
import { checkPermissionState, notificationUnsupported, registerSubscription } from "../../../push";

export default function Page() {
    const [unsupported, setUnsupported] = useState(false);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        const isUnsupported = notificationUnsupported();
        setUnsupported(isUnsupported);
        if (isUnsupported){
            return;
        }
        checkPermissionState(setSubscription);
        //
    }, []);

    return (
        <div className='p-4 bg-pink-300'>
            <header className='border-4 border-black p-4 mb-4 text-center'>
                <h1 className={`text-4xl mb-6 text-black `}>
                    Welcome to my notification page
                </h1>
                <button className='border-2 border-black p-2 text-black'
                    disabled={unsupported}
                    onClick={() => registerSubscription(setSubscription)}
                >
                    {unsupported ?
                        "Notification not supported" : subscription ? "Notifications allowed" : "Allow notifications"}
                </button>
            </header>
            <div className='border-4 border-black p-4 text-black text-4xl text-center'>
                <code>
                    {subscription ?
                        JSON.stringify(subscription?.toJson())
                        : "Not subscribed"}
                </code>
            </div>
        </div>
    );
}
