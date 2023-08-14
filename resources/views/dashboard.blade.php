<x-app-layout>
    <div class="container dashboard-bg">
        <section class="mb-4">
            <div class="row g-4">
                <div class="col-12 d-flex flex-column">
                    <h4 class="dashbaord-header">Get Involved</h4>
                    <sapan>Participate in in Tourism-building activities</sapan>
                </div>
                <div class="col-12">
                    <div class="tab-link-wrapper">
                        <div class="tab-link active">
                            <a class="do-icon" href="#">
                                <i class="fa-regular fa-square-check do-icon"></i>
                                Do/Task
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="row g-4">
                <div class="col-12">
                    <h4 class="text-center" style="font-weight: 700;">Do/Task</h4>
                    <span class="d-flex align-items-center justify-content-center gap-1">
                        Online and Onground Tasks
                    </span>
                </div>
                <div class="col-12">
                    <div class="uk-margin"></div>
                    <div class="uk-section pt-0">
                        <div class="owl-carousel owl-theme">
                            @foreach($tasks As $task)
                            <div class="item">
                                <a href="{{url('user/task-details')}}/{{$task->id}}" class="stretched-link">
                                    <div class="uk-card uk-card-hover uk-card-body uk-light p-1">
                                        <!-- <img src="{{ asset('img/new1.jpg') }}" alt="Task Image" style="height: 150px; object-fit: cover"> -->
                                        <img src="{{ url('storage/app/public/'."$task->image") }}" alt="Task Image"  style="height: 150px; object-fit: cover">

                                        <h4 class="uk-card-title" style="font-size: 15px; color: #333">{{$task->header}}</h4>
                                        <!-- <p>{{Str::limit($task->descriptions, 30)}}</p> -->
                                        <!-- <h4>Published: {{$task->date}}</h4> -->
                                    </div>
                                </a>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- Login Wrapper -->

    <div class="modal fade" id="updateProfile" tabindex="-1" aria-labelledby="updateProfileLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="updateProfileLabel">Update Profile</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="register-form">
                        @csrf
                        <div class="mb-3">
                            <input type="text" class="form-control" id="pincode" placeholder="Pincode" name="pincode" Maxlength="6">
                            <span id="pincode_error" class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="city" placeholder="City" name="city">
                            <span id="city_error" class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-6">
                                    <select class="form-select" aria-label="Default select example" name="state">
                                        <option selected disabled>Select Sate</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Manipur">Manipur</option>
                                    </select>
                                    <span id="state_error" class="text-danger"></span>
                                </div>
                                <div class="col-6">
                                    <select class="form-select" aria-label="Default select example" name="district">
                                        <option selected disabled>Select District</option>
                                        <option value="Dist-1">Dist-1</option>
                                        <option value="Dist-02">Dist-02</option>
                                        <option value="Dist-03">Dist-03</option>
                                    </select>
                                    <span id="district_error" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Address" id="address" style="height: 100px" name="address"></textarea>
                            <label for="comment">Address</label>
                        </div>
                        <button class="btn btn-primary">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
<script>
    $('.owl-carousel').owlCarousel({
        loop: false,
        stagePadding: 15,
        margin: 10,
        nav: true,
        navText: ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>', '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $(document).ready(function() {
        var pincode = "{{Auth::User()->pincode}}";
        if (pincode == '') {
            $('#updateProfile').modal('show');
        }
    })
    
    $(document).on("submit", "#register-form", function(e) {
        e.preventDefault();
        var formData = new FormData($(this)[0]);
        $.ajax({
            type: "POST",
            url: "{{route('update-user-details')}}",
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
                        text: "Profile Data Updated Successfully",
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
</script>