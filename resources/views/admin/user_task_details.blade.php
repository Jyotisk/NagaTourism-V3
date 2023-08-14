<x-app-layout>
    <div class="container dashboard-bg">
        <section class="mb-4">
            <div class="row g-4">
                <div class="col-12">
                    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{route('AdminDashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Task Lists</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <div class="row m-5">
            <table class="table table-striped">
                <thead>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Comment</th>
                    <th>Document</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    @foreach($usertask AS $task)
                    <tr>
                        <td>{{$task->name}}</td>
                        <td>{{$task->mobile_no}}</td>
                        <td>{{$task->comments}}</td>
                        <td>
                            <a href="{{$task->document}}" class="btn btn-info btn-sm rounded-0" target="_blank">Document</a>
                            </td>
                        <td>
                            @if($task->status==1)
                            <p class="text-success">Approved</p>
                            @elseif($task->status==2)
                            <p class="text-danger">Rejected</p>
                            @else
                            <a href="1" class="btn btn-success btn-sm rounded-0 change-status">Approved</a>
                            <a href="2" class="btn btn-warning btn-sm rounded-0 change-status">Reject</a>
                            @endif
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</x-app-layout>
<script>
    $(document).on("click", ".change-status", function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $.ajax({
            type: "GET",
            url: "{{url('admin/change-user-task-details')}}/" + id,
            data: {
                'id': id
            },
            cache: false,
            processData: false,
            contentType: false
            // dataType: "json",
            // encode: true,
        }).done(function(data) {
            if (data.message == 'success') {
                Swal.fire({
                        title: "Success",
                        text: "Task Status Changed Successfully",
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