<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Staudenmeir\EloquentEagerLimit\HasEagerLimit;

class Category extends Model
{
    use HasFactory, HasEagerLimit;

    protected $fillable = [
        'name', ];


        public function products()
        {
            return $this->hasMany(Product::class);
        }
}
