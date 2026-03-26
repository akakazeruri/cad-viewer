import MainModuleFactory from "./wasm/occt.js";
import wasm from "./wasm/occt.wasm?url";

export async function create(canvas) {
    return await MainModuleFactory({
        canvas,
        locateFile: (path) => {
            if (path.endsWith('.wasm')) return wasm;
            return path;
        }
    });
}