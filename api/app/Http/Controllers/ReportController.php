<?php

namespace App\Http\Controllers;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Report;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reportProduct = Report::with(['product.user','user'])->get();
        return response()->json($reportProduct);

        }

        public function myReport()
        {
            $user = auth()->user();
        
            // Eager load the product and user relationships with the reports
            $myReports = Report::with('product', 'product.user')
                ->where('user_id', $user->id)
                ->get();
        
            return response()->json($myReports);
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

public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'product_id' => 'required|exists:products,id',
        'resion' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $user = Auth::user();
    $productReport = Product::findOrFail($request->product_id);  
    
    $existingReport = Report::where('user_id', $user->id)
                            ->where('product_id', $productReport->id)
                            ->first();

    if ($existingReport) {
        return response()->json(['errors' => ['product_id' => 'You have already reported this product']], 422);
    }   

    $reportProduct = Report::create([
        'user_id' => $user->id,
        'product_id' => $productReport->id,
        'resion' => $request->resion,
    ]);
    
    return response()->json(['message' => 'reported', 'report' => $reportProduct]);
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
       // Find the product by ID
    $report = Report::findOrFail($id);
    $report->delete();

    return response()->json([
        'message' => 'Product deleted successfully',
    ]);
    }
}
