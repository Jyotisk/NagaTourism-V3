<!DOCTYPE html>
<html lang="en">

<head>
    <title>Nagaland Tourism</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="{{asset('css/bootstrap.css')}}" />
    <link rel="stylesheet" href="{{asset('css/style.css')}}" />
    <link rel="stylesheet" href="{{asset('css/icon-style.css')}}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="main-body">

    <!-- Comming Soon Section -->
    <div class="comming-wrapper">
        <div class="container position-relative">
            <div class="row mb-4 g-4">
                <div class="col-12">
                    <div class="d-flex justify-content-center logo-wrapper">
                        <img class="logo" src="{{asset('img/new-logo.png')}}" style="width: 11%;">
                    </div>
                </div>
                <div class="col-12">
                    <div class="comming-text">
                        <p>
                            Great things coming
                            <br />
                            soon
                        </p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="{{ route('login') }}" class="btn login-btn" role="button" type="button">
                            Login/Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End of Comming Soon Section -->

</body>
<script src="js/jquery.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.js"></script>

</html>