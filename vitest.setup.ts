import {vi} from "vitest";

global.CSS = {
    escape: () => '',
    supports: () => true
}

vi.mock('#imports', () => ({
    definePageMeta: (meta: any) => {},
}))
