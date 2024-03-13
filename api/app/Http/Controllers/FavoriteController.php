<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        $user_id = Auth::id();
        $fav = Favorite::where('user_id', $user_id)->with('product')->get();
        return response()->json([
            'Favorites' => $fav,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */


    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Product $product)
    {

        if ($product->is_favorite) {
            auth()->user()->favorites()->where('product_id', $product->id)->delete();

            return response()->json([
                'product' => Product::with(['category', 'user'])->find($product->id)
            ]);
        }

        $product->favorites()->create([
            'user_id' => auth()->id(),
        ]);

        return response()->json([
            'product' => Product::with(['category', 'user'])->find($product->id)
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
