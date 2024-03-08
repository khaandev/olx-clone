<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $products = Product::query()
         ->whereHas('category', function($q) {
        $q->where('name', request('category'));})
        ->with('category')->get();

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

        if ($request->hasFile('images')) {
            $uploadedImages = $request->file('images');

            foreach ($uploadedImages as $uploadedImage) {
                $name = time() . '_' . $uploadedImage->getClientOriginalName();
                $uploadedImage->move(storage_path('app/public/uploads'), $name);
                $images[] = asset('storage/uploads/' . $name);
            }
        }

        $category = Category::find($request->category_id);

        if (!$category) {
            return response()->json([
                'message' => 'Category not found',
            ], 404);
        }

        $product = $category->products()->create([
            'location' => $request->location,
            'title' => $request->title,
            'price' => $request->price,
            'description' => $request->description,
            'images' => $images,
        ]);

        $productWithCategory = $product->load('category');

        $productWithCategory->images = is_array($productWithCategory->images)
        ? $productWithCategory->images
        : json_decode($productWithCategory->images);

        return response()->json([
            'message' => 'Product added successfully',
            'product' => $productWithCategory,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
      
    $product = Product::with('category')->find($id);

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
