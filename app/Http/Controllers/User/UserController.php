<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\User\Task;
use App\Models\User\UserTaskDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
public function TaskDetails($id){
    $task_details=Task::where('id',$id)->first();
    $task_status=UserTaskDetail::where('user_id',Auth::user()->id)->where('task_id',$id)->first();
    $other_tasks=Task::whereNotIn('id', [$id])->limit(4)->get();
    $new_tasks=Task::whereNotIn('id', [$id])->orderBy('id','DESC')->limit(2)->get();
    return view('users.task_details',compact('task_details','id','task_status','other_tasks','new_tasks'));
}
public function UpdateUserDetails(Request $request){
    DB::beginTransaction();
    try {
        if ($request->ajax()) {
            $validator = Validator::make(
                $request->all(),
                [

                    'city' => 'required|string',
                    'state' => 'required|string',
                    'district' => 'required|string',
                    'pincode' => 'required|digits:6',
                ],
                // [
                //     'blog_information.required_if' => 'This field is required',
                //     'no_of_followers.required_if' => 'This field is required',
                // ]

            );
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'validationFails',
                    'error' => $validator->errors()
                ]);
            } else {
                $user = User::where('id', Auth::user()->id)->first();
                $user->city = $request->city;
                $user->state = $request->state;
                $user->district = $request->district;
                $user->pincode = $request->pincode;
                $user->address = $request->address;
                $user->save();

                DB::commit();
                return response()->json([
                    'message' => 'success',
                    'request' => 'Data Added successfully',
                ]);
            }
        }
    } catch (Exception $e) {
        return $e;
        DB::rollBack();
        return response()->json([
            'message' => 'error',
            'request' => 'Something Went Wrong',
        ]);
    }
}
public function UserProfile(){
    return view('users.profile_details');
}
public function Dashboard(){
    $tasks=Task::where('status',true)->get();
    return view('dashboard',compact('tasks'));
}
public function SubmitTask(Request $request){
    DB::beginTransaction();
    try {
        if ($request->ajax()) {
            $validator = Validator::make(
                $request->all(),
                [
                    'comments' => 'required|string',
                    'document' => 'required|string',
                    'task_id' => 'required',
                    "document" => "required|mimes:pdf|max:10000",
                ],
                // [
                //     'blog_information.required_if' => 'This field is required',
                //     'no_of_followers.required_if' => 'This field is required',
                // ]

            );
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'validationFails',
                    'error' => $validator->errors()
                ]);
            } else {
                $task =new UserTaskDetail();
                $task->comments = $request->comments;
                $task->task_id = $request->task_id;
                $task->user_id = Auth::user()->id;
                $document_path = $request->file('document')->store('TaskImage', 'public');
                $task->document = $document_path;
                $task->date = date('Y-m-d');
                $task->status = 0;
                $task->save();

                DB::commit();
                return response()->json([
                    'message' => 'success',
                    'request' => 'Data Added successfully',
                ]);
            }
        }
    } catch (Exception $e) {
        return $e;
        DB::rollBack();
        return response()->json([
            'message' => 'error',
            'request' => 'Something Went Wrong',
        ]);
    }
}
}
