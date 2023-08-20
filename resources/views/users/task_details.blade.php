<x-app-layout>
    <div class="container dashboard-bg">
        <section class="mb-4">
            <div class="row g-4">
                <div class="col-12">
                    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Do</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Task-Name</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-12">
                    <div class="tab-link-wrapper flex-wrap flex-lg-nowrap">
                        <div class="tab-link active">
                            <a class="do-icon" href="#">
                                <i class="fa-regular fa-square-check do-icon"></i>
                                Do/Task
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-comment"></i>
                                Discuss
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-chart-simple"></i>
                                Poll/Survey
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-book"></i>
                                Blog
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-microphone"></i>
                                Talk
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-hand-point-up"></i>
                                Quiz
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-barcode"></i>
                                MG Prime
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-volume-high"></i>
                                Campaign
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-handshake"></i>
                                Pledge
                            </a>
                        </div>
                        <div class="tab-link">
                            <a class="do-icon" href="#">
                                <i class="fa-solid fa-podcast"></i>
                                Pledge
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pb-5">
            <div class="row g-4">
                <div class="col-12 col-lg-4">
                    <h4 class="whats-new">Whats New</h4>
                    <div class="owl-carousel owl-theme">
                        @foreach($new_tasks AS $new)
                        <div class="item">
                            <a href="{{url('user/task-details')}}/{{$new->id}}" class="stretched-link">
                                <div class="uk-card uk-card-hover uk-card-body uk-light p-1">
                                    <!-- <img src="{{ url('storage/app/public/'."$new->image") }}" alt="Task Image" style="height: 150px; object-fit: cover"> -->
                                    <img src="{{ url('storage/'."$new->image") }}" alt="Task Image"
                                        style="height: 150px; object-fit: cover">
                                </div>
                            </a>
                        </div>
                        @endforeach
                    </div>

                    <h4 class="whats-new">Trending</h4>
                    <div class="trending-details">
                        <div class="trending-field">
                            @foreach($other_tasks AS $ot)
                            <div class="card" style="border: 0; background-color: transparent">
                                <a href="{{url('user/task-details')}}/{{$ot->id}}">
                                    <div class="card" style="border: 0; background-color: transparent">
                                        <div class="card-body d-flex flex-column align-items-center gap-2">
                                            <!-- <img src="{{ url('storage/app/public/'."$ot->image") }}" alt="Trending Pic" width="510" height="340"> -->
                                            <img class="trending-pic" src="{{ url('storage/'."$ot->image") }}"
                                                alt="Trending Pic" width="510" height="340" />
                                            <p class="m-0">
                                                {{$ot->header}}

                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            @endforeach
                            <!-- <div class="card" style="border: 0; background-color: transparent">
                                <div class="card-body d-flex align-items-center gap-2">
                                    <img class="trending-pic" src="{{asset('img/new2.jpg')}}" alt="Trending Pic" width="510" height="340" />
                                    <p class="m-0">
                                        Donate Organs Save Lives - Poster Design Contest
                                    </p>
                                </div>
                            </div> -->
                            <!-- <div class="card" style="border: 0; background-color: transparent">
                                <div class="card-body d-flex align-items-center gap-2">
                                    <img class="trending-pic" src="{{asset('img/new1.jpg')}}" alt="Trending Pic" width="510" height="340" />
                                    <p class="m-0">
                                        Donate Organs Save Lives - Poster Design Contest
                                    </p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-8">
                    <div class="row g-4">
                        <div class="col-12">
                            <div class="d-flex align-items-center justify-content-between flex-column flex-lg-row">
                                <h4 class="text-center mb-0" style="font-weight: 700;">{{$task_details->header}}</h4>
                                <div class="d-flex align-items-center gap-2">
                                    <a target="_blank" href="https://www.facebook.com/"
                                        style="font-size: 24px; color: #1877f2">
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/"
                                        style="font-size: 24px; color: #14171a">
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <!-- @if($task_status!=null)
                            <div class="d-flex align-items-center justify-content-center gap-2">
                                <p class="m-0">
                                    <b>Status:</b>
                                </p>
                                @if($task_status->status==1)
                                <p class="m-0 text-success">
                                    <b>Approved</b>
                                </p>
                                @elseif($task_status->status==2)
                                <p class="m-0 text-danger">
                                    <b>
                                        Rejected
                                    </b>
                                </p>
                                @else
                                <p class="m-0 text-warning">
                                    <b>Pending</b>
                                </p>
                                @endif
                            </div>
                            @endif -->
                        </div>
                        @if($task_status==null)
                        <div class="col-12">
                            <div class="row mb-5">
                                <div class="col-12 col-lg-6 p-0">
                                    <!-- <img src="{{ asset('img/new1.jpg') }}" style="width: 100%;"> -->
                                    <!-- <img src="{{ url('storage/app/public/'."$task_details->image") }}" style="width: 70%;"> -->
                                    <img class="w-100" src="{{ url('storage/'."$task_details->image") }}">

                                </div>
                                <div class="col-12 col-lg-6 d-flex flex-column justify-content-center"
                                    style="background: #90c747;">
                                    <div class="date-time-wrapper" style="margin: 0 auto;">
                                        <div class="d-flex align-items-center justify-content-center"
                                            style="border-bottom: 2px solid #fff; color: #fff; padding-bottom: 6px;">
                                            Start Date:
                                            <p class="mb-0 ms-2">
                                                <b>Aug 31, 2023</b>
                                            </p>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center"
                                            style="color: #fff; padding-top: 6px;">
                                            End Date:
                                            <p class="mb-0 ms-2">
                                                <b>Sep 31, 2023</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion" id="description">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne" onclick="toggleText(this)"
                                            style="background-color: transparent; color: #333">
                                            Description
                                            <p id="read-more-text" class="mb-0 float-end" style="margin-left: 77%;">
                                                Read More
                                            </p>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="headingOne" data-bs-parent="#description">
                                        <div class="accordion-body">
                                            <div class="task-details-section" id="read-description">
                                                @php
                                                $text = trim($task_details->descriptions);
                                                $textAr = explode("\n", $text);
                                                $textAr = array_filter($textAr, 'trim');
                                                @endphp
                                                @foreach ($textAr as $line)
                                                <p class="" style="text-align: justify; text-justify: inter-word">
                                                    {{$line}}
                                                </p>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @else
                        <div class="col-12">
                            <!-- <img src="{{ url('storage/app/public/'."$task_details->image") }}" style="width: 70%;"> -->
                            <img src="{{ url('storage/'."$task_details->image") }}" style="width: 70%;">

                        </div>
                        @endif
                        <div class="col-12">
                            <form id="task-form">
                                @csrf
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Attachment<span
                                            class="text-danger">*</span></label>
                                    <input class="form-control" type="file" id="formFile" name="document">
                                    <span class="text-danger" id="document_error"></span>
                                    <input class="form-control" type="hidden" name="task_id" value="{{$id}}">
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="comments" class="form-control" placeholder="Leave a comment here"
                                        id="comment" style="height: 100px"></textarea>
                                    <label for="comment">Comments<span class="text-danger">*</span></label>
                                    <span class="text-danger" id="comments_error"></span>
                                </div>
                                <div class="form-floating mb-3">
                                    <label for="comment">Google Drive Link (If the file is more big then Admissible
                                        size)</label>
                                    <input type="text" class="form-control" placeholder="Optional" name="google_drive">
                                    <span class="text-danger" id="google_drive_error"></span>
                                </div>
                                <button class="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</x-app-layout>
<script>
$(document).on("submit", "#task-form", function(e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    console.log(formData)
    $.ajax({
        type: "POST",
        url: "{{route('SubmitTask')}}",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: formData,
        cache: false,
        processData: false,
        contentType: false
        // dataType: "json",
        // encode: true,
    }).done(function(data) {
        if (data.message == 'success') {
            Swal.fire({
                    title: "Success",
                    text: "Task Submitted Successfully",
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willStore) => {
                    if (willStore) {
                        window.location.reload();
                    }
                });
        }
        if (data.message == "validationFails") {
            var message = []
            $.each(data.error, function(index, value) {
                $('#' + index + '_error').html(value);
                // console.log(('#'+index+'_error'));  
                // console.log(index+'_error');   
            });
        }
        if (data.message == 'error') {
            Swal.fire({
                title: "Failed",
                text: "Something Went Wrong",
                icon: "error",
                buttons: false,
                dangerMode: true,
            })
        }

    });
});

function toggleText(btn) {
    let btnValue = btn.attributes[4].nodeValue
    if (btnValue === "true") {
        document.getElementById("read-more-text").innerHTML = "Read Less";
    } else {
        document.getElementById("read-more-text").innerHTML = "Read More";
    }
}

$('.owl-carousel').owlCarousel({
    loop: false,
    stagePadding: 15,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});
</script>