<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RecentProductsController;
use App\Http\Controllers\ReportController;

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
             
        Route::post('/product', [ProductController::class, 'store']);
        Route::put('/product/{user}', [ProductController::class, 'update']);
        Route::delete('/product/{user}', [ProductController::class, 'destroy']);

      


        //my product 
        Route::get('/myproduct', [ProductController::class, 'myAdds']);

        //product favorites
        Route::get('/get/favorites', [FavoriteController::class, 'index']);
        Route::post('/favorite/{product}', [FavoriteController::class, 'store']);

        

        //admin can access
        
        Route::middleware('admin')->group(function () {
          Route::post('/category', [CategoryController::class, 'store']);
          Route::get('/category/{category}', [CategoryController::class, 'show']);
          Route::put('/category/{category}', [CategoryController::class, 'update']);
          Route::delete('/category/{category}', [CategoryController::class, 'destroy']);
      });
           Route::get('/category', [CategoryController::class, 'index']);

      
        //report products
        Route::get('/report', [ReportController::class, 'index']);
        Route::get('/my/report', [ReportController::class, 'myReport']);
        Route::post('/report', [ReportController::class, 'store']);
        Route::get('/report/{report_id}', [ReportController::class, 'show']);
        Route::delete('/report/{reportId}', [ReportController::class, 'destroy']);




      
});
  // card with product
 Route::get('recent_products', [RecentProductsController::class, 'getRecentProducts']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/product/{user}', [ProductController::class, 'show']);  





