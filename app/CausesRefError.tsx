"use client";
import React, { useEffect, useRef } from "react";

export default function CausesRefError() {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(divRef.current);
  }, []);
  return <div ref={divRef}></div>;
}
