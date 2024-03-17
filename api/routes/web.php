<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MainController;
use App\Models\Product;
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
    return ['Laravel' => app()->version()];
});

Route::get('/auth/redirect', [MainController::class, 'googleRedirect']);
Route::get('google/auth/redirect', [MainController::class, 'googlecallback']);


require __DIR__.'/auth.php';
