<template>
    <div class="wrapper">
        <!--<div class="container">-->
            <div class="login-text">
                <h3>Login</h3>
                <p>By logging in you agree to the ridiculously long terms that you didn't bother to read.</p>
            </div>
        <!--</div>-->
        <div class="login-form">
            <form action="" method="get" @submit.prevent="signingIn">
                <label for="email-input">Email</label>
                <input
                    type="email"
                    id="email-input"
                    required
                    v-model="emailInput">
                <label for="password-input">Password</label>
                <i :class="icon"  @click="showPassword"></i>
                <input
                    :type="type"
                    id="password-input"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    v-model="passwordInput">
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
                icon: 'fa fa-eye',
                asya: {
                    email: 'asya@mail.com',
                    password: 'myPass1234'
                },
                emailInput: '',
                passwordInput: ''
            }
        },
        methods: {
            showPassword() {
                (this.icon === "fa fa-eye") ? this.icon = 'fas fa-eye-slash' : this.icon = 'fa fa-eye';
                (this.type === 'password') ? this.type = 'text' : this.type = 'password';
            },
            signingIn() {
                if (this.asya.email === this.emailInput && this.asya.password === this.passwordInput) {
                    this.$router.push( 'asya' );
                } else {
                    alert('Some data you have inputted doesn\'t match. Try again!');
                }
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

        .login-form {
            position: absolute;
            right: 0;
            display: inline-block;
            box-sizing: border-box;
            padding: 40px;
            background-color: #32475C;
            width: 245px;
            height: 260px;
            border-radius: 5px;
            box-shadow: 0 10px 30px 3px rgba(0, 0, 0, 0.2), 10px 0 30px 3px rgba(0, 0, 0, 0.2), -10px 0px 30px 3px rgba(0, 0, 0, 0.2);

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
                    cursor: pointer;

                }
            }
        }
    }
</style>