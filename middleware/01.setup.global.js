export default defineNuxtRouteMiddleware((to, from) =>{
    console.log('--- Setup Middleware ---');
    //return abortNavigation("Failed at setup middleware");
    if(to.path=='/login'){
        throw createError({
            statusCode: 405,
            statusMessage: "Oh shit, i'm sorry!"
        }

        )
    }
});