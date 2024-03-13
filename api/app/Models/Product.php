<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Favorite;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'category_id',
        'location',
        'title',
        'price',
        'images',
        'description',
     ];

     protected $appends = [
        'is_favorite'
     ];

     protected $casts = [
        'images' => 'array'
     ];

     public function getIsFavoriteAttribute() {
        return auth()->user()->favorites()->where('product_id', $this->id)->exists();
     }

     public function favorites()
     {
         return $this->hasMany(Favorite::class);
     }

     public function category()
     {
         return $this->belongsTo(Category::class);
     }
     public function user()
     {
         return $this->belongsTo(User::class);
     }
    
}
