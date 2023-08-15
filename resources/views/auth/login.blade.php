<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="{{asset('css/bootstrap.css')}}" />
    <link rel="stylesheet" href="{{asset('css/user/style.css')}}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <header class="head-section mb-4">
        <div class="d-flex align-items-center justify-content-center p-3">
            <a href="#" class="text-center">
                <img src="{{asset('img/new-logo.png')}}" alt="Logo" style="width: 10%">
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

    <footer class="footer-wrapper">
        <div class="triangle-2"></div>
        <div class="triangle-1"></div>
        <div class="container-fluid p-5">
            <div class="row pt-4 pb-4 g-4">
                <div class="col-12 col-lg-3">
                    <img class="w-75" src="{{asset('img/new-logo-white.png')}}" alt="Logo">
                    <p class="text-white">
                        A land engulped in mystery, inihabited by vibrant people zealously guarding their culture-dancers, warriors, head-hunters; mountains, valley, forest.
                    </p>
                    <ul class="text-white ps-0">
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            <span>
                                03862295093
                            </span>
                        </li>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>
                                M472+F4P, DIRECTOR OF TOURISM, Raj Bhavan Road, Opp. Indoor Stadium, Kohima, Nagaland 797001
                            </span>
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope"></i>
                            <span>
                                info@dicovernagaland.in
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="d-flex justify-content-evenly gap-4">
                        <div class="d-flex flex-column gap-2">
                            <h4 class="text-white">
                                <b>Activities</b>
                            </h4>
                            <ul class="ps-0" style="display: contents; color: #fff;">
                                <li>
                                    <a href="#">
                                        Group
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Do
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Discuss
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Poll & Survey
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Talk
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Campaigns
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Podcast
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Wall of Frame
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="d-flex flex-column gap-2">
                            <h4 class="text-white">
                                <b>Get to Know</b>
                            </h4>
                            <ul class="ps-0" style="display: contents; color: #fff;">
                                <li>
                                    <a href="#">
                                        Group
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Do
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Discuss
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Poll & Survey
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Talk
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Campaigns
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Podcast
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Wall of Frame
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="d-flex flex-column gap-2">
                            <h4 class="text-white">
                                <b>Help & Support</b>
                            </h4>
                            <ul class="ps-0" style="display: contents; color: #fff;">
                                <li>
                                    <a href="#">
                                        Inbound Tourist & Inner Line Permit
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Hotel & Resort
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Tourist Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Home Stay
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Bloggers & Vloggers
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Photographer & Videographer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <h4 class="text-white">
                        <b>Useful Links</b>
                    </h4>
                    <div class="row g-4">
                        <div class="col-12 col-lg-6 d-flex w-100 gap-3 flex-wrap">
                            <a class="useful-links" href="https://www.nagaland.gov.in/      ">
                                <img src="{{asset('img/nagaland_logo.png')}}" alt="Government Logo" style="width: 33%">
                                Nagaland Government
                            </a>
                            <a class="useful-links" href="https://tourism.gov.in/">
                                <img src="{{asset('img/emblem-dark.png')}}" alt="Government Logo" style="width: 20%">
                                Ministry of Tourism
                            </a>
                            <a class="useful-links" href="https://www.india.gov.in/">
                                <img src="{{asset('img/emblem-dark.png')}}" alt="Government Logo" style="width: 20%">
                                Government of India
                            </a>
                            <a class="useful-links" href="https://www.india.gov.in/">
                                <img src="{{asset('img/saathi.jpg')}}" alt="Government Logo" style="width: 33%">
                                Saathi
                            </a>
                            <a class="useful-links" href="https://nagaland.gov.in/eservices">
                                <img src="{{asset('img/nagaland_logo.png')}}" alt="Government Logo" style="width: 33%">
                                Nagaland Government E-Services
                            </a>
                            <a class="useful-links" href="https://www.nidhi.tourism.gov.in/">
                                <img src="{{asset('img/nidhi-logo.jpg')}}" alt="Government Logo" style="width: 33%">
                                Nidhi
                            </a>
                            <a class="useful-links" href="https://nagaland.gov.in/apps">
                                <img src="{{asset('img/nagaland_logo.png')}}" alt="Government Logo" style="width: 33%">
                                Nagaland Government APPS
                            </a>
                            <a class="useful-links" href="https://pgportal.gov.in/">
                                <img src="{{asset('img/emblem-dark.png')}}" alt="Government Logo" style="width: 20%">
                                Centralised Public Grievance Redress and Monitoring System
                            </a>
                        </div>
                    </div>  
                </div>
                <div class="col-12">
                    <div class="follow-us">
                        <h4 class="text-white mb-0">
                            <b>
                                Follow Us
                            </b>
                        </h4>
                        <a href="#" style="font-size: 24px; color: #1877f2">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" style="font-size: 24px; color: #14171a">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-details">
            <p class="mb-0 text-center text-white">
                <b>Designed and Developed by Nagaland Government</b>
            </p>
        </div>
    </footer>
</body>

<script src="{{asset('js/jquery.js')}}"></script>
<script src="{{asset('js/popper.js')}}"></script>
<script src="{{asset('js/bootstrap.js')}}"></script>

</html>