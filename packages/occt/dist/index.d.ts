import {MainModule as OpenCascade} from "./wasm/occt.d.ts";

export type {OpenCascade};
export function create(canvas?: HTMLCanvasElement | OffscreenCanvas): Promise<OpenCascade>;