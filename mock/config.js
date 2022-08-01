const routes = [
    {request:'/user/verify',response:'/response/login/emailVerify.json',type:'post'},
    {request:'/user/verify/otp',response:'/response/login/otpVerifySuccess.json',type:'post'},
    {request:'/user/checkAuth',response:'/response/login/authSuccess.json',type:'post'}


];

module.exports = routes;