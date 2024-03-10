<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $products = Product::query()
         ->whereHas('category', function($q) {
        $q->where('name', 
        request('category'));})
        ->with('category')
        ->with('user')->get();

    return response()->json([
        'products' => $products,
    ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
   
//    
    }

    public function store(ProductRequest $request)
    {
        $images = [];
    
        foreach ($request->file('images', []) as $uploadedImage) {
            $name = time() . '_' . $uploadedImage->getClientOriginalName();
            $uploadedImage->move(storage_path('app/public/uploads'), $name);
            $images[] = asset('storage/uploads/' . $name);
        }
    
        $user = auth()->user();
        $category = Category::find($request->category_id);
    
        if (!$user || !$category) {
            return response()->json([
                'message' => 'User or Category not found',
            ], 404);
        }
    
        $product = $category->products()->create([
            'user_id' => $user->id,
            'location' => $request->location,
            'title' => $request->title,
            'price' => $request->price,
            'description' => $request->description,
            'images' => $images,
        ])->load('category', 'user');
    
        $product->images = is_array($product->images)
            ? $product->images
            : json_decode($product->images);
    
        return response()->json([
            'message' => 'Product added successfully',
            'product' => $product,
        ], 200);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
      
    $product = Product::with('category')->with('user')->find($id);

    if (!$product) {
        return response()->json([
            'message' => 'Product not found',
        ], 404);
    }

    $product->images = is_array($product->images)
        ? $product->images
        : json_decode($product->images);

    return response()->json([
        'product' => $product,
    ], 200);
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
