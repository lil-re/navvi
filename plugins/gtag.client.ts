export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const gtagId = runtimeConfig.public.GTAG_ID
    
    // Create gtag function & define gtag deps (window.dataLayer array)
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    
    // Config with gtagId & send initial page view
    gtag('config', gtagId, { send_page_view: true })
    
    // Inject gtag function
    return { provide: { gtag } }
})
