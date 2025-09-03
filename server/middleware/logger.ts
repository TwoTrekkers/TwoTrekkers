export default defineEventHandler(async (event) => {
    const start = Date.now()
    
    // Log the request
    console.log(`[${new Date().toISOString()}] ${event.method} ${event.path}`)
    
    // Wait for the response
    await new Promise(resolve => setTimeout(resolve, 0))
    
    // Log the response time
    const duration = Date.now() - start
    console.log(`[${new Date().toISOString()}] ${event.method} ${event.path} - ${duration}ms`)
  }) 