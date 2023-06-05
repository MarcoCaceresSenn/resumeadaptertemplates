<template>
    <div class="container-background">
        <div class="row">
            <div class="col-md-3">
                <div class="d-flex flex-column justify-content-center gap-2 vh-100">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-10">
                            <h1 class="fw-bolder"> Resume</h1>
                            <h1 class="fw-bolder"> Adapter</h1>
                            <h1 class="fw-bolder"> Template</h1>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-2"></div>
                        <p class="col-md-10 text-muted">Enter your information and browse through the variety of designs we have for you
                        </p>
                    </div>

                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="d-flex col-md-10 gap-3">
                            <div class="btn btn-custom-guest">
                                <a href="home-page.html">Login as guest</a>
                            </div>
                            <div class="btn btn-custom-login">
                                <a href="login-page.html">Login ></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div class="container col-md-9">
                <div class="row justify-content-center">
                    <div class="col-md-4"></div>
                    <div class="col-md-10">
                        <img src="../assets/logos/logo1.png" class="img-fluid" alt="...">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container-background{
        background-image: url("../assets/images/background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
    }
    .btn-custom-login {
        background-color: #62768C; /* Color similar a text-muted */
        color: #f2f2f2; /* Color de texto oscuro */
        border: none; 
        border-radius: 0.7rem; /* Radio de borde similar al botón primario */
        padding: 0.375rem 0.75rem; /* Espaciado interior del botón */
    }

    .btn-custom-login:hover {
        background-color: #e2e6ea; /* Color de fondo al pasar el cursor */
        color: #212529; /* Color de texto oscuro */
        border-color: #007bff; /* Color de borde del botón primario */
    }
    .btn-custom-guest {
        color: #f2f2f2; /* Color de texto oscuro */
        border: none; 
        border-radius: 0.7rem; /* Radio de borde similar al botón primario */
        padding: 0.375rem 0.75rem; /* Espaciado interior del botón */
    }

    .btn-custom-login a {
        color: inherit;
        text-decoration: none;
    }

    .btn-custom-login a:hover {
        color: inherit;
        text-decoration: none;
    }
    .btn-custom-guest a {
        color: #62768C;
    }
    .btn-custom-guest a:hover {
        color: #000000;

    }
</style>