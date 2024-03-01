<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\GoogleApi\GoogleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/auth/redirect', function () {
//     return Socialite::driver('google')->redirect();
// });
 
// Route::get('/callback', function () {
//     $user = Socialite::driver('google')->stateless()->user();
//     dd($user);
// });

Route::controller(GoogleController::class)->group(function(){
    Route::get('/auth/redirect','redirectToGoogle');
    Route::get('/callback','handleGoogleCallback');
});
