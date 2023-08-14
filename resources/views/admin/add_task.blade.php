<x-app-layout>
<div class="container dashboard-bg">
    <section class="mb-4">
        <div class="row g-4">
            <div class="col-12">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{route('AdminDashboard')}}">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Add-Task</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>
        <div class="row m-5">
            <form id="add-task">
                @csrf
                <div class="mb-3">
                    <input type="hidden" class="form-control" name="task_category_id" value="1">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="header" placeholder="Header" name="header">
                    <span id="header_error" class="text-danger"></span>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Description" id="description" style="height: 100px" name="description"></textarea>
                    <label for="comment">Description</label>
                    <span id="description_error" class="text-danger"></span>
                </div>
                <div class="mb-3">
                    <label for="comment">Image</label>
                    <input type="file" class="form-control-file" id="image" placeholder="Image" name="image">
                    <span id="image_error" class="text-danger"></span>
                </div>
                <button class="btn btn-primary" type="submit">
                    Save
                </button>
            </form>
        </div>
    </div>
</x-app-layout>
<script>
    $(document).on("submit", "#add-task", function(e) {
        e.preventDefault();
        var formData = new FormData($(this)[0]);
        console.log(formData)
        $.ajax({
            type: "POST",
            url: "{{route('post-task')}}",
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
                        text: "Task Added Successfully",
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