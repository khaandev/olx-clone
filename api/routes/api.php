<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', [AuthController::class, 'getUser']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::controller(AuthController::class)->group(function(){
    Route::post('login','login');
    Route::post('register','register');
});
