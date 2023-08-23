<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{asset('css/bootstrap.css')}}" />
    <link rel="stylesheet" href="{{asset('css/user/style.css')}}" />
    <link rel="stylesheet" href="{{asset('css/user/owl-carousel.css')}}" />
    <link rel="stylesheet" href="{{asset('css/user/owl-carousel-default.css')}}" />
    <link rel="stylesheet" href="{{asset('css/user/uikit.css')}}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <header class="head-section">
        <div class="d-flex align-items-center justify-content-between p-3">

        </div>
    </header>

    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; font-size: 20px">
        <div class="container-fluid">
            <a class="navbar-brand p-0 m-0" href="{{route('dashboard')}}">
                <img class="logo" src="{{asset('img/new-logo.png')}}" alt="Logo">
            </a>
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav gap-3 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blogs</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Destinations
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Name-1</a></li>
                            <li><a class="dropdown-item" href="#">Name-2</a></li>
                            <li><a class="dropdown-item" href="#">Name-2</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Toursit Corner
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Name-1</a></li>
                            <li><a class="dropdown-item" href="#">Name-2</a></li>
                            <li><a class="dropdown-item" href="#">Name-2</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Registrations
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Name-1</a></li>
                            <li><a class="dropdown-item" href="#">Name-2</a></li>
                            <li><a class="dropdown-item" href="#">Name-2</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link btn-profile dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-user"></i>
                        </a>
                        <ul class="dropdown-menu btn-profile-menu">
                            <li><a class="dropdown-item" href="{{route('user-profile')}}">My Profile</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li>
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf

                                    <a class="dropdown-item" :href="route('logout')" onclick="event.preventDefault();
                                                this.closest('form').submit();">
                                        {{ __('Log Out') }}
                                    </a>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Image Slider -->
    <div id="imageSlider" class="carousel slide mb-4" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="{{asset('img/slider1.jpg')}}" class="d-block w-100" alt="Slider Pic">
            </div>
            <div class="carousel-item">
                <img src="{{asset('img/slider2.jpg')}}" class="d-block w-100" alt="Slider Pic">
            </div>
            <div class="carousel-item">
                <img src="{{asset('img/slider3.jpg')}}" class="d-block w-100" alt="Slider Pic">
            </div>
            <div class="carousel-item">
                <img src="{{asset('img/slider4.jpg')}}" class="d-block w-100" alt="Slider Pic">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#imageSlider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#imageSlider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!-- End of Image Slider -->

    {{$slot}}

    <div class="chat-for-help">
        <a href="https://wa.me/918638985513" class="help-btn whatsAppBtn" rel="tooltip" type="button" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="Want Any Help? Chat with us!">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a href="tel:1234567890" class="help-btn callBtn" rel="tooltip" type="button" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="Want Any Help? Call us!">
            <i class="fa-solid fa-phone"></i>
        </a>
        <a href="mailto:webdesign@example.com" class="help-btn emailBtn" rel="tooltip" type="button" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="Want Any Help? Mail with us!">
            <i class="fa-solid fa-envelope"></i>
        </a>
    </div>

    <footer class="footer-wrapper">
        <div class="triangle-2"></div>
        <div class="triangle-1"></div>
        <div class="container-fluid p-5">
            <div class="row pt-4 pb-4 g-4">
                <div class="col-12 col-lg-3 bigger-text">
                    <img class="w-75" src="{{asset('img/new-logo-white.png')}}" alt="Logo">
                    <p class="text-white">
                        A land engulped in mystery, inihabited by vibrant people zealously guarding their
                        culture-dancers, warriors, head-hunters; mountains, valley, forest.
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
                                M472+F4P, DIRECTOR OF TOURISM, Raj Bhavan Road, Opp. Indoor Stadium, Kohima, Nagaland
                                797001
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
                    <div class="d-flex justify-content-evenly gap-4 flex-wrap">
                        <div class="d-flex flex-column gap-2">
                            <h4 class="text-white">
                                <b>Activities</b>
                            </h4>
                            <ul class="ps-0 menu-text" style="display: contents; color: #fff;">
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
                            <ul class="ps-0 menu-text" style="display: contents; color: #fff;">
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
                            <ul class="ps-0 menu-text" style="display: contents; color: #fff;">
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
                    <ul class="d-flex flex-wrap gap-4 justify-content-between p-0">
                        <li class="useful-links">
                            <a href="https://www.nagaland.gov.in/      ">
                                <img src="{{asset('img/nagaland_logo.png')}}" alt="Government Logo" style="width: 15%">
                                Nagaland Government
                            </a>
                        </li>
                        <li class="useful-links">
                            <a href="https://tourism.gov.in/">
                                <img src="{{asset('img/emblem-dark.png')}}" alt="Government Logo" style="width: 10%">
                                Ministry of Tourism
                            </a>
                        </li>
                        <li class="useful-links">
                            <a href="https://www.india.gov.in/">
                                <img src="{{asset('img/emblem-dark.png')}}" alt="Government Logo" style="width: 10%">
                                Government of India
                            </a>
                        </li>
                        <li class="useful-links">
                            <a href="https://www.india.gov.in/">
                                <img src="{{asset('img/saathi.jpg')}}" alt="Government Logo" style="width: 15%">
                                Saathi
                            </a>
                        </li>
                        <li class="useful-links">
                            <a href="https://nagaland.gov.in/eservices">
                                <img src="{{asset('img/nagaland_logo.png')}}" alt="Government Logo" style="width: 15%">
                                Nagaland Government E-Services
                            </a>
                        </li>
                        <li class="useful-links">
                            <a href="https://www.nidhi.tourism.gov.in/">
                                <img src="{{asset('img/nidhi-logo.jpg')}}" alt="Government Logo" style="width: 15%">
                                Nidhi
                            </a>
                        </li>
                        <li class="useful-links">
                            <a href="https://nagaland.gov.in/apps">
                                <img src="{{asset('img/nagaland_logo.png')}}" alt="Government Logo" style="width: 15%">
                                Nagaland Government APPS
                            </a>
                        </li>
                        <li class="useful-links">
                            <a href="https://pgportal.gov.in/">
                                <img src="{{asset('img/emblem-dark.png')}}" alt="Government Logo" style="width: 10%">
                                Centralised Public Grievance Redress and Monitoring System
                            </a>
                        </li>
                    </ul>
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
<script src="{{asset('js/uikit.js')}}"></script>
<script src="{{asset('js/uikit-icon.js')}}"></script>
<script src="{{asset('js/owl-carousel.js')}}"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
    //Navigation
    $(window).scroll(function() {
        $('nav').toggleClass('fixed-top scrolled', $(this).scrollTop() > 200);
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
</script>

</html>