<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user=[
            ['nom' => 'Keisha Faye',   'numeroTel' => '781235067'],
        ];
        DB::table('users')->insert($user);
        // User::create([
        //     'nom' => 'Adama Mane',
        //     'numeroTel' =>'771234567'
        // ]);
        // User::create([
        //     'nom' => 'Rone Rondo',
        //     'numeroTel' =>'776543212'
        // ]);
    }
}
