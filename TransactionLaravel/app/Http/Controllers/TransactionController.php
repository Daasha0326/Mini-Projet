<?php

namespace App\Http\Controllers;

use App\Models\Compte;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    public function depot(Request $request, $id)
    {
        $compte = Compte::find($id);

        if (!$compte) {
            return response()->json(['message' => 'Compte introuvable'], 404);
        }

        $request->validate([
            'montant' => 'required|numeric|min:500',
        ]);

        $nouveauSolde = $compte->solde + $request->montant;
        $compte->update(['solde' => $nouveauSolde]);

        $typeTransaction = 'depot';

        $transaction = Transaction::create([
            'type' => $typeTransaction,
            'montant' => $request->montant,
            // 'date' => now(),
            'expediteur_id' => null,
            'destinataire_id' => $compte->id,
            'code' => null,
        ]);
        return response()->json(['message' => 'Dépôt effectué avec succès', 'transaction' => $transaction], 201);

    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
