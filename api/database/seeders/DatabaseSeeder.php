<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
            'bio' => 'nothing special',
            'gender' => 'Male',
            'phone' => '03453232603',
            'dob' => "2000-01-01",


        ]);

        \App\Models\Category::create([
            'name' => 'Mobile',
            


        ]);
       
       
    }
}
