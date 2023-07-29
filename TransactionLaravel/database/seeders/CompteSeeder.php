<?php

namespace Database\Seeders;

use App\Models\Compte;
use Illuminate\Database\Seeder;
use Database\Seeders\CompteSeeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CompteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $compte=[
            [
                'user_id' => '1',
                'fournisseurs' => 'Compte Bancaire',
                'abbr' => 'CB',
                'solde' => '150000',
                'numCompte' => 'CB_761234567',
            ],
        ];
        DB::table('comptes')->insert($compte);
    }
}
