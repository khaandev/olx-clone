<?php

namespace App\Http\Controllers;

use Exception;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function googleRedirect()
    {
      return Socialite::driver('google')->redirect();
    
    }
    public function googlecallback()
    {
        try {
            $user = Socialite::driver('google')->user();
            dd($user);
        } catch (\Exception $e) {
            // Log the error message to the browser console
            echo "<script>console.error('Google callback error: " . $e->getMessage() . "')</script>";
            
        }   

        
    }
    

}
