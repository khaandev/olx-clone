<?php

namespace App\Http\Controllers;

use Exception;
use Laravel\Socialite\Facades\Socialite;


class MainController extends Controller
{
    public function googleRedirect()
    {
      return Socialite::driver('google')->redirect();
    
    }
    public function googlecallback()
    {
        $user = Socialite::driver('google')->user();
        dd($user);
        // try {
        //     $user = Socialite::driver('google')->user();
        //     dd($user);
        // } catch (Exception $e) {
        //     echo "<script>console.error('Google callback error: " . $e->getMessage() . "')</script>";
            
        // }   

        
    }
    

}
