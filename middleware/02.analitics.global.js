export default defineNuxtRouteMiddleware((to, from) =>{
    console.log('--- Analitics Middleware ---');
    console.log('from global', from);
    console.log('to global', to);
});