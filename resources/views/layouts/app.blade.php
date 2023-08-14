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
            <a href="{{route('dashboard')}}">
                <img class="logo" src="{{asset('img/new-logo.png')}}" alt="Logo">
            </a>
            <div class="dropdown">
                <button class="btn btn-secondary btn-profile dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i>
                </button>
                <ul class="dropdown-menu">
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
            </div>
        </div>
    </header>

    <!-- Image Slider -->
    <div id="imageSlider" class="carousel slide mb-4" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
        <a href="https://wa.me/9864199616" target="_blank" class="whatsAppBtn" rel="tooltip" type="button" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="Want Any Help? Chat with us!">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>

    <footer>
        <div class="container">
            <div class="row pt-4 pb-4">
                <div class="col-12">
                    <div class="d-flex align-items-center gap-2 justify-content-center">
                        <img src="{{asset('img/new-logo.png')}}" alt="Logo" style="width: 30%;">
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