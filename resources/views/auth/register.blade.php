<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
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
                    <h4 class="text-center" style="font-weight: 700;">Create Nagaland Tourism Account</h4>
                    <span class="d-flex align-items-center justify-content-center gap-1">
                        Aleady register?<a class="btn btn-primary btn-logIn btn-sm" href="{{route('login')}}">Log-In</a>
                    </span>
                </div>
                <div class="col-12 col-lg-6">
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
                <div class="col-12 col-lg-6">
                    <div class="passowrd-form-input position-relative">
                        <form id="register-form" method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="mb-3">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Full Name" value="{{old('name')}}">
                                @error('name')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <input type="email" name="email" class="form-control" id="email" placeholder="Email" value="{{old('email')}}">
                                @error('email')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <input type="password" name="password" class="form-control" id="passwordLogin" placeholder="Password" value="{{old('password')}}">
                                @error('password')
                                <span class="text-danger">{{ $message }} </span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <select class="form-select" aria-label="Default select example" name="country" value="{{old('country')}}">
                                    <option selected disabled>Select Country</option>
                                    <option value="India">India</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Bhutan">Bhutan</option>
                                </select>
                                @error('country')
                                <span class="text-danger">{{ $message }} </span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="mobile" placeholder="Mobile" name="mobile_no" value="{{old('mobile_no')}}" Maxlength="10">
                                @error('mobile_no')
                                <span class="text-danger">{{ $message }} </span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-4">
                                        <select class="form-select" aria-label="Default select example" name="date" value="{{old('date')}}">
                                            <option selected disabled>Select Date</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                        @error('date')
                                        <span class="text-danger">{{ $message }} </span>
                                        @enderror
                                    </div>
                                    <div class="col-4">
                                        <select class="form-select" aria-label="Default select example" name="month" value="{{old('month')}}">
                                            <option selected disabled>Select Month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                        </select>
                                        @error('month')
                                        <span class="text-danger">{{ $message }} </span>
                                        @enderror
                                    </div>
                                    <div class="col-4">
                                        <select class="form-select" aria-label="Default select example" name="year" value="{{old('year')}}">
                                            <option selected disabled>Select Year</option>
                                            <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1992">1992</option>
                                        </select>
                                        @error('year')
                                        <span class="text-danger">{{ $message }} </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <select class="form-select" aria-label="Default select example" name="gender" value="{{old('gender')}}">
                                    <option selected disabled>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                                @error('gender')
                                <span class="text-danger">{{ $message }} </span>
                                @enderror
                            </div>
                            <button class="btn btn-primary">
                                Create New Account
                            </button>
                        </form>
                    </div>
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