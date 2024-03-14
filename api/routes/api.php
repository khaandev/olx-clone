<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', [AuthenticatedSessionController::class, 'getUser']);
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::put('/user/{user}', [AuthenticatedSessionController::class, 'update'])->name('user.update');

        // products 
        Route::get('/products', [ProductController::class, 'index']);
        Route::post('/product', [ProductController::class, 'store']);
        Route::get('/product/{user}', [ProductController::class, 'show']);
        Route::put('/product/{user}', [ProductController::class, 'update']);
        Route::delete('/product/{user}', [ProductController::class, 'destroy']);

        //product favorites
        Route::get('/get/favorites', [FavoriteController::class, 'index']);
        Route::post('/favorite/{product}', [FavoriteController::class, 'store']);

        //admin can access
        Route::get('/category', [CategoryController::class, 'index']);
        Route::post('/category', [CategoryController::class, 'store']);
        Route::get('/category/{user}', [CategoryController::class, 'show']);
        Route::put('/category/{user}', [CategoryController::class, 'update']);
        Route::delete('/category/{user}', [CategoryController::class, 'destroy']);






});






