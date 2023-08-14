<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
require __DIR__ . '/auth.php';
// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

Route::get('auth/google', [GoogleAuthController::class, 'redirect'])->name('google-auth');
Route::get('auth/google/call-back', [GoogleAuthController::class, 'callbackGoogle']);

Route::get('auth/facebook', [GoogleAuthController::class, 'RedirectFacebook'])->name('facebook-auth');
Route::get('auth/facebook/call-back', [GoogleAuthController::class, 'CallbackFacebook']);

Route::get('auth/twitter', [GoogleAuthController::class, 'RedirectTwitter'])->name('twitter-auth');
Route::get('auth/twitter/call-back', [GoogleAuthController::class, 'CallbackTwitter']);

Route::get('auth/linkdin', [GoogleAuthController::class, 'RedirectLinkdin'])->name('linkdin-auth');
Route::get('auth/linkdin/call-back', [GoogleAuthController::class, 'CallbackLinkdin']);

//update user details
Route::post('user/update-details', [UserController::class, 'UpdateUserDetails'])->name('update-user-details');
Route::get('profile', [UserController::class, 'UserProfile'])->name('user-profile');

//admin add task
Route::middleware(['admin'])->group(function () {
    Route::group(['prefix' => 'admin'], function () {
        Route::get('dashboard', [AdminController::class, 'dashboard'])->name('AdminDashboard');
        Route::get('add-task', [AdminController::class, 'GetTask'])->name('add-task');
        Route::post('post-task', [AdminController::class, 'PostTask'])->name('post-task');
        Route::get('user-task-details', [AdminController::class, 'GetUserTask'])->name('GetUserTask');
        Route::get('change-user-task-details/{id}', [AdminController::class, 'ChangeUserTask'])->name('ChangeUserTask');
    });
});
Route::middleware(['user'])->group(function () {
    //user dashboard
    Route::get('dashboard', [UserController::class, 'Dashboard'])->name('dashboard');
    //user submit task
    Route::post('user/submit-task', [UserController::class, 'SubmitTask'])->name('SubmitTask');
    //task details
    Route::get('/user/task-details/{id}', [UserController::class, 'TaskDetails'])->name('TaskDetails');
});
