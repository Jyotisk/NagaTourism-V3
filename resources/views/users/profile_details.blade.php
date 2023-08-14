<x-app-layout>
    <div class="container dashboard-bg">
        <section class="mb-4">
            <div class="row g-4">
                <div class="col-12">
                    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Profile-Details</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <div class="row">
            <div class="mb-3">
                <label for="comment">Name</label>
                <input type="text" class="form-control" id="pincode" placeholder="Pincode" name="pincode" Maxlength="6" value="{{Auth::User()->name}}" disabled>
            </div>
            <div class="mb-3">
                <label for="comment">Gender</label>
                <input type="text" class="form-control" id="pincode" placeholder="Pincode" name="pincode" Maxlength="6" value="{{Auth::User()->gender}}" disabled>
            </div>
            <div class="mb-3">
                <label for="comment">Pincode</label>
                <input type="text" class="form-control" id="pincode" placeholder="Pincode" name="pincode" Maxlength="6" value="{{Auth::User()->pincode}}" disabled>
            </div>
            <div class="mb-3">
                <label for="comment">City</label>
                <input type="text" class="form-control" id="city" placeholder="City" name="city" disabled value="{{Auth::User()->city}}">
            </div>
            <div class="mb-3">
                <label for="comment">State</label>
                <input type="text" class="form-control" id="city" placeholder="City" name="city" disabled value="{{Auth::User()->state}}">
            </div>
            <div class="mb-3">
                <label for="comment">District</label>
                <input type="text" class="form-control" id="city" placeholder="City" name="city" disabled value="{{Auth::User()->district}}">
            </div>
            <div class="mb-3">
                <label for="comment">Address</label>
                <textarea class="form-control" placeholder="Address" id="address" style="height: 100px" name="address" disabled>{{Auth::User()->address}}</textarea>
            </div>
        </div>
    </div>
</x-app-layout>