"use client";

import dynamic from "next/dynamic";

const ClientBackground = dynamic(() => import("./AnimationRunner"), {
  ssr: false,
});

export default function Background() {
  return <ClientBackground />;
}
