<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
class GoogleAuthController extends Controller
{
public function redirect(){
    return Socialite::driver('google')->stateless()->redirect();
}
public function callbackGoogle(){
    try{
    $google_user= Socialite::driver('google')->stateless()->user();
    // $user=User::where('google_id',$google_user->getId())->first();
    $user=User::where('email',$google_user->getEmail())->first();
    if(!$user){
        $new_user=User::create([
            'name'=>$google_user->getName(),
            'email'=>$google_user->getEmail(),
            'google_id'=>$google_user->getId(),
            'level'=>3,
        ]);
        Auth::login($new_user);
        return redirect()->intended('dashboard');
    }else{
        Auth::login($user);
        return redirect()->intended('dashboard');
    }

    }
    catch(Exception $e){
        return $e;
    }
}
public function RedirectFacebook(){
    return Socialite::driver('facebook')->stateless()->redirect();
}
public function CallbackFacebook(){
    try{
    $facebook_user= Socialite::driver('facebook')->stateless()->user();
    $user=User::where('facebook_id',$facebook_user->id())->first();
    if(!$user){
        $new_user=User::create([
            'name'=>$facebook_user->name(),
            'email'=>$facebook_user->email(),
            'facebook_id'=>$facebook_user->getidId(),
            'level'=>3,
        ]);
        Auth::login($new_user);
        return redirect()->intended('dashboard');
    }else{
        Auth::login($user);
        return redirect()->intended('dashboard');
    }

    }
    catch(Exception $e){
        return $e;
    }
}
}
