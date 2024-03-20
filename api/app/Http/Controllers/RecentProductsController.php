<?php

namespace App\Http\Controllers;

use App\Models\Category;

class RecentProductsController extends Controller
{
    public function getRecentProducts()
    {

        $categoriesWithRecentProducts = Category::with(['products' => function ($query) {
            $query->latest()->take(3); 
        }])->get();
        

       return response()->json(
        $categoriesWithRecentProducts
    );
    }}
