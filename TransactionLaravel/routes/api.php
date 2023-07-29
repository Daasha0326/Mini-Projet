<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompteController;
use App\Http\Controllers\TransactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('users', UserController::class)->only(['index']);
Route::apiResource('comptes', CompteController::class)->only(['index']);


Route::get("users/{user}", [ClientController::class, 'show']);

Route::post('transactions/{id}', [TransactionController::class, 'depot']);
// Route::get('/comptes/{compte_emetteur_id}/transferts',::class)->only(['index']);
// Route::get('/comptes/{compte_destinataire_id}/transferts',::class)->only(['index']);
// Route::get('/transferts/{transfert_id}',::class)->only(['index']);