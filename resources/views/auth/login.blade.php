<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="{{asset('css/bootstrap.css')}}" />
    <link rel="stylesheet" href="{{asset('css/user/style.css')}}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <header class="head-section mb-4">
        <div class="d-flex align-items-center justify-content-center p-3">
            <a href="#">
            <img class="logo" src="{{asset('img/new-logo.png')}}">
            </a>
        </div>
    </header>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <!-- Login Wrapper -->
    <section class="mb-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-12">
                    <h4 class="text-center" style="font-weight: 700;">Log in to your Tourism Account</h4>
                    <div class="otp-form-input mt-4 position-relative">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="otpLogin" placeholder="Mobile (Log In With OTP)"  Maxlength="10">
                            </div>
                            <button class="btn btn-primary">
                                Log In With OTP
                            </button>
                        </form>
                    </div>
                </div>
                <div class="col-12">
                    <div class="passowrd-form-input position-relative">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            <div class="mb-3">
                                <input type="text" class="form-control" id="passwordLogin" placeholder="Email" type="email" name="email" value="{{old('email')}}">
                                @error('email')
                                <span class="text-danger">{{ $message }} </span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" id="passwordLogin" placeholder="Password" type="password" name="password">
                                @error('password')
                                <span class="text-danger">{{ $message }} </span>
                                @enderror
                            </div>
                            <div class="mb-3 float-end">
                                <a href="#">
                                    Forget Password?
                                </a>
                            </div>
                            <button class="btn btn-primary">
                                Log In With Password
                            </button>
                        </form>
                    </div>
                </div>
                <div class="col-12">
                    <div class="social-link">
                        <h4 class="text-center mb-4">Or Login With Social Profile</h4>
                        <ol class="d-flex align-items-center justify-content-center gap-4 p-0 flex-column flex-md-row">
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <span>
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="{{route('google-auth')}}">
                                    <i class="fa-brands fa-google"></i>
                                    <span>
                                        Google
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-twitter"></i>
                                    <span>
                                        Twitter
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-linkedin"></i>
                                    <span>
                                        Linkedin
                                    </span>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <a href="{{route('register')}}">Not registered?Register Now</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="p-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex align-items-center gap-2 justify-content-center">
                        <img src="{{asset('img/dark_logo.png')}}" alt="Logo">
                        <p>
                            <b>Designed and Developed by Nagaland Government</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>

<script src="{{asset('js/jquery.js')}}"></script>
<script src="{{asset('js/popper.js')}}"></script>
<script src="{{asset('js/bootstrap.js')}}"></script>

</html>