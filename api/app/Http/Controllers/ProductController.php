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

    return response()->json(
        $products
    );
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
             $product
        ]);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
      
    $product = Product::with(['category', 'user'])->find($id);

    if (!$product) {
        return response()->json([
            'message' => 'Product not found',
        ], 404);
    }

    $product->images = is_array($product->images)
        ? $product->images
        : json_decode($product->images);

    return response()->json(
        $product
    );
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
   /**
 * Update the specified resource in storage.
 */
public function update(ProductRequest $request, string $id)
{
  

    $product = Product::findOrFail($id);
    
    $user = auth()->user();
    if ($user->id !== $product->user_id) {
        return response()->json([
            'message' => 'Unauthorized. You are not the owner of this product.',
        ], 403);
    }

    $images = [];
    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $uploadedImage) {
            $name = time() . '_' . $uploadedImage->getClientOriginalName();
            $uploadedImage->move(storage_path('app/public/uploads'), $name);
            $images[] = asset('storage/uploads/' . $name);
        }
    }

    $product->update([
        'location' => $request->location ?? $product->location,
        'title' => $request->title ?? $product->title,
        'price' => $request->price ?? $product->price,
        'description' => $request->description ?? $product->description,
        'images' => count($images) > 0 ? $images : $product->images,
    ]);

    $product->refresh();

    $product->images = is_array($product->images)
        ? $product->images
        : json_decode($product->images);

    return response()->json([
        'message' => 'Product updated successfully',
        $product
    ]);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
{
    // Find the product by ID
    $product = Product::findOrFail($id);
   
    $user = auth()->user();
    if ($user->id !== $product->user_id) {
        return response()->json([
            'message' => 'Unauthorized. You are not the owner of this product.',
        ], 403);
    }

    // Delete the product
    $product->delete();

    return response()->json([
        'message' => 'Product deleted successfully',
    ], 200);
}

}
