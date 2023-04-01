// https://testdriven.io/blog/vue-pinia-testing/
import {mount, VueWrapper} from "@vue/test-utils";
import {createTestingPinia} from "@pinia/testing";
import {vi} from "vitest";
import {createI18n} from "vue-i18n";
// import {createVuetify} from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";
// import {mdi} from "vuetify/iconsets/mdi";
// import {stockpitTheme} from "~/config/vuetify/stockpitTheme";
// import NumbersUtils from "~/utils/plugins/NumbersUtils";
// import DatesUtils from "~/utils/plugins/DatesUtils";
// import {useTestUserData} from "~/utils/tests/testUserData";

export interface MountOptions {
    component: any
    state?: Record<string, any>
    mocks?: Record<string, any>
    props?: Record<string, any>
    stubs?: Record<string, any>
}

function useTestUserData () {
    return {
        main: {
            userData: {}
        }
    }
}

export function useMount<T>(options: MountOptions): VueWrapper {
    const props = options?.props
    const stubs = options?.stubs ?? {}
    const mocks = options?.mocks ?? {}
    const state = options?.state ?? useTestUserData()

    return mount<T>(
        options.component,
        {
            props,
            global: {
                stubs: {
                    // Default stubs
                    Head: {
                        template: '<div class="head"><slot /></div>'
                    },
                    Title: {
                        template: '<div class="title"><slot /></div>'
                    },
                    ClientOnly: {
                        template: '<span class="client-only"><slot /></span>'
                    },
                    NuxtLayout: {
                        template: '<span class="nuxt-layout"><slot /></span>'
                    },
                    NuxtLink: {
                        template: '<span class="nuxt-link"><slot /></span>'
                    },
                    VOverlay: {
                        template: `<span class="v-overlay"><slot /></span>`
                    },
                    VProgressCircular: {
                        template: '<span class="v-progress-circular"><slot /></span>'
                    },
                    ...(options?.stubs ?? {})
                },
                mocks: {
                    // Default mocks
                    ...(options?.mocks ?? {})
                },
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        stubActions: false,
                        initialState: state
                    }),
                    // createVuetify({
                    //     components,
                    //     directives,
                    //     theme: {
                    //     defaultTheme: 'stockpitTheme',
                    //         themes: { stockpitTheme }
                    //     },
                    //     icons: {
                    //         defaultSet: 'mdi',
                    //         sets: { mdi }
                    //     }
                    // }),
                    createI18n({
                        legacy: false,
                        globalInjection: true,
                        locale: 'en',
                        messages: {
                            en: require('../i18n/en.json')
                        }
                    })
                ],
            }
        }
    )
}
