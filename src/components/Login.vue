<template>
    <div class="wrapper">
        <!--<div class="container">-->
            <div class="login-text">
                <h3>Login</h3>
                <p>By logging in you agree to the ridiculously long terms that you didn't bother to read.</p>
            </div>
        <!--</div>-->
        <div class="login-form">
            <form action="" method="get">
                <label for="email-input">Email</label>
                <input type="text" id="email-input">
                <label for="password-input">Password</label>
                <i :class="icon"  @click="showPassword"></i>
                <input :type="type" id="password-input">
                <button>Log in</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                type: 'password',
                icon: 'fa fa-eye'
            }
        },
        methods: {
            showPassword() {
                (this.icon === "fa fa-eye") ? this.icon = 'fas fa-eye-slash' : this.icon = 'fa fa-eye';
                (this.type === 'password') ? this.type = 'text' : this.type = 'password';
            }
        }
    }
</script>

<style lang="scss">
    $login-font: 'Quicksand', sans-serif;
    $parag-font: 'Comfortaa', cursive;
    $label-font: 'Roboto', sans-serif;;

    .wrapper {
        width: 525px;
        height: 300px;
        margin: 100px auto 0 auto;
        position: relative;

        /*.container {*/
            /*display: inline-block;*/
            /*width: 280px;*/
            /*!*box-sizing: border-box;*!*/
            /*height: 300px;*/

            .login-text {
                position: absolute;
                background-color: #fff;
                width: 280px;
                height: 180px;
                box-sizing: border-box;
                padding: 35px;
                margin: calc((260px - 180px) / 2) 0px;

                h3 {
                    margin: 0;
                    letter-spacing: 1px;
                    color: black;
                    font-family: $login-font;
                    font-size: 30px;
                }

                p {
                    color: #888;
                    font-family: $parag-font;
                    font-size: 12px;
                    line-height: 1.5;
                    letter-spacing: 0.2px;
                }
            }
        /*}*/

        .login-form {
            position: absolute;
            right: 0;
            display: inline-block;
            box-sizing: border-box;
            padding: 40px;
            background-color: #32475C;
            /*color: #E8EEF3;*/
            width: 245px;
            height: 260px;
            border-radius: 5px;
            box-shadow: 0 10px 30px 3px rgba(0, 0, 0, 0.2), 10px 0px 30px 3px rgba(0, 0, 0, 0.2), -10px 0px 30px 3px rgba(0, 0, 0, 0.2);

            form {
                font-family: $label-font;
                font-weight: 100;
                float: left;
                
                label {
                    display: inline-block;
                    letter-spacing: 0.2px;
                    font-size: 14px;
                    font-family: $label-font;
                    color: #bbb;
                    cursor: pointer;
                }

                input {
                    display: block;
                    background-color: transparent;
                    border: none;
                    outline: none;
                    color: #E8EEF3;
                    font-family: $parag-font;
                    margin-bottom: 25px;
                    margin-top: 5px;
                }

                i {
                    margin-left: 10px;
                    color: #E8EEF3;
                    cursor: pointer;
                }

                button {
                    font-family: $login-font;
                    border: none;
                    background-color: #e8eef3;
                    width: 100%;
                    height: 40px;

                }
            }
        }
    }
</style>