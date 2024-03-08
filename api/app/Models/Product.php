<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'category_id',
        'location',
        'title',
        'price',
        'images',
        'description',
     ];

     protected $casts = [
        'images' => 'array'
     ];

     public function category()
     {
         return $this->belongsTo(Category::class);
     }
    
}
