<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User\Task;
use App\Models\User\TaskCategory;
use App\Models\User\UserTaskDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function dashboard(){
        $usertask = UserTaskDetail::join('users', 'users.id', '=', 'user_task_details.user_id')
            ->select('users.name', 'users.mobile_no', 'user_task_details.*')->get();
        return view('admin.dashboard', compact('usertask'));
    }
    public function GetTask()
    {
        $task_category = TaskCategory::where('status', true)->get();
        return view('admin.add_task');
    }
    public function PostTask(Request $request)
    {
        DB::beginTransaction();
        try {
            if ($request->ajax()) {
                $validator = Validator::make(
                    $request->all(),
                    [

                        'task_category_id' => 'required',
                        'header' => 'required|string',
                        'image' => 'required|image|mimes:jpg,png,jpeg|max:5120',
                        'description' => 'required|string',
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
                    $task = new Task();
                    $task->task_category_id = $request->task_category_id;
                    $task->header = $request->header;
                    $task->descriptions = $request->description;
                    $task->date = date('Y-m-d');
                    $image_path = $request->file('image')->store('TaskImage', 'public');
                    $task->image = $image_path;
                    $task->status = true;
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
        return view('admin.add_task');
    }
    public function GetUserTask()
    {
        $usertask = UserTaskDetail::join('users', 'users.id', '=', 'user_task_details.user_id')
            ->select('users.name', 'users.mobile_no', 'user_task_details.*')->get();
        return view('admin.user_task_details', compact('usertask'));
    }
    public function ChangeUserTask($id)
    {
        $statuses = UserTaskDetail::where('id', $id)->first();
        $statuses->status = $id;
        $statuses->save();
        if($id==1){
            return response()->json([
                'message' => 'success',
                'request' => 'status change successfully',
            ]);
        }else{
            return response()->json([
                'message' => 'success',
                'request' => 'status change successfully',
            ]);
        }
    }
}
