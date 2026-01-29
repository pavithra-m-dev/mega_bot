"use client"

import Hls from "hls.js";
import { useEffect, useRef } from "react"

export default function VideoPlayer({ src }: { src: string }) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) return;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(videoRef.current);

            return () => hls.destroy();
        } else {
            // Safari fallback
            videoRef.current.src = src;
        }

    }, [src]);

    return (
        <video
            ref={videoRef}
            controls
            autoPlay 
            className="w-full max-w-4xl mx-auto rounded-xl bg-black"
        />
    )

}

